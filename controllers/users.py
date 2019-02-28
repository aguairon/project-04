from flask import Blueprint, jsonify, request, g
from models.user import User, UserSchema
from lib.secure_route import secure_route

api = Blueprint('users', __name__)

users_schema = UserSchema(many=True)
user_schema = UserSchema()

@api.route('/users', methods=['GET'])
def index():
    users = User.query.all()
    return users_schema.jsonify(users)

@api.route('/users/<int:user_id>', methods=['GET'])
def show(user_id):
    user = User.query.get(user_id)
    return user_schema.jsonify(user)

@api.route('/me', methods=['GET'])
@secure_route
def me():
    return user_schema.jsonify(g.current_user)
