import React from 'react';
import { LocalShipping, Security, AttachMoney, SupportAgent } from '@mui/icons-material';
import '../../assets/styles/AboutUs/Features.css';

const features = [
  {
    icon: <LocalShipping fontSize="large" />,
    title: "Fast and free delivery",
    description: "Enjoy fast shipping options, with many orders qualifying for free delivery."
  },
  {
    icon: <Security fontSize="large" />,
    title: "Safe and secure payment",
    description: "We use industry-standard encryption to ensure your payment information is always protected."
  },
  {
    icon: <AttachMoney fontSize="large" />,
    title: "Money back guarantee",
    description: "Shop with confidence - if you're not satisfied, return your parts for a full refund within 14 days."
  },
  {
    icon: <SupportAgent fontSize="large" />,
    title: "24/7 customer support",
    description: "Our friendly customer support team is available around the clock to answer your questions."
  }
];

const FeatureCards = () => {
  return (
    <section className="feature-cards-section">
      <div className="feature-cards-container">
        {features.map((feature, index) => (
          <div className="feature-card-item" key={index}>
            <div className="feature-card-icon">{feature.icon}</div>
            <h3 className="feature-card-title">{feature.title}</h3>
            <p className="feature-card-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
