import Hero from '../components/Hero/Hero';
import Highlights from '../components/Highlights/Highlights';
import About from '../components/About/About';
import Testimonials from '../components/Testimonials/Testimonials';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
};

export default HomePage;
