const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error(`Error connecting to database: ${err}`);
  });

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
