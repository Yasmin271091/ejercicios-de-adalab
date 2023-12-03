// Fichero src/component/App.js
import Header from "./Header"
import "../styles/App.scss"
import { Route, Routes } from "react-router-dom";
import About from "./About";
import { useEffect, useState } from "react";
import Home from "./Home";
import ProductDetail from "./ProductDetail"

//https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adamdb-v1/books_with_id.json 
const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/adamdb-v1/books_with_id.json ")
      .then(response => response.json())
      .then(dataApi => {

        const cleanData = dataApi.map((product) => ({
          title: product.title,
          synopsis: product.synopsis,
          categories: product.categories,
          id: product.id
        }))

        setData(cleanData)
      })
  }, [])

  return (
    <div className="App page">

      <Header title=" Mis libros!" />

      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About titulo="Informacion de mis libros" />} />
        <Route path="/detail/:idproduct" element={<ProductDetail data={data} />} />
      </Routes>




    </div>
  );
};

export default App;