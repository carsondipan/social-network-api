const express = require('express')
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.port || 3001;
const app = express();

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server for ${activity} running on port ${PORT}!`);
    });
  });