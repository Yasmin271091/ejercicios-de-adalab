'use strict';

// post new user
document.querySelector('.js-btn-filter-users').addEventListener('click', () => {
  const inputFilter = document.querySelector('.js-input-filter');
  const filterValue = inputFilter.value;


document.querySelector('.js-btn-post-new-user').addEventListener('click', () => {
  const inputName = document.querySelector('.js-input-name');
  const inputEmail = document.querySelector('.js-input-email');
  const inputFilter = document.querySelector('.js-input-filter');

  // create query params

 

  const queryParams = `?userName=${inputName.value}&userEmail=${inputEmail.value}&filterByName=${filterValue}`;

  fetch('http://localhost:3000/user' + queryParams, { method: 'POST' })
    .then(response => response.json())
    .then(responseData => {
      console.log('Server response:', responseData);
      printJson('.js-filtered-users-result', responseData);
    });
});

// get users data

document.querySelector('.js-btn-get-users').addEventListener('click', () => {
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(responseData => {
      console.log('Server response:', responseData);
      printJson('.js-get-users-result', responseData);
    });
});

// helper

const printJson = (selector, jsonData) => {
  const jsonHtml = JSON.stringify(jsonData, null, 2);
  document.querySelector(selector).innerHTML = jsonHtml;
};
});