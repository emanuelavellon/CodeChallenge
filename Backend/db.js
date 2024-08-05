const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:');

function init() {
  db.run(`CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    lastName TEXT,
    email TEXT,
    age INTEGER,
    grade TEXT
  )`);
}

module.exports = {
  init,
  db
};