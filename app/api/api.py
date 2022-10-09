import json


def read_user():
    with open('data/users.json') as stream:
        users = json.load(stream)

    return users
