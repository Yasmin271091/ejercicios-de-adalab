'use strict';

console.log ('ready :)');
const num1Input = document.querySelector('.js-num1');
const num2Input = document.querySelector('.js-num2');
const result = document.querySelector('.js-result');
const btnSubmit = document.querySelector('.js-btn-sum');
const btnReset = document.querySelector('.js-btn-reset');
const btnDiv = document.querySelector('.js-btn-div');
//mouseover, keyup, scroll, drag o drop, input, change, blur, focus
btnSubmit.addEventListener('click', (event)=>{
    event.preventDefault();
    const num1Value = parseInt(num1Input.value);
    const num2Value = parseInt(num2Input.value);
    const resultTotal = num1Value + num2Value;
    console.log (resultTotal);
    result.innerHTML = resultTotal;
    if(result.classList.contains('red')){
        result.classList.remove('red');
    }
});
btnReset.addEventListener('click',(event)=>{
    event.preventDefault();
    num1Input.value = '';
    num2Input.value = '';
    result.innerHTML = '';
    result.classList.remove('red');
});
btnDiv.addEventListener('click', (event) => {
    event.preventDefault();
    const num1Value = parseFloat(num1Input.value);
    const num2Value = parseFloat(num2Input.value);
    if (num2Value === 0){
        result.classList.add('red');
        result.innerHTML= "No puedes dividir por 0";
    } else {
        const resultDiv = num1Value / num2Value;
        result.innerHTML = resultDiv;
        result.classList.remove('red');
        }
});