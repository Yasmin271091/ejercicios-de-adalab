CREATE DATABASE IF NOT EXISTS colegio;

USE colegio;

CREATE TABLE Alumnas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    apellidos VARCHAR(100),
    edad INT,
    correo_electronico VARCHAR(100)
);

INSERT INTO Alumnas (nombre, apellidos, edad, correo_electronico) VALUES ('Ana', 'Pérez', 20, 'ana.perez@example.com');
INSERT INTO Alumnas (nombre, apellidos, edad, correo_electronico) VALUES ('Lucía', 'Gómez', 22, 'lucia.gomez@example.com');
INSERT INTO Alumnas (nombre, apellidos, edad, correo_electronico) VALUES ('Marta', 'Rodríguez', 19, 'marta.rodriguez@example.com');
INSERT INTO Alumnas (nombre, apellidos, edad, correo_electronico) VALUES ('Sofía', 'López', 21, 'sofia.lopez@example.com');


