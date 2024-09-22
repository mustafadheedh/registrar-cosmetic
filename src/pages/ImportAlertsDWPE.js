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

const ImportAlertsDWPE = () => {
  return (
    <div className="p-8 bg-gray-50">
      <Helmet>
        <title>Import Alerts & DWPE - Registrar Cosmetics</title>
        <meta name="description" content="Learn about Import Alerts and Detention Without Physical Examination (DWPE) processes. Get expert assistance in submitting petitions to the FDA for removal from Import Alerts." />
        <meta name="keywords" content="Import Alerts, DWPE, FDA, Registrar Cosmetics, Detention Without Physical Examination, FDA petitions, supply chain" />
        <meta name="author" content="Registrar Cosmetics" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.example.com/import-alerts-dwpe" />
      </Helmet>
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="images/Import/Import Alerts & DWPE.jpg" alt="Import Alerts & DWPE" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-[#00df9a] mb-6">Import Alerts & DWPE</h1>
            <p className="text-lg text-gray-700">
              Import Alerts and Detention Without Physical Examination (DWPE) can disrupt your supply chain. We can help you navigate the process and submit effective petitions for removal.
            </p>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="images/Import/Import Alerts.jpg" alt="Import Alerts" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-4xl font-semibold text-[#00df9a] mb-6">Understanding Import Alerts and DWPE</h2>
            <p className="text-lg text-gray-700 mb-6">
              Import Alerts can create serious disruptions if not addressed properly. If your shipments are put on an Import Alert pink List, they may be subject to Detention Without Physical Examination (DWPE).
            </p>
            <p className="text-lg text-gray-700 mb-6">
              To resolve this, you need to:
              <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4 mt-4">
                <li>Develop a corrective action plan to bring your products back into compliance.</li>
                <li>Submit a formal petition to FDA to request removal from the Import Alert.</li>
              </ul>
            </p>
            <p className="text-lg text-gray-700">
              Registrar Cosmetics can assist you by gathering necessary documentation, drafting your petition, and ensuring your petition is complete and evidence-based.
            </p>
          </div>
        </div>
      </div>

      {/* Request Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12 flex justify-center">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl font-semibold text-[#00df9a] mb-6 text-center">Request Assistance with Import Alerts</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700">Country*</label>
              <select className="w-full p-3 border border-gray-300 rounded-md" required>
              <option>Select Country</option>
                {countryOptions.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Company Name*</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Company Name" required />
            </div>
            <div>
              <label className="block text-gray-700">Full Name*</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Contact Name" required />
            </div>
            <div>
              <label className="block text-gray-700">Email*</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Email" required />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number*</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Phone Number" required />
            </div>
            <div>
              <label className="block text-gray-700">Street Address*</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Physical Address" required />
            </div>
            <div>
              <label className="block text-gray-700">City*</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="City" required />
            </div>
            <div>
              <label className="block text-gray-700">State / Region</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="State / Region" />
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Postal Code" />
            </div>
            <div>
              <label className="block text-gray-700">Upload The Detention's Notice of Action</label>
              <input type="file" className="w-full p-3 border border-gray-300 rounded-md" accept=".jpg,.jpeg,.png,.pdf" />
            </div>
            <div className="text-center">
              <button type="submit" className="text-white py-3 px-6 rounded-lg text-lg bg-[#00df9a] hover:bg-[#00b37e]">Submit Request</button>
            </div>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">How does detention relate to import alerts?</h3>
            <p className="text-lg text-gray-700">
              Import Alerts result in multiple, continued detentions over time. They occur when FDA notices a pattern of non-compliance, leading to detention and potential refusal of shipments at the U.S. border.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">What is a pink List Import Alert and a Green List Import Alert?</h3>
            <p className="text-lg text-gray-700">
              A pink List Import Alert indicates that shipments from the listed company or product are subject to DWPE. A Green List Import Alert signifies that a company or product is compliant and no longer subject to DWPE.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">What products have worldwide import alerts?</h3>
            <p className="text-lg text-gray-700">
              Various products may have import alerts based on FDA’s findings. It’s essential to review the latest FDA import alerts for specific product categories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportAlertsDWPE;
