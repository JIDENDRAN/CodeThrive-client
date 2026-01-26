import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Projects from "./pages/Projects";
import Insights from "./pages/Insights";
import Contact from "./pages/Contact";

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

  return (
    <>
      {/* Navbar */}
      <nav
        className="navbar fixed-top px-4 py-3"
        style={{
          backdropFilter: scrolled ? "blur(15px)" : "none",
          background: scrolled
            ? "rgba(20,20,30,0.85)"
            : "linear-gradient(135deg, #1f1c2c, #928dab)",
          boxShadow: scrolled ? "0 5px 20px rgba(0,0,0,0.4)" : "none",
          transition: "all 0.3s",
          zIndex: 999,
        }}
      >
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link
            className="navbar-brand fw-bold text-light"
            to="/"
            style={{ fontSize: "1.4rem", transition: "0.3s" }}
            onClick={() => setMenuOpen(false)}
          >
            CodeThrive Infotech
          </Link>

          {/* Mobile menu button */}
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className="navbar-toggler-icon"
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#fff",
                position: "relative",
                transition: "0.3s",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "2px",
                  background: "#fff",
                  top: "-8px",
                  left: 0,
                  transition: "0.3s",
                }}
              ></span>
              <span
                style={{
                  position: "absolute",
                  width: "24px",
                  height: "2px",
                  background: "#fff",
                  top: "8px",
                  left: 0,
                  transition: "0.3s",
                }}
              ></span>
            </span>
          </button>

          {/* Desktop & Mobile Nav Links */}
          <ul
            className={`navbar-nav ms-auto gap-3 ${
              menuOpen
                ? "d-flex flex-column align-items-end p-4"
                : "d-none"
            } d-lg-flex flex-lg-row align-items-lg-center`}
            style={{ listStyle: "none", margin: 0, padding: 0 }}
          >
            {navLinks.map((link) => (
              <li key={link.name} className="nav-item position-relative">
                <Link
                  to={link.path}
                  className="nav-link fw-bold text-light"
                  style={{
                    transition: "0.3s",
                    padding: "0.5rem 0",
                    display: "block",
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                  <span
                    className="position-absolute start-0 bottom-0 rounded"
                    style={{
                      height: "2px",
                      width: location.pathname === link.path ? "100%" : "0",
                      background:
                        "linear-gradient(90deg, #ff416c, #ff4b2b, #ff416c)",
                      transition: "width 0.3s",
                    }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

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
