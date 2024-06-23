import React from 'react';
import symbol from '../images/symbol.jpg';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <img src={symbol} alt="Symbol" className="symbol-image" />
        <h1 className="company-name">Sameer & Sons</h1>
      </div>
    </div>
  );
}

export default About;
