const express = require('express')
const app = express()

const Book = require('./models/book')

app.get('/', function (req, res) {
  const msg = { 'message': 'hello' }
  res.send(msg)
})

app.get('/books', function (req, res) {
  Book.objects.all().then(books => {
    res.send(books)
  })
})

app.get('/books/:id', function (req, res) {
  Book.objects.get({
    id: req.params.id
  }).then(book => {
    res.send(book)
  })
  .catch(Book.objects.NotFound, res.status(404).send())
})

module.exports = app
