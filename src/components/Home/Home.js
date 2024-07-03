import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl bg-gray-100">
            {/* Hero Section */}
            <header className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16 bg-gradient-to-b from-orange-600 to-orange-400">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h1 className="text-4xl font-bold sm:text-5xl">
                            Your Health, Our Priority
                            <span className="hidden sm:block text-4xl">MediQuik</span>
                        </h1>
                        <p className="text-lg sm:text-xl">
                            Get your medicines delivered to your doorstep.
                        </p>
                        <Link
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-600 rounded-lg hover:opacity-75 mt-6 sm:mt-8"
                            to="/shop"
                        >
                            <svg
                                fill="white"
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            &nbsp; Shop Now
                        </Link>
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="py-10 bg-gray-100 mt-36">
                <h2 className="text-center text-2xl sm:text-5xl font-medium mb-20">Why Choose MediQuik?</h2>
                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-3 mt-8">
                    <div className="text-center text-gray-800 bg-white rounded-xl p-6 shadow-md">
                        <h3 className="text-xl font-bold text-gray-900">Wide Range of Products</h3>
                        <p>We offer a variety of medicines, healthcare products, and medical equipment.</p>
                    </div>
                    <div className="text-center text-gray-800 bg-white rounded-xl p-6 shadow-md">
                        <h3 className="text-xl font-bold text-gray-900">Fast Delivery</h3>
                        <p>Get your orders delivered quickly and safely to your doorstep.</p>
                    </div>
                    <div className="text-center text-gray-800 bg-white rounded-xl p-6 shadow-md">
                        <h3 className="text-xl font-bold text-gray-900">Affordable Prices</h3>
                        <p>Enjoy competitive prices and great discounts on your purchases.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-gray-100 py-16 mt-32">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-5xl font-bold text-center mb-16">Stay Healthy, Stay Happy</h2>
                    <p className="text-lg text-center mb-14">
                        We care about your health and well-being. Explore our wide range of products and services designed to meet your medical needs.
                    </p>
                    <div className="flex justify-center mb-20">
                        <Link
                            to="/shop"
                            className="inline-flex items-center px-8 py-4 bg-orange-600 text-white font-medium rounded-lg hover:opacity-75"
                        >
                            Shop Now
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
