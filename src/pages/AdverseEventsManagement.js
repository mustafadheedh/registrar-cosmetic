import React from 'react';
import { Helmet } from 'react-helmet';

const AdverseEventsManagement = () => {
  return (
    <div className="p-8 bg-gray-50">
      <Helmet>
        <title>Adverse Event Management | MoCRA Reporting | Registrar Cosmetics</title>
        <meta name="description" content="Registrar Cosmetics provides ISO 27001-certified solutions for MoCRA adverse event reporting. Track, collect, and download FDA-compliant reports with ease." />
        <meta name="keywords" content="Adverse Event Management, MoCRA reporting, FDA compliance, ISO 27001-certified, Registrar Cosmetics" />
      </Helmet>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/images/Adverse/Adverse Event Management.jpg"
            alt="Adverse Event Management platform overview"
            style={{ width: '500px', height: '450px' }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h1 className="text-5xl font-bold text-[#00df9a] mb-6">
            Adverse Event Management – The Pinnacle of MoCRA Adverse Event Reporting
          </h1>
          <p className="text-lg text-gray-700">
            Registrar Cosmetics offers the only ISO 27001-certified comprehensive solution for full management of MoCRA adverse events reporting. Collect, track, report, and download FDA-compliant submissions from one secure, convenient platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-4xl font-semibold text-[#00df9a] mb-6">Collect, Track, Report, and Download with Ease</h2>
        <p className="text-lg text-gray-700 mb-6">
          No more manual excel sheets, outdated processes, or worrying about the safety of your company’s trade secrets and private information. Adverse Event Management simplifies managing every aspect of FDA’s adverse events requirements.
        </p>

        <div className="space-y-8">
          <article>
            <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">Collect Customer Adverse Event Submissions</h3>
            <p className="text-lg text-gray-700 mb-4">
              Use branded URLs and unique QR codes to offer your customers an easy, branded experience for submitting any adverse events.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">Track Adverse Events in Real Time</h3>
            <p className="text-lg text-gray-700 mb-4">
              Monitor adverse and serious adverse submissions in real time to enhance your response time and ensure quick action.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">Connect Submissions to Product Listings</h3>
            <p className="text-lg text-gray-700 mb-4">
              Correlate adverse event submissions directly to your product listings for easy report generation and compliance tracking.
            </p>
          </article>

          <article>
            <h3 className="text-2xl font-semibold text-[#00df9a] mb-4">Download Detailed FDA-Compliant Reports</h3>
            <p className="text-lg text-gray-700 mb-4">
              Generate and download FDA-compliant reports directly from the Adverse Event Management platform for seamless FDA submissions.
            </p>
          </article>
        </div>
      </section>

      {/* Assurance Section */}
      <section className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/images/Adverse/U.S. Retailers.jpg"
            alt="Assure Good Standing with U.S. Retailers"
            style={{ width: '500px', height: 'auto' }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-semibold text-[#00df9a] mb-6">Assure Good Standing with U.S. Retailers and FDA</h2>
            <p className="text-lg text-gray-700">
              Remain in good standing with U.S. FDA and your U.S. retailers with innovative software that manages and organizes your submissions according to FDA requirements and timelines.
            </p>
          </div>
        </div>
      </section>

      {/* Image with Paragraph Section */}
      <section className="flex flex-col md:flex-row items-center bg-white p-8 rounded-lg shadow-lg mb-12">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src="/images/Adverse/adverse-events-details.jpg"
            alt="Detailed overview of adverse events management"
            style={{ width: '500px', height: 'auto' }}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-3xl font-semibold text-[#00df9a] mb-4">Detailed Overview of Adverse Events Management</h2>
          <p className="text-lg text-gray-700">
            Our platform offers a comprehensive view of adverse event data, ensuring that all necessary information is at your fingertips. Streamline your process with features designed for clarity and efficiency.
          </p>
        </div>
      </section>

      {/* Request Demo Form */}
      <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-semibold text-[#00df9a] mb-6 text-center">Ready to Take the Next Step?</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          To get started, submit this form to request a demo or purchase now and start managing adverse events reporting immediately.
        </p>
        <form className="space-y-6 max-w-lg mx-auto" method="POST" action="/submit-demo">
          <div>
            <label className="block text-gray-700">First Name*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="First Name" required />
          </div>
          <div>
            <label className="block text-gray-700">Last Name*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Last Name" required />
          </div>
          <div>
            <label className="block text-gray-700">Email Address*</label>
            <input type="email" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Email Address" required />
          </div>
          <div>
            <label className="block text-gray-700">Legal Company Name*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Legal Company Name" required />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Phone Number" required />
          </div>
          <div>
            <label className="block text-gray-700">Country*</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Country" required />
          </div>
          <div>
            <label className="block text-gray-700">How did you hear about us?</label>
            <input type="text" className="w-full p-3 border border-gray-300 rounded-md" placeholder="Write answer here" />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white py-3 px-6 rounded-lg text-lg bg-[#00df9a] hover:bg-[#00b37e]"
            >
              Request a Demo
            </button>
          </div>

        </form>
      </section>
    </div>
  );
};

export default AdverseEventsManagement;
