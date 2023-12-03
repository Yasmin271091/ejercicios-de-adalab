'use strict';

const titleInput = document.querySelector('.js-title');

//keyup,change,input

const handleInput = (ev) => {
    //obtengo el value del input
    //const value =tittleInput.value;
    const value = ev.target.value;
    console.log(value);
    localStorage.setItem("titleUser", value);
};
titleInput.addEventListener('input', handleInput);

///OBTENER EL VALOR DEL LOCAL STORAGE Y QUE SE QUEDE EN EL VALOR DE INPUT
function getLocalStorage() {
const localTitle = localStorage.getItem("titleUser");

if (localTitle !==null) {
    titleInput.value = localTitle;
}
//OPERADOR TERNARIO, ES IGUAL A CONDICIONAL

titleInput.value = localTitle!== null? localTitle :'';
}
//Si la condicion se cumple ?
//Si la condicion no se cumple :
getLocalStorage();