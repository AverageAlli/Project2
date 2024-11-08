import { Pool } from 'pg';

const pool = new Pool({
    user: 'your-db-user',
    host: 'localhost',
    database: 'your-db-name',
    password: 'your-db-password',
    port: 5432,
});

export const query = (text, params) => pool.query(text, params);