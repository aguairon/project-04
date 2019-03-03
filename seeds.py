from app import app, db
from models.user import UserSchema
from models.article import Article
from models.message import Message


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
        creator=greg,
        liked_by=[begona]
    )
    aeternae.save()

    athos = Article(
        title='Athos',
        #pylint: disable=C0301
        content="Athos ([ˈæθɒs] Greek: Ἄθως, pronounced [ˈatʰɔːs]) from Greek mythology, was one of the Gigantes. He is most known for the creation of Mt. Athos, a mountain and peninsula in northern Greece, known as The Holy Mountain, that is located in northern Greece. There are two versions regarding the creation of the mountain, and they both involve Poseidon, Greek God of the sea, son of Kronos and brother to Zeus and Hades. In one version of the story, Athos throws a mountain at Poseidon but misses. It is said that Athos got away and the rock he was about to throw at the god slipped through his fingers. Poseidon then threw it back at him, thus creating Mt. Athos. In the other version Poseidon throws the mountain at Athos, creating the mountain.",
        creator=begona
    )
    athos.save()

    ba = Article(
        title='Ba Jiao Gui',
        #pylint: disable=C0301
        content="Chinese folklore features a rich variety of ghosts, monsters, and other supernatural creatures. According to traditional beliefs a ghost is the spirit form of a person who has died. Ghosts are typically malevolent and will cause harm to the living if provoked. Many Chinese folk beliefs about ghosts have been adopted into the mythologies and folklore of neighboring East Asian cultures, notably Japan, Korea, and Vietnam. Beliefs about ghosts are closely associated with Chinese ancestor worship, where much have been incorporated into Buddhism and in turn influenced and created uniquely Chinese Buddhist beliefs about the supernatural.Traditionally, the Chinese believed that it was possible to contact the spirits of deceased relatives and ancestors through a medium. It was believed that the spirits of the deceased can help them if they were properly respected and rewarded. The annual Hungry Ghost Festival, celebrated in Greater China (including Hong Kong and Macao Special Administrative Regions and Taiwan), Malaysia, Singapore, and elsewhere in the Chinese diaspora, is dedicated to performing rituals to honor and remember the spirits of the dead. On this day ghosts and other supernatural creatures come out from the Underworld and move among the living. Families prepare food and other offerings and place them on a shrine dedicated to deceased relatives. Incense and paper money are burned and other rituals are performed in hopes that the spirits of the dead will protect and bring good luck to the family.Ghosts are described in classical Chinese texts, and continue to be depicted in modern literature and movies.",
        creator=greg
    )
    ba.save()

    bannik = Article(
        title='Bannik',
        #pylint: disable=C0301
        content="Bannik is the bathhouse (banya) spirit in Slavic mythology.Slavic bathhouses resemble saunas, with an inner steaming room and an outer changing room. A place where women gave birth and practiced divinations, the bathhouse was strongly endowed with vital forces. The third firing (or fourth, depending on tradition) was reserved for the Bannik, and, given his inclination to invite demons and forest spirits to share his bath, no Christian images were allowed lest they offend the occupants. If disturbed by an intruder while washing, the Bannik might pour boiling water over him, or even strangle him.The Bannik had the ability to predict the future. One consulted him by standing with one's back exposed in the half-open door of the bath. The Bannik would gently stroke one's back if all boded well; but if trouble lay ahead, he would strike with his claws",
        creator=greg
    )
    bannik.save()

    fachan = Article(
        title='Fachan',
        #pylint: disable=C0301
        content="In Scottish folklore the fachan (or fachin[1]) is a monster or giant described by John Francis Campbell in Popular Tales of the West Highlands as having a single eye in the middle of its face, a single hand protruding from its chest instead of arms, and a single leg emerging from its central axis. It has a single tuft of hair on the top of its head, regarding which Campbell says 'it were easier to take a mountain from the root than to bend that tuft.' Campbell draws attention to the possible influence of creatures from Arabic tradition such as the Nesnas or Shikk, described as 'half of a human being' and hopping about on one leg with great agility.",
        creator=greg
    )
    fachan.save()


    beithir = Article(
        title='Beithir',
        #pylint: disable=C0301
        content="The beithir is described as 'the largest and most deadly kind of serpent', or as a dragon (but without certain typical draconic features such as wings or fiery breath).It dwells in mountainous caves and corries (valleys) and is equipped with a venomous sting. If a person is stung by the beithir then he must head for the nearest body of water such as a river or loch. If he can reach it before the beithir does then he is cured, but if the monster reaches it first then the victim is doomed. Another cure for the sting is water in which the head of another snake has been placed.The beithir is considered one of the fuath, a general term for various monsters and spirits associated with water.It is said that if a normal snake is killed then the head must be separated a proper distance from its body and destroyed. Otherwise, both parts will come together and the snake will return to life as a beithir. Donald Alexander Mackenzie in Scottish Folklore and Folk Life (1935) drew a possible connection between the beithir and the mythological hag known as the Cailleach Bheur. In a story from Argyll the Cailleach was slain by a hunter who hacked her to pieces, but she returned to life when all her body parts came together again. Mackenzie suggested that the serpent-dragon of the loch may be one of her forms.",
        creator=begona
    )
    beithir.save()



    message1 = Message(
        content="This is a very nice article, Thanks for posting",
        sender=begona,
        article=aeternae
    )
    message1.save()

    message1 = Message(
        content="An image would be nice though",
        sender=begona,
        article=aeternae
    )
    message1.save()
