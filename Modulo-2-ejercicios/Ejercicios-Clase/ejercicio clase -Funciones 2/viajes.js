/*Si el destino-->
    ibiza---90%
    barcelona---20%
    vigo---50%
    sevilla---70%

    --descuento adicional
    Vigo con origen Madrid--20% adicional de descuento

    (todos los origenes diferentes de madrid no tienen descuento adicional)

    /*Lista tareas!!!!*/

    /*1.-REcoger las var, destino, origen, caha para respuesta, boton...

    2.- Escuchar evento sobre el boton, para recoger la info.
    3.-funcion para caluclar los descuentos
    4.-funcion para renderizar en el HTML*/


    const origen = document.querySelector('.js-origen');
    const destino = document.querySelector('.js-destino');
    const resultado = document.querySelector('.js-resultado');
    const btn = document.querySelector('.js-btn');


    const pintarResultado = (msj) =>{
        resultado.innerHTML =msj;
    }
    const calcularDescuento = (origen, destino) =>{

        if(destino === "Ibiza"){
            pintarResultado("90% de descuento");
        }else if(destino === "Barcelona"){
            pintarResultado("20% de descuento");
        }else if(destino === "Vigo"){
            if(origen === 'Madrid'){
                pintarResultado('50% + 20% descuento');
            }else{
            pintarResultado("50% de descuento");
            }
        }else{
            pintarResultado('70% de descuento');
        }
    };
    
    const handleClick = () => {
        const valueOrigen = origen.value;
        const valurDescuento = destino.value;
        calcularDescuento(valueOrigen, valueDestino);
    };

    btn.addEventListener('click', handleClick);