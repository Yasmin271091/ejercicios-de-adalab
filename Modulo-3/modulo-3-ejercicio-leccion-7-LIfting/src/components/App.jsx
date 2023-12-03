import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Preview from "./Preview";
import InputGroupText from "./InputGroupText";
import InputGroupSelect from "./InputGroupSelect";
import InputGroupRadio from "./InputGroupRadio";
import InputGroupCheckbox from "./InputGroupCheckbox";
import Button from "./Button";
import Form from "./Form";

<HashRouter>
  <App />
</HashRouter>

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular");
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);

  const handleName = (value) => {
    setName(value);
  };

  const handleEmail = (value) => {
    setEmail(value);
  };

  const handleRegion = (value) => {
    setRegion(value);
  };

  const handlePaymentType = (value) => {
    setPaymentType(value);
  };

  const handleLegalTerms = (value) => {
    setLegalTerms(value);
  };

  const handleResetButton = () => {
    setName("");
    setEmail("");
    setRegion("España peninsular");
    setPaymentType("");
    setLegalTerms(false);
  };

  /*const handleForm = (ev) => {
    ev.preventDefault();
    console.log("Enviando datos al servidor...");
  };*/

  const isValidForm = () => {
    if (name !== "" && email !== "" && paymentType !== "" && legalTerms === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div>
      <Form handleFormSubmit={handleForm}>
        <h2>Rellena tus datos para finalizar la compra:</h2>

        <InputGroupText
          labelText="Escribe un nombre:"
          inputName="name"
          inputId="name"
          inputPlaceholder="María García"
          inputValue={name}
          handleChange={handleName}
          
        />
      
        <InputGroupText
          labelText="Escribe un email:"
          inputName="email"
          inputId="email"
          inputPlaceholder="mariagarcia@gmail.com"
          inputValue={email}
          handleChange={handleEmail}
        />

        <InputGroupSelect
          labelText="Indica tu región:"
          selectName="region"
          selectId="region"
          selectValue={region}
          handleChange={handleRegion}
        />

        <label className="label-text">Indica tu método de pago:</label>

        <InputGroupRadio
          labelText="Tarjeta de crédito"
          inputId="creditCard"
          inputValue="creditCard"
          checked={paymentType === "creditCard"}
          handleChange={handlePaymentType}
        />

        <InputGroupRadio
          labelText="Efectivo"
          inputId="cash"
          inputValue="cash"
          checked={paymentType === "cash"}
          handleChange={handlePaymentType}
        />

        <InputGroupRadio
          labelText="Contra reembolso"
          inputId="cashOnDelivery"
          inputValue="cashOnDelivery"
          checked={paymentType === "cashOnDelivery"}
          handleChange={handlePaymentType}
        />

        <InputGroupCheckbox
          labelText="Debes aceptar nuestros términos legales para completar la compra:"
          checked={legalTerms}
          handleChange={handleLegalTerms}
        />
      
        <Preview name={name} email={email} region={region} paymentType={paymentType} />

        <Button
          text="Enviar"
          handleClick={handleForm}
          disabled={!isValidForm()}
        />

        <Button
          text="Limpiar el formulario"
          handleClick={handleResetButton}
          disabled={false}
        />
      </Form>
    </div>
  );
};

export default App;
