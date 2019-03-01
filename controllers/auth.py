from flask import Blueprint, jsonify, request
from models.user import User, UserSchema

api = Blueprint('auth', __name__)
user_schema = UserSchema()

@api.route('/register', methods=['POST'])
def register():
    user, errors = user_schema.load(request.get_json())

    if errors:
        return jsonify(errors), 422

    user.save()

    return jsonify({
        'message': 'Registration successful',
        'token': user.generate_token()
    }), 201

@api.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data.get('email')).first()
    if not user:
        return jsonify({'message': 'This user does not exist'}), 401
    if not user.validate_password(data.get('password', '')):
        return jsonify({'message': 'Please try again'}), 401

    return jsonify({
        'message': 'Welcome back {}!'.format(user.username),
        'token': user.generate_token()
    })
