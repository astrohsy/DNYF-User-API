
from datetime import datetime
from pydantic import BaseModel
from typing import List


class User(BaseModel):
    user_id: int
    uni: str
    created_at: datetime

