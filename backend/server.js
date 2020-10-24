
const express = require('express')
const app = express()
const port = 9000
const InitiateMongoServer = require("./db");
/// Initiate Mongo DB Server Connection
InitiateMongoServer() // Initiate Mongo DB Server Connection

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
