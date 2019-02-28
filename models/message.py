from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

class Message(db.Model, BaseModel):

    __tablename__ = 'messages'

    content = db.Column(db.String(1600), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    sender = db.relationship('User', backref='posted_messages')

    article_id = db.Column(db.Integer, db.ForeignKey('articles.id'))
    article = db.relationship('Article', backref='messages')


class MessageSchema(ma.ModelSchema, BaseSchema):

    sender = fields.Nested('UserSchema', only=('id', 'username'))
    article = fields.Nested('ArticleSchema', only=('id', 'title'))

    class Meta:
        model = Message
