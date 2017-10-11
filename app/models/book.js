const orm = require('ormnomnom')

class Book {
  constructor ({id, title, publishDate, author} = {}) {
    this.id = id
    this.title = title
    this.publishDate = publishDate
    this.author = author
  }
}

const BookObjects = orm(Book, {
  id: orm.joi.number(),
  title: orm.joi.string().required(),
  publish_date: orm.joi.date(),
  author: orm.joi.string()
})

Book.objects = BookObjects

module.exports = Book
