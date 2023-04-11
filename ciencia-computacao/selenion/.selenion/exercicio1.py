from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()


# Com o Selenium, faça uma requisição para o endpoint 
# “https://quotes.toscrape.com/“ e imprima a primeira citação que aparece 
# na página.

def scrape(url):
    firefox.get(url)

    quote = firefox.find_element(By.CLASS_NAME, 'text').get_attribute('innerHTML')

    print(quote)


scrape('https://quotes.toscrape.com/')
firefox.quit()