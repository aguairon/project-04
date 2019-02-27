from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema
from models.user import UserSchema

class Article(db.Model, BaseModel):

    __tablename__ = 'articles'
    title = db.Column(db.String(80), nullable=False, unique=True)
    content = db.Column(db.Text, nullable=True)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User', backref='created_articles')

class ArticleSchema(ma.ModelSchema, BaseSchema):
    creator = fields.Nested('UserSchema', only=('id', 'username', 'email'))
    class Meta:
        model = Article
