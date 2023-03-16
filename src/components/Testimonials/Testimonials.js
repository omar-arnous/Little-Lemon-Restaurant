import './Testimonials.css';

import Testimonial from './Testimonial';
import data from './data';

const Testimonials = () => {
  return (
    <section className="testimonials grid-container">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {data.map((item) => (
          <Testimonial
            key={item.id}
            name={item.name}
            text={item.text}
            imgUrl={item.imgUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
