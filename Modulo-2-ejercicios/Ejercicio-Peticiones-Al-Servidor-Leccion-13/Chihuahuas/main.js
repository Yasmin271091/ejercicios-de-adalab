'use strict';

const dogBtn = document.querySelector('.js-dog');
const chihuahuaBtn = document.querySelector('.js-chihuahua');
  

function getDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        const img = document.querySelector('.dog-image');
        img.src = data.message;
        img.alt = 'Un perro';
      });
  }
  
  function getChihuahua() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
      .then((response) => response.json())
      .then((data) => {
        const img = document.querySelector('.dog-image');
        img.src = data.message;
        img.alt = 'Un Chihuahua';
      });
  }
  
  
  dogBtn.addEventListener('click', getDogImage);
  chihuahuaBtn.addEventListener('click', getChihuahua);
  