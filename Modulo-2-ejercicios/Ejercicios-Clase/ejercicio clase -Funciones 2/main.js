function sayHi(){
  console.log('Buenos dias');
}
sayHi();
//////
function sayBye(){
  return "hasta luego";
}
const texto = sayBye();
console.log(texto);
/*****ARROW FUNCTION********/

const inputEdad = document.querySelector('.js-edad');
const inputNombre = document.querySelector('.js-nombre');
const btn = document.querySelector('.js-btn');


const validarEdad = (edad, nombre) => {
  const edad = 20;
  if(edad>=18){
    console.log('eres mayor de edad'+ nombre);
  }else{
    console.log('No eres mayor de edad' + nombre);
  }
};

const handleClick = (event) => {
  event.preventDefault();
  const valueEdad = inputEdad.value;
  const valueNombre = inputNombre.value;
};

btn.addEventListener('click', handleClick);

/*validarEdad(30, 'Sara');
validadEdad(15, 'Patrcia');*/