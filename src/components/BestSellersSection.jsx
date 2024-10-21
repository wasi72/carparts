import React, { useState } from 'react';
import '../assets/styles/BestSellersSection.css';
import Header1 from '../assets/imgs/bestsealerheader-1.webp';
import Header2 from '../assets/imgs/beastsealerheader-2.webp';
import Header3 from '../assets/imgs/beastsealerheader-3.webp';
import Img1 from '../assets/imgs/Starters1.webp';
import Img2 from '../assets/imgs/sparkplug1.webp';
import Img3 from '../assets/imgs/Shockabsorbers.webp';
import Img4 from '../assets/imgs/Radiators1.webp';
import Img5 from '../assets/imgs/PerformanceMufflers.webp';
import Img6 from '../assets/imgs/PerformanceChips-2.webp';
import Img7 from '../assets/imgs/PerformanceChips-1.webp';
import Img8 from '../assets/imgs/NitrousKits.webp';

const BestSellers = () => {
  const allProducts = {
    topNew: [
      { name: 'Starters', price: '$600.00', image: Img1 },
      { name: 'Spark Plugs', price: '$10.00', originalPrice: '$12.00', sale: true, image: Img2 },
      { name: 'Shock Absorbers', price: '$120.00', image: Img3 },
    ],
    featured: [
      { name: 'Radiators', price: '$2,000.00', image: Img4 },
      { name: 'Power Programmer Chips', price: '$500.00', image: Img5 },
      { name: 'Shock Absorbers', price: '$120.00', image: Img3 },
    ],
    newArrivals: [
      { name: 'Performance Muffler', price: '$150.00', image: Img6 },
      { name: 'Control Module Chips', price: '$500.00', image: Img7 },
      { name: 'Nitrous Systems', price: '$1,200.00', image: Img8 },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState('topNew');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="best-sellers-section">
      <h2>Best Sellers</h2>
      <div className="best-sellers-tabs">
        <div
          className={`tab-item ${selectedCategory === 'topNew' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('topNew')}
        >
          <img src={Header1} alt="Top New" className="category-icon" />
          <span>Top New</span>
        </div>
        <div
          className={`tab-item ${selectedCategory === 'featured' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('featured')}
        >
          <img src={Header2} alt="Featured" className="category-icon" />
          <span>Featured</span>
        </div>
        <div
          className={`tab-item ${selectedCategory === 'newArrivals' ? 'active' : ''}`}
          onClick={() => handleCategoryChange('newArrivals')}
        >
          <img src={Header3} alt="New Arrivals" className="category-icon" />
          <span>New Arrivals</span>
        </div>
      </div>

      <div className="best-sellers-grid">
        {allProducts[selectedCategory].map((product, index) => (
          <div key={index} className="best-sellers-card">
            <img src={product.image} alt={product.name} />
            {product.sale && <span className="sale-tag">Sold</span>}
            <h3>{product.name}</h3>
            <p className="product-price">
              {product.sale && <span className="original-price">{product.originalPrice}</span>}
              {product.price}
            </p>
            <button className="compare-button">Add to compare</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;