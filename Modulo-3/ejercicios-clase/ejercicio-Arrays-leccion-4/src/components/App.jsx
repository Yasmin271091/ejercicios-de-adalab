
/*import { useState } from 'react';



function App() {

  const [tasks, setTasks] = useState([
    {task: 'Comprar harina, jamón y pan rallado', completed: true},
    {task: 'Hacer croquetas ricas', completed: true},
    {task: 'Ir a la puerta de un gimnasio', completed: false},
    {
      task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio',
      completed: false
    }
  ]);

  const [searchTask, setSearchTask] = useState('');

  const renderTasks = () => {

    const filteredTasks = tasks.filter((task) =>
      task.task.toLowerCase().includes(searchTask.toLowerCase())
    );

    return filteredTasks.map((eachTask, index) => {

      return (<li key={index} id={index} onClick={handleClick}>
        <span className={eachTask.completed ? 'completed' : ''}>Tarea: {eachTask.task} </span>
        
        </li>
  
      );
    });
  };

  const handleSearchTask = (ev) => {
    setSearchTask(ev.target.value);
  };

  const handleClick = (event) => {
    const clickedTaskId = event.currentTarget.id;
    const updatedTasks = tasks.map((task, index) => {
      if (parseInt(clickedTaskId) === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;



  return (
  //html
   
  <>
  <h1> Mi lista de tareas</h1>

  <p>Tareas totales: {totalTasks}</p>
      <p>Tareas completadas: {completedTasks}</p>
      <p>Tareas pendientes: {pendingTasks}</p>

  <ol>{renderTasks()}</ol>

  <form action=""
  >
    <label htmlFor='searchName'>Buscar por nombre de tarea</label>
        <input
          type='text'
          id='searchTask'
          value={searchTask}
          onChange={handleSearchTask}
        />
  </form>

  </>
    
  );
}

export default App;
*/


///////EJERCICIO CLASE///
import { useState } from 'react';
import data from"../services/movies.json"

function App() {

const [listMovies,setListMovies] =useState(data);
const[filterTitle, setFilterTitle] = useState("");

const renderMovies =() => {
  return listMovies
  .filter{eachMovie} =>{
  .map((eachMovie) =>{
  <li key ={eachMovie.id}>
  <article>
    <h3>{eachMovie.title}</h3>
    <p>{eachMovie.sypnopsis}</p>
    {eachMovie.categories.map((cat,index)=> <li key={index}>{cat}</li>
    )
  }


const handleSubmit = (ev) => {
  ev.preventDefault();
};
const handleChangeTitle = (ev) =>{
  setFilterTitle(ev.target.value)
};

  </article>
 </li>
 );
};

  
return (
  <>
  <header>
    <h1>Listado de peliculas</h1>
  </header>
  <main>
    <section>
        <h2>BUscador</h2>
        <form onSumit="">
          <input>
          type="text"
          placeholder=" Buscar por titulo"
          onChange={handleChangeTitle}
          value={filterTitle}
          </input>




        </form>
        <ul>
          {renderMovies()}
        </ul>
    </section>
      
  </main>
  </>

);
}

export default App;