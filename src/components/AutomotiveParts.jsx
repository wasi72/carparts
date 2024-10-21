import React, { useState } from 'react';
import '../assets/styles/AutomotiveParts.css';
import Part1 from '../assets/imgs/part-1.webp';
import Part2 from '../assets/imgs/part-2.jpeg';
import Part3 from '../assets/imgs/part-3.jpeg';
import Part4 from '../assets/imgs/part-4.jpeg';
import Part5 from '../assets/imgs/part-5.jpeg';

// Categories array for filtering
const categories = [
  "All",
  "Automobile parts",
  "Performance parts",
  "Body parts",
  "Electronics",
  "Wheels and tires",
];

// Parts array with category field
const parts = [
  { id: 1, image: Part1, name: 'Brake System', category: 'Automobile parts' },
  { id: 2, image: Part2, name: 'Engine Parts', category: 'Performance parts' },
  { id: 3, image: Part3, name: 'Suspension System', category: 'Automobile parts' },
  { id: 4, image: Part4, name: 'Cooling System', category: 'Body parts' },
  { id: 5, image: Part5, name: 'Exhaust System', category: 'Performance parts' },
];

const AutomotiveParts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Filter parts based on the selected category
  const filteredParts = selectedCategory === "All" 
    ? parts 
    : parts.filter(part => part.category === selectedCategory);

  return (
    <div className="automotive-parts-container">
      <h2>Our Top Collections</h2>
      <div className="categories">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`category ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="parts-grid">
        {filteredParts.map((part) => (
          <div key={part.id} className="part-card">
            <img src={part.image} alt={part.name} />
            <p>{part.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutomotiveParts;
