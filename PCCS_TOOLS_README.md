# Plymouth-Canton Community Schools Directory Tools

A set of Python tools for scraping, processing, and analyzing the Plymouth-Canton Community Schools staff directory.

## Features

- **Complete Directory Scraping**: Extracts all 2000 staff entries across 50 pages
- **100% Email Recovery**: Successfully decodes obfuscated emails using DOM and script parsing methods
- **Rich Data Analysis**: Filter, search, and analyze the directory data
- **Multiple Export Formats**: CSV and JSON output support

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
- Email (properly decoded from obfuscated JavaScript)

Run the scraper:

```bash
python pccs_directory_scraper.py
```

This will:
1. Scrape all 50 pages of the directory (2000 staff entries)
2. Extract emails using robust DOM-based methods with script parsing fallback
3. Save the data to both CSV and JSON files

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
python pccs_directory_reader.py --location "Plymouth High" --format csv --output plymouth_staff.csv
```

### Showing directory statistics:

```bash
python pccs_directory_reader.py --summary
```

## Technical Implementation

### Email Extraction

The scraper uses multiple methods to ensure 100% email extraction:

1. **Primary Method**: Extract from rendered DOM elements after JavaScript execution
2. **Secondary Method**: Parse and reverse obfuscated `insertEmail()` JavaScript function parameters

### Pagination

The scraper handles all 50 pages of the directory using the URL parameter `const_page`.

### Technical Stack

The scraper uses:
- Playwright for headless browser automation
- Multiple email extraction methods for 100% success rate
- Proper async/await patterns for reliable scraping

The reader uses:
- Pandas for efficient data processing
- Tabulate for formatted console output

## Notes

- This tool successfully extracts 100% of staff emails by handling the obfuscation
- The reader tool provides flexible filtering and output options
- Be respectful with the data and follow applicable privacy regulations 