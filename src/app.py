# main.py


from fastapi import FastAPI
from .routers import users
from .db.base import get_db
from sqlalchemy import MetaData

app = FastAPI()
app.include_router(users.router)

@app.get("/api/health_check")
async def root():
    return {"message": "Hello World"}

def initialize_db():
    from .db.user import User
    engine = next(get_db()).get_bind()
    metadata = MetaData(engine)
    metadata.create_all(engine)

initialize_db()
