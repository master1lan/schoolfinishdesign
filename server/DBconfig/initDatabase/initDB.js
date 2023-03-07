const mysql = require("mysql2");

const config={
  host: "127.0.0.1",
  port: "3306",
  user: "root",
  password: "suxiaobai2014",
  database: "bishe",
      charset: "utf8mb4",
}

function once(func = null) {
  let fn = func;
  return function (...args) {
    if (fn) {
      fn.apply(this, args);
      fn = null;
      return true;
    }
    return false;
  };
}

let createDB = mysql.createConnection(config),
  INIT_DB = once(() => {
    createDB.connect((err) => {
      if (err) {
        throw err;
      }
      console.log(`连接mysql成功！\n现在开始创建目标数据库${config.database}`);
      createDB.query(
        "CREATE DATABASE IF NOT EXISTS `" + `${config.database}` + "`",
        (err, result) => {
          if (err) {
            throw err;
          }
          console.log(`mysql数据库${config.database}创建成功!\n接下面创建表...`);
          createDB.end();
        }
      );
    });
  });
INIT_DB();
