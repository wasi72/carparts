import React from "react";
import Navbar from '../components/Navbar';
import SearchPanel from "../components/SearchPanel";
import AutomotiveParts from "../components/AutomotiveParts";
import HotDeals from "../components/HotDeals";
import CarHotspot from "../components/CarHotspot";
import ServiceCards from "../components/ServiceCards";
import ProductPage from "../components/ProductPage";
import Product from '../components/Product';
import BestSellers from "../components/BestSellersSection";
import VehicleComparisonSection from "../components/VehicleComparisonSection";
import ProductComparison from "../components/ProductComparison";
import BannerComponent from "../components/BannerComponent";
import ClientComponent from '../components/ClientComponent';
import BlogCardComponent from "../components/BlogCardComponent";
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";
const LandingPage = ()=>{
    return(
        <>
        <Navbar/>
        <SearchPanel/>
        <AutomotiveParts/>
        <HotDeals/>
        <CarHotspot/>
        <ServiceCards/>
        <ProductPage/>
        <Product/>
        <BestSellers/>
        <VehicleComparisonSection/>
        <ProductComparison/>
        <BannerComponent/>
        <ClientComponent/>
        <BlogCardComponent/>
        <FeatureCards/>
        <Footer/>
        </>
    );
};
export default LandingPage;