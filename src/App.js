import './App.css';
import Header from './header/header.js';
import Hero from './hero/hero.js';
import BrandsCard from './brands/brands.js';
import LatestProducts from './latestProduct/latestProduct.js';
import Carousel from './carousel/carousel.js';
import LastCard from './lastCard/lastCard.js';
import Footer from './footer/footer.js';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <BrandsCard />
      <LatestProducts />
      <Carousel />
      <LastCard />
      <Footer />
    </div>
  );
}

export default App;
