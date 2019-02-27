from flask import Blueprint
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
