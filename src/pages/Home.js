import React from 'react';
import { Helmet } from 'react-helmet';


const Home = () => {
  return (
    <div className="p-8 bg-gray-50">
      {/* Helmet for SEO */}
      <Helmet>
        <title>Registrar Cosmetics - FDA MoCRA Compliance Solutions</title>
        <meta name="description" content="Registrar Cosmetics offers comprehensive FDA MoCRA compliance solutions to help cosmetic companies meet the new regulations. Trust our expertise in cosmetic industry compliance." />
        <meta name="keywords" content="FDA MoCRA compliance, cosmetic industry compliance, cosmetic FDA registration, cosmetic product listings, adverse event reporting, cosmetic labeling, cosmetic facility registration" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Registrar Cosmetics" />
        <meta property="og:title" content="Registrar Cosmetics - FDA MoCRA Compliance Solutions" />
        <meta property="og:description" content="Get the most comprehensive FDA MoCRA compliance solutions for your cosmetic brand. Trust Registrar Cosmetics for expert regulatory support." />
        <meta property="og:image" content="/images/home/FDA MoCRA Compliance.jpeg" />
        <meta property="og:url" content="https://www.registrarcosmetics.com" />
        <meta name="twitter:title" content="Registrar Cosmetics - FDA MoCRA Compliance Solutions" />
        <meta name="twitter:description" content="Registrar Cosmetics helps cosmetic companies achieve FDA MoCRA compliance with ease. Learn more about our regulatory services." />
        <meta name="twitter:image" content="/images/home/FDA MoCRA Compliance.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.registrarcosmetics.com" />
      </Helmet>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
        <img 
    src="/images/home/FDA MoCRA Compliance.jpeg" 
    alt="FDA MoCRA Compliance" 
    style={{ width: '500px', height: 'auto' }} 
    className="rounded-lg shadow-lg" 
  />        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#00df9a] mb-6">
          Where Cosmetics Meets FDA MoCRA Compliance
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          The most significant changes to the U.S. cosmetic industry are in place. Registrar Cosmetics offers the most comprehensive compliance solutions to help cosmetics companies become FDA MoCRA compliant.
        </p>
      </div>
      </div>
      </div>

      {/* MoCRA Compliance Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
        <img 
  src="/images/home/MoCRA Compliance.jpeg" 
  alt="MoCRA Compliance" 
  style={{ width: '500px', height: 'auto' }} 
  className="rounded-lg shadow-lg" 
/>

        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="my-12 text-left bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">
          MoCRA Compliance Goes Beyond Registration
        </h2>
        <p className="text-gray-600 mb-4">
          Registrar Cosmetics’s experienced team of cosmetic regulatory specialists can assure your company maintains compliance before and after FDA enforcement begins on July 1, 2024.
        </p>
      </div>
      </div>
      </div>

      {/* Compliance Solutions Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/home/Cosmetic FDA Compliance.jpg" alt="Cosmetic FDA Compliance" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="my-12 text-left bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">
          Registrar Cosmetics Offers the Most Extensive Cosmetic FDA Compliance Solution
        </h2>
        <p className="text-gray-600 mb-4">
          From small, independent brands to well-established cosmetic giants, we simplify MoCRA compliance so cosmetic companies of any size can distribute cosmetic and personal care products confidently and safely.
        </p>
        
      </div>
      </div>
      </div>

      {/* Expertise Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/home/Unmatched Expertise.jpg" alt="Unmatched Expertise" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">Unmatched Expertise</h2>
        <p className="text-gray-600 mb-4">
          With more than 20 years of experience in FDA compliance across 190+ countries, more than 1,000 cosmetic companies already trust Registrar to help with FDA registration and product listings process.
        </p>
       
      </div>
      </div>
      </div>

      {/* FDA Compliance Solutions Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/home/FDA Compliance Solutions.jpg" alt="FDA Compliance Solutions" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">Unparalleled FDA Compliance Solutions</h2>
        <p className="text-gray-600 mb-4">
          Our cost-saving, customizable solutions deliver regulatory support through every aspect of FDA MoCRA compliance.
        </p>
        </div>
        </div>
        </div>

      {/* Privacy Protection Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/home/Privacy Protection.jpg" alt="Privacy Protection" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">Industry's Best Data and Privacy Protection</h2>
        <p className="text-gray-600 mb-4">
          Led with a security-by-design approach, our ISO 27001-certified infrastructure ensures the highest level of data and privacy protection.
        </p>
      </div>
      </div>
      </div>

      {/* Facility Registration Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/home/Facility Registration.jpg" alt="Facility Registration" style={{ width: '500px', height: '450px' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="my-12 text-left bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">Facility Registration</h2>
        <p className="text-gray-600 mb-4">
          The first step of MoCRA compliance is registering your cosmetic facility with FDA. We can help assure you’re registered before FDA enforcement begins and serve as your U.S. Agent for non-U.S. facilities.
        </p>
      </div>
      </div>
      </div>

      {/* Product Listings Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/home/Product Listings.jpeg" alt="Product Listings" style={{ width: '100%', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8"></div>
      <div className="my-12 text-left bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">Product Listings</h2>
        <p className="text-gray-600 mb-4">
          FDA cosmetic listings are complicated to file. We help you save time, money, and the frustration of doing it yourself by making product listings seamless with the help of our dedicated cosmetics compliance team.
        </p>
      </div>
      </div>

      {/* Adverse Event Reporting Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/home/Adverse Event Reporting.jpg" alt="Adverse Event Reporting" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="my-12 text-left bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">Adverse Event Reporting</h2>
        <p className="text-gray-600 mb-4">
          Use our Adverse Events Reporting Software to easily collect adverse event reports, get branded URLs or QR codes for your product label, and receive organized reports to review, all while ensuring your company data is protected.
        </p>
       
      </div>
      </div>
      </div>


      {/* Label & Ingredient Review Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/home/Label & Ingredient Review.jpeg" alt="Label & Ingredient Review" style={{ width: '500px', height: '350px' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="my-12 text-left bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">Label & Ingredient Review</h2>
        <p className="text-gray-600 mb-4">
          MoCRA imposes new changes on how cosmetic product labels are handled. Our experienced team of labeling specialists make it easy for your company to remain compliant with all labeling regulations.
        </p>
        
      </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
