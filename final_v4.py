from gpt import ask
from test import extract_body_from_html_files


file_paths = [
    "/Users/joysinha/Desktop/Algo/FindTheConclusion"
]



for file_path in file_paths:
    body_list = extract_body_from_html_files(file_path)
    count = 0
    for body in body_list:
        file_name = f"lesson{count}"
        ask(body, file_name, file_path)
        count += 1

