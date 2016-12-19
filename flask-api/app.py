from flask import Flask, Response, request, jsonify
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy

import os
import psycopg2
import urllib.parse
import uuid

app = Flask(__name__)

# CORS
app.config['CORS_HEADERS'] = 'Content-Type'
CORS(app)

# # Database
# # would have to split this into two git repos to get it to work with heroku (Procfile, requirements.txt, runtime.txt need to be in root folder)
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)
# from models import Todo

# order is place in the array
# to change order, find the todo, slice it out, slice it back in at desired index
todos = [{
    'id': uuid.uuid4(),
    'text': 'testing 123 can you see me?',
    'completed': False,
}]

@app.route('/todos', methods=['GET', 'POST'])
@cross_origin()
def index():
    if request.method == 'POST':
        todo = {
            'id': len(todos) + 1,
            'text': request.form['text'],
            'completed': False,
        }
        todos.append(todo)
        return jsonify(**todo)
    else:
        return jsonify({ 'todos': todos })

@app.route('/todos/<index>')
def show_todo(index):
    if len(todos) > int(index):
        return jsonify(todos[int(index)])
    else:
        return "not found", 404

@app.route('/todos/<index>/toggle', methods=['PUT'])
def toggle_todo(index):
    index = int(index)
    todos[index]['completed'] = not todos[index]['completed']
    return jsonify(todos[index])

@app.route('/todos/<index>/edit', methods=['PUT'])
def edit_todo(index):
    return "placeholder"

@app.route('/todos/<index>/delete', methods=['DELETE'])
def delete_todo(index):
    return "placeholder"

@app.route('/todos/<index>/<int:order>', methods=['POST'])
def order_todo(index):
    return "placeholder"

if __name__ == '__main__':
    app.run(debug=True)
    
