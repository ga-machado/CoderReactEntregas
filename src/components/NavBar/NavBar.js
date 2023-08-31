import './NavBar.css';
import Logo from './Logo.png';
import CartWidget from '../CartWidget/CartWidget.js';
import ItemListContainer from '../ItemListContainer/ItemListContainer.js';


const NavBar = () =>{
  return (

    <div>
      <header className="header">
        <a className="header__logo" href="/">
          <img src={Logo} alt="Logo" width="100px" height="100px" />
        </a>
        <ul className="header__menu">
          <li className="header__menu-lista"><a href="01Home.html">Início</a></li>    
          <li className="header__menu-lista"><a href="02Kits.html">Kits</a></li>
          <li className="header__menu-lista"><a href="03Utilitarios.html">Utilitários</a></li>
          <li className="header__menu-lista"><a href="04Decorativos.html">Decorativos</a></li>
          <li className="header__menu-lista"><a href="05Contato.html">Contato</a></li>
          <CartWidget />
        </ul>
      </header>
    </div> 

  );
};

export default NavBar;