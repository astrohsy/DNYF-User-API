from starlette.testclient import TestClient
from app.main import app
import json

client = TestClient(app)


def test_read_main():
    response = client.get('/')
    assert response.status_code == 200
    assert response.json() == {'message': 'Fast API in Python'}


def test_read_user():
    response = client.get('/user')
    assert response.status_code == 200
    assert len(response.json()) != 0