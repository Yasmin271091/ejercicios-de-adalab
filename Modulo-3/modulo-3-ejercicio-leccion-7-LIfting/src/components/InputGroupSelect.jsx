// InputGroupSelect.js
import React from "react";

const InputGroupSelect = ({ labelText, selectName, selectId, selectValue, handleChange }) => {
  const handleSelectChange = (ev) => {
    handleChange(ev.target.value);
  };

  return (
    <div className="input-group-select">
      <label className="label-text" htmlFor={selectId}>
        {labelText}
      </label>
      <select
        className="input-select"
        name={selectName}
        id={selectId}
        value={selectValue}
        onChange={handleSelectChange}
      >
        <option>España peninsular</option>
        <option>Islas Canarias</option>
        <option>Islas Baleares</option>
        <option>Ceuta</option>
        <option>Melilla</option>
      </select>
    </div>
  );
};

export default InputGroupSelect;
