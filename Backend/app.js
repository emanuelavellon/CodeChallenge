const express = require('express');
const bodyParser = require('body-parser');
const studentsRoutes = require('./routes/student');
const db = require('./db');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());


db.init();


app.use('/api/students', studentsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});