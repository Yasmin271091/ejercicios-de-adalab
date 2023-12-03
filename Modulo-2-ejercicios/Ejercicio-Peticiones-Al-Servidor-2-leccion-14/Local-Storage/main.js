"use strict";

const personName = document.querySelector(".js-input-name");
const personSurname = document.querySelector(".js-input-surname");
const formElement = document.querySelector(".js-text-form");
const textresult = document.querySelector(".js-text-result");

const importantPeople = [
  { name: "Yasmin", surname: "Jimenez Bravo" },

  { name: "Cristina", surname: "Rodriguez Garcia" },

  { name: "Ysabel", surname: "Valencia Rodriguez" },
];

function handleWrite(event) {
  event.preventDefault();
  const personNameValue = personName.value;
  const personSurnameValue = personSurname.value;

  textresult.innerHTML =
    `Nombre: ${personNameValue}` + `Apellido: ${personSurnameValue}`;
}

formElement.addEventListener('input', handleWrite);
