import restaurantFood from '../../images/restauranfood.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero grid-container">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <img src={restaurantFood} alt="hero-img" />
    </section>
  );
};

export default Hero;
