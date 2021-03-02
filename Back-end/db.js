const Pool=require('pg').Pool
require('dotenv/config')
const dev = {
    user: process.env.DB_USERNAME, 
    host: process.env.DB_HOST, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE, 
    port: 5432    
}

const prod = {
    url: process.env.DATABASE_URL
}

const pool = new Pool(dev); 

module.exports = pool