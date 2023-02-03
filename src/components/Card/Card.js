import './Card.css';

const Card = (props) => {
  return (
    <article className="card">
      <img src={props.src} alt={props.title} />
      <div className="info">
        <div className="title">
          <h3>{props.title}</h3>
          <span>${props.price}</span>
        </div>
        <p>{props.description}</p>
        <div className="order">
          <span>Order a delivery</span>
          <span></span>
        </div>
      </div>
    </article>
  );
};

export default Card;
