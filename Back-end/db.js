const Pool = require('pg').Pool
require('dotenv/config')

const isDevelopment = process.env.ISDEV == 1 ? false : true;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: isDevelopment
}); 
 
module.exports = pool