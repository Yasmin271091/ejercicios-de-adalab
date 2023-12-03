"use strict";

//pintar un listado de personajes de marvel, nombre

/*
1.-obtener los datos del servidor
2.-aplicar un map
3.-guardar los datos en el Lstorage
4.-pintar en el html
*/
const ulElement = document.querySelector("js-list");
let characters = [];

function getDataApi() {
  fetch(
    "https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&apikey=<KEY>"
  )
    .then((response) => response.json())
    .then((info) => {
      characters = info.data.results.map((eachCharacter) => ({
        id: eachCharacter.id,
        name: eachCharacter.name,
        image: eachCharacter.thumbnail.path + ".jpg",
      }));
      localStorage.setItem("marvelCharacters", JSON.stringify(characters));
      console.log(characters);
    });
}


function render() {
  for (const char of characters) {
    ulElement.innerHTML += `<li>
    <img src="${char.image}" alt="${char.name}">
    <p>${char.name}</p>
    </li>`;
  }
}

const dataLocalStorage = JSON.parse(localStorage.getItem("marvelCharacters"));
if (dataLocalStorage !== null) {
  characters = dataLocalStorage;
  render();
}else{
    getDataApi();
}
