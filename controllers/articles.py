from flask import Blueprint, request, jsonify, g
from lib.secure_route import secure_route
from models.article import Article, ArticleSchema

api = Blueprint('articles', __name__)

articles_schema = ArticleSchema(many=True)
article_schema = ArticleSchema()

@api.route('/articles', methods=['GET'])
def index():
    articles = Article.query.all()
    return articles_schema.jsonify(articles)

@api.route('/articles/<int:article_id>', methods=['GET'])
def show(article_id):
    article = Article.query.get(article_id)
    return article_schema.jsonify(article)

@api.route('/articles', methods=['POST'])
@secure_route
def create():
    article, errors = article_schema.load(request.get_json())
    article.creator = g.current_user

    if errors:
        return jsonify(errors), 422

    article.save()

    return article_schema.jsonify(article)

@api.route('/articles/<int:article_id>', methods=['PUT'])
@secure_route
def update(article_id):
    article = Article.query.get(article_id)

    if article.creator != g.current_user:
        return jsonify({'message':'Unauthorized'}), 401
    article, errors = article_schema.load(request.get_json(), instance=article)

    if errors:
        return jsonify(errors), 422

    article.save()

    return article_schema.jsonify(article)

@api.route('/articles/<int:article_id>', methods=['DELETE'])
@secure_route
def delete(article_id):
    article = Article.query.get(article_id)

    if not article:
        return jsonify({'message': 'Not found'}), 404
    if  article.creator != g.current_user:
        return jsonify({'message':'Unauthorized'}), 401


    article.remove()

    return '', 204
