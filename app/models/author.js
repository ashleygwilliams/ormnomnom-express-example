const orm = require('ormnomnom')

class Author {
  constructor ({id, first_name, last_name} = {}) {
    this.id = id
    this.first_name = first_name
    this.last_name = last_name
  }
}

const AuthorObjects = orm(Author, {
  id: orm.joi.number(),
  first_name: orm.joi.string(),
  last_name: orm.joi.string().required()
})

Author.objects = AuthorObjects

module.exports = Author
