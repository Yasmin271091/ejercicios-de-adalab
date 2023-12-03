// Voy a pedir a la usuaria la edad y el nombre
//devolver un mensaje que indique "bienvenida x"

/* 
1- crear en html el fomulario (edad, nonbre), crear un p para la respuesta.
2-Selecciono cada immput en JS 

        document.querySelector
3-con innerHTML reelleno el parrafo con el mensaje.

*/

const age = document.querySelector('.js_age');

if (age.value === ""){
        p.classList.add('hidden');
}

if (age.value>= 18){
        console.log('bienvenido puedes entrar');
        p.innerHTML = 'bienvenido puedes entrar';
}else{
        console.logç('Debes esperar unos añitos');
        p.innerHTML = 'Debes esperar unos añitos';
}

