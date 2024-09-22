import React, { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [comments, setComments] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      name,
      email,
      phone,
      company,
      address,
      city,
      state,
      postalCode,
      country,
      comments
    });
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center text-[#00df9a]">Contact Form</h1>
      <p className="text-lg text-gray-300 mb-6 text-center">
        We value our clients at Registrar Cosmetics. Please fill out the form below, and one of our dedicated experts will be in touch with you shortly.
      </p>

      {/* Contact Form */}
      <div className="bg-gray-900 p-10 rounded-lg shadow-lg mx-auto max-w-3xl border border-[#00df9a]">
        <h2 className="text-4xl font-semibold mb-6 text-[#00df9a] text-center">Reach Out to Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-wrap space-y-4">
            <div className="w-full sm:w-1/2 px-2">
              <label className="block text-[#00df9a]">Contact Name*</label>
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                required
              />
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <label className="block text-[#00df9a]">Email*</label>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap space-y-4">
            <div className="w-full sm:w-1/2 px-2">
              <label className="block text-[#00df9a]">Phone*</label>
              <input 
                type="tel" 
                placeholder="Your Phone Number" 
                className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
                value={phone} 
                onChange={(e) => setPhone(e.target.value)} 
                required
              />
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <label className="block text-[#00df9a]">Company Name*</label>
              <input 
                type="text" 
                placeholder="Your Company Name" 
                className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
                value={company} 
                onChange={(e) => setCompany(e.target.value)} 
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap space-y-4">
            <div className="w-full sm:w-1/2 px-2">
              <label className="block text-[#00df9a]">Address*</label>
              <input 
                type="text" 
                placeholder="Street Address" 
                className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
                value={address} 
                onChange={(e) => setAddress(e.target.value)} 
                required
              />
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <label className="block text-[#00df9a]">City*</label>
              <input 
                type="text" 
                placeholder="City" 
                className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
                value={city} 
                onChange={(e) => setCity(e.target.value)} 
                required
              />
            </div>
          </div>

          <div className="flex flex-wrap space-y-4">
            <div className="w-full sm:w-1/2 px-2">
              <label className="block text-[#00df9a]">State / Province / Region</label>
              <input 
                type="text" 
                placeholder="State / Province / Region" 
                className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
                value={state} 
                onChange={(e) => setState(e.target.value)} 
              />
            </div>
            <div className="w-full sm:w-1/2 px-2">
              <label className="block text-[#00df9a]">Postal Code</label>
              <input 
                type="text" 
                placeholder="Postal Code" 
                className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
                value={postalCode} 
                onChange={(e) => setPostalCode(e.target.value)} 
              />
            </div>
          </div>

          <div>
            <label className="block text-[#00df9a]">Country*</label>
            <select 
              className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
              value={country} 
              onChange={(e) => setCountry(e.target.value)} 
              required
            >
              <option value="">Select Country</option>
              {/* Add country options here */}
            </select>
          </div>

          <div>
            <label className="block text-[#00df9a]">Comments</label>
            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 border border-gray-600 rounded-md bg-transparent text-white focus:border-[#00df9a]" 
              value={comments} 
              onChange={(e) => setComments(e.target.value)}
            />
          </div>

          <div className="text-center">
            <button type="submit" className="text-black py-3 px-6 rounded-lg text-lg bg-[#00df9a] hover:bg-[#e0c200] transition-all duration-300">Send Message</button>
          </div>
        </form>
      </div>
      
    </div>
  );
};

export default ContactUs;
