import React from 'react';
import '../assets/styles/UpperCompoenet.css';

const AboutUs = ({ heading, description, page }) => {
  return (
    <div className="aboutus-section">
      <div className="aboutus-overlay">
        <div className="aboutus-content">
          <div className="aboutus-breadcrumb">
            Home > {page}
          </div>
          <h1>{heading}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
