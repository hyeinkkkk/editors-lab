from flask import Flask
# from flask.ext.sqlalchemy import SQLAlchemy
import requests
import json

flask_app = Flask(__name__)
flask_app.config.from_object('config')
# db = SQLAlchemy(flask_app)

from app import apis,loads


