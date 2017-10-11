const express = require('express')
const app = express()

const BookObjects = require('./models/book').BookObjects

app.get('/', function (req, res) {
  const msg = { 'message': 'hello' }
  res.send(msg)
})

app.get('/books', function (req, res) {
  BookObjects.all().then(books => {
    res.send(books)
  })
})

app.get('/books/:id', function (req, res) {
  BookObjects.get({
    id: req.params.id
  }).then(book => {
    res.send(book)
  })
  .catch(BookObjects.NotFound, res.status(404).send())
})

module.exports = app
