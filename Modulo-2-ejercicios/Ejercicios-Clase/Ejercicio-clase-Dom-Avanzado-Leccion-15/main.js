'use strict';

const data = [
    {
        id: "123X",
        title: 'Title 1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus laborum, ullam pariatur ea iure ab aperiam reiciendis aliquam, accusamus rem accusantium sit, eveniet corrupti excepturi eligendi deleniti saepe quaerat?',
        img: 'https://picsum.photos/200/300',
        autor: 'Autor 1'
    },
    {
        id: "2567Y",
        title: 'Title 2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus laborum, ullam pariatur ea iure ab aperiam reiciendis aliquam, accusamus rem accusantium sit, eveniet corrupti excepturi eligendi deleniti saepe quaerat?',
        img: 'https://picsum.photos/200/300',
        autor: 'Autor 2'
    },
    {
        id: "378O",
        title: 'Title 3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatibus laborum, ullam pariatur ea iure ab aperiam reiciendis aliquam, accusamus rem accusantium sit, eveniet corrupti excepturi eligendi deleniti saepe quaerat?',
        img: 'https://picsum.photos/200/300',
        autor: 'Autor 3'
    },
];

const ulElement = document.querySelector('.js-list');
const gatosAdoptados = [];

function handleClick(event) {
    console.log(event.currentTarget);
    //console.log(event.currentTarget); el elemento sobre el que clicka la usuaria
    console.log(event.currentTarget.dataset.pepino);
    //console.log(event.currentTarget.dataset.pepino);
    ///////////////////////////////
    ////LISTA DE GATOS ADOPTADOS
    const clickedElement = event.currentTarget.dataset.idElement;
    const findCat = data.find((cat) => cat.id === clickedElement);
    gatosAdoptados.push(findCat);
    console.log(gatosAdoptados);
}
for (const item of data) {
    
    const liElement = document.createElement('li');
    liElement.dataset.autor = item.autor;
    liElement.dataset.idElement = item.id;
    liElement.addEventListener('click', handleClick);
    ulElement.appendChild(liElement);

    //-CRAER EL ARTICLE
    const articleElement = document.createElement('article');
    articleElement.setAttribute('class', 'card');
    //-CREAR LA IMAGEN
    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', item.img);
    imgElement.setAttribute('alt', 'gatitos');

    articleElement.appendChild(imgElement);
//-CREAR EL H3
    const h3Element = document.createElement('h3');
    const textContent = document.createTextNode(item.title);
    h3Element.appendChild(textH3);
    articleElement.appendChild(h3Element);

    //-CREAR EL P
    const pElement = document.createElement('p');
    pElement.textContent = item.desc;
    articleElement.appendChild(pElement);
}
