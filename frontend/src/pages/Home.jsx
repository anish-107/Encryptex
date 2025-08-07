// src/pages/Home.jsx

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to Our Homepage!
        </h1>
        <p className="text-center text-lg text-gray-600">
          This is our new stylish homepage under construction.
        </p>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
