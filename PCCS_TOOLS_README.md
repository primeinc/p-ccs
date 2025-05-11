# Plymouth-Canton Community Schools Directory Tools

This set of tools allows you to scrape, process, and analyze the Plymouth-Canton Community Schools staff directory.

## Tools

1. **Directory Scraper** (`pccs_directory_scraper.py`) - Scrapes the staff directory from the PCCS website
2. **Directory Reader** (`pccs_directory_reader.py`) - A utility to read, filter, and display directory data

## Installation

```bash
# Install required packages
pip install playwright pandas tabulate

# Install Playwright browsers
playwright install
```

## Scraper Usage

The scraper will collect all staff information from the PCCS directory website, including:
- Full name
- Title
- Location
- Email (decoded from JavaScript)

Run the scraper:

```bash
python pccs_directory_scraper.py
```

This will:
1. Scrape all 50 pages of the directory
2. Save the data to both CSV and JSON files

## Directory Reader Usage

The directory reader allows you to work with the CSV data produced by the scraper.

```bash
# Show all entries in a table format
python pccs_directory_reader.py

# Show summary statistics
python pccs_directory_reader.py --summary

# Filter by name (case insensitive)
python pccs_directory_reader.py --name "smith"

# Filter by title
python pccs_directory_reader.py --title "principal"

# Filter by location
python pccs_directory_reader.py --location "high school"

# Export filtered results to JSON
python pccs_directory_reader.py --name "smith" --format json --output smiths.json

# Export filtered results to CSV
python pccs_directory_reader.py --location "elementary" --format csv --output elementary_staff.csv
```

## Examples

### Getting all elementary school principals:

```bash
python pccs_directory_reader.py --title "principal" --location "elementary"
```

### Exporting all staff from a specific school:

```bash
python pccs_directory_reader.py --location "canton high school" --format csv --output canton_staff.csv
```

### Showing directory statistics:

```bash
python pccs_directory_reader.py --summary
```

## Notes

- The scraper handles obfuscated emails by decoding the JavaScript that hides them
- The reader tool provides flexible filtering and output options
- Be respectful with the data and follow applicable privacy regulations 