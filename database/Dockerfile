# syntax=docker/dockerfile:1
FROM postgres:17.2

# WORKDIR /app

COPY ./scripts/restore.sh /docker-entrypoint-initdb.d/
COPY ./scripts/database_backup.sql /tmp/database_backup.sql

# CMD sh -c "psql -U postgres -d pk_database -f /tmp/database_backup.sql"