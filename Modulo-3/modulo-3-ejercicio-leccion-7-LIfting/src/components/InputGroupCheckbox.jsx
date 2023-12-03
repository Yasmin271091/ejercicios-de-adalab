// InputGroupCheckbox.js
import React from "react";

const InputGroupCheckbox = ({ labelText, checked, handleChange }) => {
  const handleCheckboxChange = () => {
    handleChange(!checked);
  };

  return (
    <div className="input-group-checkbox">
      <label className="label-check" htmlFor="legalTerms">
        {labelText}
      </label>
      <input
        type="checkbox"
        name="legalTerms"
        id="legalTerms"
        checked={checked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};

export default InputGroupCheckbox;
