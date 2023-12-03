"use strict";

const htmlList = document.querySelector(".js_list");

let alumnasList = [];

async function loadData() {
  const response= await fetch ("(http://localhost:3000/api/alumnas");
  const data = await response.json();
  renderAlumnas();
  alumnasList =data
  }
  loadData();

  async function createAlumna() {
    const response= await fetch ("(http://localhost:3000/api/alumnas", {method: "POST",
  });
  }

function renderAlumnas() {
  let html = "";
  for (const item of alumnasList) {
    html += renderOne(item);
  }
  htmlList.innerHTML = html;
}

function renderOne(alumna) {
  const { nombre, apellidos, edad, correo_electronico } = alumna;

  return `
    <li class="card">
      <h2 class="card__title">${nombre}</h2>
      <p class="card__description">${apellidos}</p>
      <p class="card__title">${edad}€</p>
    <p class="card__title">${correo_electronico}€</p>

    </li>
  `;
}
