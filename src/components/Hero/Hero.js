import { useNavigate } from 'react-router-dom';

import restaurantFood from '../../images/restauranfood.jpg';
import './Hero.css';

const Hero = () => {
  const navigator = useNavigate();

  return (
    <section className="hero grid-container">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button onClick={() => navigator('/booking')}>Reserve a Table</button>
      </div>
      <img src={restaurantFood} alt="hero-img" />
    </section>
  );
};

export default Hero;
