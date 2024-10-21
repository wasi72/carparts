import React from 'react';
import { Link } from 'react-router-dom';
import { LinkedIn, Facebook } from '@mui/icons-material';
import '../assets/styles/SearchPanel.css';

const SearchPanel = () => {
  return (
    <div className="page-container">
      <div className="overlay-background"></div>

      <div className="social-sidebar sticky-icons">
        <button className="close-sidebar-btn">X</button>
        <div className="social-sidebar-links">
          <Link to="#linkedin" className="social-sidebar-link">
            <LinkedIn fontSize="large" />
          </Link>
          <Link to="#facebook" className="social-sidebar-link">
            <Facebook fontSize="large" />
          </Link>
        </div>
      </div>

      <div className="content-section">
        <h1 className="content-title">Turn your automotive dreams into reality.</h1>
        <div className="content-buttons">
          <button className="btn btn-primary">Shop Now</button>
          <button className="btn btn-secondary">Explore Our Collection</button>
        </div>
      </div>

      <div className="vehicle-search-box">
        <h3 className="search-box-title">Search by vehicle</h3>
        <div className="search-box-group">
          <select className="search-box-select">
            <option value="">Categories</option>
            <option value="cars">Cars</option>
            <option value="bikes">Bikes</option>
          </select>
        </div>
        <div className="search-box-group">
          <select className="search-box-select">
            <option value="">Item Material</option>
            <option value="steel">Steel</option>
            <option value="plastic">Plastic</option>
          </select>
        </div>
        <div className="search-box-group">
          <select className="search-box-select">
            <option value="">Brand</option>
            <option value="toyota">Toyota</option>
            <option value="ford">Ford</option>
          </select>
        </div>
        <button className="btn btn-search">Search</button>
      </div>
    </div>
  );
};

export default SearchPanel;
