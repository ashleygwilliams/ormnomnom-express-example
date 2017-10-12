require('dotenv').config()
require('./db')

const Book = require('./app/models/book')

Book.objects.create({
  title: 'The Phantom Tollbooth',
  author: 'Norton Juster',
  publishDate: new Date(1961)
})
