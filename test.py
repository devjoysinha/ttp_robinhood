import os
from bs4 import BeautifulSoup
from pathlib import Path
import glob
import re

def natural_sort_key(s):
    """Helper function to sort strings with numbers naturally"""
    return [int(text) if text.isdigit() else text.lower() for text in re.split(r'(\d+)', s)]


def extract_body_from_html_files(folder_path):
    # Dictionary to store results
    results = []
    
    # Get all HTML files in the folder
    html_files = glob.glob(os.path.join(folder_path, "*.html"))
    
    html_files.sort(key=natural_sort_key)

    if not html_files:
        print(f"No HTML files found in {folder_path}")
        return results
    
    print(f"Found {len(html_files)} HTML files in {folder_path}")
    
    for html_file in html_files:
        try:
            with open(html_file, 'r', encoding='utf-8') as file:
                html_content = file.read()
            soup = BeautifulSoup(html_content, 'html5lib')
            body = soup.find('body')
            
            if body:
                body_html = str(body)
                results.append(body_html)
                print(f"✓ Successfully extracted body from {os.path.basename(html_file)}")
            else:
                print(f"⚠ No body element found in {os.path.basename(html_file)}")
                
        except Exception as e:
            print(f"✗ Error processing {os.path.basename(html_file)}: {str(e)}")
    
    return results