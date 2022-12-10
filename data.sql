USE dnyf_users_db;
DROP TABLE IF EXISTS Users;

CREATE TABLE IF NOT EXISTS Users (
    uid varchar(50) NOT NULL,
    first_name varchar(50) NOT NULL,
    last_name varchar(50) NOT NULL,
    PRIMARY KEY (uid)
);

INSERT INTO Users (uid, first_name, last_name)
VALUES ("sample1", "Jane", "Woods");

INSERT INTO Users (uid, first_name, last_name)
VALUES ("sample2", "Tom", "Cruise");

INSERT INTO Users (uid, first_name, last_name)
VALUES ("sample3", "Don", "Berg");
