import React, { useState, useEffect } from "react";
import "./CloudHR.css";
import EcommerceBg from "../../../assets/ecommerce_bg.png";
import Bg3 from "../../../assets/bg3.png";
import HealthcareBg from "../../../assets/healthcare_bg.png";

const CloudHRDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Home" | "Payroll" | "Recruitment">("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="chr-container">
      <nav className="chr-nav">
        <div className="chr-logo">
          ☁️ Cloud<span>HR</span>
        </div>
        <div className="chr-tabs">
          <button className={`chr-tab ${activeTab === "Home" ? "active" : ""}`} onClick={() => setActiveTab("Home")}>Overview</button>
          <button className={`chr-tab ${activeTab === "Payroll" ? "active" : ""}`} onClick={() => setActiveTab("Payroll")}>Payroll</button>
          <button className={`chr-tab ${activeTab === "Recruitment" ? "active" : ""}`} onClick={() => setActiveTab("Recruitment")}>Recruitment</button>
        </div>
        <button className="chr-btn-primary">Free Trial</button>
      </nav>

      <div className="chr-content">
        {activeTab === "Home" && (
          <section className="chr-home">
            <div className="chr-home-text">
              <h1>Unified HR & <span>Payroll</span></h1>
              <p>Streamline employee onboarding, manage performance reviews, and run payroll in clicks. The ultimate dashboard for modern human resources teams.</p>
            </div>
            
            {/* Multiple screens as requested */}
            <div className="chr-screens-gallery">
              <div className="screen-main">
                <img src={EcommerceBg} alt="Main HR Dashboard" />
              </div>
              <div className="screen-secondary">
                <img src={Bg3} alt="Payroll Visualization" className="screen-floating-1" />
                <img src={HealthcareBg} alt="Recruitment Pipeline" className="screen-floating-2" />
              </div>
            </div>
          </section>
        )}

        {activeTab === "Payroll" && (
          <section className="chr-section">
            <h2 className="chr-section-title">Automated Payroll Processing</h2>
            <div className="chr-payroll-card">
              <div className="chr-run-payroll">
                <h3>Current Cycle: Nov 2026</h3>
                <button className="chr-action-btn">Run Payroll Now</button>
              </div>
              <table className="chr-table">
                <thead>
                  <tr><th>Employee</th><th>Gross Pay</th><th>Taxes</th><th>Net Pay</th><th>Status</th></tr>
                </thead>
                <tbody>
                  <tr><td>John Doe</td><td>$5,000</td><td>$800</td><td>$4,200</td><td>Ready</td></tr>
                  <tr><td>Jane Smith</td><td>$6,200</td><td>$1,000</td><td>$5,200</td><td>Ready</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        )}

        {activeTab === "Recruitment" && (
          <section className="chr-section">
             <h2 className="chr-section-title">Active Pipelines</h2>
             <div className="chr-kanban">
               <div className="chr-column">
                 <h4>Applied (12)</h4>
                 <div className="chr-candidate">Mark Johnson - Frontend</div>
               </div>
               <div className="chr-column">
                 <h4>Interviewing (4)</h4>
                 <div className="chr-candidate">Sarah Lee - Backend</div>
               </div>
               <div className="chr-column">
                 <h4>Offered (1)</h4>
                 <div className="chr-candidate">David Kim - DevOps</div>
               </div>
             </div>
          </section>
        )}
      </div>

      <footer className="chr-footer">
        <p>© 2026 CodeThrive Infotech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CloudHRDemo;
