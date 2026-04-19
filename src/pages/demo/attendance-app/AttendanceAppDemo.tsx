import React, { useState, useEffect } from "react";
import "./AttendanceApp.css";

// Assuming we use attendance_hero if available, otherwise a default
import HeroImage from "../../../assets/attendance_hero.png";
import Bg1 from "../../../assets/bg1.png"; // Fallback image

const features = [
  { title: "Geo-Fencing Check-in", desc: "Ensure employees are on-site by restricting check-ins to approved geographical perimeters.", icon: "📍" },
  { title: "Facial Recognition", desc: "Prevent buddy punching with advanced biometric verification directly on the device.", icon: "👤" },
  { title: "Shift Management", desc: "Automate complex shift scheduling, rostering, and rotational policies effortlessly.", icon: "📅" },
  { title: "Real-time Analytics", desc: "Dashboard metrics showing live headcount, absent rates, and trend analysis.", icon: "📊" },
  { title: "Leave Integration", desc: "Seamless workflow for requesting, approving, and tracking time off.", icon: "📝" },
  { title: "Payroll Export", desc: "One-click export to major payroll systems with perfectly calculated hours.", icon: "💰" }
];

const AttendanceAppDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"Dashboard" | "Features" | "Portal">("Dashboard");
  const [portalMenu, setPortalMenu] = useState("My Attendance");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="att-app-container">
      {/* NAVBAR */}
      <nav className="att-app-nav">
        <div className="att-app-logo">
          <span className="att-app-logo-icon"></span> SyncTime
        </div>
        <div className="att-app-tabs">
          <button 
            className={`att-app-tab ${activeTab === "Dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("Dashboard")}
          >
            Dashboard
          </button>
          <button 
            className={`att-app-tab ${activeTab === "Features" ? "active" : ""}`}
            onClick={() => setActiveTab("Features")}
          >
            Features
          </button>
          <button 
            className={`att-app-tab ${activeTab === "Portal" ? "active" : ""}`}
            onClick={() => setActiveTab("Portal")}
          >
            Employee Portal
          </button>
        </div>
        <button className="att-app-btn-demo">Get Free Trial</button>
      </nav>

      <div className="att-app-content">
        {/* TAB CONTENT: DASHBOARD */}
        {activeTab === "Dashboard" && (
          <section className="att-app-home">
            <div className="att-app-home-left">
              <h1 className="att-app-home-title">
                Next-Gen <span>Attendance</span> Management
              </h1>
              <p className="att-app-home-desc">
                Transform how your enterprise tracks time. With biometric verification, geo-fencing, and live analytics, SyncTime offers a flawless, premium experience built for modern corporate operations.
              </p>
              <div className="att-app-home-btns">
                <button className="att-app-btn-primary" onClick={() => setActiveTab("Features")}>Explore Features</button>
                <button className="att-app-btn-secondary" onClick={() => setActiveTab("Portal")}>View Portal</button>
              </div>
            </div>
            <div className="att-app-home-right">
              {/* Added Multiple Screens Gallery */}
              <div className="att-screens-gallery">
                <div className="att-screen-main">
                  <img src={HeroImage} alt="Mobile App Dashboard Mockup" className="att-app-hero-img" onError={(e) => { e.currentTarget.src = Bg1; }} />
                </div>
                <div className="att-screen-secondary">
                  <img src={Bg1} alt="Shift Schedule UI" className="att-screen-floating-1" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB CONTENT: FEATURES */}
        {activeTab === "Features" && (
          <section className="att-app-features">
            <h2 className="att-app-section-title">Enterprise-Grade Features</h2>
            <div className="att-app-features-grid">
              {features.map((feat, idx) => (
                <div key={idx} className="att-app-feature-card">
                  <div className="att-feature-icon">{feat.icon}</div>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB CONTENT: PORTAL */}
        {activeTab === "Portal" && (
          <section className="att-app-portal">
             <h2 className="att-app-section-title">Employee Self-Service</h2>
             <div className="att-app-portal-container">
               <div className="portal-sidebar">
                 <div 
                   className={`portal-menu-item ${portalMenu === "My Attendance" ? "active" : ""}`}
                   onClick={() => setPortalMenu("My Attendance")}
                 >
                   ⏱️ My Attendance
                 </div>
                 <div 
                   className={`portal-menu-item ${portalMenu === "Leave Requests" ? "active" : ""}`}
                   onClick={() => setPortalMenu("Leave Requests")}
                 >
                   ✈️ Leave Requests
                 </div>
                 <div 
                   className={`portal-menu-item ${portalMenu === "Shift Schedule" ? "active" : ""}`}
                   onClick={() => setPortalMenu("Shift Schedule")}
                 >
                   📅 Shift Schedule
                 </div>
                 <div 
                   className={`portal-menu-item ${portalMenu === "Approvals" ? "active" : ""}`}
                   onClick={() => setPortalMenu("Approvals")}
                 >
                   ✅ Approvals (Manager)
                 </div>
               </div>
               
               <div className="portal-main">
                 <h3>{portalMenu}</h3>
                 <p style={{ color: "#94a3b8", maxWidth: "400px", margin: "10px auto" }}>
                   Simulated view of the desktop self-service portal connected to the mobile ecosystem.
                 </p>
                 
                 {portalMenu === "My Attendance" && (
                   <div className="portal-stat-card">
                     <h4>98.5%</h4>
                     <p>Punctuality Rate This Month</p>
                     <div style={{ marginTop: "20px", display: "flex", justifyContent: "space-between", color: "#94a3b8" }}>
                       <span>Total Check-ins: 21</span>
                       <span>Late: 0</span>
                     </div>
                   </div>
                 )}

                 {portalMenu === "Leave Requests" && (
                   <div className="portal-stat-card">
                     <h4>14 Days</h4>
                     <p>Annual Leave Remaining</p>
                     <button className="att-app-btn-primary" style={{ marginTop: "20px", width: "100%" }}>Apply for Leave</button>
                   </div>
                 )}

                 {portalMenu === "Shift Schedule" && (
                   <div className="portal-stat-card">
                     <h4>Next Shift</h4>
                     <p>Tomorrow, 09:00 AM - 05:00 PM</p>
                     <p style={{ fontSize: "0.9rem", color: "#8b5cf6" }}>Branch: Headquarters (Geo-fenced)</p>
                   </div>
                 )}

                 {portalMenu === "Approvals" && (
                   <div className="portal-stat-card">
                     <h4>3 Pending</h4>
                     <p>Team Leave Requests</p>
                     <button className="att-app-btn-secondary" style={{ marginTop: "20px", width: "100%" }}>Review All</button>
                   </div>
                 )}

               </div>
             </div>
          </section>
        )}
      </div>

      {/* FIXED FOOTER WITH COPYRIGHT AS REQUESTED */}
      <footer className="att-app-footer">
        <div className="att-app-copyright">
          <p style={{ margin: 0, fontSize: "0.9rem" }}>© 2026 CodeThrive Infotech. All rights reserved.</p>
          <p style={{ margin: 0, color: "#8b5cf6", fontWeight: 700, letterSpacing: "1px" }}>Progress. Cultivate. Innovate.</p>
        </div>
      </footer>
    </div>
  );
};

export default AttendanceAppDemo;
