// Fichero src/component/App.js
import { useEffect, useState } from "react";
import "../styles/App.scss";

import getDataFromApi from "../services/api";
import ls from "../services/localStorage";
import UsersList from "./UsersList";
import Filters from "./Filters";

const App = () => {
  const [users, setUsers] = useState(ls.get("users", []));
  const [nameFilter, setNameFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");

  useEffect(() => {
    // const dataLS = ls.get("users", null);
    if (users.length === 0) {
      getDataFromApi().then((cleanData) => {
        setUsers(cleanData);
        ls.set("users", cleanData);
      });
    }
  }, []);

  const handleChange = (value) => {
    setNameFilter(value);
  };

  const handleChangeCountry = (value) => {
    setCountryFilter(value);
  };

  const filteredUsers = users
    .filter((user) => user.name.toLowerCase().includes(nameFilter))
    .filter((item) => {
      if (countryFilter === "") {
        return true;
      } else {
        return countryFilter === item.country;
      }
    });

  
  console.log(countries);
  //Limpiar un listado para eu los valores sean uúnicos

  const getCountries = () =>{
    const countries = users.map((user) => user.country);//array solo los paises
    //Set: creo un  listado y me quedo con los valores que son unicos
    const uniquesContries = new Set(countries);
    const uniqueArray = [...uniquesContries];
    return uniqueArray;

  }
  const getCities = () =>{
    const cities = users.map((user) => user.city);
    const uniqueCities = new Set(cities);
    const uniqueArray = [...uniqueCities];
    return uniqueArray;
  }

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title title--big">Linkedin</h1>
        <img
          className="header--logo"
          src="https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png"
          alt="Adalab logo"
        />
      </header>
      <main className="main">
        <Filters
          nameFilter={nameFilter}
          handleChange={handleChange}
          countryFilter={countryFilter}
          handleChangeCountry={handleChangeCountry}
          countries={countries}
        />

        <section className="contacts">
          <h2 className="contacts__title title--medium">Lista de contactos</h2>
          <UsersList users={filteredUsers} />
        </section>
      </main>
    </div>
  );
};

export default App;