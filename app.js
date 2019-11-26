const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const studentRoute = require('./routes/students');
app.use('/students',studentRoute);

module.exports = app;