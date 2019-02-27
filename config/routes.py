# import os
from app import app
from controllers import auth, articles

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(articles.api, url_prefix='/api')
