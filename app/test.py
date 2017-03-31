import google
import urllib.parse
import urllib.request
from bs4 import BeautifulSoup




keyword_encode = urllib.parse.quote("안철수 공약 site:www.chosun.com")
han_keyword_encode = urllib.parse.quote("안철수 site:www.hani.co.kr")
data = google.get_page('http://www.google.co.kr/search?hl=ko&q='+keyword_encode+'&btnG=GoogleSearch')
wiki_url = "https://ko.wikipedia.org/wiki/"

# source_code_from_URL = urllib.request.urlopen(wiki_url + keyword_encode)
# wiki_data = source_code_from_URL.read().decode('utf-8')
# source_code_from_URL.close()
# print(wiki_data)
raw_data = data.decode('utf-8')
soup = BeautifulSoup(raw_data, 'html.parser')
# print("soup ?? ", soup.find(id="search"))
# print("search?? ", soup.find(id="search"))
search_data = soup.find(id="search")

data = search_data.findAll("h3")
# print("data. ",data)
# for news in data:
#     print("title??? ", news.find("a").get_text())
# import re
# print("new?? ", soup.find(string=re.compile("g")))
