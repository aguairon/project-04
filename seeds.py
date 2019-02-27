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

    begona, errors = user_schema.load({
        'username':'begona',
        'email':'begona@gmail.com',
        'password':'passpass',
        'password_confirmation':'passpass'
        })
    if errors:
        raise Exception(errors)
    begona.save()


    aeternae = Article(
        title='Aeternae',
        #pylint: disable=C0301
        content="The Aeternae were a race of legendary creatures described in the travels of Alexander the Great.As Alexander's army passed northern Indian plains, they supposedly encountered the Aeternae, who killed some of Alexander's men.The Aeternae were described as killing and wounding enemies with bony, saw-toothed protuberances sprouting from their heads.",
        creator=greg
    )
    aeternae.save()

    athos = Article(
        title='Athos',
        #pylint: disable=C0301
        content="Athos ([ˈæθɒs] Greek: Ἄθως, pronounced [ˈatʰɔːs]) from Greek mythology, was one of the Gigantes. He is most known for the creation of Mt. Athos, a mountain and peninsula in northern Greece, known as The Holy Mountain, that is located in northern Greece. There are two versions regarding the creation of the mountain, and they both involve Poseidon, Greek God of the sea, son of Kronos and brother to Zeus and Hades. In one version of the story, Athos throws a mountain at Poseidon but misses. It is said that Athos got away and the rock he was about to throw at the god slipped through his fingers. Poseidon then threw it back at him, thus creating Mt. Athos. In the other version Poseidon throws the mountain at Athos, creating the mountain.",
        creator=begona
    )
    athos.save()
