from fastapi import Depends, APIRouter
from sqlalchemy.orm import Session
from uuid import UUID
from src.db.base import get_db
from src.db.user import User
from src.schema.users import UserCreateDto

router = APIRouter(prefix="/api/users", tags=["users"])

@router.get("/")
async def get_users(db: Session = Depends(get_db)) -> str:
    user = db.query(User).all()
    return user

@router.get("/{user_id}")
async def get_user(db: Session = Depends(get_db), *, user_id: UUID) -> str:
    user = db.query(User).get(user_id)
    return user

@router.post("/")
async def create_user(user: UserCreateDto, db: Session = Depends(get_db)) -> str:
    new_user = User(name=user.name, email=user.email)
    db.add(new_user)
    db.flush()
    return new_user
