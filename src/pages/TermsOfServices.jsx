import React from "react";
import '../assets/styles/TermsOfService.css';
import Navbar from '../components/Navbar';
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";
const TermsOfServices = ()=>{
    return(
        <>
        <Navbar/>

        <div className="terms-container">
            <h1 className="terms-heading">Terms of Service</h1>
            <div className="terms-content">
                <section>
                    <h2>Online Store Terms</h2>
                    <p>
                        By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority and have given us your consent to allow any of your minor dependents to use this site.
                    </p>
                </section>

                <section>
                    <h2>General Conditions</h2>
                    <p>
                        We reserve the right to refuse service to anyone for any reason at any time.
                    </p>
                </section>

                <section>
                    <h2>Accuracy, Completeness, and Timeliness of Information</h2>
                    <p>
                        We are not responsible if information made available on this site is not accurate, complete, or current. The material on this site is provided for general information only.
                    </p>
                </section>

                <section>
                    <h2>Modifications to the Service and Prices</h2>
                    <p>
                        Prices for our products are subject to change without notice.
                    </p>
                </section>

                <section>
                    <h2>Products or Services</h2>
                    <p>
                        Certain products or services may be available exclusively online through the website.
                    </p>
                </section>

                <section>
                    <h2>Optional Tools</h2>
                    <p>
                        We may provide you with access to third-party tools over which we neither monitor nor have any control.
                    </p>
                </section>

                <section>
                    <h2>Third-Party Links</h2>
                    <p>
                        Certain content, products, and services available via our Service may include materials from third parties.
                    </p>
                </section>

                <section>
                    <h2>Personal Information</h2>
                    <p>
                        Your submission of personal information through the store is governed by our Privacy Policy.
                    </p>
                </section>

                <section>
                    <h2>Prohibited Uses</h2>
                    <p>
                        In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content for any unlawful purpose.
                    </p>
                </section>

                <section>
                    <h2>Indemnification</h2>
                    <p>
                        You agree to indemnify, defend, and hold harmless our company and its affiliates.
                    </p>
                </section>

                <section>
                    <h2>Severability</h2>
                    <p>
                        In the event that any provision of these Terms of Service is determined to be unlawful, void, or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law.
                    </p>
                </section>

                <section>
                    <h2>Termination</h2>
                    <p>
                        The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes.
                    </p>
                </section>

                <section>
                    <h2>Governing Law</h2>
                    <p>
                        These Terms of Service shall be governed by and construed in accordance with the laws.
                    </p>
                </section>

                <section>
                    <h2>Changes to Terms of Service</h2>
                    <p>
                        You can review the most current version of the Terms of Service at any time at this page.
                    </p>
                </section>

                <section>
                    <h2>Contact Information</h2>
                    <p>
                        Questions about the Terms of Service should be sent to us at info@example.com.
                    </p>
                </section>
            </div>
        </div>

       <FeatureCards/>
       <Footer/>
        </>
    );
};
export default TermsOfServices;