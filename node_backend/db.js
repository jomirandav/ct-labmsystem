import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
    // host: 'localhost',
    host: 'db',
    port: 5432,
    user: 'postgres',
    password: 'mysecretpassword',
    database: 'pk_database'
});

export default pool;