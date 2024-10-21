import React from 'react';
import '../../assets/styles/AboutUs/VisionApproach.css';

const VisionApproach = () => {
  return (
    <section className="vision-approach-section">
      <div className="vision-approach-container">
        {/* Vision Card */}
        <div className="vision-card">
          <div className="vision-content">
            <h2 className="vision-title">Our vision</h2>
            <p className="vision-description">
              Our vision is to be the leading online destination for auto parts, empowering drivers of all levels to maintain, repair, and customize their vehicles with confidence.
            </p>
          </div>
        </div>

        {/* Approach Card */}
        <div className="approach-card">
          <div className="approach-content">
            <h2 className="approach-title">Our approach</h2>
            <p className="approach-description">
              We offer an exceptional selection of auto parts accompanied by our user-friendly website and search tools, and provide informative guides and resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionApproach;
