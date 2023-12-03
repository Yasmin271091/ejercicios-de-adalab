import { useEffect, useState } from 'react';
import '../styles/App.scss';
//variables de estado

function App() {
  const [contactList, setContactList] = useState([]);
  const [nameSearch, setNameSearch] = useState('');
  const [newContact, setNewContact] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
  });

  const [error, setError] = useState ("");

  useEffect(() => {
    fetch(
      'https://beta.adalab.es/curso-intensivo-fullstack-recursos/apis/contacts-v1/contacts.json'
    )
      .then((response) => response.json())
      .then((data) => {
        setContactList(data);
      });
  }, []);

  const handleInputSearch = (ev) => {
    setNameSearch(ev.target.value);
  };

  const handleInputAdd = (ev) => {
    setNewContact({...newContact, [ev.target.id]: ev.target.value});
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleClick = () => {
    if(newContact.name === "" || newContact.lastName === "" || newContact.lastName === ""){
      setError("debe llenar nombre y apellido");
    }else{
      setContactList([...contactList, newContact]);
      setError("")
      newContact({
        name: "",
        lastName: "",
        phone: "",
        email:""
      })
    }
  };

  const renderContacts = () => {
    return contactList
      .filter((eachContact) =>
        eachContact.name.toLowerCase.includes(nameSearch.toLocaleLowerCase())
      )

      .map((eachContact) => (
        <li className='contact__item' key={i}>
          <p>
            Nombre: {eachContact.name} {eachContact.lastName}
          </p>
          <p>Telefono: {eachContact.phone}</p>
          <p>Telefono: {eachContact.email}</p>
        </li>
      ));
  };

  return (
    <div className='page'>
      {/* header */}
      <header className='header'>
        <h1 className='header__title'>Mi agenda de contactos</h1>
        <form onSubmit={handleSubmit}>
          <input
            className='header__search'
            autoComplete='off'
            type='search'
            name='search'
            value={nameSearch}
            placeholder='Filtrar contactos por nombre'
            onChange={handleInputSearch}
          />
        </form>
      </header>

      <main>
        {/* contact list */}
        <ul className='contact__list'>{renderContacts()}</ul>

        {/* new contact */}
        <form className='new-contact__form' onSubmit={handleSubmit}>
          <h2 className='new-contact__title'>Añade un nuevo contacto</h2>
          <input
            className='new-contact__input'
            type='text'
            name='name'
            id='name'
            value={newContact.name}
            placeholder='Nombre'
            onChange={handleInputAdd}
          />
          <input
            className='new-contact__input'
            type='text'
            name='lastname'
            id='lastname'
            value={newContact.lastName}
            placeholder='Apellidos'
            onChange={handleInputAdd}
          />
          <input
            className='new-contact__input'
            type='phone'
            name='phone'
            id='phone'
            value={newContact.phone}
            placeholder='Teléfono'
            onChange={handleInputAdd}
          />
          <input
            className='new-contact__input'
            type='email'
            name='email'
            id='email'
            value={newContact.email}
            placeholder='Email'
            onChange={handleInputAdd}
          />
          <input className='new-contact__btn' type='submit' value='Añadir' onClick={handleClick} />
        </form>
        <p>{error}</p>
      </main>
    </div>
  );
}

export default App;
