import pg from "pg";
const { Pool } = pg;

// change to read from .env?
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'mysecretpassword',
    database: 'pk_database'
});

// module.exports = pool    (commonjs)
export default pool;