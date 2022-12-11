USE dnyf_users_db;

CREATE TABLE IF NOT EXISTS Users (
    uid varchar(50) NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    PRIMARY KEY (uid)
);

INSERT INTO Users (uid, first_name, last_name)
VALUES (1, "Test", "User");

INSERT INTO Users (uid, first_name, last_name)
VALUES (2, "User", "Name");

INSERT INTO Users (uid, first_name, last_name)
VALUES (3, "Example", "Person");

INSERT INTO Users (uid, first_name, last_name)
VALUES (4, "Rey", "Aparece");

INSERT INTO Users (uid, first_name, last_name)
VALUES (5, "Linus", "Torvalds");

INSERT INTO Users (uid, first_name, last_name)
VALUES (6, "People", "Person");

INSERT INTO Users (uid, first_name, last_name)
VALUES (7, "President", "Obama");

INSERT INTO Users (uid, first_name, last_name)
VALUES (8, "Jane", "Doe");

INSERT INTO Users (uid, first_name, last_name)
VALUES (9, "James", "Woods");

INSERT INTO Users (uid, first_name, last_name)
VALUES (10, "Tom", "Cruise");

INSERT INTO Users (uid, first_name, last_name)
VALUES (11, "Bell", "Graham");