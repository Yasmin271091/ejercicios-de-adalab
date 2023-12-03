'use strick';

/*al hacer click boton del pop up debe ocultarse la seccion entera
*/


const popUp = document.querySelector('.js-popUp');
const btn = document.querySelector('.js-btn');

function handleClick(){
    //popUp.classList.toggle('hidden');
    popUp.classList.add('hidden');
}

btn.addEventListener('click', handleClick);

/* al hacer click en uno de los productos estos se añadan en la seccion del carrito*/

//el elemento qure tiene el listener -->ul-->current

//el elemento sobre el que ocurrio el evento -->li-->target

const ulList = document.querySelector('.js-list');
const order = document.querySelector('.js-order');

function addItemOrder(event){

    //el que tiene el addEventListener
    console.log(event.currentTarget);
    //target el elemnto sobre el que hice click
    console.log(event.target)

    const foodSelected = event.target.innerHTML += `<p>${foodSelected}</p>`;
}

ulList.addEventListener('click', addItemOrder);