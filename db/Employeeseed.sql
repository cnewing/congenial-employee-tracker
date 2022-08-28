-- D E P A R T M E N T  N A M E S
INSERT INTO department(department_name)
VALUES
    ("Marketing"), 
    ("Engineering"), 
    ("HR"), 
    ("CS");

-- R O L E S , S A L A R I E S , &  D E P T  I D 
INSERT INTO role(title, salary, department_id)
VALUES
    ("Email Developer",80000, 3), 
    ("Graphic Designer",55000, 3), 
    ("Senior Engineer", 120000, 2), 
    ("Software Engineer",90000, 2), 
    ("HR Manager", 75000, 1), 
    ("Customer Service Representative", 45000, 4),
    ("Customer Service Manager", 60000, 4),
    ("HR Assistant", 50000, 1);

-- E M P L O Y E E S , R O L E S, &  M A N A G E R  I D
INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
("Shawna", "Moore", 1, null),
("Tiffany", "Newton", 1,),
("Mars", "Blackmon", 4),
("Greer", "Childs", 4,null),
("Jamie", "Overstreet", 2, null),
("Opal", "Gray", 2),
("Christa", "Newing", 3)
("Nola", "Darling", 3