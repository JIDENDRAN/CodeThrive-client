import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TitleBar.css";

const TitleBar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* TOP TITLE BAR - Fixed Header */}
      <div className="title-bar">
        {/* LEFT SIDE: Logo + Company Info */}
        <div className="title-logo">  
          <img
            src="/src/assets/logo.png"
            alt="Codethrive Logo"
            className="logo-icon"
          />
          <div className="logo-text-group">
            <span className="company-name">
              CODE<span className="thrive-text">THRIVE</span> INFOTECH
            </span>
            <span className="company-tagline">Progress. Cultivate. Innovate.</span>
          </div>
        </div>

        {/* RIGHT SIDE: Explore Button + Menu Icon */}
        <div className="right-actions">
          {/* Explore button also opens the menu */}
          <span className="explore-text" onClick={() => setOpen(true)}>
            ✨Explore more here
          </span>
          <div className="menu-icon" onClick={() => setOpen(true)}>
            ☰
          </div>
        </div>
      </div>

      {/* RIGHT SIDE MENU - Slide-in Panel */}
      <div className={`side-menu ${open ? "open" : ""}`}>
        <span className="close" onClick={() => setOpen(false)}>×</span>
        <div className="menu-heading">Our Portfolio</div>
        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/industries" onClick={() => setOpen(false)}>Industries</Link>
        <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
        <Link to="/insights" onClick={() => setOpen(false)}>Insights</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
      </div>
    </>
  );
};

export default TitleBar;