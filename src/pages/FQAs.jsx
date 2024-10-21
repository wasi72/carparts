import React from "react";
import { useState } from "react";
import '../assets/styles/FAQs.css';
import Navbar from '../components/Navbar';
import UpperComponent from '../components/UpperComponent';
import FeatureCards from "../components/FeatureCards";
import Footer from "../components/Footer";
const FAQs = ()=>{
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    const faqData = [
        {
            category: "Ordering",
            description: "All your queries answered regarding ordering.",
            questions: [
                "How do I place an order?",
                "Can I add or remove items from my cart?",
                "Do I need an account to place an order?"
            ]
        },
        {
            category: "Product",
            description: "All your queries answered regarding products.",
            questions: [
                "How do I find the right part for my car?",
                "What if I'm unsure about a part's compatibility?",
                "Do you offer product warranties?"
            ]
        },
        {
            category: "Payment",
            description: "All your queries answered regarding payments.",
            questions: [
                "What payment methods do you accept?",
                "Is my payment information secure?",
                "Do you offer COD?"
            ]
        },
        {
            category: "Shipping",
            description: "All your queries answered regarding shipping.",
            questions: [
                "What are your shipping options?",
                "How much does shipping cost?",
                "Can I track my order?"
            ]
        },
        {
            category: "Return products",
            description: "All your queries answered regarding return.",
            questions: [
                "What is your return policy?",
                "How do I return an item?",
                "Who pays for return shipping?"
            ]
        }
    ];

    return(
        <>
        <Navbar/>
        <UpperComponent
         page="FAQs"
         heading="Frequently asked questions" 
         description="Have questions? Read below for the answers." 
       />
        <div className="faq-container">
            {faqData.map((section, index) => (
                <div key={index} className="faq-section">
                    <div className="faq-header">
                        <h2>{section.category}</h2>
                        <p>{section.description}</p>
                    </div>
                    <div className="faq-questions">
                        {section.questions.map((question, qIndex) => (
                            <div key={qIndex} className="faq-item">
                                <button onClick={() => toggleFAQ(`${index}-${qIndex}`)}>
                                    {question}
                                    <span className="faq-icon">{openFAQ === `${index}-${qIndex}` ? '-' : '+'}</span>
                                </button>
                                {openFAQ === `${index}-${qIndex}` && (
                                    <div className="faq-answer">
                                        <p>This is the answer to "{question}".</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
       <FeatureCards/>
       <Footer/>
        </>
    );
};
export default FAQs;