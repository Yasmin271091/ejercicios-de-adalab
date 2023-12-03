'use strict';

document.querySelector('h1').innerHTML = '¡Hola mundo!';

const age = 19;
const nameUser = 'anacleta';

console.log ('Hola mundo')
console.log(age);

const titleElement = document.querySelector ('h1');

console.log(titleElement);

titleElement.innerHTML = titleElement.innerHTML + nameUser;

const divElement = document.querySelector('.js_container');

divElement.innerHTML = '<p> esto es un parrafo </p>';
divElement.innerHTML =
    divElement.innerHTML + '<p>este es el segundo parrafo</p>';

divElement.classList.add('pink');

const btnElement = document.querySelector('.js_btn');
btnElement.classList.remove('btn');

const num = 15;
constnum2 = 25;


const result = num + num2;

const p = document.querySelector(js_p)
console.log(result);

p.innerHTML = result;


