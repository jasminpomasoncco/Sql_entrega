const options = require('knex')({
    client: 'sqlite3', // or 'better-sqlite3'
    connection: {
      filename: "./mydb.sqlite"
    },
    useNulllAsDefault: true
  });
module.exports = options