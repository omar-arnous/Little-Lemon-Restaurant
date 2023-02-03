import './About.css';
import img1 from '../../images/Mario and Adrian A.jpg';
import img2 from '../../images/Mario and Adrian b.jpg';

const About = () => {
  return (
    <section className="about grid-container">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className="about-img">
        <img src={img1} alt="about img" />
        <img src={img2} alt="about img" className="abs" />
      </div>
    </section>
  );
};

export default About;
