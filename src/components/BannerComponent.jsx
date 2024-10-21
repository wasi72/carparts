import React from "react";
import "../assets/styles/BannerComponent.css";

const BannerComponent = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1>Save up to 50%</h1>
        <p>Explore our items on sale and get up to 50% off on!</p>
        <button className="shop-now-button">Shop Now</button>
      </div>
    </div>
  );
};

export default BannerComponent;
