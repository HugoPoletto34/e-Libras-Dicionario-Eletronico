const Pool=require('pg').Pool
require('dotenv/config')

const pool = new Pool({ 
    host: process.env.DB_HOST, 
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE, 
    port: 5432, 

}); 

module.exports = pool