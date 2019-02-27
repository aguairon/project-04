import os

db_uri = os.getenv('DATABASE_URL', 'postgres://localhost:5432/chimera')

secret = os.getenv('SECRET', 'outis and nemo')
