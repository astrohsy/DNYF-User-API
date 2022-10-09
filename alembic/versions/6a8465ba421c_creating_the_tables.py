"""creating the tables

Revision ID: 6a8465ba421c
Revises:
Create Date: 2022-10-09 11:35:07.554834

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects.postgresql import UUID
import uuid


# revision identifiers, used by Alembic.
revision = '6a8465ba421c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "user",
        sa.Column("id", UUID, primary_key=True),
        sa.Column("email", sa.String(50), nullable=False),
        sa.Column("name", sa.String(50), nullable=False),
    )


def downgrade() -> None:
    op.drop_table('user')
