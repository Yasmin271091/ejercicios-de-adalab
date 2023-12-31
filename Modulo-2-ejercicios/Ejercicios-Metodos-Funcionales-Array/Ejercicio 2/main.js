/*Estamos creando una aplicación web, y lo primero que queremos hacer es saludar al usuario por su nombre, ¡como es debido! Tenemos un array con el listado de usuarios de nuestra aplicación const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada']; y queremos conseguir otro array con los saludos, por ejemplo, 'Bienvenida Yolanda'. ¿Podríamos usar map para que nos echase una mano?*/

"use strict";
/*const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];

const sayHello = names.map ((name => Bienevenida + name))

console.log(sayHello);*/

/////////////////////////////////////////

const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
  ];

const premium = users.map(user=> {
    if (user.isPremium){
        return `Bienvenida ${user.name} gracias por confiar en nosotros`;   
    }else{
        return`Bienvenida ${user.name}`
    }
});
console.log(premium);