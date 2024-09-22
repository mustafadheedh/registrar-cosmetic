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

const FDAExportCertificate = () => {
  return (
    <div className="p-8 bg-gray-50">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>FDA Export Certificate | Registrar Cosmetics</title>
        <meta
          name="description"
          content="Obtain your FDA Export Certificate with ease. Registrar Cosmetics provides comprehensive services for global distribution of cosmetics, medical devices, dietary supplements, and more."
        />
        <meta
          name="keywords"
          content="FDA Export Certificate, Certificate to Foreign Government, Certificate for Cosmetics, FDA Compliance, Registrar Cosmetics"
        />
      </Helmet>

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#00df9a] mb-6">FDA Export Certificate</h1>
        <p className="text-lg text-gray-700">
          Obtain an FDA Export Certificate to facilitate the global distribution of your products. Registrar Cosmetics can help you navigate the process.
        </p>
      </div>

      {/* Certificate Types Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-4xl font-semibold text-[#00df9a] mb-6">Types of FDA Export Certificates</h2>
        <p className="text-lg text-gray-700 mb-6">
          FDA issues export certificates based on the type of product. Choose the relevant certificate for your needs:
        </p>
        <ul className="list-disc pl-6 text-lg text-gray-700 space-y-4">
          <li><strong>Certificate to Foreign Government</strong> - For conventional foods, food additives, food contact substances, and infant formula.</li>
          <li><strong>Certificate for Cosmetics</strong> - For cosmetic products identified under section 201(i) of the FD&C Act.</li>
          <li><strong>Certificate to Foreign Government</strong> - For medical devices.</li>
          <li><strong>Health Certificates</strong> - For collagen and gelatin products intended for export to the European Union (EU).</li>
          <li><strong>Certificate of a Pharmaceutical Product</strong> - For human drugs.</li>
          <li><strong>Certificate of Free Sale</strong> - For dietary supplements, medical foods, and foods for special dietary use.</li>
        </ul>
      </div>

      {/* Request Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12 mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-6 text-center">Request Your Export Certificate</h2>
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
            <label className="block text-gray-700">Contact Name*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Contact Name" required />
          </div>
          <div>
            <label className="block text-gray-700">Email*</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Email" required />
          </div>
          <div>
            <label className="block text-gray-700">Phone*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Phone" required />
          </div>
          <div>
            <label className="block text-gray-700">Physical Address*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Physical Address" required />
          </div>
          <div>
            <label className="block text-gray-700">City*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="City" required />
          </div>
          <div>
            <label className="block text-gray-700">State / Province / Region</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="State / Province / Region" />
          </div>
          <div>
            <label className="block text-gray-700">Postal Code</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Postal Code" />
          </div>
          <div>
            <label className="block text-gray-700">What type of Export Certificate do you need?*</label>
            <select className="w-full p-3 border border-gray-300 rounded-md" required>
              <option value="">Select Certificate Type</option>
              <option value="food">Certificate to Foreign Government - Food</option>
              <option value="dietary_supplement">Certificate of Free Sale - Dietary Supplements</option>
              <option value="medical_devices">Certificate to Foreign Government - Medical Devices</option>
              <option value="pharmaceutical">Certificate of a Pharmaceutical Product</option>
              <option value="cosmetic">Certificate of a Cosmetic Product</option>
              <option value="collagen_gelatin">Health Certificates - Collagen and Gelatin Exported to the EU</option>
            </select>
          </div>
          <div className="text-center">
            <button type="submit" className="text-white py-3 px-6 rounded-lg text-lg bg-[#00df9a] hover:bg-[#00b37e]">Submit Request</button>
          </div>
        
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-6">Connect With Us</h2>
        <p className="text-lg text-gray-700 mb-4">For further assistance, please contact us at:</p>
        <p className="text-lg text-gray-700 mb-2">144 Research Drive, Hampton, Virginia 23666 USA</p>
        <p className="text-lg text-gray-700 mb-2">Phone: +1-757-224-0177</p>
        <p className="text-lg text-gray-700 mb-2">Fax: +1-757-224-0179</p>
        <p className="text-lg text-gray-700">Email: <a href="mailto:info@registrarcorp.com" className="text-pink-600 hover:underline">info@registrarcorp.com</a></p>
      </div>
    </div>
  );
};

export default FDAExportCertificate;
