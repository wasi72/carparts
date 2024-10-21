import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/BlogCardComponent.css';
import Img1 from '../assets/imgs/pexels-olly-3807329.webp';
import Img2 from '../assets/imgs/pexels-daniel-andraski-197681005-13065690-2.webp';
import Img3 from '../assets/imgs/pexels-mikebirdy-1009871.webp';


const BlogCardComponent = () => {
  const blogs = [
    {
      id: 1,
      image: Img1,
      category: ['Maintenance'],
      date: '20 May, 2024',
      title: "Maintaining Your Car's Battery: Tips for a Long and ...",
      description: "Your car battery is the unsung hero of the electrical system. It provides the initial burst of power to crank your engine and keeps all your electronic components running smoothly...",
    },
    {
      id: 2,
      image: Img2,
      category: ['Maintenance', 'Product', 'Technology'],
      date: '20 May, 2024',
      title: 'DIY Oil Change: A Step-by-Step Guide for Beginners',
      description: "Keeping your car running smoothly relies on a healthy engine, and regular oil changes are a crucial part of achieving this.",
    },
    {
      id: 3,
      image: Img3,
      category: ['Technology'],
      date: '20 May, 2024',
      title: 'ADAS Explained: Demystifying Advanced Driver-Assista...',
      description: "Ever feel like your car is getting smarter? You're not wrong! Modern vehicles are packed with technology designed to make driving safer and more convenient. These systems are known as Advanced...",
    }
  ];

  return (
    <div className="blog-section">
      <h2>From the Autoparts blogs</h2>
      <div className="blog-cards-container">
        {blogs.map(blog => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-info">
              <div className="blog-category">
                {blog.category.map((cat, index) => (
                  <span key={index} className="category-badge">{cat}</span>
                ))}
              </div>
              <p className="blog-date">{blog.date}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <Link to="/blogs" className="read-more">Read More</Link>
            </div>
          </div>
        ))}
      </div>
      <button className="see-all-btn">See All Blogs</button>
    </div>
  );
};

export default BlogCardComponent;
