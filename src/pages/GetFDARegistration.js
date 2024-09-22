import React from 'react';

const FDARegistrationForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-6 text-center">Get FDA Registration Form</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Please fill out the form below to start your FDA registration process.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700">First Name & Last Name*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="First Name & Last Name" required />
          </div>
          <div>
            <label className="block text-gray-700">EIN number / Company registration number*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="EIN or Registration Number" required />
          </div>
          <div>
            <label className="block text-gray-700">DUNS number*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="DUNS Number" required />
          </div>
          <div>
            <label className="block text-gray-700">Company Name*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Company Name" required />
          </div>
          <div>
            <label className="block text-gray-700">Cell Number*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Cell Number" required />
          </div>
          <div>
            <label className="block text-gray-700">E-mail Address*</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Email Address" required />
          </div>
          <div>
            <label className="block text-gray-700">Your Complete Address*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Complete Address" required />
          </div>
          <div>
            <label className="block text-gray-700">Principal and Major Business Activity*</label>
            <textarea className="w-full p-3 border border-gray-300 rounded-md" placeholder="Describe Your Business Activity" required></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="text-white py-3 px-6 rounded-lg text-lg bg-[#00df9a] hover:bg-[#00b37e]">Submit Form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FDARegistrationForm;
