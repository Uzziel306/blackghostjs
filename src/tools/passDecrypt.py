from pycookiecheat import chrome_cookies
import requests

url = 'https://twitter.com/'

# Uses Chrome's default cookies filepath by default
cookies = chrome_cookies(url, cookie_file="/home/uzziel/.config/google-chrome/Default/Cookies")
r = requests.get(url, cookies)
print(r.text)