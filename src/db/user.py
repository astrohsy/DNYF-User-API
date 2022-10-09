import sqlalchemy as sa
from fastapi_utils.guid_type import GUID, GUID_DEFAULT_SQLITE
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "user"
    id = sa.Column(GUID, primary_key=True, default=GUID_DEFAULT_SQLITE)
    email = sa.Column(sa.String, nullable=False)
    name = sa.Column(sa.String)
