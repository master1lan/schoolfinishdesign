const mysql = require("mysql2");

const config={
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "suxiaobai2014",
  database: "bishe",
      charset: "utf8mb4",
},database_name=config.database;
let pool = mysql.createPool({
  ...config,
  database: database_name,
});
let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
        });
        connection.release();
      }
    });
  });
};

module.exports = {
  query,
};
