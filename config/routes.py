# import os
from app import app
from controllers import auth, users, articles, messages

app.register_blueprint(auth.api, url_prefix='/api')
app.register_blueprint(users.api, url_prefix='/api')
app.register_blueprint(articles.api, url_prefix='/api')
app.register_blueprint(messages.api, url_prefix='/api')
