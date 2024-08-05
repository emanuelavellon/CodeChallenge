const { db } = require('../db');

class Student {
  
  static create(name, lastName, email, age, grade, callback) {
    const sql = 'INSERT INTO students (name, lastName, email, age, grade) VALUES (?, ?, ?, ?, ?)';
    db.run(sql, [name, lastName, email, age, grade], function(err) {
      callback(err, this.lastID);
    });
  }

  static getAll(callback) {
    const sql = 'SELECT * FROM students';
    db.all(sql, [], callback);
  }

  static getById(id, callback) {
    const sql = 'SELECT * FROM students WHERE id = ?';
    db.get(sql, [id], callback);
  }

  static update(id, name, lastName, email, age, grade, callback) {
    const sql = 'UPDATE students SET name = ?, lastName = ?, email = ?, age = ?, grade = ? WHERE id = ?';
    db.run(sql, [name, lastName, email, age, grade, id], callback);
  }

  static delete(id, callback) {
    const sql = 'DELETE FROM students WHERE id = ?';
    db.run(sql, [id], callback);
  }
}

module.exports = Student;