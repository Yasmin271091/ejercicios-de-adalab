
import React from "react";
//creamos las props en la const Preview, y en APP
const Preview = ({ name, email, region, paymentType }) => {
  const renderPaymentTypeText = () => {
    if (paymentType === "creditCard") {
      return "Tarjeta de crédito";
    } else if (paymentType === "cash") {
      return "Efectivo";
    } else if (paymentType === "cashOnDelivery") {
      return "Contra reembolso";
    }
  };

  return (
    <div className="preview">
      <h2>Tus datos son:</h2>
      <ul>
        <li>Nombre: {name}</li>
        <li>Email: {email}</li>
        <li>Región: {region}</li>
        <li>Método de pago: {renderPaymentTypeText()}</li>
      </ul>
    </div>
  );
};

export default Preview;
