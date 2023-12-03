
import { useState } from "react";
import "../styles/App.scss";
import data from "../services/movies.json";

function App() {
  const [listMovies, setListMovies] = useState(data);
  const [filterTitle, setFilterTitle] = useState("");
  const [titleMovie, setTitleMovie] = useState("");
  const [sypnosisMovie, setSypnosisMovie] = useState("");

  const renderMovies = () => {
    return listMovies
      .filter((eachMovie) =>
        eachMovie.title.toLowerCase().includes(filterTitle.toLowerCase())
      )
      .map((eachMovie) => (
        <li key={eachMovie.id}>
          <article>
            <h3>{eachMovie.title}</h3>
            <p>{eachMovie.synopsis}</p>
            <ul>
              {eachMovie.categories.map((cat, index) => (
                <li key={index}>{cat}</li>
              ))}
            </ul>
          </article>
        </li>
      ));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleChangeTitle = (ev) => {
    setFilterTitle(ev.target.value);
  };

  const handleSypnosisMovie = (ev) => {
    setSypnosisMovie(ev.target.value);
  };

  const handleTitleMovie = (ev) => {
    setTitleMovie(ev.target.value);
  };

  const handleClick = (ev) => {
    const newMovie = {
      id: "d7e4fcf9-9cd0-4a0c-be8d-8bd03a096d5", //uuid
      title: titleMovie,
      synopsis: sypnosisMovie,
      categories: ["Drama", "Romántico"],
    };

    //clonar el listado (spread operator) y luego hacer un push, y un set

    // usar directamente el spread operator para añadir  y hacer set
    setListMovies([newMovie, ...listMovies]);
  };

  return (
    <>
      <header>
        <h1>Listado de Peliculas</h1>
      </header>
      <main>
        <section>
          <h2>Buscador</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Buscar por título"
              onChange={handleChangeTitle}
              value={filterTitle}
            />
          </form>
        </section>
        <section>
          <h2>Añadir</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Titulo"
              value={titleMovie}
              onChange={handleTitleMovie}
            />
            <input
              type="text"
              placeholder="Sypnosis"
              value={sypnosisMovie}
              onChange={handleSypnosisMovie}
            />
            <button onClick={handleClick}>Añadir</button>
          </form>
        </section>
        <section>
          <h2>Lista</h2>
          {renderMovies().length === 0 ? (
            <p>No hay elementos</p>
          ) : (
            <ul>{renderMovies()}</ul>
          )}
        </section>
      </main>
    </>
  );
}

export default App;