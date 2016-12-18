# from app import db 

# class Item(db.Model):  
#     id = db.Column(db.Integer, primary_key=True)
#     order = db.Column(db.Integer)
#     text = db.Column(db.Text)
#     completed = db.Column(db.Boolean, default=False, nullable=False)

#     def __init__(self, description, order):
#         self.description = description
#         self.order = order

#     def __repr__(self):
#         return '<{}>'.format(self.description)

class Todo():
    def __init__(id, self, description, order):
        self.id = id
        self.description = description
        self.order = order
        self.completed = completed

    def __repr__(self):
        return '<{}>'.format(self.description)
