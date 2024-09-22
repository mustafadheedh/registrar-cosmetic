import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-10">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        {/* About Us Section */}
        <div className="w-full md:w-1/3 mb-6">
          <h4 className="text-lg text-[#00df9a] font-semibold mb-3 hover:text-gray-200">About Us</h4>
          <p className="text-sm">
            Registrar Cosmetics offers a wide range of FDA registration services
            tailored to help businesses comply with FDA regulations. From product
            listings to import alerts management, we guide you through every step.
            Our expert team ensures a smooth process, so you can focus on your core
            business while we handle the regulatory requirements.
          </p>
          <p className="mt-4 text-sm">
            <strong>Address:</strong> Wali Heights near nishtar park, Soldier Bazar, Karachi, Pakistan
          </p>
          <p className="text-sm">
            <strong>Phone:</strong> +1 (470) 823-0808
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full md:w-1/3 mb-6">
          <h4 className="text-lg text-[#00df9a] hover:text-gray-200 font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/adverse-events-management" className="hover:text-[#00df9a]">Adverse Events Management</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#00df9a]">Contact Us</a>
            </li>
            <li>
              <a href="/fda-export-certificate" className="hover:text-[#00df9a]">FDA Export Certificate</a>
            </li>
            <li>
              <a href="/fda-registration" className="hover:text-[#00df9a]">FDA Registration</a>
            </li>
            <li>
              <a href="/get-fda-registration" className="hover:text-[#00df9a]">Get FDA Registration</a>
            </li>
            <li>
              <a href="/import-alerts-dwpe" className="hover:text-[#00df9a]">Import Alerts DWPE</a>
            </li>
            <li>
              <a href="/labeling-review" className="hover:text-[#00df9a]">Labeling Review</a>
            </li>
            <li>
              <a href="/product-listings" className="hover:text-[#00df9a]">Product Listings</a>
            </li>
            <li>
              <a href="/us-agent" className="hover:text-[#00df9a]">US Agent</a>
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="w-full md:w-1/3 mb-6">
          <h4 className="text-lg text-[#00df9a] hover:text-gray-200 font-semibold mb-3">Follow Us</h4>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" className="text-gray-700 hover:text-pink-500">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="text-gray-700 hover:text-pink-500">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" className="text-gray-700 hover:text-pink-500">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-[#00df9a] hover:text-gray-200 border-gray-300 mt-8 pt-6 text-center">
        <p>&copy; 2024 Registrar Cosmetics. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
