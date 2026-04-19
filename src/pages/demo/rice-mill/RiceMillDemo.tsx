import React, { useState, useEffect } from "react";
import "./RiceMill.css";
// Use an existing asset for the background to avoid quota issues
import HeroImage from "../../../assets/manufacturing_bg.png";
import Bg3 from "../../../assets/bg3.png";
import FintechBg from "../../../assets/fintech_bg.png";

const modules = [
  { title: "Procurement & Weighbridge", desc: "Automate paddy intake, connect directly to weighbridges, and instantly issue receipts.", icon: "⚖️" },
  { title: "Inventory & Silo Management", desc: "Real-time stock visibility for raw paddy, milled rice, and by-products like bran & husk.", icon: "🏭" },
  { title: "Milling Process Control", desc: "Track batch yields, milling duration, and monitor machine efficiency to minimize wastage.", icon: "⚙️" },
  { title: "Quality Checking (QC)", desc: "Maintain strict quality logs for moisture content, broken percentage, and grain length.", icon: "🔬" },
  { title: "Sales & Dispatch", desc: "Manage bulk orders, generate GST invoices, and track delivery vehicle logistics.", icon: "🚚" },
  { title: "Finance & Analytics", desc: "Gain insights into daily profitability, yield ratios, and operational expenses in real-time.", icon: "📈" }
];

const RiceMillDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Home" | "Modules" | "Dashboard">("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="ricemill-container">
      {/* NAVBAR */}
      <nav className="ricemill-nav">
        <div className="ricemill-logo">
          🌾 Agro<span>Tech</span> ERP
        </div>
        <div className="ricemill-tabs">
          <button 
            className={`ricemill-tab ${activeTab === "Home" ? "active" : ""}`}
            onClick={() => setActiveTab("Home")}
          >
            Overview
          </button>
          <button 
            className={`ricemill-tab ${activeTab === "Modules" ? "active" : ""}`}
            onClick={() => setActiveTab("Modules")}
          >
            Capabilities
          </button>
          <button 
            className={`ricemill-tab ${activeTab === "Dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("Dashboard")}
          >
            Live Dashboard
          </button>
        </div>
        <button className="ricemill-btn-primary">Request Demo</button>
      </nav>

      <div className="ricemill-content">
        {/* TAB: OVERVIEW / HOME */}
        {activeTab === "Home" && (
          <section className="ricemill-home">
            <div className="ricemill-home-left">
              <h1 className="ricemill-home-title">
                Smart <span className="highlight">Rice Mill</span> Management
              </h1>
              <p className="ricemill-home-desc">
                An all-in-one ERP solution designed specifically for modern rice mills. From paddy procurement at the weighbridge to final dispatch, optimize every grain with automated precision and colorful insightful analytics.
              </p>
              <button className="ricemill-btn-primary" onClick={() => setActiveTab("Modules")}>
                Explore Capabilities
              </button>
            </div>
            <div className="ricemill-home-right">
              {/* Added Multiple Screens Gallery */}
              <div className="rm-screens-gallery">
                <div className="rm-screen-main">
                  <img src={HeroImage} alt="Rice Mill Facility Analytics" className="ricemill-hero-img" />
                </div>
                <div className="rm-screen-secondary">
                  <img src={Bg3} alt="Weighbridge Module" className="rm-screen-floating-1" />
                  <img src={FintechBg} alt="Financial Dashboard" className="rm-screen-floating-2" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB: MODULES */}
        {activeTab === "Modules" && (
          <section className="ricemill-modules">
            <h2 className="ricemill-section-title">Core Capabilities</h2>
            <div className="rm-grid">
              {modules.map((mod, idx) => (
                <div key={idx} className="rm-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="rm-icon">{mod.icon}</div>
                  <h3>{mod.title}</h3>
                  <p>{mod.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB: DASHBOARD */}
        {activeTab === "Dashboard" && (
          <section className="ricemill-process">
            <h2 className="ricemill-section-title">Production Dashboard</h2>
            <div className="rm-dash-container">
              <div className="rm-stats">
                <div className="rm-stat-box">
                  <h4>1,240 <small>MT</small></h4>
                  <span>Paddy in Silos</span>
                </div>
                <div className="rm-stat-box">
                  <h4>64.5%</h4>
                  <span>Avg Yield Ratio</span>
                </div>
                <div className="rm-stat-box">
                  <h4>312 <small>MT</small></h4>
                  <span>Rice Dispatch (Today)</span>
                </div>
                <div className="rm-stat-box">
                  <h4 style={{color: "#ea580c"}}>12%</h4>
                  <span>Avg Broken Grains</span>
                </div>
              </div>

              <div className="rm-table-wrapper">
                <table className="rm-table">
                  <thead>
                    <tr>
                      <th>Batch ID</th>
                      <th>Variety</th>
                      <th>Quantity Input</th>
                      <th>Status</th>
                      <th>Estimated Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>B-9801</td>
                      <td>Basmati 1121</td>
                      <td>40 MT</td>
                      <td><span className="rm-status status-active">Milling in Progress</span></td>
                      <td>14:30 Today</td>
                    </tr>
                    <tr>
                      <td>B-9802</td>
                      <td>Sona Masuri</td>
                      <td>25 MT</td>
                      <td><span className="rm-status status-pending">In Queue</span></td>
                      <td>18:00 Today</td>
                    </tr>
                    <tr>
                      <td>B-9800</td>
                      <td>IR-64</td>
                      <td>50 MT</td>
                      <td><span className="rm-status status-completed">Completed</span></td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </div>

      <footer className="ricemill-footer">
        <p style={{ margin: 0, fontSize: "0.9rem" }}>© 2026 CodeThrive Infotech. All rights reserved.</p>
        <p style={{ margin: 0, color: "#15803d", fontWeight: 700, letterSpacing: "1px", marginTop: "10px" }}>Progress. Cultivate. Innovate.</p>
      </footer>
    </div>
  );
};

export default RiceMillDemo;
