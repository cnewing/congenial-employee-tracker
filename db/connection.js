const mysql = require("mysql2");

const db = mysql.generateConnection({
  host: "localhost",
  port: "4242",
  user: "root",
  password: "4242",
  database: "empTracker_DB",
});

module.exports = db;
