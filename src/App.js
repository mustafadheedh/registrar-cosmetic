import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import FDARegistration from './pages/FDARegistration';
import USAgent from './pages/USAgent';
import ProductListings from './pages/ProductListings';
import LabelIngredientReview from './pages/LabelIngredientReview';
import AdverseEventsManagement from './pages/AdverseEventsManagement';
import FDAExportCertificate from './pages/FDAExportCertificate';
import ImportAlertsDWPE from './pages/ImportAlertsDWPE';
import ContactForm from './pages/ContactUs';
import GetFDARegistration from './pages/GetFDARegistration';
import Loader from './components/loader'; // Correct casing for 'loader.js'

// LoaderWrapper component that handles loading logic based on route changes
const LoaderWrapper = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Get the current route location

  useEffect(() => {
    // Set loading to true every time the route changes
    setLoading(true);

    // Simulate a delay (replace with actual loading logic if needed)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 1000); // Reduced delay for smoother UX (adjust as needed)

    return () => clearTimeout(timer); // Cleanup timeout on unmount to avoid memory leaks
  }, [location]); // Run effect every time the route (location) changes

  if (loading) {
    return <Loader />; // Show loader while loading
  }

  return children; // Return the children (content) when loading is complete
};

const App = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Ensure full-page height layout */}
      <Navbar />
      <LoaderWrapper>
        <main className="flex-grow"> {/* Allows content to take up remaining space */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fda-registration" element={<FDARegistration />} />
            <Route path="/us-agent" element={<USAgent />} />
            <Route path="/product-listings" element={<ProductListings />} />
            <Route path="/label-ingredient-review" element={<LabelIngredientReview />} />
            <Route path="/adverse-events-management" element={<AdverseEventsManagement />} />
            <Route path="/fda-export-certificate" element={<FDAExportCertificate />} />
            <Route path="/import-alerts-dwpe" element={<ImportAlertsDWPE />} />
            <Route path="/contact-us" element={<ContactForm />} />
            <Route path="/get-fda-registration" element={<GetFDARegistration />} />
          </Routes>
        </main>
      </LoaderWrapper>
      <Footer />
    </div>
  );
};

// The Router should wrap the App component in the main render
const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
