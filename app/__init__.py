from flask import Flask
# from flask.ext.sqlalchemy import SQLAlchemy
import requests
import json

flask_app = Flask(__name__)
flask_app.config.from_object('config')
# db = SQLAlchemy(flask_app)

from app import apis,loads


# data = requests.get("http://api.popong.com/v0.1/bill/search?s=문재인&api_key=test")
data = requests.get("http://api.popong.com/v0.1/person/search?q=문&api_key=test")
print("==== ", data.json())
