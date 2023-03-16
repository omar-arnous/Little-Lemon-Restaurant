import Nav from '../Nav';

import './Header.css';
import logo from '../../images/Logo.png';

const Header = () => {
  return (
    <div className="grid-container">
      <header>
        <img src={logo} alt="logo" className="logo" />
        <Nav />
        <a href="#side-drawer" className="menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </header>
      <aside id="side-drawer">
        <header>
          <a href="#" className="menu-btn">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </header>
        <Nav />
      </aside>
    </div>
  );
};

export default Header;
