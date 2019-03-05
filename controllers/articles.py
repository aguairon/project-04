from flask import Blueprint, request, jsonify, g
from lib.secure_route import secure_route
from models.article import Article, ArticleSchema
from models.message import MessageSchema

api = Blueprint('articles', __name__)

articles_schema = ArticleSchema(many=True)
article_schema = ArticleSchema()
messages_schema = MessageSchema(many=True)
message_schema = MessageSchema()

@api.route('/articles', methods=['GET'])
def index():
    articles = Article.query.order_by(Article.title).all()
    return articles_schema.jsonify(articles)


@api.route('/articles/desc', methods=['GET'])
def desc():
    articles = Article.query.order_by(Article.updated_at.desc()).limit(1).all()
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
        return jsonify({'message':'Unauthorized'}), 403
    article, errors = article_schema.load(request.get_json(), instance=article)

    if errors:
        return jsonify(errors), 422

    article.save()

    return article_schema.jsonify(article)

@api.route('/articles/<int:article_id>/like', methods=['PUT'])
@secure_route
def like(article_id):
    article = Article.query.get(article_id)

    if article.creator == g.current_user:
        return jsonify({'message':'You own this article'}), 403

    article.liked_by.append(g.current_user)

    article.save()

    return article_schema.jsonify(article)

@api.route('/articles/<int:article_id>/like', methods=['DELETE'])
@secure_route
def unlike(article_id):
    article = Article.query.get(article_id)

    if article.creator == g.current_user:
        return jsonify({'message':'You own this article'}), 403

    if g.current_user in article.liked_by:
        article.liked_by.remove(g.current_user)

    article.save()

    return article_schema.jsonify(article)

@api.route('/articles/<int:article_id>', methods=['DELETE'])
@secure_route
def delete(article_id):
    article = Article.query.get(article_id)

    if not article:
        return jsonify({'message': 'Not found'}), 404
    if  article.creator != g.current_user:
        return jsonify({'message':'You have not written this article'}), 403


    article.remove()

    return '', 204

@api.route('/articles/<int:article_id>/messages', methods=['POST'])
# should probably be users and should be in its own controller
@secure_route
def send_message(article_id):
    message, errors = message_schema.load(request.get_json())
    message.sender_id = g.current_user.id
    message.article_id = article_id

    if errors:
        return jsonify(errors), 422
    message.save()

    return message_schema.jsonify(message)
