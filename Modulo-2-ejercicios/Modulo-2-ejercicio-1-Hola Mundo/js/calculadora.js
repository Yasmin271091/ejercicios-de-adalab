/* HTML
<body>
    <form action="">
        <input type="text" class="js_age"
        value="10"/>
    </form>
    <p class="js_p"></p>*/


const nota1 = document.querySelector('.js_input_nota1');
const nota2 = document.querySelector('.js_input_nota2');
const nota3 = document.querySelector('.js_input_nota3');

const resultSpan = document.querySelector('.js_result');

console.log(typeof nota1.value);

//convertir string a number

let totalSumaNotas = 0;

totalSumaNotas = parseFloat(nota1.value);
console.log(totalSumaNotas)

totalSumaNotas = totalSumaNotas + parseInt(nota2.value);

totalSumaNotas= totalSumaNotas + parseFloat(nota3.value);

const media = totalSumaNotas / 3;

resultSpan.innerHTML = media;

//hacer calculadora

'use strict';

const num1Input = document.querySelector('.js-num1');
const num2Input = document.querySelector('.js-num2');
const result = document.querySelector('.js-result');

const btnSubmit = document.querySelector('.js-btn-sun');

const btnReset = document.querySelector('.js-btn-rest');

btnSubmit.addEventListener('click', (event) =>{
    event.preventDefault();
    const num1Value = parseInt (num1Input.value);
    const num2value = parseInt(num2Input.value);
    const resultTotal = num1Value + num2value;
    console.log(resultTotal);
    result.innerHTML = resultTotal;
});

btnReset.addEventListener('click', (event) => {
    event.preventDefault();

    num1Input.value = "";
    num2Input.value = "";
    result.innerHTML = "";
})
