from flask import Flask, request, redirect, url_for, render_template
from flask_sqlalchemy import SQLAlchemy

import os
import psycopg2
import urllib.parse

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ['DATABASE_URL']
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import Item

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        item = Item(request.form['description'], request.form['order'])
        db.session.add(item)
        db.session.commit()
        return redirect(url_for('index'))
    else:
        items = Item.query.all()
        print(items)
        return render_template('index.html', items=items)

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

if __name__ == '__main__':
    app.run()
    
