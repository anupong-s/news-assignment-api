const mysql = require('mysql');
import env from './env';

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : env.DB_HOST,
  user            : env.DB_USERNAME,
  password        : env.DB_PASSWORD,
  database        : env.DB_DB
});

module.exports = {
  pool
}