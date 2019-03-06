from app import db, ma
from sqlalchemy.schema import CheckConstraint
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import validates
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

    __table_args__ = (
        CheckConstraint('char_length(title) > 3', name='title-min-length'),
        CheckConstraint('char_length(content) > 10', name='content-min-length'),
    )

    @validates('title')
    def validate_title(self, key, title) -> str:
        if len(title) <= 3:
            raise ValueError('title is too short')
        return title

    @validates('content')
    def validate_content(self, key, content) -> str:
        if len(content) <= 10:
            raise ValueError('article content is too short')
        return content


class ArticleSchema(ma.ModelSchema, BaseSchema):

    creator = fields.Nested('UserSchema', only=('id', 'username', 'email'))
    liked_by = fields.Nested('UserSchema', many=True, only=('id', 'username'))
    messages = fields.Nested('MessageSchema', many=True, exclude=('article', ))

    class Meta:
        model = Article
