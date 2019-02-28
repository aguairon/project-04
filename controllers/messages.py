from flask import Blueprint, g
from models.message import Message, MessageSchema
from lib.secure_route import secure_route

api = Blueprint('messages', __name__)

messages_schema = MessageSchema(many=True)
message_schema = MessageSchema()

@api.route('/messages', methods=['GET'])
def index():
    messages = Message.query.all()
    return messages_schema.jsonify(messages)

@api.route('/messages/<int:message_id>', methods=['GET'])
def show(message_id):
    message = Message.query.get(message_id)
    return message_schema.jsonify(message)

@api.route('/me', methods=['GET'])
@secure_route
def me():
    return message_schema.jsonify(g.current_message)
