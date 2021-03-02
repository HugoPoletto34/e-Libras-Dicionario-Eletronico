const pool = require('../db');

async function selectAll(nameTable)  {
    return (await pool.query(`SELECT * FROM ${nameTable}`)).rows
}

exports.FindAllWords = () => selectAll('Palavras');
