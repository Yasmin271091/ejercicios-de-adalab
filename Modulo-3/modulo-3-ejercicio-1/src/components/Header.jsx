import Link from './Link';

    function Header(props) {
        return (
        <header className='header'>
          <h1>{props.title}</h1>
        <nav>
          <ul className='menu-item-ul'>
          <Link
            text='Blog'
            title='Blog'
            href='https://adalab.es/blog/'
            type='menu'
            openInNewTab={true}
            />
        <Link
            text='Contacto'
            title='Contacto'
            href='https://adalab.es/contacto/'
            type='menu'
            openInNewTab={false}
        />
          </ul>
        </nav>
        </header>
    )
    }
    export default Header;