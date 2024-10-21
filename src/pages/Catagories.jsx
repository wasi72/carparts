import React from "react";
import Navbar from '../components/Navbar';
import UpperComponent from '../components/UpperComponent';
import AutomotiveParts from "../components/AutomotiveParts";
import ProductComparison from "../components/ProductComparison";
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";

const CategoryPage = ()=>{
    return(
        <>
        <Navbar/>
        <UpperComponent
         page="Categories"
         heading="Catagories" 
         description="We are a community of passionate individuals dedicated to keeping the automotive spirit alive." 
       />
        <AutomotiveParts/>
        <ProductComparison/>
        <FeatureCards/>
        <Footer/>
        </>
    );
};
export default CategoryPage;