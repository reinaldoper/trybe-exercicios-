import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.text
soup = BeautifulSoup(html_content, "html.parser")
input = soup.title
print(input.text)
print(type(input))
item = []
for post in soup.find_all(
        "span", {"class": "text"}
     ):
    item.append(post.string)


print(item)
footer = soup.footer
print(footer.a['href'])
""" print(title.string)
print(type(title.string))
print(soup.find_all("p"))
print(soup.find(id="quote"))
print(soup.get_text())
print(soup.find_all("div", {"class": "quote"})) """


# print(soup.prettify())
