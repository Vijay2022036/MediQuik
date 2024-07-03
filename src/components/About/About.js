import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 text-gray-800 md:px-12 xl:px-6">
                <div className="text-center ml-14 mr-14">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mt-10 mb-16">
                        Welcome to MediQuik
                    </h2>
                    <hr ></hr>
                    <p className="text-lg text-left text-gray-800 leading-relaxed mb-4">
                    At MediQuik, we are committed to providing high-quality healthcare products and medicines to 
                    our customers. Our mission is to ensure your health and well-being through reliable and efficient
                     service. We strive to offer a wide range of products, from everyday essentials to specialized 
                     treatments, all at competitive prices. Our team is dedicated to delivering excellent customer 
                     service and making healthcare more accessible and convenient for everyone.
                    </p>
                    <p className="text-lg text-left text-gray-800 leading-relaxed mb-20">
                        We offer a wide range of healthcare products and medical equipment at competitive prices, 
                        with fast and reliable delivery services to your doorstep.
                    </p>
                </div>
            </div>
        </div>
    );
}
