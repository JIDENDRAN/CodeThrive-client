import React, { useState, useEffect } from "react";
import "./RealEstate.css";
import Bg1 from "../../../assets/bg1.png";
import EdtechBg from "../../../assets/edtech_bg.png";
import FintechBg from "../../../assets/fintech_bg.png";

const RealEstateDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Home" | "Properties" | "Dashboard">("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="re-container">
      {/* NAVBAR */}
      <nav className="re-nav">
        <div className="re-logo">
          🏢 Estate<span>Tech</span>
        </div>
        <div className="re-tabs">
          <button 
            className={`re-tab ${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Overview
          </button>
          <button 
            className={`re-tab ${activeTab === "Properties" ? "active" : ""}`}
            onClick={() => setActiveTab("Properties")}
          >
            Listings
          </button>
          <button 
            className={`re-tab ${activeTab === "Dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("Dashboard")}
          >
            Agent Portal
          </button>
        </div>
        <button className="re-btn-primary">Get Started</button>
      </nav>

      <div className="re-content">
        {activeTab === "Home" && (
          <section className="re-home">
            <div className="re-home-text">
              <h1>Modern PropTech <span>Ecosystem</span></h1>
              <p>An immersive property listing platform featuring 3D virtual tours, instant blockchain-based contract generation, and comprehensive CRM tools for real estate agents.</p>
            </div>
            
            {/* MULTIPLE SCREENS SHOWCASE AS REQUESTED */}
            <div className="re-screens-gallery">
              <div className="screen-main">
                <img src={Bg1} alt="Main Dashboard Setup" />
              </div>
              <div className="screen-secondary">
                <img src={EdtechBg} alt="Property Detail View Mobile" className="screen-floating-1" />
                <img src={FintechBg} alt="Agent Analytics View" className="screen-floating-2" />
              </div>
            </div>
          </section>
        )}

        {activeTab === "Properties" && (
          <section className="re-section">
            <h2 className="re-section-title">Premium Listings</h2>
            <div className="re-grid">
              {[1,2,3].map(i => (
                <div key={i} className="re-card">
                  <div className="re-img-placeholder">3D Virtual Tour Available</div>
                  <h3>Luxury Villa {i}</h3>
                  <p>$1,250,000 • 4 Beds • 3 Baths</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === "Dashboard" && (
          <section className="re-section">
             <h2 className="re-section-title">Agent CRM Dashboard</h2>
             <div className="re-dash-flex">
               <div className="re-dash-stat">
                 <h4>12</h4>
                 <p>Active Listings</p>
               </div>
               <div className="re-dash-stat">
                 <h4>45</h4>
                 <p>Lead Inquiries</p>
               </div>
               <div className="re-dash-stat">
                 <h4>$3.2M</h4>
                 <p>Closed Sales YTD</p>
               </div>
             </div>
          </section>
        )}
      </div>

      <footer className="re-footer">
        <p>© 2026 CodeThrive Infotech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default RealEstateDemo;
