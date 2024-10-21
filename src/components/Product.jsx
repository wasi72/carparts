import React from 'react';
import '../assets/styles/product.css';
import tireImage from '../assets/imgs/PerformanceTires.webp';
import mechanicImage from '../assets/imgs/image-1.webp';

const PerformanceSection = () => {
  return (
    <div className="unique-performance-section">
      <div className="unique-content-wrapper">
        <div className="unique-text-content">
          <h1>Experience superior performance and versatility</h1>
          <p>Experience superior performance and versatility with performance tires. Get ready for any road adventure!</p>
          <div className="unique-product-card">
            <img src={tireImage} alt="Performance Tires" className="unique-tire-image" />
            <div className="unique-product-details">
              <h3>Performance Tires</h3>
              <p>$250.00</p>
              <a href="/" className="unique-shop-now">Shop Now</a>
            </div>
          </div>
        </div>
        <div className="unique-image-content">
          <img src={mechanicImage} alt="Mechanics" className="unique-mechanic-image" />
        </div>
      </div>
    </div>
  );
}

export default PerformanceSection;
