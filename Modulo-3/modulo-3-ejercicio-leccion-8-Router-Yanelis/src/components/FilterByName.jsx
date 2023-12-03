import React from "react";

const FilterByName = ({ nameFilter, handleChange }) => {
  const handleInput = (ev) => {
    handleChange(ev.target.value);
  };

  return (
    <>
      <label class="form__label display-block" for="search_name">
        Nombre:
        <input
          class="form__input-text"
          type="text"
          name="search_name"
          id="search_name"
          value={nameFilter}
          onChange={handleInput}
        />
      </label>
    </>
  );
};

export default FilterByName;