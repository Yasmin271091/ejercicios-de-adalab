//comparaciones---booleanos-->
//
if('anacleta'==='anacleta'){
    console.log('bienvenida ana')
}

const isWoman = true;

if(isWoman){
    console.log('ES una chica muy fuerte')
}
//ademas de comparaciones, tambien variables con valor booleano.
/*
0-3-->guarderia
3-6-->infantil
7-12-->primaria
13-16-->eso
16-18-->bachillerato
>18-->universidad o trabajar
*/

const age = document.querySelector('.js_age');
const result = document.querySelector('.js_p');

const ageValue = age.Value;

console.log(ageValue);

if(ageValue>18){
    result.innerHTML = 'universidad o trabajar';
}else if(ageValue < 0){
    result.innerHTML = 'el valor es incorrecto';
    if(!result.classList.contains("danger")){
        result.classList.add('danger');
    }

}else if(ageValue >= 0 && ageValue <= 3){
    result.innerHTML = 'guarderia';
}else if(ageValue <= 6){
    result.innerHTML = 'infantil';
}else if(ageValue <= 12){
    result.innerHTML = 'escuela primaria';
}else if(ageValue <= 16){
    result.innerHTML = 'eso';
}else {
    result.innerHTML = 'bachillerato';
}


