import './Highlights.css';
import Card from '../Card/Card';

import salad from '../../images/greek salad.jpg';
import lemon from '../../images/lemon dessert.jpg';
import bruchetta from '../../images/Bruchetta.png';

const Highlights = () => {
  return (
    <section className="highlights grid-container">
      <div className="title">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        <Card
          src={salad}
          title="Greek salad"
          price="12.99"
          description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
        />
        <Card
          src={bruchetta}
          title="Bruchetta"
          price="5.99"
          description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
        />
        <Card
          src={lemon}
          title="Lemon Dessert"
          price="5.00"
          description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </div>
    </section>
  );
};

export default Highlights;
