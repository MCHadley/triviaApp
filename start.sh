#!/bin/sh
source venv/bin/activate
export FLASK_APP=api/questionserver.py
python -m flask run