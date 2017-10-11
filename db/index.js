const Promise = require('bluebird')
const orm = require('ormnomnom')
const { Pool } = require('pg')

orm.setConnection(function () {
  const pool = new Pool()
  const deferred = Promise.defer()
  pool.connect((err, connection, release) => {
    if (err) {
      return deferred.reject(err.stack)
    }
    return deferred.resolve({ connection, release })
  })
  return deferred.promise
})
