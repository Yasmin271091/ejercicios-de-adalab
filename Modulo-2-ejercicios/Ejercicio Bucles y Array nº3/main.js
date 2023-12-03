"use strict";

/*ENUNCIADO

Hemos creado una aplicación para gestionar un listado de tareas: ¡somos gente muy ocupada! Para eso, hemos creado un objeto literal con el listado de tareas y su estado. Nuestra misión es:
Mostrar una frase que indique cuántas tareas hay.
Pintar todas las tareas en pantalla.
Tachar las ya realizadas.
Permitir marcar una tarea como 'completa' o 'incompleta'.
Vamos a partir de este array de datos en nuestro fichero JavaScript:
Veamos cómo afrontar un ejercicio de este tipo, dónde tenemos que unir muchos de los conceptos aprendidos hasta ahora, la organización es clave:
a) Vamos a por una tarea. Primero vamos a pintar una tarea, solo una, en una lista de HTML. A continuación vamos a preparar una clase que la modifique, de manera que si fuera una tarea completada completed: true, el texto aparezca tachado.
b) Listado de tareas. ¡Seguimos con nuestras tareas! Ahora vamos a pintar en pantalla todas la tareas que tenemos en el listado, cada una de las tareas completadas debe aparecer tachada.
c) Vamos a darle dinamismo. Ahora viene lo bueno: vamos a añadir la lógica necesaria para completar tareas. Para ello vamos a añadir un input de tipo checkbox al final de cada tarea que nos falte por completar. El checkbox de las tareas completadas debe aparecer marcado (checked). Además, cuando el usuario marque la tarea como completada marcando el checkbox, deben suceder varias cosas:
la tarea debe mostrarse como completada (tachada)
debemos modificar su estado (propiedad completed) en el array tasks.
d) Tareas totales. No nos podemos olvidar de los detalles. Añadamos por encima del listado de tareas una frase que diga: Tienes X tareas. Y completadas y Z por realizar. Cada vez que una tarea se marque/desmarque deberíamos actualizar esta información.*/

//PASOS//

/*1-Pintar el listado de tareas en el HTML.
2-Escuchar los eventos.


Cuando la usuaria realiza acciones en las tareas.
      1.-Al hacer Click sobre la tarea, tengo que cambiar la propiedad del checked del checkbox.
      2.-Cambiar la propiedad Completed de la Array.
      3.-Volver a pintar las tareas.
      4.- Volver a escuchar eventos.
      */

      'use strict';

      /*
      cuando carga la pagina
           1.- Pintar el listado de tareas en el HTML,  checkbox
           2.- Escuchar eventos sobre las tareas
      
      cuando la usuaria realiza acciones en las tareas
           1.- al click sobre la tarea, cambiar la propiedad checked del checkbox
           2.- cambiar la propiedad completed del array
           3.- volver pintar las tareas
           4.- volver a escuchar eventos
      */
      
      const tasks = [
        { name: 'Recoger setas en el campo', completed: true },
        { name: 'Comprar pilas', completed: true },
        { name: 'Poner una lavadora de blancos', completed: false },
        {
          name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
          completed: false,
        },
      ];
      const taskList = document.querySelector('.js-list');
      const total = document.querySelector('.js-count');
      const newArray = [];
      
      function handleClick(ev) {
        console.log('hice click en el checkbox');
        const index = ev.target.id;
        // id  del checkbox, que yo hice que coincidiera con la posición
        tasks[index].completed = !tasks[index].completed;
        // cambio el valor de la propiedad completed
        renderTaskList();
      
        newArray.push(tasks[index]); // findIndex --> indexOf (arrays, string, numeros)
        console.log(newArray);
      
        /*
        if(tasks[index].completed === true){
          tasks[index].completed= false;
        }else{
          tasks[index].completed = true;
        }*/
      }
      
      function listener() {
        const listCheckbox = document.querySelectorAll('.js-check');
        for (const eachCheck of listCheckbox) {
          eachCheck.addEventListener('click', handleClick);
        }
      }
      function renderCountTasks(taskCompleted, taskNoCompleted) {
        total.innerHTML = `Tiene ${tasks.length} tareas,${taskCompleted} completadas y ${taskNoCompleted} por realizar `;
      }
      
      function renderTaskList() {
        taskList.innerHTML = '';
        let taskCompleted = 0;
        let taskNoCompleted = 0;
      
        for (let i = 0; i < tasks.length; i++) {
          if (tasks[i].completed === true) {
            taskList.innerHTML += `<li class="crossout"> 
                  <input type= "checkbox"  class= "js-check"  id = "${i}" checked/>
                  <label> ${tasks[i].name} </label>
              </li>`;
            taskCompleted++;
          } else {
            taskList.innerHTML += `<li> 
                  <input type= "checkbox" class= "js-check" id = "${i}" />
                  <label> ${tasks[i].name} </label>
              </li>`;
            taskNoCompleted++;
          }
        }
      
        listener();
        renderCountTasks(taskCompleted, taskNoCompleted);
      }
      
      renderTaskList();