import React from "react";

import FilterByName from "./FilterByName";
import FilterByCountry from "./FilterByCountry";

const Filters = ({
  nameFilter,
  handleChange,
  countryFilter,
  handleChangeCountry,
  countries,
}) => {
  return (
    <>
      <h2 class="filters__title title--medium">Filtrar por...</h2>
      <form class="filters">
        <FilterByName nameFilter={nameFilter} handleChange={handleChange} />
        <FilterByCountry
          countryFilter={countryFilter}
          handleChangeCountry={handleChangeCountry}
          countries={countries}
        />
      </form>
    </>
  );
};

export default Filters;