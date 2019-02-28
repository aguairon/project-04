from app import db, ma
from marshmallow import fields
from .base import BaseModel, BaseSchema

likes = db.Table(
    'likes',
    db.Column('article_id', db.Integer, db.ForeignKey('articles.id')),
    db.Column('user_id', db.Integer, db.ForeignKey('users.id'))
)

class Article(db.Model, BaseModel):

    __tablename__ = 'articles'
    title = db.Column(db.String(80), nullable=False, unique=True)
    content = db.Column(db.Text, nullable=True)
    creator_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    creator = db.relationship('User', backref='created_articles')
    liked_by = db.relationship(
        'User',
        secondary=likes,
        backref='likes'
    )


class ArticleSchema(ma.ModelSchema, BaseSchema):

    creator = fields.Nested('UserSchema', only=('id', 'username', 'email'))
    liked_by = fields.Nested('UserSchema', many=True, only=('id', 'username'))
    messages = fields.Nested('MessageSchema', many=True, exclude=('article', ))

    class Meta:
        model = Article
