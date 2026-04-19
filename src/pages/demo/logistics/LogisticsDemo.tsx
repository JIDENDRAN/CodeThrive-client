import React, { useState, useEffect } from "react";
import "./Logistics.css";
import LogisticsBg from "../../../assets/logistics_bg.png";
import Bg5 from "../../../assets/bg5.png";
import HeroImage from "../../../assets/hero-image.png";

const LogisticsDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Home" | "Map" | "Fleet">("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="log-container">
      <nav className="log-nav">
        <div className="log-logo">
          🚚 Geo<span>Logistics</span>
        </div>
        <div className="log-tabs">
          <button className={`log-tab ${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>Overview</button>
          <button className={`log-tab ${activeTab === "Map" ? "active" : ""}`} onClick={() => setActiveTab("Map")}>Live Map</button>
          <button className={`log-tab ${activeTab === "Fleet" ? "active" : ""}`} onClick={() => setActiveTab("Fleet")}>Fleet Stats</button>
        </div>
        <button className="log-btn-primary">Track Shipment</button>
      </nav>

      <div className="log-content">
        {activeTab === "Home" && (
          <section className="log-home">
            <div className="log-home-text">
              <h1>Global Fleet <span>Command</span></h1>
              <p>AI-powered route optimization and real-time tracking dashboard for modern supply chains. Reduce fuel consumption and track every parcel seamlessly.</p>
            </div>
            
            {/* Multiple screens as requested */}
            <div className="log-screens-gallery">
              <div className="screen-main">
                <img src={LogisticsBg} alt="Main Logistics Dashboard" />
              </div>
              <div className="screen-secondary">
                <img src={HeroImage} alt="Warehouse Analytics" className="screen-floating-1" />
                <img src={Bg5} alt="Route Management Map" className="screen-floating-2" />
              </div>
            </div>
          </section>
        )}

        {activeTab === "Map" && (
          <section className="log-section">
            <h2 className="log-section-title">Live Tracking Interface</h2>
            <div className="log-map-placeholder">
              <div className="log-map-overlay">
                <h3>Connecting to Satellite...</h3>
                <p>Simulating Real-Time Global Fleet Tracking</p>
              </div>
              <img src={LogisticsBg} alt="Map interface" className="log-bg-img" />
            </div>
          </section>
        )}

        {activeTab === "Fleet" && (
          <section className="log-section">
             <h2 className="log-section-title">Fleet Diagnostics</h2>
             <div className="log-stats-grid">
               <div className="log-stat-card">
                 <div className="log-icon">🚛</div>
                 <h4>Total Vehicles</h4>
                 <h2>1,432</h2>
                 <p className="log-pos">+12 this month</p>
               </div>
               <div className="log-stat-card">
                 <div className="log-icon">⛽</div>
                 <h4>Avg Fuel Efficiency</h4>
                 <h2>8.4 MPG</h2>
                 <p className="log-pos">+0.2 MPG improved</p>
               </div>
               <div className="log-stat-card">
                 <div className="log-icon">⚠️</div>
                 <h4>Maintenance Alerts</h4>
                 <h2>18</h2>
                 <p className="log-neg">Needs attention</p>
               </div>
             </div>
             
             <div className="log-table-container">
               <h3>Active Routes</h3>
               <table className="log-table">
                 <thead>
                   <tr><th>Vehicle ID</th><th>Driver</th><th>Route</th><th>Status</th></tr>
                 </thead>
                 <tbody>
                   <tr><td>TRK-902</td><td>Alex Mason</td><td>NY - CHI</td><td><span className="log-badge log-ok">On Time</span></td></tr>
                   <tr><td>TRK-114</td><td>Sam Porter</td><td>LA - SEA</td><td><span className="log-badge log-warn">Delayed</span></td></tr>
                 </tbody>
               </table>
             </div>
          </section>
        )}
      </div>

      <footer className="log-footer">
        <p>© 2026 CodeThrive Infotech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LogisticsDemo;
