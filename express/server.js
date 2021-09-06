'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.post('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

module.exports.handler = serverless(app);