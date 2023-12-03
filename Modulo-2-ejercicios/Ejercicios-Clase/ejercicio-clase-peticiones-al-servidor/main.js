'use strict';

let dataApi = {};
const listImg = document.querySelectorAll('.js-img');

console.log(1)

fetch('http://dog.ceo/api/breeds/image/random/3')
 .then(response => response.json())
 //response puede tener el nombre que queramos

 .then(data => {
   
    dataApi = data;
    for (const urlImage of dataApi.message) {
        listImg.innerHTML += `<img src= "${urlImage}" class="img"/>`;
    }
 });
 console.log(dataApi);

 console.log(3)


 //////////////////////////////////

 //http://swapi.py4e.com/api/people/?search=lu

 /*
 BUSCADOR DE PERSONAJES DE SW

 1-Constante par el imput, boton
 2- escuchar evento sobre el boton
 3- recogo el value del evento
 4-fetch ()*/

 const inputElement = document.querySelector('.js-search');
 const buttonElement = document.querySelector('.js-search-btn');
 const ulElement = document.querySelector('.js-characters');

 function handleButtonClick(ev) {
    ev.preventDefault();
    const searchValue = inputElement.value;
    fetch(`http://swapi.py4e.com/api/people/?search=${searchValue}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.result);
        for (const characters of data.result){
            ulElement.innerHTML = `<li>${character.name}</li>`;
        }
    });


 }
 buttonElement.addEventListener('click', handleButtonClick);