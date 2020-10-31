from flask import Flask, request, Response, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return 'you are connected'