import requests
from bs4 import BeautifulSoup

BASE_URL = "https://www.tecmundo.com.br"
BASE_SEARCH_URL = f"{BASE_URL}/busca"

HEADERS = {
    "user-agent": (
        "Mozilla/5.0 (X11; Linux x86_64)"
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0"
        "Safari/537.36"
    ),
}


def get_request(data: str):
    page = requests.get(
      BASE_SEARCH_URL,
      headers=HEADERS,
      params={"q": data.lower()},
      ).text
    html_content = page
    soup = BeautifulSoup(html_content, "html.parser")
    soup.prettify()
    return get_response(soup)


def get_response(type: str):
    array = []
    for item in type.find_all("a", {"class": "tec--card__title__link"}):
        array.append({
            "testo": item.string,
            "href": item["href"],
        })
    return array


print(get_request("pendrive"))
