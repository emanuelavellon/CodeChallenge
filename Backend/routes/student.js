const express = require('express');
const router = express.Router();
const Student = require('../models/student');

router.get('/', (req, res) => {
  Student.getAll((err, students) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(students);
  });
});

router.post('/', (req, res) => {
  const { name, lastName, email, age, grade } = req.body;
  Student.create(name, lastName, email, age, grade, (err, id) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: id });
  });
});





router.get('/:id', (req, res) => {
  const id = req.params.id;
  Student.getById(id, (err, student) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (!student) {
      res.status(404).json({ error: 'Student not found' });
      return;
    }
    res.json(student);
  });
});


router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { name, lastName, email, age, grade } = req.body;
  Student.update(id, name, lastName, email, age, grade, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Student updated successfully' });
  });
});



router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Student.delete(id, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ message: 'Student deleted successfully' });
  });
});

module.exports = router;