from pydantic import BaseModel, BaseSettings

class UserCreateDto(BaseModel):
    email: str
    name: str
