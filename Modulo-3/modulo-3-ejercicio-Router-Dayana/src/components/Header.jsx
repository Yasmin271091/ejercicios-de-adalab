import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header className="header">
      <h1 className="title--big">{props.title}</h1>
      <a
        className="header--logo"
        href="https://github.com/Adalab/ejercicios-en-clase-r/"
        title="Ir al repo del ejercicio"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="https://raw.githubusercontent.com/Adalab/resources/master/images/adalab-logo-32x32.png"
          alt="Adalab logo"
        />
      </a>
      <ul>
        <li> <Link to="/"> Inicio</Link></li>
        <li> <Link to="/about"> Nosotros</Link></li>
      </ul>
      <p> algo </p>
    </header>
  );
}

export default Header;