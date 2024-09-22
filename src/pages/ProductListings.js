import React from 'react';
import { Helmet } from 'react-helmet';


const ProductListings = () => {
  return (
    <div className="p-8 bg-gray-50">
      <Helmet>
        {/* Title and Meta Description for SEO */}
        <title>Registrar Cosmetics - FDA Cosmetic Product Listings</title>
        <meta 
          name="description" 
          content="Simplify the FDA cosmetic product listing process with Registrar Cosmetics. Whether you're registering one product or a thousand, we ensure FDA compliance." 
        />
        <meta name="keywords" content="FDA Cosmetic Product Listings, Registrar Cosmetics, FDA Compliance, SPL format, Cosmetic Products, Regulatory Support" />
        <meta name="author" content="Registrar Cosmetics" />
        
        {/* Open Graph for better sharing on social media */}
        <meta property="og:title" content="Registrar Cosmetics - FDA Cosmetic Product Listings" />
        <meta property="og:description" content="Need help with FDA Cosmetic Product Listings? Registrar Cosmetics offers regulatory support for both new businesses and global brands." />
        <meta property="og:image" content="/images/Product/Product Listings.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-website.com/product-listings" />
        
        {/* Twitter Cards for better sharing on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Registrar Cosmetics - FDA Cosmetic Product Listings" />
        <meta name="twitter:description" content="FDA compliance made easy. Let Registrar Cosmetics guide you through the product listing process." />
        <meta name="twitter:image" content="/images/Product/Product Listings.jpg" />
      </Helmet>


      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/Product/Product Listings.jpg" alt="Product Listings" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#00df9a] mb-6">Submitting FDA Cosmetic Product Listings Can Be Complex</h1>
        <p className="text-lg text-gray-700">
          Let us take care of it for you. Registrar Cosmetics’s experienced product listing specialists simplify the time-consuming process of submitting FDA cosmetic product listings.
        </p>
      </div>
      </div>
      </div>

      {/* Key Services Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/Product/1 Product to 1,000+.jpg" alt="1 Product to 1,000+" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-4xl font-semibold text-[#00df9a] mb-6">From 1 Product to 1,000+ Products, We Can Help</h2>
        <p className="text-lg text-gray-700 mb-6">
          Whether you are just starting out and submitting your first product to the U.S. or a well-established global brand with thousands of product listings, our experienced regulatory specialists make the entire process easier to maintain FDA compliance.
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>FDA-compliant product listings for cosmetics</li>
          <li>Assistance with Structured Product Labeling (SPL) format</li>
          <li>Guidance for navigating the Cosmetics Direct portal</li>
          <li>Regulatory support for global brands and new businesses</li>
        </ul>
      </div>
      </div>
      </div>

      {/* Process Information Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/Product/Registrar Cosmetics.jpg" alt="Registrar Cosmetics" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-6">Why Choose Registrar Cosmetics for Product Listings?</h2>
        <p className="text-lg text-gray-700 mb-6">
          FDA announced that the process to list a cosmetic product would be similar to listing a drug, using the Structured Product Labeling (SPL) format. At Registrar Cosmetics, we are well-versed with submitting product listings and have already assisted hundreds of cosmetic companies register their facilities and submit product listings to FDA.
        </p>
      </div>
      </div>
      </div>
    </div>
  );
};

export default ProductListings;
