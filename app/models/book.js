const orm = require('ormnomnom')

const Author = require('./author')

class Book {
  constructor ({id, title, publish_date, author, author_id} = {}) {
    this.id = id
    this.title = title
    this.publish_date = publish_date
    this.author = author
    this.author_id = author_id
  }
}

const BookObjects = orm(Book, {
  id: orm.joi.number(),
  title: orm.joi.string().required(),
  publish_date: orm.joi.date(),
  author: orm.fk(Author)
})

Book.objects = BookObjects

module.exports = Book
