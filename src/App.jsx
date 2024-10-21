import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/LandingPage';
import CategoryPage from "./pages/Catagories"; 
import AboutUs from "./pages/AboutUs";
import FAQ from "./pages/FQAs";
import TermsOfServices from './pages/TermsOfServices';
import Blogs from './pages/Blogs';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  return (
    <BrowserRouter basename="/carparts">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="categories" element={<CategoryPage />} />
        <Route path="faqs" element={<FAQ />} />
        <Route path="termsofservices" element={<TermsOfServices />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
