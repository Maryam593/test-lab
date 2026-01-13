import { Sequelize } from 'sequelize';
import pg from 'pg'; // Driver ko explicit import karein

const sequelize = new Sequelize(
  process.env.DB_NAME || 'database', 
  process.env.DB_USERNAME || 'username', 
  process.env.DB_PASSWORD || 'password', 
  {
    host: process.env.DB_LOCALHOST || 'localhost',
    dialect: 'postgres',
    dialectModule: pg, // Yeh line Next.js ke "pg package not found" error ko khatam karegi
    logging: console.log,
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    }
  }
);

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;