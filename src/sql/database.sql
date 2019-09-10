CREATE DATABASE db_elaiss;

use db_elaiss;

CREATE TABLE users(
    id_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    telefona VARCHAR(10),
    data_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE users;

INSERT INTO (nombre, apellido, telefono) values("Leandro", "Roidzaid", "1551040420");

SELECT * FROM users;