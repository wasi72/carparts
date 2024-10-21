import React from "react";
import '../assets/styles/AboutUs/AboutUs.css';
import Navbar from '../components/Navbar';
import UpperComponent from '../components/UpperComponent';
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";
import OurStory from "../components/AboutUs/OurStory";
import FounderSection from "../components/AboutUs/FounderSection";
import TeamSection from "../components/AboutUs/TeamSection";
import ClientComponent from '../components/ClientComponent';
import BlogCardComponent from "../components/BlogCardComponent";
import Features from "../components/AboutUs/Features";
import VisionApproach from "../components/AboutUs/VisionApproach";
const AboutUs = ()=>{
    return(
        <>
        <Navbar/>
        <UpperComponent
         page="About Us"
         heading="About Us" 
         description="We are a community of passionate individuals dedicated to keeping the automotive spirit alive." 
       />
       <OurStory/>
       <Features/>
       <VisionApproach/>
       <div className="scrolling-container">
            <div className="scrolling-text">
                Make your car last longer Make your car last longer Make your car last longer
            </div>
        </div>
        <FounderSection/>
        <TeamSection/>
        <ClientComponent/>
        <BlogCardComponent/>
       <FeatureCards/>
       <Footer/>
        </>
    );
};
export default AboutUs;