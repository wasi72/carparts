import React from 'react';
import '../assets/styles/FeatureCards.css';
import { Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';

const FeatureCard = () => {
  return (
    <Box className="feature-card-container">
      <Box className="feature-card">
        <Box className="feature-item">
          <CheckCircleOutlineIcon style={{ fontSize: 50, color: '#e67e22' }} />
          <Typography variant="h6" className="feature-title">
            Trusted products
          </Typography>
          <Typography variant="body1" className="feature-description">
            Curated selection of trusted products for your vehicles
          </Typography>
        </Box>

        <Box className="feature-item">
          <PhoneInTalkIcon style={{ fontSize: 50, color: '#e67e22' }} />
          <Typography variant="h6" className="feature-title">
            After sales support
          </Typography>
          <Typography variant="body1" className="feature-description">
            Dedicated after-sales support team, ready to assist you
          </Typography>
        </Box>

        <Box className="feature-item">
          <LocalShippingIcon style={{ fontSize: 50, color: '#e67e22' }} />
          <Typography variant="h6" className="feature-title">
            Delivery across globe
          </Typography>
          <Typography variant="body1" className="feature-description">
            Bringing quality autoparts right to your doorstep
          </Typography>
        </Box>

        <Box className="feature-item">
          <BuildCircleIcon style={{ fontSize: 50, color: '#e67e22' }} />
          <Typography variant="h6" className="feature-title">
            Quality spare parts
          </Typography>
          <Typography variant="body1" className="feature-description">
            Top-notch spare parts crafted with precision and durability
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureCard;
