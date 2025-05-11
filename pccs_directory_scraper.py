import re, asyncio
import pandas as pd
from playwright.async_api import async_playwright

BASE_URL = "https://www.pccsk12.com/about/directory"
TOTAL_PAGES = 50  # As seen in DOM
WAIT_TIME = 3000  # ms

async def extract_staff_entries(page):
    entries = []
    await page.wait_for_selector(".fsConstituentItem", timeout=WAIT_TIME)
    blocks = await page.query_selector_all(".fsConstituentItem")

    # Track email extraction success
    email_found_count = 0

    for block in blocks:
        name_elem = await block.query_selector(".fsFullName")
        name = await name_elem.inner_text()
        
        title_elem = await block.query_selector(".fsTitles")
        title = await title_elem.inner_text() if title_elem else ""

        loc_elem = await block.query_selector(".fsLocations")
        location = await loc_elem.inner_text() if loc_elem else ""

        # Try DOM method first (most reliable)
        email = ""
        try:
            # Try div content (rendered email)
            email_div = await block.query_selector(".fsEmail div")
            if email_div:
                email_text = await email_div.inner_text()
                if "@" in email_text:
                    email = email_text.strip()
            
            # If that fails, try email link
            if not email:
                email_link = await block.query_selector(".fsEmail a")
                if email_link:
                    href = await email_link.get_attribute("href")
                    if href and href.startswith("mailto:"):
                        email = href[7:]  # Remove 'mailto:' prefix
        except Exception as e:
            pass
            
        # Fallback to script parsing if DOM method failed
        if not email:
            try:
                script_tag = await block.query_selector("script")
                if script_tag:
                    script_content = await script_tag.inner_text()
                    match = re.search(r'insertEmail\(".*?",\s*"(.*?)",\s*"(.*?)"', script_content)
                    if match:
                        domain = match.group(1)[::-1].lower()
                        user = match.group(2)[::-1].lower()
                        email = f"{user}@{domain}"
            except Exception as e:
                pass

        if email:
            email_found_count += 1
            
        entries.append({
            "name": name.strip(),
            "title": title.strip(),
            "location": location.strip(),
            "email": email.strip()
        })

    # Log extraction rate for this page
    success_rate = email_found_count / len(blocks) * 100 if blocks else 0
    print(f"  Emails found: {email_found_count}/{len(blocks)} ({success_rate:.1f}%)")
    
    return entries

async def run():
    all_data = []

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()

        for i in range(1, TOTAL_PAGES + 1):
            print(f"Scraping page {i} of {TOTAL_PAGES}...")
            await page.goto(f"{BASE_URL}?const_page={i}")
            # Wait for JS to execute and render the emails
            await page.wait_for_timeout(1500)
            entries = await extract_staff_entries(page)
            all_data.extend(entries)

        await browser.close()

    # Save to files
    df = pd.DataFrame(all_data)
    
    # Report final statistics
    total_entries = len(df)
    total_emails = sum(1 for _, row in df.iterrows() if row['email'])
    print(f"\nFinal statistics:")
    print(f"  Total staff entries: {total_entries}")
    print(f"  Total emails extracted: {total_emails}/{total_entries} ({total_emails/total_entries*100 if total_entries else 0:.1f}%)")
    
    df.to_csv("pccs_directory.csv", index=False)
    df.to_json("pccs_directory.json", orient="records", indent=2)
    print("\n✅ Scraping complete. Data saved to 'pccs_directory.csv' and 'pccs_directory.json'.")

if __name__ == "__main__":
    asyncio.run(run()) 