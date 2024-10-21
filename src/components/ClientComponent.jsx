import React from "react";
import "../assets/styles/ClientComponent.css"; 
import Img1 from '../assets/imgs/man.webp'; 
import Img2 from '../assets/imgs/shutterstock_289427012_1_1.webp';
import Img3 from '../assets/imgs/shutterstock_289427012_1.webp';

const testimonials = [
  {
    id: 1,
    name: "David G.",
    position: "Director at Igloo",
    review: "Always wanted to do some minor upgrades on my car but never knew where to start. The tutorials and guides on AutoParts were super helpful! They gave me the confidence to tackle a new air intake system myself. Thanks for empowering newbies like me!",
    rating: 5,
    imgSrc: Img1,
  },
  {
    id: 2,
    name: "Emma Johnson",
    position: "Chief Customer Officer at Happy Money",
    review: "Needed some replacement brake pads for my daily driver. The website was easy to navigate, and I found exactly what I needed at a competitive price. Delivery was quick, and the parts fit perfectly. Would recommend for basic maintenance needs.",
    rating: 4,
    imgSrc: Img2,
  },
  {
    id: 3,
    name: "Robert Wattson",
    position: "Finance Manager",
    review: "Needed some new spark plugs in a pinch. The website is super user-friendly, and checkout was a breeze. Parts arrived quickly and exactly as described. Will definitely use them again for future maintenance needs.",
    rating: 5,
    imgSrc: Img3,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="header">
        <h2>Our clients and their experience</h2>
      </div>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <img src={testimonial.imgSrc} alt={testimonial.name} className="testimonial-image" />
            <div className="testimonial-content">
              <p className="testimonial-review">{testimonial.review}</p>
              <p className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <br />
                {testimonial.position}
              </p>
              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating)}{" "}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
