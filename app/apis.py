from flask import Flask
from flask import render_template,request
from json import JSONEncoder
from app import flask_app

from app.loads import Csv

import google
import urllib.parse
import urllib.request
from bs4 import BeautifulSoup

import time

@flask_app.route('/')
def hello_world():
    return render_template('index.html')

@flask_app.route('/test')
def test():
    data = Csv().get_moon_data_list()
    person_data = [{
            "name": "문재인",
            "data": data,
            "photo": "moon.png",
        },
        {
            "name": "심상정",
            "data": data,
            "photo": "sim.png",
        },
        {
            "name": "안철수",
            "data": data,
            "photo": "ahn2.png",
        }
    ]
    print("data?? ", data)
    return JSONEncoder(ensure_ascii=False).encode(person_data)

@flask_app.route('/person/')
def get_person():
    # request.get
    name = request.args.get('name')
    keyword = request.args.get('keyword')
    print("name ??? ",name)
    print("keyword?? ",keyword)

    chosun_keyword_encode = urllib.parse.quote(name+" "+keyword+" site:www.chosun.com")
    han_keyword_encode = urllib.parse.quote(name+" "+keyword+" site:www.hani.co.kr")

    return_data = [
        {
            "name": "조선일보",
            "news": get_new_data(chosun_keyword_encode)
        },
        {
            "name": "한겨례",
            "news": get_new_data(han_keyword_encode)
        }
    ]
    return JSONEncoder(ensure_ascii=False).encode(return_data)


def get_new_data(encoded_keyword):
    data = google.get_page('http://www.google.co.kr/search?hl=ko&q='+encoded_keyword+'&btnG=GoogleSearch')
    print("name ??? ", data)
    # time.sleep(1000)
    # time.sleep(1)

    raw_data = data.decode('utf-8')
    soup = BeautifulSoup(raw_data, 'html.parser')

    search_data = soup.find(id="search")

    news_raw_data = search_data.findAll("h3")

    return_data = []

    import re

    for news in news_raw_data:
        return_data.append(
            dict(title=news.find("a").get_text(), link="http://google.co.kr/" + news.find("a").get("href")))
        # if "url" not in news.find("a").get("href"):
        #     print("not")
        # else:
        #     return_data.append(dict(title=news.find("a").get_text(), link="http://google.co.kr/"+news.find("a").get("href")))
    return return_data
