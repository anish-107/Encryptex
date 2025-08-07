// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">MySite</Link>
        <div className="space-x-6">
          <Link to="/home" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link to="/" className="text-gray-700 hover:text-blue-600">Coming Soon</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
