import React from "react";
import Navbar from '../components/Navbar';
import UpperComponent from '../components/UpperComponent';
import BlogCards from '../components/BlogCard';
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";
const Blogs = ()=>{
    return(
        <>
        <Navbar/>
        <UpperComponent
         page="Blogs from Autoparts"
         heading="Blogs from Autoparts" 
         description="Read our carefully curated blogs about everything auto parts." 
       />
       <BlogCards/>
       <FeatureCards/>
       <Footer/>
        </>
    );
};
export default Blogs;