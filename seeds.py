from app import app, db
from models.user import UserSchema
from models.article import Article
from models.message import Message


user_schema = UserSchema()

with app.app_context():
    db.drop_all()
    db.create_all()

    carmen, errors = user_schema.load({
        'username':'carmen',
        'email':'carmen@gmail.com',
        'password':'passpass',
        'password_confirmation':'passpass'
        })
    if errors:
        raise Exception(errors)
    carmen.save()

    greg, errors = user_schema.load({
        'username':'greg',
        'email':'bdizzle@gmail.com',
        'password':'bdizzles',
        'password_confirmation':'bdizzles'
        })
    if errors:
        raise Exception(errors)
    greg.save()

    tom, errors = user_schema.load({
        'username':'tom',
        'email':'tom@gmail.com',
        'password':'passpass',
        'password_confirmation':'passpass'
        })
    if errors:
        raise Exception(errors)
    tom.save()

    maria, errors = user_schema.load({
        'username':'maria',
        'email':'maria@gmail.com',
        'password':'passpass',
        'password_confirmation':'passpass'
        })
    if errors:
        raise Exception(errors)
    maria.save()

    roan, errors = user_schema.load({
        'username':'roan',
        'email':'roan@gmail.com',
        'password':'passpass',
        'password_confirmation':'passpass'
        })
    if errors:
        raise Exception(errors)
    roan.save()

    begona, errors = user_schema.load({
        'username':'begona',
        'email':'begona@gmail.com',
        'password':'passpass',
        'password_confirmation':'passpass'
        })
    if errors:
        raise Exception(errors)
    begona.save()

    llorona = Article(
        title="La Llorona",
        #pylint: disable=C0301
        content="The legend is said that in a rural village there lived a young woman named Maria. Maria came from a poor family but was known around her village for her beauty. One day, an extremely wealthy nobleman traveled through her village. He stopped in his tracks when he saw Maria. Maria was charmed by him and he was charmed by her beauty, so when he proposed to her, she immediately accepted. Maria's family was thrilled that she was marrying into a wealthy family, but the nobleman's father was extremely disappointed that his son was marrying into poverty. Maria and her new husband built a house in the village to be away from his disapproving father. Eventually, she gave birth to two boys. Her husband was always traveling, and stopped spending time with his family. When he came home, he only paid attention to the sons and Maria knew her husband was falling out of love with her. One day, he returned to the village with a younger woman, and told his sons farewell, ignoring Maria.Maria, angry and hurt, took her sons to a river and drowned them in a blind rage. She realized what she had done and searched for them, but the river had already carried them away. Days later, she was found dead on the river bank. Challenged at the gates of heaven for the whereabouts of her sons, she was not permitted to enter the afterlife until she finds them. Stuck between the land of the living and the dead, she spends eternity looking for her lost sons. She is always heard weeping for her sons, earning her the name 'La Llorona.' It is said that if you hear her crying, you are to run the opposite way. If you hear her cries, they could bring misfortune or even death. Many parents in Latin America use this story to scare their children from staying out too late.La Llorona kidnaps wandering children at night, mistaking them for her own. She begs the heavens for forgiveness, and drowns the children she kidnaps.[2] People who claim to have seen her say she appears at night or in the late evening by rivers or lakes, wearing a white or black gown with a veil.[3] Some believe those who hear the wails of La Llorona are marked for death or misfortune, similar to the Gaelic banshee legend.[4] Among her wails, she is noted as crying '¡Ay, mis hijos!'' which translates to 'Oh, my children!' She scrapes the bottom of the rivers and lakes, searching for her sons. It is said that when her wails sounds near she is actually far and when she sounds distant, she is actually very near.",
        creator=maria
    )
    llorona.save()

    mandragora = Article(
        title="Mandragora",
        #pylint: disable=C0301
        content="In myth, mandragoras are familiar demons who appear in the figures of little men without beards.Mandragoras are thought to be little dolls or figures given to sorcerers by the Devil for the purpose of being consulted by them in time of need; and it would seem as if this conception had sprung directly from that of the fetish, which is nothing else than a dwelling-place made by a shaman or medicine-man for the reception of any wandering spirit who chooses to take up his abode therein.",
        creator=roan
    )
    mandragora.save()

    gog = Article(
        title="Gog and Magog",
        #pylint: disable=C0301
        content="Gog and Magog (/ˈɡɒɡ ... ˈmeɪɡɒɡ/; Hebrew: גּוֹג וּמָגוֹג Gog u-Magog) appear in the Hebrew Bible as individuals, peoples, or lands. In Ezekiel 38, Gog is an individual and Magog is his land; in Genesis 10 Magog is a man, but no Gog is mentioned; and centuries later Jewish tradition changed Ezekiel's Gog from Magog into Gog and Magog, which is the form in which they appear in the Book of Revelation, although there they are peoples rather than individuals.A legend was attached to Gog and Magog by the time of the Roman period, that the Gates of Alexander were erected by Alexander the Great to repel the tribe. Romanized Jewish historian Josephus knew them as the nation descended from Magog the Japhetite, as in Genesis, and explained them to be the Scythians. In the hands of Early Christian writers they became apocalyptic hordes, and throughout the Medieval period variously identified as the Huns, Khazars, Mongols, Turanians or other nomads, or even the Ten Lost Tribes of Israel.The legend of Gog and Magog and the gates was also interpolated into the Alexander romances. In one version, 'Goth and Magoth' are kings of the Unclean Nations, driven beyond a mountain pass by Alexander, and blocked from returning by his new wall. Gog and Magog are said to engage in human cannibalism in the romances and derived literature. They have also been depicted on Medieval cosmological maps, or mappae mundi, sometimes alongside Alexander's wall.The conflation of Gog and Magog with the legend of Alexander and the Iron Gates was disseminated throughout the Near East in the early centuries of the Christian era.They appear in the Quran as Yajuj and Majuj (Arabic: يأجوج ومأجوج‎ Yaʾjūj wa-Maʾjūj), adversaries of Dhul-Qarnayn, who is mentioned in the Qu'ran as a great righteous ruler and is most commonly considered to be Alexander the Great. Muslim geographers identified them at first with Turkic tribes from Central Asia and later with the Mongols. In modern times they remain associated with apocalyptic thinking, especially in the United States and the Muslim world.",
        creator=roan,
        liked_by=[begona, tom]
    )

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
        creator=begona,
        liked_by=[roan, tom]
    )
    athos.save()

    ba = Article(
        title='Ba Jiao Gui',
        #pylint: disable=C0301
        content="Chinese folklore features a rich variety of ghosts, monsters, and other supernatural creatures. According to traditional beliefs a ghost is the spirit form of a person who has died. Ghosts are typically malevolent and will cause harm to the living if provoked. Many Chinese folk beliefs about ghosts have been adopted into the mythologies and folklore of neighboring East Asian cultures, notably Japan, Korea, and Vietnam. Beliefs about ghosts are closely associated with Chinese ancestor worship, where much have been incorporated into Buddhism and in turn influenced and created uniquely Chinese Buddhist beliefs about the supernatural.Traditionally, the Chinese believed that it was possible to contact the spirits of deceased relatives and ancestors through a medium. It was believed that the spirits of the deceased can help them if they were properly respected and rewarded. The annual Hungry Ghost Festival, celebrated in Greater China (including Hong Kong and Macao Special Administrative Regions and Taiwan), Malaysia, Singapore, and elsewhere in the Chinese diaspora, is dedicated to performing rituals to honor and remember the spirits of the dead. On this day ghosts and other supernatural creatures come out from the Underworld and move among the living. Families prepare food and other offerings and place them on a shrine dedicated to deceased relatives. Incense and paper money are burned and other rituals are performed in hopes that the spirits of the dead will protect and bring good luck to the family.Ghosts are described in classical Chinese texts, and continue to be depicted in modern literature and movies.",
        creator=greg,
        liked_by=[maria]
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

    xana = Article(
        title='Xana',
        #pylint: disable=C0301
        content="The xana is a character found in Asturian mythology. Always female, she is a creature of extraordinary beauty believed to live in fountains, rivers, waterfalls or forested regions with pure water. She is usually described as small or slender with long blonde or light brown hair (most often curly), which she tends to with gold or silver combs woven from sun or moonbeams. The origin of the Asturian word xana is unclear, though some scholars see it as a derivation from the Latin name for the goddess Diana. References to where the mythological xanas lived are still common in Asturian toponyms. They also appear in Eastern Galician and Cantabrian",
        creator=greg
    )
    xana.save()

    apkallu = Article(
        title='Apkallu',
        #pylint: disable=C0301
        content="Apkallu (Akkadian) and Abgal (Sumerian) are terms found in cuneiform inscriptions that in general mean either 'wise' or 'sage.'In several contexts the Apkallu are seven demi-gods, sometimes described as part man and part fish, associated with human wisdom; these creatures are often referred to in scholarly literature as the Seven Sages. Sometimes the sages are associated with a specific primeval king. After the deluge (see Epic of Gilgamesh), further sages and kings are listed. Post-deluge, the sages are considered human, and in some texts are distinguished by being referred to as Ummanu, not Apkallu.The terms Apkallu (as well as Abgal) is also used as an epithet for kings and gods as a mark of wisdom or knowledge.A further use of the term Apkallu is when referring to figurines used in apotropaic rituals; these figurines include fish-man hybrids representing the seven sages, but also include bird-headed and other figures. In a later work by Berossus describing Babylonia, the Apkallu appear again, also described as fish-men who are sent by the gods to impart knowledge to people. In Berossus, the first one Oannes (a variant of Uanna) is said to have taught people the creation myth the Enuma Elis",
        creator=begona
    )
    apkallu.save()

    xingtian = Article(
        title='Xingtian',
        #pylint: disable=C0301
        content="Chinese: 刑天; pinyin: Xíngtiān; 'Opposing Heaven', is a Chinese deity who fights against the Supreme Divinity, not giving up even after the event of his decapitation. Losing the fight for supremacy, he was beheaded and his head buried in Changyang Mountain. Nevertheless, headless, with a shield in one hand and a battle axe in the other, he continues the fight, using his nipples as eyes and his bellybutton as a mouth. Xingtian was an official under Yandi.Yandi fought against Huangdi for the position of supreme god, but he lost the conflict. Xingtian still continued the fight after Yandi's defeat, but was defeated and decapitated by Huangdi. Eventually, he regenerated himself and continued his defiance, which was expressed by a martial dance.",
        creator=roan,
        liked_by=[greg, maria, tom]
    )
    xingtian.save()

    xindhi = Article(
        title="Xindhi",
        #pylint: disable=C0301
        content="Xindhi, in Albanian folklore, are either elf-like creatures or are actually elves; 'xindhi' are male, while the 'xindha' are female.A creaking door or a flickering flame serve as the signals for their approach. Sometimes the xindhi are friendly and helpful; generally, though, they are cruel to people. A Xindhi is a male spirit, while a Xindha is a female spirit.",
        creator=tom
    )
    xindhi.save()

    mojana = Article(
        title="La Mojana",
        #pylint: disable=C0301
        content="The Mohana (La Mojana) Mother of water or Mami Wata is a shapeshifting water spirit who usually appear in human form to seduce and take away the humans. In the Amazon basin this features are applied to the Pink dolphins representing the spirit of Amazon river. The discography of Colombian folkloric singer Totó la Momposina includes works about the Mohana.",
        creator=maria
    )
    mojana.save()


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
