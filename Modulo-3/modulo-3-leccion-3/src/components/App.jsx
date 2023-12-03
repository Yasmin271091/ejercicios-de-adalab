// Fichero src/components/App.jsx


/*function App() {
  const [ingredientes, setIngredientes] = useState({
    macarrones: false,
    patatas: false,
    nueces: false,
    huevos: false,
    cebolla: false,
    cerveza: false,
  });

  const handleCheckboxChange = (nombre) => {
    setIngredientes({
      ...ingredientes,
      [nombre]: !ingredientes[nombre],
    });
  };

  const seleccionados = Object.keys(ingredientes).filter(
    (ingrediente) => ingredientes[ingrediente]
  );

  const mensaje =
    seleccionados.includes('patatas') &&
    seleccionados.includes('huevos') &&
    seleccionados.includes('cebolla') &&
    seleccionados.length === 3
      ? 'Eres una persona concebollista'
      : 'Eres un robot sin paladar';

  return (
    <div>
      <h1>Selecciona los ingredientes de la tortilla de patatas</h1>
      <form>
        {Object.keys(ingredientes).map((ingrediente) => (
          <div key={ingrediente}>
            <label>
              <input
                type="checkbox"
                checked={ingredientes[ingrediente]}
                onChange={() => handleCheckboxChange(ingrediente)}
              />
              {ingrediente.charAt(0).toUpperCase() + ingrediente.slice(1)}
            </label>
          </div>
        ))}
      </form>
      <p>{mensaje}</p>
    </div>
  );
}*/
/*function App () {
  const [text, setText]= useState ('');
  function handleText (event){
    const newText = event.target.value.replace(/[aeou]/g, 'i');
    setText(newText);
  }
return (
<div>
  <textarea name="" id="" cols="" rows="10" onChange={handleText}></textarea>
  <p>{text}</p>
  </div>
);
}
export default App;*/

// Fichero src/components/App.jsx
import React, { useState } from 'react';
const App = () => {
  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [operation, setOperation] = useState('Sumar');
  const handleNumberA = (ev) => {
    setNumberA(parseInt(ev.target.value));
  };
  const handleNumberB = (ev) => {
    setNumberB(parseInt(ev.target.value));
  };
  const handleOperationChange = (ev) => {
    setOperation(ev.target.value);
  };
  const handleReset = () => {
    setNumberA(0);
    setNumberB(0);
    setOperation('Sumar');
  };
  let result;
  if (operation === 'Sumar') {
    result = numberA + numberB;
  } else if (operation === 'Restar') {
    result = numberA - numberB;
  } else if (operation === 'Multiplicar') {
    result = numberA * numberB;
  } else if (operation === 'Dividir') {
    result = numberB !== 0 ? numberA / numberB : 'No se puede dividir por 0';
  }
  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <label>
          Operación:
          <select value={operation} onChange={handleOperationChange}>
            <option value="Sumar">Sumar</option>
            <option value="Restar">Restar</option>
            <option value="Multiplicar">Multiplicar</option>
            <option value="Dividir">Dividir</option>
          </select>
        </label>
        <label>
          Escribe un número:
          <input type="number" name="name" onChange={handleNumberA} value={numberA} />
        </label>
        <label>
          Escribe otro número:
          <input type="number" name="email" onChange={handleNumberB} value={numberB} />
        </label>
      </form>
      <p>
        El resultado de la operación {operation} entre <strong>{numberA}</strong> y <strong>{numberB}</strong> es{' '}
        <strong>{isNaN(result) ? 'Error' : result}</strong>.
      </p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};
export default App;
