#!/usr/bin/env python3
import pandas as pd
import argparse
import json
import os
import sys
from tabulate import tabulate

def load_directory(file_path):
    """Load the directory data from CSV file."""
    if not os.path.exists(file_path):
        print(f"Error: File '{file_path}' not found.")
        sys.exit(1)
    
    try:
        return pd.read_csv(file_path)
    except Exception as e:
        print(f"Error loading CSV: {e}")
        sys.exit(1)

def filter_directory(df, name=None, title=None, location=None):
    """Filter the directory based on criteria."""
    filtered_df = df.copy()
    
    if name:
        filtered_df = filtered_df[filtered_df['name'].str.contains(name, case=False, na=False)]
    
    if title:
        filtered_df = filtered_df[filtered_df['title'].str.contains(title, case=False, na=False)]
    
    if location:
        filtered_df = filtered_df[filtered_df['location'].str.contains(location, case=False, na=False)]
    
    return filtered_df

def display_directory(df, format_type='table', output_file=None):
    """Display directory data in specified format."""
    if df.empty:
        print("No results found matching your criteria.")
        return
    
    if format_type == 'table':
        print(tabulate(df, headers='keys', tablefmt='grid', showindex=False))
    
    elif format_type == 'json':
        json_data = df.to_json(orient='records', indent=2)
        if output_file:
            with open(output_file, 'w') as f:
                f.write(json_data)
            print(f"Data exported to {output_file}")
        else:
            print(json_data)
    
    elif format_type == 'csv':
        if output_file:
            df.to_csv(output_file, index=False)
            print(f"Data exported to {output_file}")
        else:
            print(df.to_csv(index=False))

def main():
    parser = argparse.ArgumentParser(description="PCCS Directory Reader Tool")
    parser.add_argument('--file', default='tools/pccs_directory.csv', help='Path to the directory CSV file')
    parser.add_argument('--name', help='Filter by name (case insensitive)')
    parser.add_argument('--title', help='Filter by title (case insensitive)')
    parser.add_argument('--location', help='Filter by location (case insensitive)')
    parser.add_argument('--format', choices=['table', 'json', 'csv'], default='table', 
                        help='Output format (default: table)')
    parser.add_argument('--output', help='Output file for JSON or CSV format')
    parser.add_argument('--summary', action='store_true', help='Show summary statistics')
    
    args = parser.parse_args()
    
    # Load directory data
    df = load_directory(args.file)
    
    # Show summary if requested
    if args.summary:
        print(f"Directory Summary:")
        print(f"Total entries: {len(df)}")
        print(f"Unique locations: {df['location'].nunique()}")
        print(f"Unique titles: {df['title'].nunique()}")
        print("\nTop 5 locations by staff count:")
        print(df['location'].value_counts().head(5))
        print("\nTop 5 titles by staff count:")
        print(df['title'].value_counts().head(5))
        return
    
    # Filter data if criteria provided
    filtered_df = filter_directory(df, args.name, args.title, args.location)
    
    # Display in requested format
    display_directory(filtered_df, args.format, args.output)

if __name__ == "__main__":
    main() 