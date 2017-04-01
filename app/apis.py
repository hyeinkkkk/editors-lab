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
moon_data = Csv().get_person_data_list("moon")
ahn1_data = Csv().get_person_data_list("ahn1")
ryu_data = Csv().get_person_data_list("ryu")
sim_data = Csv().get_person_data_list("sim")

@flask_app.route('/')
def hello_world():
    return render_template('index.html')

@flask_app.route('/test')
def test():

    person_data = [{
            "name": "문재인",
            "data": moon_data,
            "photo": "moon.png",
        },
        {
            "name": "심상정",
            "data": sim_data,
            "photo": "sim.png",
        },
        {
            "name": "안철수",
            "data": ahn1_data,
            "photo": "ahn1.png",
        },
        {
            "name": "유승민",
            "data": ryu_data,
            "photo": "ryu.png",
        }
    ]
    # print("data?? ", data)
    return JSONEncoder(ensure_ascii=False).encode(person_data)

@flask_app.route('/person/')
def get_person():
    # request.get
    name = request.args.get('name')
    keyword = request.args.get('keyword')
    # print("name ??? ",name)
    # print("keyword?? ",keyword)

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
    # print("name ??? ", data)

    raw_data = data.decode('utf-8')
    soup = BeautifulSoup(raw_data, 'html.parser')

    search_data = soup.find(id="search")

    news_raw_data = search_data.findAll("h3")

    return_data = []

    for news in news_raw_data:
        return_data.append(
            dict(title=news.find("a").get_text(), link="http://google.co.kr/" + news.find("a").get("href")))
    return return_data
