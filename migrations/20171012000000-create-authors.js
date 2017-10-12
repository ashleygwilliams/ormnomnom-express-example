var dbm = require('db-migrate')
var type = dbm.dataType

exports.up = function (db, callback) {
  db.createTable('authors', {
    columns: {
      id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
      first_name: { type: type.STRING },
      last_name: { type: type.STRING }
    }
  }, callback)
}

exports.down = function (db, callback) {}
