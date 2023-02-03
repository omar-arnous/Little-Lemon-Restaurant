import Logo from '../../images/Logo-2.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="grid-container">
        <img src={Logo} alt="Logo.png" />
        <div className="footer-nav">
          <h3>Doormat Navigation</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">menu</a>
            </li>
            <li>
              <a href="#">Reservations</a>
            </li>
            <li>
              <a href="#">Order Online</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#">Adress</a>
            </li>
            <li>
              <a href="#">phone number</a>
            </li>
            <li>
              <a href="#">email</a>
            </li>
          </ul>
        </div>
        <div className="social-media">
          <h3>Social Media Links</h3>
          <ul>
            <li>
              <a href="#">Adress</a>
            </li>
            <li>
              <a href="#">phone number</a>
            </li>
            <li>
              <a href="#">email</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
