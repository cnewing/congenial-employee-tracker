// R E Q U I R E  D E P E N D E N C I E S
const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const db = require("./db/connection");
const PORT = process.env.PORT || 4242;

// P O R T  &  S E R V E R
//           +
// E R R O R  M E S S A G E
connection.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to database! App listening on PORT: ${PORT}`);
  start();
});
