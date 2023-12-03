'use strict';

            //CONSTANTES//
const buscarBtn = document.querySelector('.js-Btn');
const username = document.querySelector('.js-username');
const resultado = document.querySelector('.js-resultado');

            //FUNCIONES//
document.addEventListener('DOMContentLoaded', function() {
    buscarBtn.addEventListener('click', function() {
        const usernameValue = username.value;

    //En el username.value//si queremos que se levante la pagina con un usuario en concreto, podriamos 'yasmin271091'

        const url = `https://api.github.com/users/${usernameValue}`;

        fetch('https://api.github.com/users/yasmin271091')  
            .then(response => response.json())
            .then(data => {
                const resultadoHTML = `
                    <h2>${data.name}</h2>
                    <p>Número de repositorios: ${data.public_repos}</p>
                    <img src="${data.avatar_url}" alt="Avatar de ${data.name}">
                `;
                resultado.innerHTML = resultadoHTML;
            })
            .catch(error => {
                resultado.innerHTML = '<p>Error al cargar la información del usuario.</p>';
            });
    });
}); 
