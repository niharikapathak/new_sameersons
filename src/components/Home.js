import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import symbol from '../images/symbol.jpg';
import profile from '../images/profile.jpg';
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpeg';
import slide4 from '../images/slide4.jpg';
import slide5 from '../images/slide5.jpg';
import slide6 from '../images/slide6.jpg';
import slide7 from '../images/slide7.jpg';
import slide8 from '../images/slide8.jpg';

const products = [
  { name: 'AcidBase', path: '/products/AcidBase' },
  { name: 'Direct Dyes', path: '/products/direct-dyes' },
  { name: 'Disperse Dyes', path: '/products/disperse-dyes' },
  { name: 'Napthol Base', path: '/products/napthol-base' },
  { name: 'Pigment Dyes', path: '/products/pigment-dyes' },
  { name: 'Pigment Auxiliary', path: '/products/pigmentauxiliares' },
  { name: 'Premium Dyes', path: '/products/premium-dyes' },
  { name: 'Printing Dyes', path: '/products/printing-dyes' },
  { name: 'Reactive Cold Dyes', path: '/products/reactive-cold-dyes' },
  { name: 'Reactive He Dyes', path: '/products/reactive-he-dyes' },
  { name: 'Reactive ME Dyes', path: '/products/reactive-me-dyes' },
  { name: 'RGB RR Dyes', path: '/products/rgb-rr-dyes' },
  { name: 'Vinylsulphone Dyes', path: '/products/vinylsulphone-dyes' },
];

const Home = () => {
  return (
    <div>
      <div className="landing-section">
        <div className="slide-container">
          <div className="slide-pair">
            <img src={slide1} alt="Slide 1" className="slide-image" />
            <img src={slide4} alt="Slide 4" className="slide-image" />
          </div>
          <div className="slide-pair">
            <img src={slide3} alt="Slide 3" className="slide-image" />
            <img src={slide2} alt="Slide 2" className="slide-image" />
          </div>
          <div className="slide-pair">
            <img src={slide5} alt="Slide 5" className="slide-image" />
            <img src={slide8} alt="Slide 8" className="slide-image" />
          </div>
          <div className="slide-pair">
            <img src={slide7} alt="Slide 7" className="slide-image" />
            <img src={slide6} alt="Slide 6" className="slide-image" />
          </div>
        </div>
        <img src={symbol} alt="Symbol" className="symbol-image" />
        <div className="ribbon">
          <h2>Sameer & Sons</h2>
        </div>
        <div className="slogan">
          <div className="since-1992">
            <p>Since 1982</p>
          </div>
          <div className="colour-ur-dreams">
            <p>
              <span>c</span>
              <span>o</span>
              <span>l</span>
              <span>o</span>
              <span>u</span>
              <span>r</span>
              <span> </span>
              <span>u</span>
              <span>r</span>
              <span> </span>
              <span>d</span>
              <span>r</span>
              <span>e</span>
              <span>a</span>
              <span>m</span>
              <span>s</span>
            </p>
          </div>
        </div>
      </div>

      <div className="aboutus">
        <img src={profile} alt="Sameer & Sons" className="aboutus-image" />
        <div className="aboutus-content">
          <center><h2>About Us</h2></center>
          <p className="style7">
            <strong>'Sameer & Sons'</strong> is Superior in Dyestuff Supplier in India. As our tag line says
            'Color Your Dreams', we make this beautiful world more beautiful by adding our colors to it. We are known
            for our wide range of products which are manufactured by our associated companies. We provide a full range
            of products which includes Reactive Cold Dyes, Reactive HE Dyes, Reactive ME Dyes, Vinyl Sulphone Dyed,
            Reactive Hot Dyes, Hi-Fast Printing Series, Sunfast Direct Dyes, Direct Dyes, Solo Series, Deep Black
            Series, Premium Series, Textile Auxiliaries, and our newly launched product Cotton, Fluorescent LED Dyes.
            All our products can be applied in Textiles, Leather, Paper, Coating, Inks, Plastics, Soap, Towels, and
            Chaddars. <Link to="/about" className="more-info">More Info</Link>
          </p>
        </div>
      </div>

      <div className="products-section">
        <h2>Our Products</h2>
        <div className="products-container">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <img src="" alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <Link to={product.path} className="more-info">More Info</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
