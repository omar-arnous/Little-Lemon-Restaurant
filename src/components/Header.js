import Nav from './Nav';

import logo from '../images/Logo.png';

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
