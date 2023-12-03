"use strict";

//traer el elemntos
const ulElement = document.querySelector(".js-palette");
const container = document.querySelector(".js-container");
const favorites = document.querySelector(".js-favorites");
const searchBtn = document.querySelector(".js-search-btn");

const url =
  "https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palette.json";
const url2 =
  "https://beta.adalab.es/ejercicios-de-los-materiales/js-ejercicio-de-paletas/data/palettes.json";
let paletteList = [];
let paletteFavorites = [];

const palleteLS = JSON.parse(localStorage.getItem("palettes")) || [];
if (palleteLS !== null) {
    paletteList = palleteLS;
    renderPaletteList(paletteList);


}


//1- Pintar una paleta: fetch, pintar en el HTML

fetch(url2)
  .then((response) => response.json())
  .then((dataAPI) => {
    paletteList = dataAPI.palettes;
    localStorage.setItem("palettes", JSON.stringify(paletteList));
    //funcion que pinta un listado
    renderPaletteList(dataAPI.palettes);
  });

function renderPalette(onePalette) {
  let html = " ";
  html += `<h2>${onePalette.name}</h2>`;
  html += `<ul id=${onePalette.id} class="palette js-palette">`;
  for (const color of onePalette.colors) {
    html += `<li><div class="palette__color" style="background-color:#${color}"></div></li >`;
  }
  html += `</ul>`;
  return html;
}
//recorre el listado de paletas y lo pinta usando renderPalette

function renderPaletteList(listPalettes) {
    container.innerHTML = " ";
  for (const onePalette of listPalettes) {
    container.innerHTML += renderPalette(onePalette);
  }
}
addEventListenerPalette();

function renderPaletteFavorites(paletteFavorites) {favorites.innerHTML = " ";

    for (const item of paletteFavorites) {
        favorites.innerHTML += renderPalette(item);
    }
}

//target al quien le estoy haciendo click
//currentTarget quien esta escuchando el evento 

/**********AÑADIR A FAVORITOS*************/
function handleClick(event) {
    const idPaletteClicked = event.currentTarget.id;
const foundPalette =   
  paletteList.find((item) => item.id === idPaletteClicked);
//comprobar si esta en la lista de favoritos
const indexFavorites = paletteFavorites.findIndex((item) => item.id === foundPalette.id);
//si no esta en la lista de favoritos, lo añade
if (indexFavorites === -1) {
  paletteFavorites.push(foundPalette);
}else {
    //si esta la /*****LA QUITO DE FAV******* */
    //splice: elimina el elemento de la lista de favoritos
    paletteFavorites.splice(indexFavorites, 1);
}
}
renderPaletteFavorites(paletteFavorites);


//2.- lista de paletas fav
function addEventListenerPalette() {
  const allpalettes = document.querySelectorAll(".js-pallette-one");
  for (const item of allpalettes) {
    item.addEventListener("click", handleClick);
  }
}

//Buscar la paleta por nombre

function handleSearch(event) {
  event.preventDefault();
  const searchValue = searchText.value;
  const filterPalette = paletteList.filter(item.name.toLowerCase().includes);
  renderPaletteList(filterPalette);
}
searchBtn.addEventListener("click", handleSearch);


