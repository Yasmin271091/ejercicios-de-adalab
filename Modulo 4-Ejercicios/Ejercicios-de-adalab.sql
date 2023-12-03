CREATE DATABASE productos;

USE productos;

CREATE TABLE products(
	id int not null AUTO_INCREMENT primary key,
	nombre varchar(128) not null,
    tipo varchar(45) not null,
    precio float not null,
    cantidad int,
    descripcion varchar(128)
    
);