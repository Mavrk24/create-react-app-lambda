"use strict"
const express = require("express")
const serverless = require("serverless-http")
const app = express()
const bodyParser = require("body-parser")
const router = express.Router()

app.use(bodyParser.json())
app.use("/.netlify/functions/server", router) // path must route to lambda
app.use("/", router)


router.use('/login', (req, res) => {
    res.send({
      token: 'test123'
    });
  });
  
app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
  


module.exports = app
module.exports.handler = serverless(app)