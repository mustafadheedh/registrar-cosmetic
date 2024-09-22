import React from 'react';
import { Helmet } from 'react-helmet';



const countryOptions = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Italy", "Spain", "Netherlands", "Sweden",
  "China", "Japan", "South Korea", "India", "Brazil", "Mexico", "Russia", "South Africa", "New Zealand", "Singapore",
  "Argentina", "Belgium", "Austria", "Switzerland", "Denmark", "Norway", "Finland", "Ireland", "Portugal", "Greece",
  "Poland", "Turkey", "Israel", "Saudi Arabia", "United Arab Emirates", "Malaysia", "Thailand", "Vietnam", "Philippines",
  "Egypt", "Chile", "Colombia", "Peru", "Ukraine", "Hungary", "Czech Republic", "Slovakia", "Romania", "Pakistan",
  "Bangladesh", "Sri Lanka", "Nepal", "Jordan", "Qatar", "Kuwait", "Oman", "Bahrain", "Lebanon", "Cyprus", "Malta",
  "Estonia", "Latvia", "Lithuania", "Luxembourg", "Iceland", "Andorra", "Monaco", "San Marino", "Liechtenstein", "Malawi",
  "Zambia", "Zimbabwe", "Botswana", "Namibia", "Angola", "Mozambique", "Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi",
  "Ethiopia", "Somalia", "Yemen", "Armenia", "Georgia", "Azerbaijan", "Kazakhstan", "Uzbekistan", "Turkmenistan", "Kyrgyzstan",
  "Tajikistan", "Mongolia", "Brunei", "Papua New Guinea", "Fiji", "Solomon Islands", "Vanuatu", "Samoa", "Tonga", "Kiribati",
  "Tuvalu", "Nauru", "Marshall Islands", "Palau", "Micronesia", "Western Sahara", "Mauritania", "Gambia", "Senegal",
  "Guinea", "Sierra Leone", "Liberia", "Central African Republic", "South Sudan", "Eritrea", "Djibouti", "Comoros",
  "Seychelles", "Cape Verde", "São Tomé and Príncipe", "Benin", "Burkina Faso", "Ivory Coast", "Gabon", "Equatorial Guinea",
  "Chad", "Niger", "Mali", "Mauritius", "Eswatini", "Lesotho", "Swaziland", "South Sudan", "Palestine", "Kosovo",
  "Serbia", "Montenegro", "Bosnia and Herzegovina", "North Macedonia", "Albania", "Moldova", "Belarus", "Kazakhstan",
  "Moldova", "Belarus", "Lithuania", "Latvia", "Estonia", "Armenia", "Georgia", "Azerbaijan", "Cyprus", "Lebanon"
];


const USAgent = () => {
  return (
    <div className="p-8 bg-gray-50">

<Helmet>
        {/* SEO Meta Tags */}
        <title>Designate Registrar Cosmetics as Your U.S. Agent for FDA Compliance</title>
        <meta 
          name="description" 
          content="Registrar Cosmetics helps non-US companies meet FDA requirements by acting as your U.S. agent. From facility registration to shipment assistance, we've got you covered." 
        />
        <meta 
          name="keywords" 
          content="U.S. agent, FDA compliance, Registrar Cosmetics, food facility registration, medical devices, cosmetics, dietary supplements, FDA requirements" 
        />
        <meta name="author" content="Registrar Cosmetics" />
        
        {/* Open Graph for better sharing on social media */}
        <meta property="og:title" content="Registrar Cosmetics - Your U.S. Agent for FDA Compliance" />
        <meta property="og:description" content="Non-U.S. companies can designate Registrar Cosmetics as their U.S. agent to meet FDA compliance requirements. We offer facility registration, shipment assistance, and more." />
        <meta property="og:image" content="/images/USAgent/Registrar Cosmetics.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://your-website.com/us-agent" />

        {/* Twitter Cards for better sharing on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Registrar Cosmetics - Your U.S. Agent for FDA Compliance" />
        <meta name="twitter:description" content="Registrar Cosmetics makes it simple to designate a U.S. agent for FDA compliance. We offer support across a variety of industries, including food, cosmetics, and medical devices." />
        <meta name="twitter:image" content="/images/USAgent/Registrar Cosmetics.jpg" />
      </Helmet>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/USAgent/Changing your U.S.jpg" alt="Changing your U.S" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#00df9a] mb-6">Changing your U.S. Agent is Simple with Registrar Cosmetics</h1>
        <p className="text-lg text-gray-700">
          The U.S. Food and Drug Administration (FDA) requires food and beverage, cosmetic, medical device, drug, and radiation-emitting device companies located outside of the United States to designate a U.S. Agent for FDA communication.
        </p>
      </div>
      </div>
      </div>

      {/* How Registrar Cosmetics Can Help Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/USAgent/Registrar Cosmetics.jpg" alt="Registrar Cosmetics  " style={{ width: '500px', height: '650px' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-4xl font-semibold text-[#00df9a] mb-6">How Registrar Cosmetics Can Help</h2>
        <p className="text-lg text-gray-700 mb-6">
          FDA requires your U.S. Agent to have a permanent address in the United States. As your U.S. Agent, we offer more than just communication with FDA on your behalf. You will also receive:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>Assurance that your facility’s unique facility identifier (UFI), unique device identifier (UDI), or facility establishment number (FEI) is accurate</li>
          <li>Updates to your FDA Registration</li>
          <li>Assistance with Prior Notice filings for your exports to the USA</li>
          <li>Detention Assistance when seeking the release of a detained shipment</li>
          <li>Access to Automated Compliance for Exporters, an innovative supply chain management platform</li>
        </ul>
        <p className="text-gray-700 mt-6">
          <strong>Note:</strong> A DUNS number is the only UFI currently recognized by FDA for food facility registration.
        </p>
      </div>
      </div>
      </div>

      {/* Designate Registrar Cosmetics as U.S. Agent */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-6">Designate Registrar Cosmetics as Your U.S. Agent</h2>
        <p className="text-lg text-gray-700 mb-6">Simply complete the form below to begin the process of designating Registrar Cosmetics as your U.S. Agent.</p>
        
        {/* Form Container */}
        <div className="flex justify-center">
          <form className="space-y-6 w-full max-w-lg">
            <div>
              <label htmlFor="industry" className="block text-gray-700 mb-2">Choose Your Industry*</label>
              <select id="industry" className="p-4 border rounded-md w-full">
                <option>Select</option>
                <option>Food, Beverages, or Dietary Supplements</option>
                <option>Medical Devices</option>
                <option>Cosmetics</option>
                <option>Drugs</option>
                <option>Other FDA-Regulated Products</option>
              </select>
            </div>

            <div>
              <label htmlFor="source" className="block text-gray-700 mb-2">How did you hear about us?*</label>
              <select id="source" className="p-4 border rounded-md w-full">
                <option>Select</option>
                {/* Add options for this field */}
              </select>
            </div>

            <div>
              <label htmlFor="productTypes" className="block text-gray-700 mb-2">What types of products does your company handle?*</label>
              <select id="productTypes" className="p-4 border rounded-md w-full">
                <option>Select</option>
                <option>Food, Beverages, or Dietary Supplements</option>
                <option>Medical Devices</option>
                <option>Cosmetics</option>
                <option>Drugs</option>
                <option>Other FDA-Regulated Products</option>
              </select>
            </div>

            <div>
              <label htmlFor="country" className="block text-gray-700 mb-2">Facility Country*</label>
              <select id="country" className="p-4 border rounded-md w-full">
              <option>Select Country</option>
                {countryOptions.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="p-4 text-white py-3 px-6 rounded-md text-lg bg-[#00df9a] hover:bg-[#00b37e] w-full">Submit</button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default USAgent;
