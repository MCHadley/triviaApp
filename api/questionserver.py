from flask import Flask, request, Response, jsonify
import json

app = Flask(__name__)

with open('Apprentice_TandemFor400_Data.json', "r") as file:
    questions = json.load(file)

@app.route('/')
def index():
    return 'you are connected'

@app.route('/questions')
def questionsServer():
    return jsonify(questions)