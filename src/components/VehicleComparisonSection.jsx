import React, { useState } from 'react';
import '../assets/styles/VehicleComparisonSection.css';
import Img1 from '../assets/imgs/s-01.webp';
import Img2 from '../assets/imgs/s-02.webp';
import { Box, Typography } from '@mui/material';
import {
    Dashboard,
    AutoFixHigh,
    Engineering,
    DriveEta,
    Support
} from '@mui/icons-material';

const VehicleComparisonSection = () => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleSliderChange = (e) => {
        const { clientX } = e;
        const sliderContainer = e.currentTarget;
        const { left, width } = sliderContainer.getBoundingClientRect();
        const newPosition = ((clientX - left) / width) * 100;
        setSliderPosition(Math.max(0, Math.min(newPosition, 100)));
    };

    return (
        <div className="vehicle-comparison-container">
            <Box className="brand-section">
                <Typography variant="h2">Shop by brands</Typography>
                <Box className="brand-logos">
                    <div className="brand-item">
                        <Dashboard />
                        <Typography variant="body2">Grapho</Typography>
                    </div>
                    <div className="brand-item">
                        <AutoFixHigh />
                        <Typography variant="body2">Iconic</Typography>
                    </div>
                    <div className="brand-item">
                        <Engineering />
                        <Typography variant="body2">Logique</Typography>
                    </div>
                    <div className="brand-item">
                        <DriveEta />
                        <Typography variant="body2">Vectra</Typography>
                    </div>
                    <div className="brand-item">
                        <Support />
                        <Typography variant="body2">Prelude</Typography>
                    </div>
                </Box>
            </Box>

            <Box className="comparison-section">
                <Typography variant="h2">Vehicle based on its design,<br/> shape and space</Typography>
                <Typography variant="body1">
                    Compare before and after of your vehicle after upgrading it using our products
                </Typography>
                <Box className="comparison-wrapper" onMouseMove={handleSliderChange}>
                    <div className="vehicle-image-container">
                        <img
                            src={Img1}
                            alt="Before Upgrade"
                            className="vehicle-image"
                        />
                        <Typography className="image-label before-label">Before Upgrade</Typography>
                    </div>
                    <div className="vehicle-image-container" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                        <img
                            src={Img2}
                            alt="After Upgrade"
                            className="vehicle-image"
                        />
                        <Typography className="image-label after-label">After Upgrade</Typography>
                    </div>
                    <div className="slider" style={{ left: `${sliderPosition}%` }} />
                </Box>
            </Box>
        </div>
    );
};

export default VehicleComparisonSection;
