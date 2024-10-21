import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Facebook, Instagram, YouTube, ArrowForward } from '@mui/icons-material';
import Img1 from '../assets/imgs/visacard.png';
import Img2 from '../assets/imgs/mastercard.png';
import Img3 from '../assets/imgs/paypal.png';
import '../assets/styles/Footer.css';

const Footer = () => {
  return (
    <Box className="footer">
      <Box className="footer-top">
        <Box className="footer-logo">
          <Typography variant="h5" className="footer-title">
            AUTOPARTS
          </Typography>
        </Box>
        <Box className="footer-links">
          <Box className="footer-column">
            <Typography variant="h6" className="column-title">Collection</Typography>
            <Typography className="column-item">Engine Parts</Typography>
            <Typography className="column-item">Engine Tuning</Typography>
            <Typography className="column-item">Brake System</Typography>
          </Box>
          <Box className="footer-column">
            <Typography variant="h6" className="column-title">Best sellers</Typography>
            <Typography className="column-item">Top New</Typography>
            <Typography className="column-item">Featured</Typography>
            <Typography className="column-item">New Arrivals</Typography>
          </Box>
          <Box className="footer-column">
            <Typography variant="h6" className="column-title">About us</Typography>
            <Typography className="column-item">Our Story</Typography>
            <Typography className="column-item">FAQ</Typography>
            <Typography className="column-item">Terms of Service</Typography>
          </Box>
          <Box className="footer-column">
            <Typography variant="h6" className="column-title">Customer service</Typography>
            <Typography className="column-item">Contact Us</Typography>
            <Typography className="column-item">Shipping Information</Typography>
            <Typography className="column-item">Gifts Page</Typography>
          </Box>
          <Box className="footer-column">
            <Typography variant="h6" className="column-title">Legal support</Typography>
            <Typography className="column-item">Support</Typography>
            <Typography className="column-item">Terms of Service</Typography>
            <Typography className="column-item">Delivery Policy</Typography>
          </Box>
        </Box>
        <Box className="footer-newsletter">
          <Typography variant="h6">Join our newsletter for new offers.</Typography>
          <Box className="newsletter-input">
            <TextField
              variant="outlined"
              placeholder="Email"
              size="small"
              className="newsletter-textfield"
            />
            <Button variant="contained" className="newsletter-button">
              <ArrowForward />
            </Button>
          </Box>
          <Box className="footer-social-icons">
            <Facebook className="social-icon" />
            <Instagram className="social-icon" />
            <YouTube className="social-icon" />
          </Box>
        </Box>
      </Box>
      <Box className="footer-bottom">
        <Typography variant="body2">
          This is a demo store. All images have been sourced from Shutterstock and Adobe stock.
        </Typography>
        <Typography variant="body2">
          Refund policy | Privacy policy | Terms of service | Contact information
        </Typography>
        <Box className="footer-cards">
          <img src={Img1} alt="Visa" />
          <img src={Img2} alt="Mastercard" />
          <img src={Img3} alt="PayPal" />
        </Box>
        <Typography variant="body2">
          Powered by Shopify
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
