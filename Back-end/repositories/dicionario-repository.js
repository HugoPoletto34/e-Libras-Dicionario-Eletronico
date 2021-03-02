const pool = require('../db');

exports.FindAllWords = async() => (await pool.query('SELECT * FROM Palavras')).rows;