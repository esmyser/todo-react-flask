from flask import Flask, request, render_template
from flask.ext.sqlalchemy import SQLAlchemy

import os
import psycopg2
import urllib.parse

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
db = SQLAlchemy(app)

@app.route('/', methods=['GET', 'POST'])
def index():
    # if request.method == 'POST':
    #   createItem(request.form)
    # else
    return render_template('index.html')

# @app.route('/<int:item_id>')
# def show_item():
#     return "placeholder"

# @app.route('/<int:item_id>/edit', methods=['PUT'])
# def edit_item():
#     return "placeholder"

# @app.route('/<int:item_id>/finish', methods=['PUT'])
# def finish_item():
#     return "placeholder"

# @app.route('/<int:item_id>/delete', methods=['DELETE'])
# def delete_item():
#     return "placeholder"