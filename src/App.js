
import './App.css';
import Header from './Component/Header/Header';
import Hero from './Component/Hero/Hero';
import Slider from './Component/Slider/Slider';
import Virtual from "./Component/Virtual/Virtual";
import Product from "./Component/Product/product";
import Testimonial from './Component/Testimonial/Testimonial';
import Footer from './Component/Footer/Footer';



function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <Slider />
      <Virtual />
      <Product />
      <Testimonial />
      <Footer />

    </div>
  );
}

export default App;
