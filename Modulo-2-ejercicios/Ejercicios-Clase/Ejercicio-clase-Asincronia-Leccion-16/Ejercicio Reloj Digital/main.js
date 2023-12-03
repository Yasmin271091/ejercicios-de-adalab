"use strict";

/*
1-Traer los span para la hora, min y seg
2-Obtener la hora del sistema DATE
3-PINTAR en pantalla los datos-->renderTime()
4-Cambiar los datos de hra, min y seg
5-Volver a pintar los datos -->renderTime()
*/

const renderTime = document.querySelector("js-main");
const hoursBox = document.querySelectorAll("js-hours");
const minutesBox = document.querySelectorAll("js-minutes");
const secondsBox = document.querySelectorAll("js-seconds");
const btnStart = document.querySelector("js-start-buttom");
const btnStop = document.querySelector("js-stop-buttom");

const now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

function renderTime() {
  hoursBox.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesBox.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsBox.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

renderTime();
const updateTime = () => {
  if (seconds >= 59) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  if (hours >= 23) {
    hours = 0;
  }
  renderTime();
};
let clockInterval = setInterval(updateTime, 1000);

function handelClickStart() {
  clearInterval(clockInterval);
  btnStart.classList.add("hidden");
  btnStop.classList.remove("hidden");
}

function handelClickStop() {
  clockInterval = setInterval(updateTime, 1000);
  btnStart.classList.remove("hidden");
  btnStop.classList.add("hidden");
}

btnStart.addEventListener("click", handelClickStart);
btnStop.addEventListener("click", handelClickStop);
