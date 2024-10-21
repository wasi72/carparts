// src/components/HotDeals.js
import React, { useState, useEffect } from 'react';
import '../assets/styles/HotDeals.css';
import product1 from '../assets/imgs/deal-1.webp';
import product2 from '../assets/imgs/deal-2.webp';
import product3 from '../assets/imgs/deal-3.webp';
import product4 from '../assets/imgs/deal-4.webp';
import product5 from '../assets/imgs/deal-5.webp';
import product6 from '../assets/imgs/deal-6.webp';
import product7 from '../assets/imgs/deal-7.webp';
import product8 from '../assets/imgs/deal-8.webp';

const products = [
  { id: 1, image: product1, name: 'Air Filters', price: '$40.00', originalPrice: '$45.00', tag: 'Sale' },
  { id: 2, image: product2, name: 'Air Filters', price: 'From $25.00', originalPrice: '', tag: '' },
  { id: 3, image: product3, name: 'All Season Tires', price: '$200.00', originalPrice: '', tag: '' },
  { id: 4, image: product4, name: 'Alloy Wheels', price: '$200.00', originalPrice: '', tag: '' },
  { id: 5, image: product5, name: 'Alternators', price: '$800.00', originalPrice: '', tag: '' },
  { id: 6, image: product6, name: 'Ball Joints', price: '$80.00', originalPrice: '', tag: '' },
  { id: 7, image: product7, name: 'Battery', price: '$1,200.00', originalPrice: '', tag: '' },
  { id: 8, image: product8, name: 'Bowtie (rich product media)', price: 'From $5.50', originalPrice: '', tag: 'Sold out' },
];

const CountdownTimer = ({ timeLeft }) => (
  <div className="timer">
    <div className="time-box"><span>{String(timeLeft.days).padStart(2, '0')}</span><p>Days</p></div> :
    <div className="time-box"><span>{String(timeLeft.hours).padStart(2, '0')}</span><p>Hours</p></div> :
    <div className="time-box"><span>{String(timeLeft.minutes).padStart(2, '0')}</span><p>Minutes</p></div> :
    <div className="time-box"><span>{String(timeLeft.seconds).padStart(2, '0')}</span><p>Seconds</p></div>
  </div>
);

const HotDeals = ({ addToCart }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 7, minutes: 54, seconds: 32 });

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { ...prev, seconds: 59, minutes: minutes - 1 };
        } else if (hours > 0) {
          return { ...prev, minutes: 59, seconds: 59, hours: hours - 1 };
        } else if (days > 0) {
          return { ...prev, hours: 23, minutes: 59, seconds: 59, days: days - 1 };
        } else {
          clearInterval(timerId);
          return prev; // Stops the timer if it reaches 0
        }
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="hot-deals">
      <h2>Top Hot Deals of the Week</h2>
      <p>Explore our hottest deals below</p>
      <div className="timer-container">
        <CountdownTimer timeLeft={timeLeft} />
        <div className="cta">Hurry up! Offer ends in</div>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card" onClick={() => addToCart(product)}>
            {product.tag && (
              <span className={`tag ${product.tag === 'Sale' ? 'sale' : 'sold-out'}`}>
                {product.tag}
              </span>
            )}
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>
                <span className="price">{product.price}</span>
                {product.originalPrice && (
                  <span className="original-price">{product.originalPrice}</span>
                )}
              </p>
              <div className="compare">
                <input type="checkbox" /> Add to compare
              </div>
              <button className="add-to-cart-btn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotDeals;
