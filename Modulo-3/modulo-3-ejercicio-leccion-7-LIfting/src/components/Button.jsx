
import React from "react";

const Button = ({ text, handleClick, disabled }) => {
  return (
    <button className={`button ${disabled ? "disabled" : ""}`} onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
