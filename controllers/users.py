from functools import reduce
from flask import Blueprint, g
from models.user import User, UserSchema
from lib.secure_route import secure_route

api = Blueprint('users', __name__)

users_schema = UserSchema(many=True)
user_schema = UserSchema()

@api.route('/users', methods=['GET'])
def index():
    users = User.query.all()
    return users_schema.jsonify(users)

@api.route('/users/most', methods=['GET'])
def most():

    def find_most_prolific(current, found):
        if len(current.created_articles) > len(found.created_articles):
            return current

        return found


    users = User.query.all()
    most_prolific = reduce(find_most_prolific, users)

    return user_schema.jsonify(most_prolific)


@api.route('/users/<int:user_id>', methods=['GET'])
def show(user_id):
    user = User.query.get(user_id)
    return user_schema.jsonify(user)

@api.route('/me', methods=['GET'])
@secure_route
def me():
    return user_schema.jsonify(g.current_user)
