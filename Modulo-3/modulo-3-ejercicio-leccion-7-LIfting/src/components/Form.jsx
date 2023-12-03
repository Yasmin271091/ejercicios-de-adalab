// Form.js
import React from 'react';

const Form = ({ handleFormSubmit, children }) => {
  const handleForm = (ev) => {
    ev.preventDefault();
    handleFormSubmit();
  };

  return (
    <form className='form' onSubmit={handleForm}>
      {children}
    </form>
  );
};

export default Form;
