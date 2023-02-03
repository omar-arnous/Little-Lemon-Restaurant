import rate from '../../images/star.svg';

const Testimonial = ({ name, imgUrl, text }) => {
  return (
    <article className="testimonial">
      <div className="rate-list">
        <span className="star fill">
          <img src={rate} alt="rate" className="rate" />
        </span>
        <span className="fill">
          <img src={rate} alt="rate" className="rate" />
        </span>
        <span className="fill">
          <img src={rate} alt="rate" className="rate" />
        </span>
        <span>
          <img src={rate} alt="rate" className="rate" />
        </span>
        <span>
          <img src={rate} alt="rate" className="rate" />
        </span>
      </div>
      <div className="info">
        <img src={imgUrl} alt={name} />
        <h3>{name}</h3>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default Testimonial;
