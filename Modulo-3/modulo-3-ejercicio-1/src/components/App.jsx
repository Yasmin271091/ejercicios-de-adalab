// Fichero src/components/App.jsx
import '../styles/App.scss';
import '../styles/Footer.scss';
import '../styles/Main.scss';
import reactLogo from '../images/react.svg';
import Header from './Header';
import Main from './Main';


function App() {
  const title="Componets y prps";
  return (
    <>
    <Header title={title} subtitle="Aprendiendo propsz"/>
    <Main/>
    <footer className="footer">
      <p className="ball">R</p>
      <p className="copy">&copy; 2023 Yasmin.</p>
      <img
  src={reactLogo}
  title="Página de Adalab"
  alt="Logo de Adalab"
/>
    </footer>
  </>
  );
}

export default App;