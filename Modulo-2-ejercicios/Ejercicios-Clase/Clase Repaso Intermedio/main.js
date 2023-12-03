/*
1-crear estructura HTML--Boton, select, parrafo.
2-dar clases de js, js-btn...
3-crear los constantes.
4-eventos y funciones manejadoras--click, para el boton update.
    -Recoger el nuevo estado del select.

    const value=select.value;
    parrafo.innerHTML =value;

    -Pintar color de fondo

    1-const numeroRandom = funcion numeroRandom;

    2-validar si el nº es par o impar

    numeroRandom %2== 0 par
    numeroRandom %2 !== 0 impar

    3-cambiar la clase del main
    classList.add/remove
    */ 
"use strict";
///ELEMENTOS HTML///
const btn = document.querySelector('.js-btn');
const textFace = document.querySelector('.js-face');
const main = document.querySelector('.js-main');
const select = document.querySelector('.js-select');
 
///CREAR FUNCIONES Y EVENTOS//

function getRandomNumber(max){
    const randomNumber = parseInt(Math.random()*100);
    return randomNumber;
}

function changeFace(){
    const valueFace = select.value;
    textFace.innerHTML = valueFace;
}

function handleClick(){
    changeFace();

    const randomNumber = getRandomNumber(100);
    if(randomNumber %2 === 0){
        //PAR
        main.classList.add("yellow");
        main.classList.remove("orange");
    }else{
        //IMPAR
        main.classList.add("orange");
        main.classList.remove("yellow")
    }
    function handleClick(){
        changeFace();
        changeColor();
    }
}



btn.addEventListener('click', handleClick);