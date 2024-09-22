import React from 'react';
import { Helmet } from 'react-helmet';


const LabelIngredientReview = () => {
  return (
    <div className="p-8 bg-gray-50">
      <Helmet>
        <title>Cosmetic Label & Ingredient Review | Registrar Cosmetics</title>
        <meta name="description" content="Registrar Cosmetics provides expert FDA cosmetic label and ingredient review services, ensuring compliance with MoCRA and FDA regulations." />
        <meta name="keywords" content="cosmetic label review, ingredient review, MoCRA compliance, FDA cosmetic compliance, cosmetic labeling" />
        <meta property="og:title" content="Cosmetic Label & Ingredient Review | Registrar Cosmetics" />
        <meta property="og:description" content="Registrar Cosmetics offers expert label and ingredient review services to help cosmetic companies comply with MoCRA and FDA regulations." />
        <meta property="og:image" content="/images/LabelIng/Cosmetic Label Review.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/label-ingredient-review" />
        <meta name="twitter:title" content="Cosmetic Label & Ingredient Review | Registrar Cosmetics" />
        <meta name="twitter:description" content="Expert FDA cosmetic label and ingredient review services from Registrar Cosmetics to ensure compliance with MoCRA and FDA regulations." />
        <meta name="twitter:image" content="/images/LabelIng/Cosmetic Label Review.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/LabelIng/Cosmetic Label Review.jpg" alt="Cosmetic Label Review" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-[#00df9a] mb-6">Cosmetic Label Review Done Right</h1>
        <p className="text-lg text-gray-700">
          Our FDA labeling specialists have conducted over 13,000 product label reviews. We can help you too. Start your compliance journey with a free label assessment today.
        </p>
      </div>
      </div>
      </div>

      {/* Label Compliance Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/LabelIng/Labels MoCRA.jpg" alt="Labels MoCRA" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-4xl font-semibold text-[#00df9a] mb-6">Are Your Labels MoCRA Ready?</h2>
        <p className="text-lg text-gray-700 mb-6">
          FDA’s MoCRA regulations significantly impact labels, including those related to adverse event contact and fragrance allergens. Our experts can help ensure your compliance with our LabelComply and LabelCheck services.
        </p>
      </div>
      </div>
      </div>

      {/* LabelComply Service Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/LabelIng/LabelComply.jpg" alt="LabelComply" style={{ width: '500px', height: 'auto' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-6">LabelComply: Peace Of Mind Before Going To Market</h2>
        <p className="text-lg text-gray-700 mb-6">
          Our Regulatory Specialists will review your cosmetic label and ingredient list to ensure compliance with FDA's requirements. With LabelComply, you’ll receive:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>Extensive review of FDA’s 10 mandatory requirements</li>
          <li>A revised, print-ready graphic design file of your label</li>
          <li>80-100 page report with detailed recommendations</li>
          <li>Expertise from 13,000+ label reviews</li>
          <li>One set of revisions to the updated label within 30 days</li>
          <li>1-on-1 consultation with your labeling expert</li>
        </ul>
      </div>
      </div>
      </div>

      {/* LabelCheck Service Section */}
      <div className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="/images/LabelIng/LabelCheck.jpg" alt="LabelCheck" style={{ width: '500px', height: '450px' }} className="rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8">
      <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-6">LabelCheck: Verify Labels are FDA Compliant</h2>
        <p className="text-lg text-gray-700 mb-6">
          With LabelCheck, we will verify your labels and ingredients against FDA's regulations. This service includes:
        </p>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>Extensive review of FDA’s 10 mandatory requirements</li>
          <li>Expertise from 13,000+ label reviews</li>
          <li>30-40 page report with recommendations</li>
          <li>30-minute consultation with your labeling expert</li>
        </ul>
      </div>
      </div>
      </div>

      {/* Upload Section */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-lg mb-12 flex justify-center">
        <div className="w-full max-w-2xl">
          <h2 className="text-3xl font-semibold text-[#00df9a] mb-6 text-center">Let’s Have A Conversation About Your Needs</h2>
          <form className="space-y-6">
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
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Phone" required />
            </div>
            <div>
              <label className="block text-gray-700">Upload Label For Free Assessment*</label>
              <input type="file" className="w-full p-3 border border-gray-300 rounded-md" accept="image/jpeg, image/png, application/pdf" required />
            </div>
            <div className="text-center">
              <button type="submit" className="text-white py-3 px-6 rounded-lg text-lg bg-[#00df9a] hover:bg-[#00b37e]">Submit for Free Assessment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LabelIngredientReview;
