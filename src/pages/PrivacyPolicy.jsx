import React from "react";
import '../assets/styles/PrivacyPolicy.css';
import Navbar from '../components/Navbar';
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";
const PrivacyPolicy = ()=>{
    return(
        <>
        <Navbar/>
        <div className="privacy-container">
            <h1 className="privacy-title">Privacy Policy</h1>
            
            <section className="privacy-section">
                <h2>Changes to this Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
            </section>
            
            <section className="privacy-section">
                <h2>How we collect and use your personal information</h2>
                <p>We collect your information in the following ways: when you provide it directly to us, when we collect it automatically, and when we receive it from other sources. We use this information to improve our services, provide you with personalized content, and analyze how you use our platform.</p>
            </section>
            
            <section className="privacy-section">
                <h2>What personal information we collect</h2>
                <p>We may collect personal information that can identify you, such as your name, email address, and phone number, as well as other information that does not identify you.</p>
            </section>
            
            <section className="privacy-section">
                <h2>Information we collect directly from you</h2>
                <ul>
                    <li>Personal identification information (Name, email address, phone number, etc.)</li>
                    <li>Demographic information (age, gender, etc.)</li>
                    <li>Preferences and interests</li>
                    <li>Other information relevant to customer surveys and/or offers</li>
                </ul>
            </section>
            
            <section className="privacy-section">
                <h2>Information we collect through cookies</h2>
                <p>We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.</p>
            </section>
            
            <section className="privacy-section">
                <h2>Information we obtain from third parties</h2>
                <p>We may receive information about you from other sources, including publicly available databases or third parties, and combine this data with information we already have about you.</p>
            </section>
            
            <section className="privacy-section">
                <h2>How we use your personal information</h2>
                <p>We use the information we collect to provide, maintain, and improve our services, understand and analyze how you use our services, develop new products and services, and communicate with you.</p>
            </section>
            
            <section className="privacy-section">
                <h2>Cookies</h2>
                <p>Cookies are files with a small amount of data which may include an anonymous unique identifier. We use cookies to improve your experience, monitor the performance of our services, and to deliver targeted ads.</p>
            </section>
            
            <section className="privacy-section">
                <h2>How we disclose personal information</h2>
                <p>We do not share your personal information with third parties except as necessary to fulfill our obligations to you or as required by law.</p>
            </section>
            
            <section className="privacy-section">
                <h2>User generated content</h2>
                <p>Our services may allow you to post content. Any information you choose to post may be viewed by others who use our services.</p>
            </section>
            
            <section className="privacy-section">
                <h2>Third party websites and links</h2>
                <p>Our services may contain links to other websites that are not operated by us. We strongly advise you to review the Privacy Policy of every site you visit.</p>
            </section>
            
            <section className="privacy-section">
                <h2>Children's data</h2>
                <p>We do not knowingly collect personal information from children under 13. If we become aware that a child has provided us with personal information, we will delete such information from our files.</p>
            </section>
            
            <section className="privacy-section">
                <h2>Security and retention of your information</h2>
                <p>We are committed to ensuring that your information is secure. We have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
            </section>
            
            <section className="privacy-section">
                <h2>Your rights and choices</h2>
                <p>You have the right to request access to the personal information we have about you, as well as the right to request that we correct, update, or delete your personal information.</p>
            </section>
            
            <section className="privacy-section">
                <h2>Complaints</h2>
                <p>If you have a complaint about our privacy practices, please contact us at the details provided below. We will address your concerns as promptly as possible.</p>
            </section>
            
            <section className="privacy-section">
                <h2>International users</h2>
                <p>Your information may be transferred to, and maintained on, computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.</p>
            </section>
            
            <section className="privacy-section">
                <h2>Contact</h2>
                <p>If you have any questions about this Privacy Policy, please contact us by email at support@example.com.</p>
            </section>
        </div>
       <FeatureCards/>
       <Footer/>
        </>
    );
};
export default PrivacyPolicy;