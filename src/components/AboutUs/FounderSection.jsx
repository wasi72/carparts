import React from 'react';
import '../../assets/styles/AboutUs/FounderSection.css';
import founderImage from '../../assets/imgs/team-1.webp'; 

const FounderSection = () => {
    return (
        <section className="founder-section">
            <div className="content-container">
                <div className="text-content">
                    <h2>Meet our founder</h2>
                    <p>
                        Alexander Wilson is the spark that ignited AutoParts. A lifelong car enthusiast and 
                        self-proclaimed gearhead, he spent countless hours tinkering with his first car, 
                        a beat-up Toyota. The frustration of navigating confusing parts catalogs and limited 
                        options fueled his vision for a better way to get the parts needed to keep his car 
                        on the road. With a background in Mechanical Engineering, Alexander combined his 
                        passion for cars with his business acumen to launch AutoParts, making the car parts 
                        experience smoother for everyone.
                    </p>
                    <h4>Alexander Wilson</h4>
                    <span>Founder and CEO at AutoParts</span>
                </div>
                <div className="image-container">
                    <img src={founderImage} alt="Founder Alexander Wilson" />
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
