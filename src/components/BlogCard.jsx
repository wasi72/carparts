import React, { useState } from 'react';
import '../assets/styles/BlogCard.css';
import Img1 from '../assets/imgs/blog-1.webp';
import Img2 from '../assets/imgs/blog-2.webp';
import Img3 from '../assets/imgs/blog-3.webp';
import Img4 from '../assets/imgs/blog-4.webp';
import Img5 from '../assets/imgs/blog-5.webp';
import Img6 from '../assets/imgs/blog-6.webp';
import Img7 from '../assets/imgs/blog-7.webp';
import Img8 from '../assets/imgs/pexels-mikebirdy-1009871.webp';
const articles = [
  {
    title: "Maintaining Your Car's Battery: Tips for a Long and Healthy Life",
    date: "20 May, 2024",
    category: ["Maintenance"],
    description: "Your car battery is the unsung hero of the electrical system. It provides the initial burst of power to crank your engine and keeps all your electronic components running smoothly...",
    image: Img1,
  },
  {
    title: "DIY Oil Change: A Step-by-Step Guide for Beginners",
    date: "20 May, 2024",
    category: ["Maintenance", "Product", "Technology"],
    description: "Keeping your car running smoothly relies on a healthy engine, and regular oil changes are a crucial part of achieving this...",
    image: Img2,
  },
  {
    title: "ADAS Explained: Demystifying Advanced Driver-Assistance Systems",
    date: "20 May, 2024",
    category: ["Technology"],
    description: "Ever feel like your car is getting smarter? You're not wrong! Modern vehicles are packed with technology designed to make driving safer and more convenient...",
    image: Img3,
  },
  {
    title: "The Rise of Electric Vehicles: EV Battery Technology",
    date: "20 May, 2024",
    category: ["Technology"],
    description: "Electric vehicles (EVs) are rapidly changing the automotive landscape. Their quiet operation, environmental benefits, and increasing performance are making them a compelling choice...",
    image: Img4,
  },
  {
    title: "Understanding Your Engine's Ignition System",
    date: "05 October, 2023",
    category: ["Maintenance", "Product"],
    description: "Your car's engine is a complex symphony of parts working together to create motion. But before all that roaring and revving can happen...",
    image: Img5,
  },
  {
    title: "DIY Oil Change: A Step-by-Step Guide for Beginners",
    date: "20 May, 2024",
    category: ["Maintenance", "Product", "Technology"],
    description: "Keeping your car running smoothly relies on a healthy engine, and regular oil changes are a crucial part of achieving this...",
    image: Img6
  },
  {
    title: "ADAS Explained: Demystifying Advanced Driver-Assistance Systems",
    date: "20 May, 2024",
    category: ["Technology"],
    description: "Ever feel like your car is getting smarter? You're not wrong! Modern vehicles are packed with technology designed to make driving safer and more convenient...",
    image: Img7,
  },
  {
    title: "The Rise of Electric Vehicles: EV Battery Technology",
    date: "20 May, 2024",
    category: ["Technology"],
    description: "Electric vehicles (EVs) are rapidly changing the automotive landscape. Their quiet operation, environmental benefits, and increasing performance are making them a compelling choice...",
    image: Img8,
  },
];

const categories = ["All", "Maintenance", "Product", "Technology"];

const BlogCard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterArticles = () => {
    if (selectedCategory === "All") {
      return articles;
    }
    return articles.filter(article =>
      article.category.includes(selectedCategory)
    );
  };

  return (
    <div className="App">
      <div className="category-menu">
        {categories.map((category, index) => (
          <button
            key={index}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="article-grid">
        {filterArticles().map((article, index) => (
          <div key={index} className="article-card">
            <div
              className="card-image"
              style={{ backgroundImage: `url(${article.image})` }}
            ></div>
            <div className="card-content">
              <h3>{article.title}</h3>
              <p className="date">{article.date}</p>
              <p>{article.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
