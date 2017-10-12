const express = require('express')
const app = express()

const Book = require('./models/book')
const Author = require('./models/author')

app.get('/', function (req, res) {
  const msg = { 'routes': [
    '/books',
    '/books/:id',
    '/authors',
    '/authors/:id'
  ]}
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
})

app.get('/authors', function (req, res) {
  Author.objects.all().then(authors => {
    res.send(authors)
  })
})

app.get('/authors/:id', function (req, res) {
  Author.objects.get({
    id: req.params.id
  }).then(author => {
    res.send(author)
  })
})

module.exports = app
