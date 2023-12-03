import {useEffect, useState } from 'react';

const [list, setList] = useEffect ([]);

function App () {
  useEffect(function, [])

useEffect (()=> {
fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adamdb-v1/books_with_id.json")
.then ((response) => response.json())
.then((data) => {
  setList(data);
});
}, []);

const handleClick = () => {

}

return (
<>
<button onClick={handleClick}>Buscar personajes</button>


</>
);
}



/*const [serie, setSerie] = useState('');
const [results, setResults] = useState([]);


const CallToApi = () => {
  const fetchData = (serieSearch) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${serieSearch}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
  };

  const handleInputChange = (ev) => {
    const inputValue = ev.target.value;
    setSerie(inputValue);
    fetchData(inputValue);
  };

  return (
    <div>
      <h1>Buscador de Series</h1>
      <input
        type="text"
        value={serie}
        onChange={handleInputChange}
        placeholder="Buscar serie..."
      />
      <ul>
        {results.map((result) => (
          <li key={result.show.id}>{result.show.name}</li>
        ))}
      </ul>
    </div>
  );
};*/

export default CallToApi;

