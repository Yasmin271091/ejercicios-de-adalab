// Fichero src/components/App.jsx

import React, { useState } from 'react';
import '../styles/App.scss';

function App() {
const [classCss, setClassCss] = useState('');
const [textBtn, setTextBtn] = useState ('Ocultar imagen');
const [textInput, setTextInput] = useState('estoy escribiendo');

const handleClick = (event) => {
  if



};

return(
<>
  <button onClick ={handleClick}></button>
  <img className={classCss} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hola.com%2Fmascotas%2Fgaleria%2F20200911175064%2Fgatos-imagenes-curiosidades%2F1%2F&psig=AOvVaw1tnj8qE1Vb5no6mGkJpoEN&ust=1696922273826000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCOjT-Jy26IEDFQAAAAAdAAAAABAE"/>;
  <input type="text" onKeyUp={handleInput} value={textInput} />;
  <p>{textInput}</p>

</>

)


export default App;
