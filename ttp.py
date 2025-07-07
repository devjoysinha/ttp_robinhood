from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
import time
import os

# Setup browser
driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))

driver.get('https://gmat.targettestprep.com/')
print("You have 60 seconds to log in and navigate to the lesson page...")
time.sleep(60)

links=[
    'https://gmat.targettestprep.com/lesson/237?chapter_id=236'

]
Folder = [
    "CordinateGeometry",
]





for i in range(len(links)):
    page_counter = 1
    try:
        driver.get(links[i])
        time.sleep(10)
        os.makedirs(Folder[i])
        while True:
            # Save the current page HTML
            with open(f'{Folder[i]}/ttp{page_counter}.html', 'w', encoding='utf-8') as file:
                file.write(driver.page_source)
            print(f"Page {page_counter} saved as ttp{page_counter}.html")

            page_counter += 1

            # Wait for the 'Next Lesson' button to be present
            next_button = WebDriverWait(driver, 20).until(
                EC.presence_of_element_located((By.CLASS_NAME, 'next-topic'))
            )

            # Scroll into view (optional, helps in some cases)
            driver.execute_script("arguments[0].scrollIntoView({block: 'center'});", next_button)

            time.sleep(1)  # Small wait to ensure page is stable

            # Click using JavaScript to avoid interception issues
            driver.execute_script("arguments[0].click();", next_button)

            # Wait for the next page to load
            time.sleep(5)
    except Exception as e:
        print(f"Script stopped due to: {e}")