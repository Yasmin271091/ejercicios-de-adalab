import React from "react";

const FilterByCountry = ({ countryFilter, handleChangeCountry, countries }) => {
  const handleSelect = (ev) => {
    handleChangeCountry(ev.target.value);
  };

  const renderCountriesOptions = () => {
    return countries.map((country, index) => (
      <option key={index} value={country}>
        {country}
      </option>
    ));
  };

  return (
    <>
      {" "}
      <label class="form__label display-block" for="search_city">
        Pais:
        <select
          class="form__input-text"
          name="search_city"
          id="search_city"
          value={countryFilter}
          onChange={handleSelect}
        >
          <option selected value="">
            Todos
          </option>
          {renderCountriesOptions()}
        </select>
      </label>
    </>
  );
};

export default FilterByCountry;