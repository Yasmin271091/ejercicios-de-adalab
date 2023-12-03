'use script';

for (let i=1; i <= 10; i++){
    console.log(i);
}
const selectElement = document.querySelector('.js-products');

const products = ["camiseta","abrigo","vestido","short"];
//BUCLE FOR
for (let i=0; i < products.length; i++){
    selectElement.innerHTML += `<option>${products[i]}</option>`;
}

//BUCLE FOR...OF

const pets = [
    {name: 'luna', owner:'maria'},
    {name:'grecia', owner:'ana'},
    {name:'quinoa',owner:'petra'},
    {name:'choco', owner: 'sofia'},
    ];

for(const pet of pets){
    console.log(`La madre de ${pet.name} es ${pet.owner}`);
}

//BUCLE FOR...IN

const person ={
    name: 'yasmin',
    lastname: 'jimenez',
    age: 32,
};

console.log (person.name)

for (const item in person){
    console.log(person(item));
}

///////////EJERCICIO////////////
const pElement = document.querySelector('.js-result');
const notas= [10,5,6,9,3,2,1,8,7,6];

/*
1-sacar la media de notas
2-cuantas han suspendido
3-cuantas has aprobado
*/ 
function calculaNota(notas){
    let aprobadas = 0;
    let suma = 0;
    for (let i=0; i < notas.length; i++){
        suma += notas[i];
        if (notas[i] >=5){
            aprobadas++;
        } else{
            suspensas++;
        }  
    }
    const media = suma/notas.length;
    /*console.log (suma);
    console.log(media);*/

    pElement.innerHTML = `La media de nota es ${media}`;
    console.log (`El total de aprobadas es ${aprobadas}`);
    console.log(`El total de suspensas es ${suspensas}`);
}

calculaNota(notas);