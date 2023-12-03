//al hacer click en el boton debes escribir un mensaje en el parrafo.

/*1- definir las clases a la etiqueta HTML y las traera a JS.
2-añadir un evento al button.
3-escrbir en el parrafo el saludo.
*/

const btn = document.querySelector('.js-btn');
const p = document.querySelector('.js-p');
const divImg = document.querySelector('.js-img');
const nameImput = document.querySelector('.js-name');

function addImage(nameUser){
    const img = `<img src= "./images/pikachu.png alt="${nameUser}"/>`;
    divImg.innerHTML = img;
}

function handlerClick(){
    const valueName = nameImput.value;

    p.innerHTML = `Hola ${valueName} como estas?`;
    addImage(valueName);
}
btn.addEventListener('click', handlerClick);