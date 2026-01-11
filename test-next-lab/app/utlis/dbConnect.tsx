// dbConnect.tsx
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'realio',
  password: 'sulphite', 
  port: 5432,
});

export default pool;