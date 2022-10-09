# DNYF User API Service

# Installation

```bash
virtualenv env
. env/bin/activate
```

# Execution

```bash
# Database initialization
export DATABASE_URI=postgresql://fastapi:fastapi@localhost:6000/fastapi
sh test_database.sh
alembic upgrade head

# App lauching
uvicorn app.main:app --reload
```

# Test
```bash
curl -XPOST -H "Content-Type: application/json" \
        localhost:8000/api/users/ \
        -d '{"email": "pp@avengers.org", "name": "Peter Parker"}'
curl -XGET localhost:8000/api/users/
```

# To do Database update
[Tutorial Link](https://alembic.sqlalchemy.org/en/latest/tutorial.html)
```bash
 alembic revision -m "create account table"
 # Define schema upgrade rules in the generated file.
 alembic upgrade head
```

