import React from 'react';
import '../assets/styles/CarHotspot.css';
import carImage from '../assets/imgs/Car.svg';

const CarHotspot = () => {
  return (
    <div className="car-hotspot-container">
      <img src={carImage} alt="Car" className="car-image" />
      <div className="hotspot" style={{ top: '40%', left: '20%' }}>+</div>
      <div className="hotspot" style={{ top: '35%', left: '45%' }}>+</div>
      <div className="hotspot" style={{ top: '55%', left: '65%' }}>+</div>
      <div className="hotspot" style={{ top: '40%', left: '85%' }}>+</div>
      <div className="text-overlay">
        <h1>The perfect solutions for cars!</h1>
        <p>Discover, explore, and find all the parts your car needs from top to tail.</p>
      </div>
    </div>
  );
};

export default CarHotspot;
