import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

// Updated product list with real images
const products = [
    {
        id: 1,
        name: 'Paracetamol',
        price: '$10',
        image: 'https://images.pexels.com/photos/3683076/pexels-photo-3683076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 2,
        name: 'Ibuprofen',
        price: '$15',
        image: 'https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 3,
        name: 'Vitamin C',
        price: '$20',
        image: 'https://images.pexels.com/photos/3683090/pexels-photo-3683090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 4,
        name: 'Antibiotic',
        price: '$25',
        image: 'https://images.pexels.com/photos/3683110/pexels-photo-3683110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 5,
        name: 'Cough Syrup',
        price: '$12',
        image: 'https://images.pexels.com/photos/3683124/pexels-photo-3683124.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 6,
        name: 'Pain Reliever',
        price: '$18',
        image: 'https://images.pexels.com/photos/3683146/pexels-photo-3683146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 7,
        name: 'Bandages',
        price: '$5',
        image: 'https://images.pexels.com/photos/3683154/pexels-photo-3683154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 8,
        name: 'Antiseptic Cream',
        price: '$8',
        image: 'https://images.pexels.com/photos/3683176/pexels-photo-3683176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 9,
        name: 'Cough Drops',
        price: '$4',
        image: 'https://images.pexels.com/photos/3683190/pexels-photo-3683190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 10,
        name: 'Cold Medicine',
        price: '$14',
        image: 'https://images.pexels.com/photos/3683204/pexels-photo-3683204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 11,
        name: 'Allergy Relief',
        price: '$7',
        image: 'https://images.pexels.com/photos/3683216/pexels-photo-3683216.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 12,
        name: 'Digestive Aid',
        price: '$11',
        image: 'https://images.pexels.com/photos/3683228/pexels-photo-3683228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 13,
        name: 'Ear Drops',
        price: '$9',
        image: 'https://images.pexels.com/photos/3683240/pexels-photo-3683240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 14,
        name: 'Eye Drops',
        price: '$10',
        image: 'https://images.pexels.com/photos/3683252/pexels-photo-3683252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 15,
        name: 'First Aid Kit',
        price: '$30',
        image: 'https://images.pexels.com/photos/3683264/pexels-photo-3683264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 16,
        name: 'Inhaler',
        price: '$20',
        image: 'https://images.pexels.com/photos/3683276/pexels-photo-3683276.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 17,
        name: 'Lip Balm',
        price: '$3',
        image: 'https://images.pexels.com/photos/3683288/pexels-photo-3683288.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 18,
        name: 'Multivitamins',
        price: '$15',
        image: 'https://images.pexels.com/photos/3683300/pexels-photo-3683300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 19,
        name: 'Pain Relief Cream',
        price: '$13',
        image: 'https://images.pexels.com/photos/3683312/pexels-photo-3683312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        id: 20,
        name: 'Thermometer',
        price: '$25',
        image: 'https://images.pexels.com/photos/3683324/pexels-photo-3683324.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
];

export default function Shop() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mx-auto w-full max-w-7xl">
            <header className="text-center py-10">
                <p className="text-lg mt-2">Explore our wide range of products</p>
                <div className="relative mt-4 max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-4 py-2 border rounded-lg"
                    />
                    <FiSearch className="absolute right-4 top-3 text-gray-500" size={20} />
                </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="border rounded-lg p-4 pb-6 shadow-md flex flex-col items-center">
                            <img src={product.image} alt={product.name} className="w-4/5 p-3 pt-4 rounded-3xl h-40 object-cover" />
                            <div className="mt-4 text-center">
                                <h2 className="text-xl font-semibold">{product.name}</h2>
                                <p className="text-lg mt-2">{product.price}</p>
                                <button
                                    className="mt-4 inline-flex items-center px-6 py-3 font-medium bg-orange-600 text-white rounded-lg hover:opacity-75"
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center col-span-full">No products found.</p>
                )}
            </div>

            <footer className="text-center py-6 bg-gray-800 text-white mt-10">
                <Link to="/" className="text-lg underline">
                    Go Back Home
                </Link>
            </footer>
        </div>
    );
}
