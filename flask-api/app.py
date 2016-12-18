from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
# from flask_sqlalchemy import SQLAlchemy

# import os
import psycopg2
import urllib.parse
import uuid

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# db = SQLAlchemy(app)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# from models import Todo

todos = []

@app.route('/todos', methods=['GET', 'POST'])
@cross_origin()
def index():
    if request.method == 'POST':
        # todo = todo(request.form['text'])
        # db.session.add(todo)
        # db.session.commit()
        print('adding the todo: ')
        todo = {
            id: uuid.uuid4(),
            text: request.form['text'],
            completed: False,
            order: len(todos) + 1
        }
        todos.append(todo)
        print(todo)
        return todo
    else:
        # todos = todo.query.all()
        print('getting all todos: ')
        print(todos)
        return jsonify({'todos': todos})

# @app.route('/todos/<int:todo_id>')
# def show_todo():
#     return "placeholder"

# @app.route('/todos/<int:todo_id>/edit', methods=['PUT'])
# def edit_todo():
#     return "placeholder"

# @app.route('/todos/<int:todo_id>/toggle', methods=['PUT'])
# def finish_todo():
#     return "placeholder"

# @app.route('/todos/<int:todo_id>/delete', methods=['DELETE'])
# def delete_todo():
#     return "placeholder"

if __name__ == '__main__':
    app.run(debug=True)
    
