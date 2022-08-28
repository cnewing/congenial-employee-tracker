// R E Q U I R E  D E P E N D E N C I E S
const mysql = require("mysql");
const consoleTable = require("console.table");
const inquirer = require("inquirer");
const db = require("./db/connection");
const PORT = process.env.PORT || 4242;

// P O R T  &  S E R V E R
//           +
// E R R O R  M E S S A G E
db.connect(function (err) {
  if (err) throw err;
  console.log(`Connected to database! App listening on PORT: ${PORT}`);
});

// P R O M P T S
const prompt = () => {
  inquirer
    .prompt({
      type: "list",
      name: "options",
      message: "What would you like to do?",
      choices: [
        "Add Department",
        "Add Role",
        "Add Employee",
        "View Department",
        "View Role",
        "View Employee",
        "Update Employee Role",
        "Exit",
      ],
    })

    // A C T I O N S
    .then(({ action }) => {
      switch (action) {
        case "view all departments":
          return viewDepartments();
        case "view all roles":
          return viewRoles();
        case "view all employees":
          return viewEmployees();
        case "add a department":
          return addDepartment();
        case "add a role":
          return addRole();
        case "add an employee":
          return addEmployee();
        case "update an employee role":
          return updateEmployeeRole();
      }
    });
};

// V I E W
const viewDepartments = () => {
  const query = "SELECT * FROM department";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    prompt();
  });
};

const viewRoles = () => {
  const query = "SELECT * FROM role";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    prompt();
  });
};

const viewEmployees = () => {
  const query = "SELECT * FROM employee";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    prompt();
  });
};

// U P D A T E
const updateEmployeeRole = () => {
  const query = "SELECT id, first_name, last_name, role_id  FROM employee";
  db.query(query, function (err, res) {
    if (err) throw err;
    console.table(res);
    {
      inquirer.prompt({
        type: "input",
        message: "Which employee needs to be updated? (Use # from id section)",
        name: "employee",
      });
    }
  });
};

// A D D
const addDepartment = () => {
  inquirer
    .prompt({
      type: "input",
      message: "Add department name.",
      name: "department",
    })
    .then(function (res) {
      const department = res.department;
      const query = `INSERT INTO department (name) VALUES("${department}")`;
      db.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
};

const addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What role is this?",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary",
      },
      {
        type: "input",
        message: "What is the department ID for this role?",
        name: "departmentID",
      },
    ])
    .then(function (res) {
      const title = res.title;
      const salary = res.salary;
      const departmentID = res.departmentID;
      const query = `INSERT INTO role (title, salary, department_id) VALUE("${title}", "${salary}", "${departmentID}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        start();
      });
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the first name.",
        name: "firstName",
      },
      {
        type: "input",
        message: "Enter the last name.",
        name: "lastName",
      },
      {
        type: "input",
        message: "What is this employee's role ID?",
        name: "roleID",
      },
      {
        type: "input",
        message: "Enter the manager ID for this employee.",
        name: "managerID",
      },
    ])
    .then(function (res) {
      const firstName = res.firstName;
      const lastName = res.lastName;
      const roleID = res.roleID;
      const managerID = res.managerID;
      const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE("${firstName}", "${lastName}", "${roleID}", "${managerID}")`;
      connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res);
        prompt();
      });
    });
};
