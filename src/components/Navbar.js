import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-black p-4 text-white sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Project Name */}
        <div className="text-3xl font-bold text-[#00df9a] flex items-center">
  <Link to="/" className="hover:text-gray-200 flex items-center">
    <img src="/images/Registrar cosmetic logo.png" alt="Registrar Cosmetics Logo" style={{ width: '250px', height: '120px' }} className="rounded-lg shadow-lg" /> {/* Adjust size as needed */}
  </Link>
</div>


        {/* Navbar Links */}
        <ul className="flex space-x-4 items-center">
          {/* Home Link */}
          <li><Link to="/" className="hover:bg-[#00df9a] rounded-xl px-4 py-2 m-2 duration-300 hover:text-black">Home</Link></li>

          {/* Services Dropdown */}
          <li className="relative">
            <button 
              onClick={toggleDropdown} 
              className="focus:outline-none hover:bg-[#00df9a] rounded-xl px-4 py-2 m-2 duration-300 hover:text-black"
            >
              Services
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white text-black rounded-xl shadow-lg w-48">
                <li>
                  <Link to="/adverse-events-management" className="block px-4 py-2 hover:bg-[#00df9a] duration-300 hover:text-black" onClick={closeDropdown}>
                    Adverse Events Management
                  </Link>
                </li>
                <li>
                  <Link to="/fda-export-certificate" className="block px-4 py-2 hover:bg-[#00df9a] duration-300 hover:text-black" onClick={closeDropdown}>
                    FDA Export Certificate
                  </Link>
                </li>
                <li>
                  <Link to="/fda-registration" className="block px-4 py-2 hover:bg-[#00df9a] duration-300 hover:text-black" onClick={closeDropdown}>
                    FDA Registration
                  </Link>
                </li>
                <li>
                  <Link to="/import-alerts-dwpe" className="block px-4 py-2 hover:bg-[#00df9a] duration-300 hover:text-black" onClick={closeDropdown}>
                    Import Alerts & DWPE
                  </Link>
                </li>
                <li>
                  <Link to="/label-ingredient-review" className="block px-4 py-2 hover:bg-[#00df9a] duration-300 hover:text-black" onClick={closeDropdown}>
                    Label & Ingredient Review
                  </Link>
                </li>
                <li>
                  <Link to="/product-listings" className="block px-4 py-2 hover:bg-[#00df9a] duration-300 hover:text-black" onClick={closeDropdown}>
                    Product Listings
                  </Link>
                </li>
                <li>
                  <Link to="/us-agent" className="block px-4 py-2 hover:bg-[#00df9a] duration-300 hover:text-black" onClick={closeDropdown}>
                    US Agent
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Contact Us Link */}
          <li><Link to="/contact-us" className="hover:bg-[#00df9a] rounded-xl px-4 py-2 m-2 duration-300 hover:text-black">Contact Us</Link></li>
          <li><Link to="/get-fda-registration" className="hover:bg-[#00df9a] rounded-xl px-4 py-2 m-2 duration-300 hover:text-black">Get FDA Registration</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
