const orm = require('ormnomnom')

class Book {
  constructor ({id, title, publish_date, byline} = {}) {
    this.id = id
    this.title = title
    this.publishDate = publish_date
    this.byline = byline
  }
}

const BookObjects = orm(Book, {
  id: orm.joi.number(),
  title: orm.joi.string().required(),
  publish_date: orm.joi.date(),
  byline: orm.joi.string()
})

Book.objects = BookObjects

module.exports = Book
