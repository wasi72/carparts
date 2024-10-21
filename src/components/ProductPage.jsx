import React, { useState } from 'react';
import '../assets/styles/ProductPage.css';
import Img1 from '../assets/imgs/BrakeCalipers.webp';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + amount));
  };

  return (
    <div className='raper'>
    <div className="product-page">
      <div className="product-image-section">
        <img src={Img1} alt="Brake Callipers" className="main-image" />
        <div className="thumbnail-images">
          <img src={Img1} alt="Brake Callipers Thumbnail 1" />
          <img src={Img1} alt="Brake Callipers Thumbnail 2" />
          <img src={Img1} alt="Brake Callipers Thumbnail 3" />
        </div>
      </div>
      <div className="product-details-section">
        <span className="featured-product">Featured Product</span>
        <h1>Brake Callipers</h1>
        <p className="price">$200.00</p>
        <p className="stock-status">200 in stock</p>
        <p className="description">
          Our curated collections are meant to inspire your creative side and provide you with product options.
        </p>
        <div className="options">
          <div className="option">
            <label htmlFor="material">Material</label>
            <select id="material">
              <option value="cast-iron">Cast iron</option>
              <option value="aluminum">Aluminum</option>
            </select>
          </div>
          <div className="option">
            <label htmlFor="brand">Brand</label>
            <select id="brand">
              <option value="grapho">Grapho</option>
              <option value="brembo">Brembo</option>
            </select>
          </div>
        </div>
        <div className="quantity">
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
        <div className="buttons">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-it-now">Buy It Now</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductPage;
