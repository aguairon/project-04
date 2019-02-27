from flask import Blueprint
from models.article import Article, ArticleSchema

api = Blueprint('articles', __name__)

articles_schema = ArticleSchema(many=True)
article_schema = ArticleSchema()

@api.route('/articles', methods=['GET'])
def index():
    articles = Article.query.all()
    return articles_schema.jsonify(articles)
