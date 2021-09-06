'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../Login.js')));
app.post('/login',, (req, res) => {
  res.send({
    token: 'test123'
  });
});

module.exports.handler = serverless(app);