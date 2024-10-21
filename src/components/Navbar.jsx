import React, { useState } from 'react';
import '../assets/styles/Navbar.css';
import { Link } from 'react-router-dom'; 
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const categories = [
    'Electronics', 'Automobile Parts', 'Home Appliances', 'Fashion', 'Sports', 'Books'
];

const Navbar = ({ cartCount }) => {
    const [showCategories, setShowCategories] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const toggleCategories = () => {
        setShowCategories(prev => !prev);
    };

    const handleSearch = () => {
        const results = categories.filter(category =>
            category.toLowerCase().includes(searchInput.toLowerCase())
        );
        setSearchResults(results.length > 0 ? results : ["No item found"]);
        setSearchInput(''); 
    };

    return (
        <header className="navbar">
            <div className="top-bar">
                <ul className="top-links">
                    <li><Link to="/aboutUs">About us</Link></li>
                    <li><Link to="/termsofservices">Terms of service</Link></li>
                    <li><Link to="/faqs">FAQ</Link></li>
                    <li><Link to="/privacypolicy">Privacy policy</Link></li>
                </ul>
                <p className="offer">Now offering free shipping on all orders over $50!</p>
                <div className="language-currency">
                    <div className="dropdown">
                        <span>English</span>
                    </div>
                    <div className="dropdown">
                        <span>United States (USD $)</span>
                    </div>
                </div>
            </div>
            <div className="main-nav">
                <div className="logo">
                    <Link to="/">AUTO<span>PARTS</span></Link>
                </div>
                <nav className="menu">
                    <ul>
                        <li><ViewModuleIcon /> <Link to="/categories">Catalog</Link></li>
                        <li><LocalMallIcon /> <Link to="/aboutUs">About us</Link></li>
                        <li><MenuIcon /> <Link to="/blogs">Blog</Link></li>
                        <li><HelpOutlineIcon /> <Link to="/faqs">Help</Link></li>
                    </ul>
                </nav>
                <div className="search-bar">
                    <button className="category-btn" onClick={toggleCategories}>All Categories</button>
                    {showCategories && (
                        <ul className="categories-dropdown">
                            {categories.map((category, index) => (
                                <li key={index}>{category}</li>
                            ))}
                        </ul>
                    )}
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button className="search-btn" onClick={handleSearch}>
                        <SearchIcon />
                    </button>
                </div>
                <div className="user-options">
                    <PersonIcon />
                    <Link to="/cart">
                        <ShoppingCartIcon />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                </div>
            </div>
            {searchResults.length > 0 && (
                <div className="search-results">
                    <ul>
                        {searchResults.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
