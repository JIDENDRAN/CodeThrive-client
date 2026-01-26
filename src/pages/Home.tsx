import React from "react";
import HeroImage from "../assets/hero-image.png";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">

      {/* ===== Hero Section ===== */}
      <section className="hero-section d-flex flex-column flex-md-row align-items-center justify-content-between px-3 px-md-5 py-5 position-relative">
        <div className="hero-text col-md-6 text-center text-md-start">
          <h1 className="hero-title">CODETHRIVE INFOTECH</h1>
          <p className="hero-subtitle">
            Where innovation thrives, code creates impact, and businesses scale without limits.
          </p>
          <div className="hero-btn-container d-flex gap-3 justify-content-center justify-content-md-start mt-3 flex-wrap">
            <button className="btn hero-btn btn-primary">Request Consultation</button>
            <button className="btn hero-btn btn-outline-light">Contact Us</button>
          </div>
        </div>

        <div className="hero-image-wrapper col-md-5 mt-4 mt-md-0 d-flex justify-content-center">
          <img src={HeroImage} alt="Hero" className="hero-image" loading="lazy" />
        </div>

        {/* Floating circles */}
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </section>

      {/* ===== Vision & Mission ===== */}
      <section className="vision-mission-section py-5 position-relative">
        <div className="container text-center">
          <h2 className="section-title mb-5">Vision & Mission</h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="vm-card vm-vision p-4 rounded-4 shadow-lg text-center text-md-start">
                <h3 className="fw-bold mb-3">Vision</h3>
                <p>
                  Codethrive Infotech aims to be a catalyst for innovation by turning complex ideas into practical, scalable solutions.
                </p>
                <p>
                  We create lasting impact through technology that evolves with businesses and people.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="vm-card vm-mission p-4 rounded-4 shadow-lg text-center text-md-start">
                <h3 className="fw-bold mb-3">Mission</h3>
                <p>
                  Deliver dependable IT services that solve real business problems with clarity and precision.
                </p>
                <p>
                  Focus on smart, secure, and scalable solutions for confident growth in a digital-first era.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Promo / CTA ===== */}
      <section className="promo-section py-5 text-center">
        <div className="container d-flex justify-content-center">
          <div className="promo-card p-5 rounded-4 shadow-lg text-center">
            <h3 className="fw-bold mb-3">Transform Your Business With CodeThrive Infotech</h3>
            <p>Smart, scalable, and secure digital solutions tailored to your business needs.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
