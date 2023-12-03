"use strict";

//

const main = document.querySelector(".js-main");
const select = document.querySelector(".js-select");
const botonUpdate = document.querySelector(".js-btn");
const face = document.querySelector(".js-face");
//Funciones
function numberRandom(max) {
  const getNumberRandom = Math.round(Math.random()* max);
  

  return getNumberRandom;
  console.log(getNumberRandom);
}
function changeFace() {
  const valueFace = select.value;
  face.innerHTML = valueFace;
}
function changeColor(){
    const getNumberRandom = numberRandom(100);
    console.log(getNumberRandom);
  if (getNumberRandom % 2 === 0) {
    main.classList.add("yellow");
    main.classList.remove("orange");
  } else {
    main.classList.add("orange");
    main.classList.remove("yelow");
  }
}
function handleClickUpdate(){
    changeColor();
    changeFace();
}
//Evento
botonUpdate.addEventListener('click', handleClickUpdate);
