from flask import Flask, request, Response, jsonify
import json

app = Flask(__name__)

with open('Apprentice_TandemFor400_Data.json', "r") as file:
    questions = json.load(file)

@app.route('/')
def index():
    return 'you are connected'

@app.route('/questions', methods=['GET'])
def questionsServer():
    return jsonify(questions)

@app.after_request
def add_headers(response):
     response.headers.add('Access-Control-Allow-Origin', '*')
     response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
     return response