-- Drops the burger_db if it exists currently --
DROP DATABASE IF EXISTS burger_db;
-- Creates the "burger_db" database --
CREATE DATABASE burger_db;

-- Makes it so all of the following code will affect burger_db --
USE burger_db;

CREATE TABLE burgers(
    -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
    id INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "name" which cannot contain null --
  burger_name VARCHAR(255) NOT NULL,
  -- Makes a boolean column called "devoured" which cannot contain null --
  devoured BOOLEAN DEFAULT false,
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY(id)
);