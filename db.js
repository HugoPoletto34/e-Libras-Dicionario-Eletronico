const Pool = require('pg').Pool
require('dotenv/config')

const devDataBase = {
    host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE, 
    port: 5432, 
}

const buildDataBase = {
    connectionString: process.env.DATABASE_URL,
    ssl: true
}

const pool = new Pool(buildDataBase); 

module.exports = pool