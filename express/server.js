'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser);
app.post('/login',, (req, res) => {
  res.send({
    token: 'test123'
  });
});

module.exports.handler = serverless(app);