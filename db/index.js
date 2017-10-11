const Promise = require('bluebird')
const orm = require('ormnomnom')
const { Pool } = require('pg')

var pool = new Pool()

orm.setConnection(function () {
  const deferred = Promise.defer()
  pool.connect((err, connection, release) => {
    if (err) {
      return deferred.reject(err.stack)
    }
    return deferred.resolve({ connection, release })
  })
  return deferred.promise
})
