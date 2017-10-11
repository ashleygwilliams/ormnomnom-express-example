const express = require('express')
const app = express()

app.get('/', function (request, response) {
  const msg = { 'message': 'hello' }
  response.send(msg)
})

module.exports = app
