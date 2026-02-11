import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";
import { BrowserRouter as Router } from 'react-router-dom';


// Import your demo pages
import BillingDemo from "./pages/demo/BillingDemo";
import CollegeERPDemo from "./pages/demo/CollegeERPDemo";
import EcommerceDemo from "./pages/demo/E-commerceDemo";
import HospitalDemo from "./pages/demo/HospitalDemo";
import TicketBookingDemo from "./pages/demo/TicketBookingDemo";

const App: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Projects", path: "/projects" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];
  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    );
  }

  return (
    <>


      {/* Main Content */}
      <div style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />

          {/* Demo Page Routes */}
          <Route path="/demo/billing" element={<BillingDemo />} />
          <Route path="/demo/college-erp" element={<CollegeERPDemo />} />
          <Route path="/demo/ecommerce" element={<EcommerceDemo />} />
          <Route path="/demo/hospital" element={<HospitalDemo />} />
          <Route path="/demo/tickets" element={<TicketBookingDemo />} />
        </Routes>
      </div>

      {/* Mobile menu background fix */}
      <style>{`
        @media (max-width: 991px) {
          .navbar-nav {
            position: absolute;
            top: 100%;
            right: 0;
            background: rgba(20,20,30,0.95);
            width: 100%;
            padding: 1rem 2rem;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            transition: max-height 0.3s ease;
          }
        }
      `}</style>
    </>
  );
};

export default App;
