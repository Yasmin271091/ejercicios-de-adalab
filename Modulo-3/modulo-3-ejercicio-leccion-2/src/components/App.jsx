// Fichero src/components/App.jsx

import React, { useState } from 'react';
import '../styles/App.scss';

/*const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const renderDarkModeText = () => {
    if (darkMode) {
      return <p>Tienes activado el dark mode</p>;
    }
    return null;
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={toggleDarkMode}>Des/activar el dark mode</button>
      {renderDarkModeText()}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        venenatis odio in felis feugiat ultricies. Nunc nec massa quam.
      </p>
    </div>
  );
};*/
function App() {

const [mode,setMode] = useState('dark');
const [mode2,setMode2] = useState(true);//true: significa que esta oscuro
const [text, setText] =useState('tienes activado el dark mode');
const handleClick = (event) => {
  setMode('light');
  setMode2(!mode2);
  setText('');
};

const renderDarkModeText = () => {
if(mode==='dark') {
  return "tienes activado el dark mode";
}else{
  return null;
}
};

return (
  <div className={mode2 ?'dark':'light'}>
    <button onClick={handleClick}>Des/activar el dark mode</button>
    <p>{renderDarkModeText()}</p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
      venenatis odio in felis feugiat ultricies. Nunc nec massa quam.
    </p>
  </div>
);
};

export default App;
