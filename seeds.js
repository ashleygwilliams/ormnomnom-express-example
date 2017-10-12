require('dotenv').config()
require('./db')

const Book = require('./app/models/book')
const Author = require('./app/models/author')

Book.objects.create({
  title: 'The Phantom Tollbooth',
  author_id: 1,
  publish_date: new Date(1961)
})

Book.objects.create({
  title: 'Republic',
  author_id: 2,
  publish_date: new Date(514)
})

Author.objects.create({
  first_name: 'Norton',
  last_name: 'Juster'
})

Author.objects.create({
  last_name: 'Plato'
})
