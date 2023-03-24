import os
from decouple import config

print(os.environ)


API_USER = config("USER")
API_KEY = config("KEY")
DEBUG_MODE = config("DEBUG_MODE", default=False, cast=bool)

print(os.environ["USER"])
print(os.environ["KEY"])
print(os.environ["DEBUG_MODE"])
