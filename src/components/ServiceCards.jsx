import React from 'react';
import '../assets/styles/ServiceCards.css';
import image1 from '../assets/imgs/service-1.webp'; 
import image2 from '../assets/imgs/service-2_opt.jpg';
import image3 from '../assets/imgs/service-3.webp';
import image4 from '../assets/imgs/service-4.webp';

const ServiceCards = () => {
    const services = [
        {
            id: 1,
            title: "Deals of the year",
            description: "Explore hottest deals all year round",
            image: image1,
        },
        {
            id: 2,
            title: "Pro services",
            description: "Get our professional services and recommendations",
            image: image2,
        },
        {
            id: 3,
            title: "Engine tuning",
            description: "Get our expert view to update your engine's life",
            image: image3,
        },
        {
            id: 4,
            title: "Maintenance",
            description: "Receive regular maintenance tips from our experts",
            image: image4,
        },
    ];

    return (
        <div className="service-cards-container">
            <h1 className="header">Make your car last longer</h1>
            <div className="cards-grid">
                {services.map((service) => (
                    <div key={service.id} className="card">
                        <img src={service.image} alt={service.title} className="card-image" />
                        <div className="card-content">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <button className="shop-now">Shop Now &#8250;</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceCards;
