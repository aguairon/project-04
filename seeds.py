from app import app, db
from models.user import UserSchema
from models.article import Article


user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    greg, errors = user_schema.load({
        'username':'greg',
        'email':'bdizzle@gmail.com',
        'password':'bdizzles',
        'password_confirmation':'bdizzles'
        })
    if errors:
        raise Exception(errors)
    greg.save()


    aeternae = Article(
        title='Aeternae',
        content="The Aeternae were a race of legendary creatures described in the travels of Alexander the Great.As Alexander's army passed northern Indian plains, they supposedly encountered the Aeternae, who killed some of Alexander's men.The Aeternae were described as killing and wounding enemies with bony, saw-toothed protuberances sprouting from their heads.",
        creator=greg)
    aeternae.save()
