var dbm = require('db-migrate')
var type = dbm.dataType

exports.up = function (db, callback) {
  db.createTable('books', {
    columns: {
      id: { type: type.INTEGER },
      title: { type: type.STRING },
      publish_date: { type: type.DATE_TIME },
      author: { type: type.STRING }
    }
  }, callback)
}

exports.down = function (db, callback) {}
