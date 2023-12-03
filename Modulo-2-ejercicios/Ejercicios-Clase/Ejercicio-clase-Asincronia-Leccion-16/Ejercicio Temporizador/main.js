'use strict';

const modal = document.querySelector('.js-newsletter');
const btnClose = document.querySelector('.js-close-btn');

const showModal = () => {
    modal.classList.remove('hidden');
};

setTimeout(showModal, 3000);

const hideModal = () => {
    modal.classList.add('hidden');
};

btnClose.addEventListener('click', hideModal);