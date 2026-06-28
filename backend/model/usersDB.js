const { Pool } = require('pg');
const env = require('dotenv')

env.config()

const pool = new Pool({
  user: process.env.DBUSER,         
  host: process.env.LOCALHOST,     
  database: process.env.DATABASE,   
  password: process.env.DBPASSWORD, 
  port: process.env.DATABASE_PORT,              
});


pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err.stack);
  } else {
    console.log('Connected to PostgreSQL database');
    release(); 
  }
});

module.exports = pool;
