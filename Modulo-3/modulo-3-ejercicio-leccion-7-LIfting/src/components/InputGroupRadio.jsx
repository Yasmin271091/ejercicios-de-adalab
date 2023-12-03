// InputGroupRadio.js
import React from "react";

const InputGroupRadio = ({ labelText, inputId, inputValue, checked, handleChange }) => {
  const handleRadioChange = () => {
    handleChange(inputValue);
  };

  return (
    <div className="input-group-radio">
      <label className="label-radio" htmlFor={inputId}>
        {labelText}
      </label>
      <input
        type="radio"
        name="paymentType"
        id={inputId}
        value={inputValue}
        checked={checked}
        onChange={handleRadioChange}
      />
    </div>
  );
};

export default InputGroupRadio;
