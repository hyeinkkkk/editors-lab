from flask import Flask
from flask import render_template,request

from app import flask_app



@flask_app.route('/')
def hello_world():
    return render_template('index.html')