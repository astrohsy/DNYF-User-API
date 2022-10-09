  docker run --rm \
        --name dnyf_user_db \
        -p 6000:5432 \
        -v postgres_data_dnyf:/var/lib/postgresql/data/ \
        -e POSTGRES_USER=fastapi -e POSTGRES_PASSWORD=fastapi -e POSTGRES_DB=fastapi \
        postgres:12.1-alpine
