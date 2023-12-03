/*const fruits = ['uva', 'peras', 'manzanas', 'banana'];

fruits[4]="cereza";

console.log(fruits);
console.log(fruits.length);

const animales = [];
    animales[0]="elefante";
    animales[1]="jirafa";
    animales[2]="caballo";
    animales[4]="pulpo";
    animales[3]="serpiente";

    ///nº 3 se va a colocar en su sitio en console log.

const marvel = [
    {
        nombre: "thor", 
        power: "rayo", 
        pets:["luna","pepita"],
    },
    {
        nombre: "iron man", 
        power:"dinero", 
        pets:["titanio","diamante"],
    },
    {
        nombre: "viuda negra", 
        power: "venono", 
        pets:["minina","lola"],
    },
];
marvel[3]={
    nombre: "spider man", power: "araña",
};

console.log(marvel[0].pets(0));
console.log(marvel[0].pets(1));

const characters = marvel; ///no conviene hacerlo */



'use strict';

const listPets = [

];

const ul = document.querySelector('.js-list');
const btn = document.querySelector('js-btn');
const renderPet = ()=>{
    const li = `<li>
    <h2>${pet.name}</h2>
    <img src="${pet.image}"/>
    <p>${pet.addes.city}</p>
    </li>`
    return li;
}

const handleListPets = (event) => {
    event.preventDEfault();
    ul.innerHTML=renderPet(listPets[0]);
};


btn.addEventListener('click', handleListPets);





const lissPets  = [
    {
    name:
    edad:
    image:
    address: {
        city:
        zip:
    },
    },
]