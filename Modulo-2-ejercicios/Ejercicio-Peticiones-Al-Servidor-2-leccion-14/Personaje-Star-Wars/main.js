
'use strict';
console.log('hola');
/*
1- recoger el value del usuario. 
Cuando user escriba y pinche en buscar se muestre listado de personajes que coincidan con nombre y genero.
2. Se crea el fetch con las promesas.
3. Evento click btn
4. Pintar resultado en html 
*/
const people = document.querySelector('.js-people');
const btn = document.querySelector('.js-btn');
const nameCharacter = document.querySelector('.js-name');
const genderCharacter = document.querySelector('.js-gender');
let searchResult = {};
function getApiInfo() {
  const peopleValue = people.value;
  fetch(`https://swapi.py4e.com/api/people/?search=${peopleValue}`)
    .then((response) => response.json())
    .then((data) => {
      searchResult = data.results;
      searchResult.forEach((eachCharacter) => {
        nameCharacter.innerHTML = eachCharacter.name;
        genderCharacter.innerHTML = eachCharacter.gender;
      });
    });
}
function handleClick(ev) {
  ev.preventDefault();
  getApiInfo();
}
btn.addEventListener('click', handleClick);






