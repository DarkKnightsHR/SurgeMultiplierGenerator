const mysql = require('mysql');
const Promise = require('bluebird');

module.exports = Promise.promisifyAll(mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'surgePricer'
}));
