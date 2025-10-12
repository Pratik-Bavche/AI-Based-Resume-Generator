import Banner from '../components/Home/Banner';
import CallToAction from '../components/Home/CallToAction';
import Features from '../components/Home/Features';
import Footer from '../components/Home/Footer';
import Hero from '../components/Home/Hero';
import Testimonial from '../components/Home/Testimonial';

const Home = () => {
  return (
    <div>
      {/* <Banner/> */}
      <Hero/>
      <Features/>
      <Testimonial/>
      <CallToAction/>
      <Footer/>
    </div>
  );
}

export default Home;
