import React from 'react';


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

const FDARegistration = () => {
  return (
    <div className="p-8 bg-gray-50">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#00df9a] mb-6">
          FDA Cosmetic Compliance Done Right
        </h1>
        <p className="text-lg text-gray-700">
          Don’t wait! FDA enforcement has begun. We help thousands of companies become FDA MoCRA compliant.
        </p>
      </div>

      {/* Key Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12 text-center">
        {[
          { title: "Cosmetic Clients", value: "1,000+" },
          { title: "Countries", value: "190+" },
          { title: "Worldwide Offices", value: "20" },
          { title: "Customer Rating", value: "4.7/5" },
          { title: "Years of Service", value: "20+" },
          { title: "Company in Industry", value: "#1" }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[#00df9a]">{stat.value}</h3>
            <p className="text-gray-600">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Contact Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12 flex justify-center">
        <div className="w-full max-w-4xl">
          <h2 className="text-3xl font-semibold text-[#00df9a] mb-6 text-center">Start becoming compliant today!</h2>
          <form className="space-y-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Contact Name*" className="p-4 border border-gray-300 rounded-md" />
              <input type="email" placeholder="Contact Email*" className="p-4 border border-gray-300 rounded-md" />
              <input type="text" placeholder="Legal Company Name*" className="p-4 border border-gray-300 rounded-md" />
              <select className="p-4 border border-gray-300 rounded-md">
                <option>Select Country</option>
                {countryOptions.map((country, index) => (
                  <option key={index} value={country}>{country}</option>
                ))}
              </select>
              <input type="tel" placeholder="Contact Phone*" className="p-4 border border-gray-300 rounded-md w-full" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">How did you hear about us?</label>
              <select className="p-4 border border-gray-300 rounded-md w-full">
                <option>Select</option>
                <option>FDA registration and U.S. Agent for FDA communication</option>
                <option>Product listings</option>
                <option>Adverse event management software</option>
                <option>I don’t know and need assistance</option>
              </select>
            </div>
            {/* Service Needs */}
            <div>
              <label className="block text-gray-700 mb-2">What services do you need?*</label>
              <select className="p-4 border border-gray-300 rounded-md w-full">
                <option>Select</option>
                <option>FDA registration and U.S. Agent for FDA communication</option>
                <option>Product listings</option>
                <option>Adverse event management software</option>
                <option>I don’t know and need assistance</option>
              </select>
            </div>

            <button type="submit" className="p-4 text-white py-3 px-6 rounded-lg text-lg bg-[#00df9a] hover:bg-[#00b37e] w-full">Save & Exit</button>
          </form>
        </div>
      </div>

      {/* Services Section */}
      <div className="my-12">
        <h2 className="text-4xl font-semibold text-[#00df9a] mb-6 text-center">U.S. FDA Cosmetic Compliance Solutions</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Registrar Cosmetics assists over 30,000 companies each year across 190+ countries to achieve FDA compliance. We know how to help you meet MoCRA requirements before FDA enforcement begins.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Facility Registration",
              description: "We can help you achieve MoCRA compliance by registering your cosmetic facilities with FDA.",
              btnText: "Register Today"
            },
            {
              title: "Product Listings",
              description: "We help you save time and frustration by making product listings quick and easy.",
              btnText: "List Products"
            },
            {
              title: "Adverse Event Reporting",
              description: "Use our software to collect and organize adverse event reports quickly and easily.",
              btnText: "Get Started"
            },
            {
              title: "Label & Ingredient Review",
              description: "Ensure compliance with new cosmetic product labeling regulations.",
              btnText: "Discover How"
            },
            {
              title: "Cosmetic Formulation Software",
              description: "Accelerate product development and streamline operations with Cosmetri.",
              btnText: "Explore Software"
            },
            {
              title: "Cosmetic Compliance Training",
              description: "Become an expert in MoCRA and cosmetic GMPs through our online courses.",
              btnText: "Start Training"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">{service.title}</h3>
              <p className="text-gray-700 mb-6">{service.description}</p>
              <button className="p-4 text-white py-3 px-6 rounded-md text-lg bg-[#00df9a] hover:bg-[#00b37e]">{service.btnText}</button>
            </div>
          ))}
        </div>
      </div>

      {/* Webinars Section */}
      <div className="my-12 bg-gray-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4 text-center">Hear From Our Industry Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Practical Steps to be MoCRA Compliant Quickly",
              description: "This on-demand webinar shares key provisions of MoCRA that you must know.",
              btnText: "Watch Now"
            },
            {
              title: "Key Considerations for Exporters of Cosmetics",
              description: "Insights on navigating new FDA requirements for U.S. expansion.",
              btnText: "Watch Now"
            },
            {
              title: "Navigate the Clean Beauty Movement with Confidence",
              description: "Understand the complexities behind the clean beauty trend and regulatory pitfalls.",
              btnText: "Watch Now"
            }
          ].map((webinar, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">{webinar.title}</h3>
              <p className="text-gray-700 mb-6">{webinar.description}</p>
              <button className="p-4 text-white py-3 px-6 rounded-md text-lg bg-[#00df9a] hover:bg-[#00b37e]">{webinar.btnText}</button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="my-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              question: "What is MoCRA?",
              answer: "MoCRA is the Modernization of Cosmetics Regulation Act which expands FDA's authority over cosmetics distributed in the U.S."
            },
            {
              question: "How will MoCRA affect cosmetic facilities?",
              answer: "MoCRA imposes new requirements like facility registration, product listings, labeling, and adverse event reporting."
            },
            {
              question: "When are facility registrations and product listings required?",
              answer: "Registrations and product listings are required by December 29, 2023."
            },
            {
              question: "What are the new labeling requirements?",
              answer: "Labels must now list allergens and provide electronic contact details for adverse event reporting."
            }
          ].map((faq, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-[#00df9a] mb-2">{faq.question}</h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FDARegistration;
