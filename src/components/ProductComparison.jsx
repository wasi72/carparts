import React from 'react';
import '../assets/styles/ProductComparison.css';
import Img1 from '../assets/imgs/breakdisc.webp';
import Img2 from '../assets/imgs/BrakeKits.webp';
import Img3 from '../assets/imgs/BrakeRotors.webp';

const ProductComparison = () => {
    const products = [
        {
            name: "Brake Disc",
            price: "$100.00",
            image: Img1,
            application: "Sport performance",
            description: "Summer/ dry and wet",
            mileageWarranty: "30,000",
            treadPattern: "Asymmetric",
            noiseLevel: "4",
        },
        {
            name: "Brake Kit",
            price: "$35.00",
            image: Img2,
            application: "Luxury performance",
            description: "All-seasoned",
            mileageWarranty: "50,000",
            treadPattern: "Symmetric",
            noiseLevel: "3",
        },
        {
            name: "Brake Rotors",
            price: "$60.00",
            image: Img3,
            application: "Luxury performance",
            description: "All-seasoned",
            mileageWarranty: "50,000",
            treadPattern: "Symmetric",
            noiseLevel: "3",
        },
    ];

    return (
        <div className="unique-product-comparison-container">
            <h2>Product comparison</h2>
            <p>Compare multiple products at once and get the best deal for yourself!</p>
            <div className="unique-comparison-card">
                <div className="unique-product-items">
                    {products.map((product, index) => (
                        <div key={index} className="unique-product-info">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p className="unique-price">{product.price}</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Application</td>
                                        <td><strong>{product.application}</strong><br/>{product.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Mileage warranty</td>
                                        <td>{product.mileageWarranty}</td>
                                    </tr>
                                    <tr>
                                        <td>Tread pattern</td>
                                        <td>{product.treadPattern}</td>
                                    </tr>
                                    <tr>
                                        <td>Noise level</td>
                                        <td>{product.noiseLevel}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
                <div className="unique-product-buttons">
                    {products.map((product, index) => (
                        <button key={index} className="unique-view-product">View {product.name}</button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductComparison;
