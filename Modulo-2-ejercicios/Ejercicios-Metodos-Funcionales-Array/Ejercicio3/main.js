/*1. Solo los premium
Seguimos con nuestra app de moda y vamos a utilizar el listado de usuarios del ejercicio 3. Gracias por confiar en nosotros. Pero ahora queremos tener un listado de usuarios (en un array premiumUsers) que solo tenga los usuarios premium. ¿Sabremos hacerlo con filter?*/
/*const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false},
  ];


const premiumUsers = users.filter ((user) => user.isPremium);

console.log(premiumUsers)*/

////////////////////////////////////////

/*Tenemos un listado de las contraseñas (PIN de 4 números) de los usuarios de nuestra web:
const pins = [2389, 2384, 2837, 5232, 8998];
De ese listado de contraseñas, queremos que solo puedan entrar los que han elegido una contraseña que es un número par para hacer A/B testing. ¿Nos ayudas a encontrar las contraseñas usando filter?
PISTA: Recuerda que el resto de la división entera (módulo %) de número par es 0.*/


/*const pins = [2389, 2384, 2837, 5232, 8998];

const testing = pins.filter((pin)=> pin % 2 === 0);

console.log(testing)*/
////////////////////////////////////

/*const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
  ];

const testing = users.filter((user)=> user.pin %2 ===0);

console.log(testing)*/


///////////////////////////
/*1. Encuentra el usuario
a) En nuestra aplicación de gestión de usuarios, nos ha llegado una incidencia asociada al PIN 5232. ¿Podrías encontrar el usuario que corresponde a ese PIN para poder contactarle? Usa el método find para conseguirlo.*/
const users = [
    { name: "María", isPremium: false, pin: 2389 },
    { name: "Lucía", isPremium: true, pin: 2384 },
    { name: "Susana", isPremium: true, pin: 2837 },
    { name: "Rocío", isPremium: false, pin: 5232 },
    { name: "Inmaculada", isPremium: false, pin: 8998 },
  ];

//const find = users.find((user)=> user.pin ===5232);

const baja = users.splice(3,1)

console.log(baja)

