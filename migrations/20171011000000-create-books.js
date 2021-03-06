var dbm = require('db-migrate')
var type = dbm.dataType

exports.up = function (db, callback) {
  db.createTable('books', {
    columns: {
      id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: type.STRING },
      publish_date: { type: type.DATE_TIME },
      author_id: { type: type.INTEGER }
    }
  }, callback)
}

exports.down = function (db, callback) {}
