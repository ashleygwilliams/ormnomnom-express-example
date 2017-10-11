'use strict'

module.exports = {
  dev: {
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    host: process.env.PGHOST,
    driver: 'pg'
  }
}
