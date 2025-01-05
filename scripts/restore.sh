#!/bin/bash

psql -U postgres -c "CREATE ROLE ash WITH LOGIN PASSWORD 'mysecretpassword';"

psql -U postgres -d pk_database -f /tmp/database_backup.sql