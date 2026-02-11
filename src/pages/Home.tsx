import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import TitleBar from "../component/TitleBar";
import Footer from "../component/Footer";
import HeroImage from "../assets/hero-image.png";
import VisionImage from "../assets/vision.png";
import MissionImage from "../assets/mission.png"; 
import Bg1 from "../assets/bg1.png";
import Bg2 from "../assets/bg2.png";
import Bg3 from "../assets/bg3.png";
import Bg4 from "../assets/bg4.png";
import "./Home.css";

const Home: React.FC = () => {
  const backgroundImages = [Bg1, Bg2, Bg3, Bg4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Carousel state
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsSliding(true);
    }, 5000);
    return () => clearTimeout(showTimer);
  }, [currentImageIndex]);

  useEffect(() => {
    if (isSliding) {
      const slideTimer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setIsSliding(false);
      }, 1000);
      return () => clearTimeout(slideTimer);
    }
  }, [isSliding, backgroundImages.length]);

  // Customer Feedback Data
  const customerFeedbacks = [
    {
      id: 1,
      name: "Karthikeyan S.",
      role: "Owner, Kovai Textiles",
      industry: "Manufacturing",
      emoji: "🏭",
      color: "#f59e0b",
      bgColor: "linear-gradient(135deg, #1a1200 0%, #2d1f00 100%)",
      borderColor: "rgba(245,158,11,0.35)",
      rating: 4.5,
      text: "Our factory billing and stock management is now fully automated. Saved us hours every single day!",
      avatar: "KS"
    },
    {
      id: 2,
      name: "Dr. Meenakshi R.",
      role: "Founder, Madurai MediCare",
      industry: "Healthcare",
      emoji: "🏥",
      color: "#10b981",
      bgColor: "linear-gradient(135deg, #001a10 0%, #002d1c 100%)",
      borderColor: "rgba(16,185,129,0.35)",
      rating: 4.9,
      text: "Patient records, appointments, billing — everything in one place. Our clinic runs so smoothly now.",
      avatar: "MR"
    },
    {
      id: 3,
      name: "Suresh Babu M.",
      role: "Principal, Sri Vidya Academy",
      industry: "Education",
      emoji: "🎓",
      color: "#8b5cf6",
      bgColor: "linear-gradient(135deg, #0d0020 0%, #180030 100%)",
      borderColor: "rgba(139,92,246,0.35)",
      rating: 4.7,
      text: "Students love our new learning portal. Attendance, marks, online tests — all digital now. Great work!",
      avatar: "SB"
    },
    {
      id: 4,
      name: "Vignesh Pandian",
      role: "Manager, Chennai Cargo Hub",
      industry: "Logistics",
      emoji: "🚚",
      color: "#3b82f6",
      bgColor: "linear-gradient(135deg, #00081a 0%, #001030 100%)",
      borderColor: "rgba(59,130,246,0.35)",
      rating: 4.6,
      text: "Live tracking, route updates, delivery reports — exactly what we needed. Deliveries are on time now!",
      avatar: "VP"
    },
    {
      id: 5,
      name: "Annamalai K.",
      role: "Director, Trichy Finance Co.",
      industry: "Finance",
      emoji: "🏦",
      color: "#ef4444",
      bgColor: "linear-gradient(135deg, #1a0000 0%, #2d0000 100%)",
      borderColor: "rgba(239,68,68,0.35)",
      rating: 4.8,
      text: "Loan processing and customer ledger management became ten times faster. Very reliable software team.",
      avatar: "AK"
    },
    {
      id: 6,
      name: "Kavitha Lakshmi",
      role: "Owner, Coimbatore Silk Store",
      industry: "Retail & E-Commerce",
      emoji: "🛒",
      color: "#ec4899",
      bgColor: "linear-gradient(135deg, #1a0010 0%, #2d001c 100%)",
      borderColor: "rgba(236,72,153,0.35)",
      rating: 4.4,
      text: "My saree shop now sells online too! Orders are coming from across India. Best decision I made.",
      avatar: "KL"
    },
    {
      id: 7,
      name: "Murugesan T.",
      role: "Contractor, Salem Builders",
      industry: "Construction",
      emoji: "🏗️",
      color: "#f97316",
      bgColor: "linear-gradient(135deg, #1a0800 0%, #2d1200 100%)",
      borderColor: "rgba(249,115,22,0.35)",
      rating: 3.5,
      text: "Site progress tracking and budget sheets are now digital. No more confusion between teams on site.",
      avatar: "MT"
    },
    {
      id: 8,
      name: "Preethi Selvam",
      role: "Founder, Ooty Tours & Travels",
      industry: "Travel & Hospitality",
      emoji: "✈️",
      color: "#06b6d4",
      bgColor: "linear-gradient(135deg, #001a1a 0%, #002828 100%)",
      borderColor: "rgba(6,182,212,0.35)",
      rating: 4.3,
      text: "Our booking website is beautiful and so easy for customers. We get double the enquiries now!",
      avatar: "PS"
    }
  ];

  const CARDS_PER_SLIDE = 4;
  const totalSlides = Math.ceil(customerFeedbacks.length / CARDS_PER_SLIDE);

  const goToSlide = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  };

  const goNext = () => {
    const next = (activeSlide + 1) % totalSlides;
    goToSlide(next);
  };

  const goPrev = () => {
    const prev = (activeSlide - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
  };

  // Auto-play
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        goNext();
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, activeSlide]);

  const currentCards = customerFeedbacks.slice(
    activeSlide * CARDS_PER_SLIDE,
    activeSlide * CARDS_PER_SLIDE + CARDS_PER_SLIDE
  );

  return (
    <>
      <TitleBar />
      
      <div className="home-page">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="background-slider">
            <motion.div
              key={currentImageIndex}
              initial={{ x: "0%" }}
              animate={{ x: isSliding ? "-100%" : "0%" }}
              transition={{ duration: isSliding ? 1 : 0, ease: "easeInOut" }}
              className="background-slide"
              style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
            />
            <motion.div
              key={`next-${currentImageIndex}`}
              initial={{ x: "100%" }}
              animate={{ x: isSliding ? "0%" : "100%" }}
              transition={{ duration: isSliding ? 1 : 0, ease: "easeInOut" }}
              className="background-slide"
              style={{ 
                backgroundImage: `url(${backgroundImages[
                  currentImageIndex === backgroundImages.length - 1 ? 0 : currentImageIndex + 1
                ]})` 
              }}
            />
          </div>

          <div className="hero-overlay"></div>

          <div className="hero-container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
              }}
              className="hero-logo-container"
            >
              <img src={HeroImage} alt="CodeThrive Logo" className="hero-logo-image" />
            </motion.div>

            <div className="hero-content">
              <motion.h1 
                className="hero-main-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="title-line title-line-1"
                >
                  CODETHRIVE
                </motion.span>
                <motion.span 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="title-line title-line-2"
                >
                  INFOTECH
                </motion.span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="hero-description"
              >
                Where innovation thrives, code creates impact and businesses scale without limits.
              </motion.p>
              
              <Link to="/contact" className="contact-btn-link">
                <motion.button 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(94, 196, 232, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="contact-btn"
                >
                  Contact Us 
                  <motion.span 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="btn-arrow"
                  >
                    →
                  </motion.span>
                </motion.button>
              </Link>
            </div>
          </div>
        </section>

        {/* VISION SECTION */}
        <section className="vision-section">
          <div className="container">
            <div className="section-wrapper">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="section-title vision-title"
              >
                <span className="title-icon">👁️</span>
                <span className="title-text">Our Vision</span>
              </motion.h2>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="vision-card content-card"
              >
                <motion.div 
                  className="card-image-wrapper"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="image-glow"></div>
                  <motion.img 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    src={VisionImage} 
                    alt="Vision" 
                    className="card-image"
                  />
                </motion.div>
                <p className="card-text">
                  Our vision is to create innovative solutions that inspire creativity and bring value to communities worldwide. We strive for excellence, inclusivity, and sustainable growth in everything we do.
                  We aim to position Codethrive Infotech as a trusted technology partner, delivering meaningful digital impact to a global audience.
                </p>
                <div className="card-decoration card-decoration-1"></div>
                <div className="card-decoration card-decoration-2"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section className="mission-section">
          <div className="container">
            <div className="section-wrapper">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.3 }}
                className="section-title mission-title"
              >
                <span className="title-icon">🎯</span>
                <span className="title-text">Our Mission</span>
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="mission-card content-card"
              >
                <motion.div 
                  className="card-image-wrapper"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="image-glow"></div>
                  <motion.img 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    src={MissionImage} 
                    alt="Mission" 
                    className="card-image"
                  />
                </motion.div>
                <p className="card-text">
                  Deliver dependable IT services that solve real business problems with clarity and precision.
                  Focus on smart, secure, and scalable solutions for confident growth in a digital-first era.
                  Build long-term partnerships through transparency, quality execution, and continuous innovation.
                </p>
                <div className="card-decoration card-decoration-1"></div>
                <div className="card-decoration card-decoration-2"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* RATING SECTION */}
        <section className="rating-section">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rating-wrapper"
            >
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="rating-badge"
              >
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="badge-ring"
                />
                <div className="badge-content">
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="rating-number"
                  >
                    4.5
                  </motion.div>
                  <div className="rating-stars">
                    {[...Array(5)].map((_, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 + (index * 0.1), type: "spring", stiffness: 200 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.3, rotate: [0, -10, 10, 0], transition: { duration: 0.3 } }}
                        className="star"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="rating-content"
              >
                <h3 className="rating-title">
                  <motion.span
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="rating-title-gradient"
                  >
                    Trusted by 200+ Happy Clients
                  </motion.span>
                </h3>
                <p className="rating-description">
                  Our commitment to excellence has earned us a 4.5-star rating. 
                  Join hundreds of satisfied clients who have transformed their businesses with CodeThrive Infotech.
                </p>
                
                <div className="rating-stats">
                  {[
                    { number: "200+", label: "Projects Completed" },
                    { number: "98%", label: "Customer Satisfaction" },
                    { number: "24/7", label: "Available" }
                  ].map((stat, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
                      viewport={{ once: true }}
                      className="stat-item"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 + i * 0.1, type: "spring" }}
                        viewport={{ once: true }}
                        className="stat-number"
                      >
                        {stat.number}
                      </motion.div>
                      <div className="stat-label">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <div className="rating-particles">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  initial={{ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50, scale: 0 }}
                  animate={{ 
                    x: Math.random() * 200 - 100,
                    y: Math.random() * -300 - 100,
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 3, ease: "easeOut" }}
                  style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                >
                  ✨
                </motion.div>
              ))}
            </div>

            <div className="rating-decorations">
              <motion.div className="deco-circle deco-circle-1" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
              <motion.div className="deco-circle deco-circle-2" animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
              <motion.div className="deco-circle deco-circle-3" animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.55, 0.25] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
            </div>
          </div>
        </section>

        {/* =============================== */}
        {/* CUSTOMER FEEDBACK CAROUSEL - NEW */}
        {/* =============================== */}
        <section
          className="feedback-section"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="container">

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="feedback-header"
            >
              <div className="feedback-label-pill">
                <span className="feedback-label-dot"></span>
                Client Stories
              </div>
              <h2 className="feedback-title">
                <span className="feedback-title-gradient">What Our Clients</span>
                <br />
                <span className="feedback-title-white">Say About Us</span>
              </h2>
              <p className="feedback-subtitle">
                Serving excellence across every industry — from healthcare to finance, education to logistics
              </p>
            </motion.div>

            {/* Carousel Wrapper */}
            <div className="feedback-carousel-outer" ref={carouselRef}>

              {/* Prev Button */}
              <button
                className="carousel-nav-btn carousel-prev"
                onClick={goPrev}
                aria-label="Previous"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Cards */}
              <div className="feedback-carousel-track">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    className="feedback-cards-row"
                    initial={{ x: 80, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -80, opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {currentCards.map((feedback, index) => (
                      <motion.div
                        key={feedback.id}
                        className="feedback-card"
                        initial={{ opacity: 0, y: 30, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        whileHover={{ y: -6, transition: { duration: 0.3 } }}
                      >
                        {/* Card Top: industry badge + emoji */}
                        <div className="fc-top-row">
                          <div
                            className="fc-industry-badge"
                            style={{
                              background: `${feedback.color}22`,
                              border: `1.5px solid ${feedback.color}55`,
                              color: feedback.color
                            }}
                          >
                            <span className="fc-emoji">{feedback.emoji}</span>
                            {feedback.industry}
                          </div>
                          <div className="fc-stars">
                            <span className="fc-rating-num">
                              {feedback.rating.toFixed(1)}
                            </span>
                            {(() => {
                              const full = Math.floor(feedback.rating);
                              const half = feedback.rating % 1 >= 0.5;
                              const empty = 5 - full - (half ? 1 : 0);
                              return (
                                <>
                                  {[...Array(full)].map((_, i) => <span key={`f${i}`} className="fc-star">★</span>)}
                                  {half && <span className="fc-star fc-star-half">★</span>}
                                  {[...Array(empty)].map((_, i) => <span key={`e${i}`} className="fc-star fc-star-empty">★</span>)}
                                </>
                              );
                            })()}
                          </div>
                        </div>

                        {/* Quote Text */}
                        <div className="fc-quote-wrap">
                          <div className="fc-quote-icon" style={{ color: `${feedback.color}30` }}>"</div>
                          <p className="fc-text">{feedback.text}</p>
                        </div>

                        {/* Author */}
                        <div className="fc-author">
                          <div
                            className="fc-avatar"
                            style={{
                              background: `linear-gradient(135deg, ${feedback.color} 0%, ${feedback.color}99 100%)`
                            }}
                          >
                            {feedback.avatar}
                          </div>
                          <div className="fc-author-info">
                            <h4 className="fc-name">{feedback.name}</h4>
                            <p className="fc-role">{feedback.role}</p>
                          </div>
                          <div
                            className="fc-color-accent"
                            style={{ background: feedback.color }}
                          />
                        </div>

                        {/* Bottom accent line */}
                        <div
                          className="fc-bottom-bar"
                          style={{ background: `linear-gradient(90deg, ${feedback.color}, ${feedback.color}44)` }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next Button */}
              <button
                className="carousel-nav-btn carousel-next"
                onClick={goNext}
                aria-label="Next"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="feedback-dots">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  className={`feedback-dot ${i === activeSlide ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Auto-play progress bar */}
            {!isPaused && (
              <div className="feedback-progress-wrap">
                <motion.div
                  key={`progress-${activeSlide}`}
                  className="feedback-progress-bar"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 4, ease: "linear" }}
                />
              </div>
            )}

          </div>

          {/* Background decoration */}
          <div className="feedback-bg-elements">
            <motion.div 
              className="feedback-blob feedback-blob-1"
              animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div 
              className="feedback-blob feedback-blob-2"
              animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </section>

        {/* PROMO SECTION */}
        <section className="promo-section">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
              className="promo-card"
            >
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="promo-icon"
              >
                ✨
              </motion.div>
              <h3 className="promo-title">Transform Your Business With CodeThrive Infotech</h3>
              <p className="promo-text">Smart, scalable, and secure digital solutions tailored to your business needs.</p>
            </motion.div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default Home;