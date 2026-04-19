import React, { useState, useEffect } from "react";
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
import Bg5 from "../assets/bg5.png";
import HealthcareBg from "../assets/healthcare_bg.png";
import FintechBg from "../assets/fintech_bg.png";
import EcommerceBg from "../assets/ecommerce_bg.png";
import EdtechBg from "../assets/edtech_bg.png";
import ManufacturingBg from "../assets/manufacturing_bg.png";
import LogisticsBg from "../assets/logistics_bg.png";
import "./Home.css";
import "./homeTablet.css";
import "./homeMobile.css";
import "./HomePro.css";
import "./HomeProTablet.css";
import "./HomeProMobile.css";

const Home: React.FC = () => {
  // Component States
  const [testimonyIndex, setTestimonyIndex] = useState(0);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [currentIndustryIndex, setCurrentIndustryIndex] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);
  const [projectSlide, setProjectSlide] = useState(0);

  const projectsData = [
    { bgImage: HealthcareBg, title: 'Healthcare ERP', desc: 'Unified patient data systems reducing administration time by 40%.' },
    { bgImage: FintechBg, title: 'FinTech Portals', desc: 'Highly secure, scalable ledger and payment processing gateways.' },
    { bgImage: EcommerceBg, title: 'E-Commerce Native', desc: 'Omnichannel shopping platforms with real-time inventory tracking.' },
    { bgImage: EdtechBg, title: 'EdTech Ecosystems', desc: 'Comprehensive digital classrooms with AI-assisted grading.' },
    { bgImage: ManufacturingBg, title: 'Manufacturing IoT', desc: 'Smart factory solutions automating production lines and tracking issues.' },
    { bgImage: LogisticsBg, title: 'Supply Chain AI', desc: 'Global shipping tracking and predictive logistics using AI models.' },
    { bgImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Travel Aggregators', desc: 'Flight and tourism booking platforms offering seamless booking flows.' },
    { bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'PropTech Apps', desc: 'Real estate portals with 3D virtual tours and block-chain contracts.' },
    { bgImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Automotive Tech', desc: 'Embedded systems and smart dash integration for modern vehicles.' },
    { bgImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Finance Analytics', desc: 'Real-time stock modeling and blockchain-powered contract deployment.' },
    { bgImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Telecom Billing', desc: 'Instantaneous data processing and automated telecommunications billing.' },
    { bgImage: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'HR Management', desc: 'Comprehensive employee payroll, tracking, and recruitment software frameworks.' }
  ];

  // IT Services Data
  const itServices = [
    { icon: '☁️', title: 'Cloud Solutions', desc: 'Secure, scalable cloud migrations and infrastructure management.' },
    { icon: '🤖', title: 'AI & Automation', desc: 'Integrating intelligent algorithms to automate enterprise workflows.' },
    { icon: '📱', title: 'Digital Applications', desc: 'Building seamless mobile and web UI/UX ecosystems.' },
    { icon: '🛡️', title: 'Cybersecurity', desc: 'Zero-trust network architecture and threat mitigation.' },
    { icon: '📊', title: 'Data Analytics', desc: 'Transforming raw enterprise data into actionable insights.' },
    { icon: '⚙️', title: 'IoT Platforms', desc: 'Connecting hardware for real-time operational transparency.' },
    { icon: '🌐', title: 'Web Development', desc: 'High-performance, fully responsive modern web applications.' },
    { icon: '🔧', title: 'Software Maintenance & Support', desc: '24/7 dedicated monitoring, bug-fixes, and feature enhancements.' },
    { icon: '🏢', title: 'Enterprise ERP Systems', desc: 'Unified resource planning tailored to your exact business logic.' },
    { icon: '✨', title: 'UI/UX Consulting', desc: 'Human-centric design research bridging gaps between form and function.' },
    { icon: '🔄', title: 'DevSecOps & CI/CD', desc: 'Streamlining deployment pipelines with automated security checks.' },
    { icon: '🤝', title: 'Custom CRM Platforms', desc: 'Relationship management gateways boosting sales capabilities.' }
  ];

  // Customer Feedback Data (Expanded)
  const customerFeedbacks = [
    { id: 1, name: "Karthikeyan S.", role: "Owner, Kovai Textiles", rating: 5, text: "Our factory billing and stock management is now fully automated. Saved us hours every single day!", avatar: "KS" },
    { id: 2, name: "Dr. Meenakshi R.", role: "Founder, Madurai MediCare", rating: 5, text: "Patient records, appointments, billing — everything in one place. Our clinic runs so smoothly now.", avatar: "MR" },
    { id: 3, name: "Suresh Babu M.", role: "Principal, Sri Vidya Academy", rating: 4.5, text: "Students love our new learning portal. Attendance, marks, online tests — all digital now. Great work!", avatar: "SB" },
    { id: 4, name: "Vignesh Pandian", role: "Manager, Chennai Cargo Hub", rating: 5, text: "Live tracking, route updates, delivery reports — exactly what we needed. Deliveries are on time now!", avatar: "VP" },
    { id: 5, name: "Annamalai K.", role: "Director, Trichy Finance Co.", rating: 4.8, text: "Loan processing and customer ledger management became ten times faster. Very reliable software team.", avatar: "AK" },
    { id: 6, name: "Kavitha Lakshmi", role: "Owner, Coimbatore Silk Store", rating: 4.5, text: "My saree shop now sells online too! Orders are coming from across India. Best decision I made.", avatar: "KL" },
    { id: 7, name: "Priya Darshini", role: "CEO, TechNova Solutions", rating: 5, text: "CodeThrive built a stunning SaaS platform for us entirely from scratch. Outstanding UI/UX and zero bugs.", avatar: "PD" },
    { id: 8, name: "Ramesh Kannan", role: "Director, RK Constructions", rating: 4.9, text: "Site managers can now log daily expenses and upload site photos. Really modernized our workflow completely.", avatar: "RK" },
    { id: 9, name: "Sanjana Iyer", role: "Founder, Glow Beauty App", rating: 5, text: "Our mobile app skyrocketed our bookings. The payment gateway integration is flawless and lightning fast.", avatar: "SI" }
  ];

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setTestimonyIndex((prev) => (prev + 3 >= customerFeedbacks.length ? 0 : prev + 3));
    }, 6000);
    return () => clearInterval(testimonialTimer);
  }, [customerFeedbacks.length]);

  const animateUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const floatingIcons = ['💻', '🌐', '📱', '⚙️', '☁️', '🚀', '📊', '🛡️', '⚡', '🤖', '💡', '🔧', '🎯', '🔗'];

  return (
    <>
      <TitleBar />
      
      <div className="home-page">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="background-slider static-bg">
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1, x: [0, -20, 0], y: [0, -15, 0] }}
              transition={{ 
                scale: { duration: 1.5, ease: "easeOut" },
                opacity: { duration: 1.5 },
                x: { duration: 30, repeat: Infinity, ease: "easeInOut" },
                y: { duration: 25, repeat: Infinity, ease: "easeInOut" }
              }}
              className="background-slide"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', willChange: 'transform, opacity' }}
            >
              <div 
                className="background-slide-inner"
                style={{ backgroundImage: `url(${Bg3})`, willChange: 'transform, filter' }}
              />
            </motion.div>
          </div>

          <div className="hero-overlay"></div>

          {/* Floating animated blobs and IT Icons for hero */}
          <div className="floating-blobs">
            <motion.div animate={{ y: [0, 40, 0], x: [0, 30, 0], scale: [1, 1.1, 1] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="blob blob-1" />
            <motion.div animate={{ y: [0, -50, 0], x: [0, -30, 0], scale: [1, 1.2, 1] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="blob blob-2" />
            <motion.div animate={{ y: [0, 60, 0], x: [0, -50, 0] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="blob blob-3" />
            
            {floatingIcons.map((icon, idx) => (
              <motion.div 
                key={idx}
                className={`floating-it-icon icon-${idx}`}
                animate={{ 
                  y: [0, Math.random() * 100 - 50, 0], 
                  x: [0, Math.random() * 100 - 50, 0],
                  rotate: [0, 360],
                  opacity: [0.1, 0.4, 0.1]
                }}
                transition={{ duration: 15 + Math.random() * 10, repeat: Infinity, ease: "linear" }}
              >
                {icon}
              </motion.div>
            ))}
          </div>

          <div className="hero-container tcs-hero" style={{ zIndex: 3 }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ opacity: { duration: 0.8, delay: 0.2 }, scale: { duration: 0.8, delay: 0.2 } }}
              className="hero-logo-container"
            >
              <img src={HeroImage} alt="CodeThrive Logo" className="hero-logo-image" loading="eager" />
            </motion.div>

            <div className="hero-content tcs-content">
              <motion.div
                className="hero-top-text"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="animated-gradient-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'inherit', lineHeight: 1.1 }}>
                  <span>CodeThrive</span>
                  <span>Infotech</span>
                </span>
              </motion.div>
              <div className="hero-text-group">
                <motion.h1 
                  className="hero-main-title tcs-title text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Building <br />
                  <span className="hero-subtitle-glow">Greater Futures.</span>
                </motion.h1>
                
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="hero-description tcs-desc"
                >
                  Supercharging businesses with cutting-edge software ecosystems. We scale ideas into infinite digital impact.
                </motion.p>
                
                <div className="hero-cta-group" style={{ marginTop: '30px' }}>
                  <Link to="/contact#contact-form" className="contact-btn-link">
                    <motion.button 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="contact-btn neon-glow"
                    >
                      Transform your Business Today
                      <motion.span style={{ display: 'inline-block', marginLeft: '10px' }}>→</motion.span>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT US SECTION */}
        <section className="pro-section bg-light relative overflow-hidden" id="about-us">
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear"}} className="bg-shape shape-left" />
          <div className="pro-container relative z-10">
            <motion.div variants={animateUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="pro-center-header">
              <span className="pro-label gradient-bg">Company Profile</span>
              <h2 className="pro-heading">About Us</h2>
              <p className="pro-desc">We are CodeThrive Infotech, a team of passionate developers, designers, and strategists dedicated to turning your ideas into digital reality.</p>
            </motion.div>
            <div className="pro-grid-2">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              >
                <h3 style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '20px', color: '#0f172a' }}>Who We Are</h3>
                <p style={{ fontSize: '1.2rem', color: '#475569', lineHeight: 1.8, marginBottom: '30px' }}>
                  At CodeThrive Infotech, we transcend traditional software development by embedding ourselves into your business ecosystem. From cutting-edge cloud architectures to seamless mobile applications, our mission is to empower growth through technology.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {['Expert Team of Engineers', 'Agile & Transparent Process', 'Enterprise Grade Security', '24/7 Premium Support'].map((item, i) => (
                    <motion.li 
                      key={i} 
                      whileHover={{ x: 10 }} whileTap={{ x: 10 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.15rem', color: '#1e293b', fontWeight: 600, cursor: 'default' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', background: '#e0f2fe', color: '#0ea5e9', borderRadius: '50%', fontWeight: 'bold' }}>✓</span> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="about-us-image-wrapper hover-glow" style={{ width: '100%', height: '100%', background: 'transparent', boxShadow: 'none', padding: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <div style={{ position: 'relative', width: '100%', maxWidth: '480px', aspectRatio: '1/1', height: 'auto', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.1)', backgroundColor: '#0f172a' }}>
                   <motion.img 
                     src={Bg1} 
                     alt="About Us Image 1" 
                     loading="lazy"
                     style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                     animate={{ opacity: [1, 1, 0, 0, 0, 1] }} 
                     transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.33, 0.66, 0.92, 1] }}
                   />
                   <motion.img 
                     src={Bg2} 
                     alt="About Us Image 2" 
                     loading="lazy"
                     style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                     animate={{ opacity: [0, 0, 1, 1, 0, 0] }} 
                     transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", times: [0, 0.25, 0.33, 0.58, 0.66, 1] }}
                   />
                   <motion.img 
                     src={Bg5} 
                     alt="About Us Image 3" 
                     loading="lazy"
                     style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} 
                     animate={{ opacity: [0, 0, 1, 1, 0] }} 
                     transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", times: [0, 0.58, 0.66, 0.92, 1] }}
                   />
                   <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.8), transparent)' }} />
                   <h3 style={{ position: 'absolute', bottom: '30px', left: '30px', color: '#fff', fontSize: '1.8rem', fontWeight: 800, margin: 0, textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>Leading the Digital Frontier.</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pro-section bg-light relative" id="it-services">
          <div className="pro-container">
            <motion.div variants={animateUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pro-center-header">
              <span className="pro-label gradient-bg">IT Services & Solutions</span>
              <h2 className="pro-heading">Transforming Enterprises</h2>
              <p className="pro-desc">We leverage our deep domain expertise to pioneer advanced digital frameworks, robust operational software, and engaging customer interfaces.</p>
            </motion.div>

            <div className="pro-features-grid" style={{ gridTemplateColumns: showAllServices ? 'repeat(3, 1fr)' : undefined }}>
              {itServices.slice(0, showAllServices ? 12 : 6).map((feat, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -10, scale: 1.03, boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)" }} whileTap={{ y: -10, scale: 1.03, boxShadow: "0 20px 40px rgba(56, 189, 248, 0.2)" }}
                  className="pro-feature-card glass-card hover-glow" 
                  style={{ borderTop: '4px solid #38bdf8' }}
                >
                  <span className="icon-badge" style={{ display: 'inline-block', animation: 'float-y 3s ease-in-out infinite' }}>{feat.icon}</span>
                  <h3>{feat.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6 }}>{feat.desc}</p>
                </motion.div>
              ))}
            </div>
            {!showAllServices && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button 
                  onClick={() => setShowAllServices(true)} 
                  className="pro-cta-btn" 
                  style={{ cursor: 'pointer', border: 'none', padding: '12px 35px', background: '#0f172a', color: '#fff' }}
                >
                  Read More
                </button>
              </div>
            )}
            {showAllServices && (
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <button 
                  onClick={() => setShowAllServices(false)} 
                  className="pro-cta-btn" 
                  style={{ cursor: 'pointer', border: 'none', padding: '12px 35px', background: '#0f172a', color: '#fff' }}
                >
                  Show Less
                </button>
              </div>
            )}
          </div>
        </section>

        {/* PROJECTS / INDUSTRIES SECTION */}
        <section className="pro-section relative" style={{ background: '#ffffff' }} id="featured-projects">
          <div className="pro-container">
            <motion.div variants={animateUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pro-center-header">
              <span className="pro-label gradient-bg">Industries & Projects</span>
              <h2 className="pro-heading">Cross-Industry Impact</h2>
              <p className="pro-desc">Showcasing tailored project architectures across prominent business sectors.</p>
            </motion.div>
            
            <div className="pro-testimonials-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <AnimatePresence mode="wait">
                {projectsData.slice(projectSlide, projectSlide + 3).map((proj, i) => (
                  <motion.div 
                    key={projectSlide + i}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="pro-review-card project-image-card" 
                    style={{ 
                      position: 'relative', 
                      borderRadius: '20px', 
                      overflow: 'hidden', 
                      minHeight: '400px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '0',
                      border: 'none',
                      background: '#000',
                      boxShadow: '0 15px 35px rgba(0,0,0,0.3)'
                    }}
                  >
                    <img src={proj.bgImage} alt={proj.title} loading="lazy" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} className="project-bg-img" />
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(15, 23, 42, 1) 0%, rgba(15, 23, 42, 0.3) 60%, transparent 100%)', pointerEvents: 'none' }} />
                    <div style={{ position: 'relative', zIndex: 2, padding: '40px 30px', textAlign: 'left' }}>
                      <h3 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '15px' }}>{proj.title}</h3>
                      <p style={{ color: '#e2e8f0', margin: 0, fontSize: '1rem', lineHeight: '1.6' }}>{proj.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="projects-controls-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', flexWrap: 'wrap', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button onClick={() => setProjectSlide(p => p - 3 < 0 ? Math.max(0, projectsData.length - 3) : p - 3)} className="pro-cta-btn" style={{ padding: '10px 25px', background: '#0f172a' }}>← Prev</button>
                <button onClick={() => setProjectSlide(p => p + 3 >= projectsData.length ? 0 : p + 3)} className="pro-cta-btn" style={{ padding: '10px 25px', background: '#0f172a' }}>Next →</button>
              </div>
              <button 
                onClick={() => setShowAllProjects(true)} 
                className="pro-cta-btn" 
                style={{ cursor: 'pointer', border: 'none', padding: '12px 35px', background: '#0f172a', color: '#fff' }}
              >
                Show More Projects
              </button>
            </div>
          </div>

          {/* Projects Popup Modal */}
          {showAllProjects && (
            <div className="custom-modal-overlay" onClick={() => setShowAllProjects(false)} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.85)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <div className="custom-modal-content" onClick={(e) => e.stopPropagation()} style={{ background: '#0f172a', borderRadius: '20px', width: '100%', maxWidth: '1200px', maxHeight: '90vh', overflowY: 'auto', padding: '30px', position: 'relative', border: '1px solid rgba(56, 189, 248, 0.2)' }}>
                <button className="custom-modal-close" onClick={() => setShowAllProjects(false)} style={{ position: 'absolute', top: '15px', right: '20px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', borderRadius: '50%', width: '40px', height: '40px', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
                <h3 style={{ marginTop: 0, marginBottom: '25px', fontSize: '1.8rem', color: '#fff', textAlign: 'center' }}>All Cross-Industry Impact</h3>
                <div className="popup-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '15px' }}>
                  {projectsData.map((proj, i) => (
                    <div key={i} className="pro-review-card project-image-card popup-card" style={{ position: 'relative', borderRadius: '15px', overflow: 'hidden', minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0', border: 'none', background: '#000' }}>
                      <img src={proj.bgImage} alt={proj.title} loading="lazy" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} />
                      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to top, rgba(15, 23, 42, 1) 0%, transparent 100%)' }} />
                      <div style={{ position: 'relative', zIndex: 2, padding: '15px', textAlign: 'left' }}>
                        <h4 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 800, margin: '0 0 5px 0' }}>{proj.title}</h4>
                        <p className="popup-card-desc" style={{ color: '#e2e8f0', margin: 0, fontSize: '0.8rem', lineHeight: '1.4' }}>{proj.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="pro-section relative" style={{ background: '#ffffff' }} id="mission-vision">
           {/* Section floating elements */}
           <motion.div animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear"}} className="bg-shape shape-right" />
           
           <div className="pro-container">
            <motion.div 
              variants={animateUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="pro-center-header"
              style={{ position: 'relative' }}
            >
              <span className="pro-label gradient-bg">Purpose Driven</span>
              <h2 className="pro-heading">Our Mission & Vision</h2>
              <p className="pro-desc">Driving digital transformation forward with purpose, clarity, and impactful execution.</p>
            </motion.div>

            <div className="mission-vision-grid">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}
                className="mv-card"
              >
                <div className="mv-glow"></div>
                <div className="mv-content" style={{ textAlign: 'center' }}>
                  <div className="mv-icon-wrapper" style={{ margin: '0 auto 30px auto' }}>
                    <img src={MissionImage} alt="Mission" loading="lazy" />
                  </div>
                  <h3>Our Mission</h3>
                  <p style={{ textAlign: 'justify', textAlignLast: 'center' }}>
                    To deliver cutting-edge, reliable, and scalable software solutions that empower businesses to thrive in the digital era. We are committed to translating complex challenges into elegant, intuitive, and high-performance digital products that drive real-world success. By constantly evolving and adopting the latest technological standards, we bridge the gap between ambitious ideas and seamless execution. Our core goal is to architect resilient platforms that solve the most demanding operational hurdles.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, delay: 0.2 }}
                className="mv-card"
              >
                <div className="mv-glow"></div>
                <div className="mv-content" style={{ textAlign: 'center' }}>
                  <div className="mv-icon-wrapper" style={{ margin: '0 auto 30px auto' }}>
                    <img src={VisionImage} alt="Vision" loading="lazy" />
                  </div>
                  <h3>Our Vision</h3>
                  <p style={{ textAlign: 'justify', textAlignLast: 'center' }}>
                    To become the most trusted global technology partner, recognized universally for our relentless innovation, unparalleled quality, and profound impact on our clients' success. We aim to shape the future of tech with solutions that lead industries forward. We envision a modern digital landscape where automation and intelligent software design set a new baseline for enterprise efficiency, empowering organizations to unlock remarkable potential and drive long-term global impact.
                  </p>
                </div>
              </motion.div>
            </div>
           </div>
        </section>

        {/* RATINGS SECTION */}
        <section className="pro-section bg-dark relative overflow-hidden" id="ratings" style={{ padding: '60px 20px' }}>
          {/* Animated Background Textures */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 80, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, transparent 70%)', filter: 'blur(60px)' }} />

          <div className="pro-container relative z-10 pro-rating-grid">
            
            {/* Left Column: The Big Badge */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="pro-rating-badge-container"
            >
              <div className="pro-rating-badge neon-glow">
                {/* Decorative border animation */}
                <svg className="pro-rating-border" width="100%" height="100%">
                  <motion.rect x="0" y="0" width="100%" height="100%" rx="40" 
                    fill="none" stroke="rgba(56, 189, 248, 0.3)" strokeWidth="2"
                    strokeDasharray="1000" strokeDashoffset="1000"
                    animate={{ strokeDashoffset: [1000, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
                
                <motion.h3 
                  initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.6, delay: 0.2 }}
                  className="animated-gradient-text pro-rating-score"
                >
                  4.9
                </motion.h3>
                <div className="pro-rating-stars">
                  {[1,2,3,4,5].map(i => (
                    <motion.span 
                      key={i}
                      initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} 
                      animate={{ scale: [1, 1.15, 1], filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] }}
                      transition={{ delay: 0.3 + (i*0.1), scale: { duration: 2, repeat: Infinity, delay: i*0.2 }, filter: { duration: 2, repeat: Infinity, delay: i*0.2 } }}
                    >★</motion.span>
                  ))}
                </div>
                <p className="pro-rating-label">Average Global Rating</p>
              </div>
            </motion.div>

            {/* Right Column: Content and Stats */}
            <div className="pro-rating-content">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }}>
                <span className="pro-label" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', borderColor: 'rgba(56, 189, 248, 0.2)' }}>Proven Excellence</span>
                <h2 className="pro-heading text-white">Trusted by Industry Leaders</h2>
                <p className="pro-desc" style={{ color: '#cbd5e1', maxWidth: '100%' }}>
                  We don't just write code; we build digital legacies. Backed by industry-leading satisfaction rates, CodeThrive has proven its dedication to delivering flawless, high-performance software infrastructures time and time again.
                </p>
              </motion.div>

              <div className="pro-rating-stats-grid">
                {[
                  { num: "50+", label: "Clients Empowered", icon: "🏢" },
                  { num: "100%", label: "Project Delivery", icon: "🚀" },
                  { num: "24/7", label: "Active Support", icon: "🛡️" }
                ].map((stat, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -8, scale: 1.05, borderColor: 'rgba(56, 189, 248, 0.4)', boxShadow: '0 15px 30px rgba(56, 189, 248, 0.15)' }} whileTap={{ y: -8, scale: 1.05, borderColor: 'rgba(56, 189, 248, 0.4)', boxShadow: '0 15px 30px rgba(56, 189, 248, 0.15)' }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                    className="pro-rating-stat-card"
                  >
                    {/* Hover glare effect */}
                    <motion.div className="glare" 
                      animate={{ left: ['-100%', '200%'] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                    />
                    
                    <div className="stat-icon">{stat.icon}</div>
                    <div className="animated-gradient-text stat-num">{stat.num}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* CUSTOMER FEEDBACKS - CAROUSEL GRID */}
        <section className="pro-section bg-light relative overflow-hidden" id="testimonials">
          <motion.div animate={{ x: [-100, 100, -100] }} transition={{ duration: 15, repeat: Infinity, ease: "linear"}} className="bg-shape shape-left" />
          
          <div className="pro-container">
            <motion.div variants={animateUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pro-center-header">
              <span className="pro-label gradient-bg">Client Stories</span>
              <h2 className="pro-heading">What Our Clients Say</h2>
              <p className="pro-desc">We pride ourselves on a 4.5+ star average rating. Discover why businesses trust CodeThrive for their digital transformation.</p>
            </motion.div>
            
            <div className="testimonial-carousel-window" style={{ overflow: 'hidden', width: '100%' }}>
              <AnimatePresence mode="wait">
                <motion.div 
                  key={testimonyIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="pro-testimonials-grid"
                  style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', width: '100%' }}
                >
                  {customerFeedbacks.slice(testimonyIndex, testimonyIndex + 3).map((feedback, idx) => {
                    const avatarColors = ['#f59e0b', '#10b981', '#8b5cf6', '#3b82f6', '#ef4444', '#ec4899', '#06b6d4', '#f97316'];
                    const color = avatarColors[feedback.id % avatarColors.length];
                    return (
                      <motion.div 
                        key={feedback.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ y: -10, scale: 1.02 }} whileTap={{ y: -10, scale: 1.02 }}
                        className="pro-review-card glass-card hover-glow"
                      >
                        <div className="pro-stars">
                          {Array.from({ length: Math.floor(feedback.rating) }).map((_, i) => "★")}
                          {feedback.rating % 1 !== 0 ? "★" : ""}
                        </div>
                        <p className="pro-review-text">"{feedback.text}"</p>
                        <div className="pro-reviewer">
                          <div className="pro-avatar" style={{ background: color }}>
                            {feedback.avatar}
                          </div>
                          <div className="pro-reviewer-info">
                            <h4>{feedback.name}</h4>
                            <span>{feedback.role}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Carousel Dot Indicators */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
              {Array.from({ length: Math.ceil(customerFeedbacks.length / 3) }).map((_, idx) => (
                <div 
                  key={idx}
                  style={{
                    width: testimonyIndex / 3 === idx ? '25px' : '10px',
                    height: '10px',
                    borderRadius: '5px',
                    background: testimonyIndex / 3 === idx ? '#38bdf8' : '#cbd5e1',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onClick={() => setTestimonyIndex(idx * 3)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="pro-section relative" id="faq">
          <div className="pro-container">
            <motion.div variants={animateUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pro-center-header">
              <span className="pro-label">FAQ</span>
              <h2 className="pro-heading">Frequently Asked Questions</h2>
              <p className="pro-desc">Straight answers to your questions. Transparency is our priority.</p>
            </motion.div>
            
            <motion.div variants={animateUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="pro-faq-list">
              {[
                {q: "What services do you offer?", a: "We deliver tailored digital solutions including advanced web development, scalable mobile applications, intuitive UI/UX design, and strategic SEO services. From business websites to enterprise-grade platforms, we ensure high-performance, secure, and growth-driven results."},
                {q: "How long does it take to build a website?", a: "A standard corporate website usually takes 2-4 weeks, while complex web applications may take 2-3 months. We provide a detailed timeline during our initial consultation."},
                {q: "Do you provide maintenance and support?", a: "Yes, we offer ongoing maintenance, security updates, and performance monitoring to ensure your software runs smoothly long after the initial launch."},
                {q: "Will my website be mobile-friendly and SEO optimized?", a: "Absolutely. Every project we deliver is 100% responsive and built with technical SEO best practices, ensuring fast load times and optimal search engine visibility."},
                {q: "How scalable are your enterprise cloud software solutions?", a: "Our enterprise architectures are designed horizontally and vertically scalable utilizing cutting-edge Kubernetes, AWS, and serverless infrastructures to instantly scale with business traffic without incurring immediate massive costs."},
                {q: "What sets CodeThrive security standards apart?", a: "We utilize zero-trust models, performing continuous automated audits, database encryption at rest and in transit, paired with global ISO compliance parameters, ensuring absolute data integrity."},
                {q: "Do you implement intelligent AI within your platforms?", a: "Yes! We deeply integrate custom automation protocols and Large Language Models directly into our products to replace repetitive workflow hours with instantaneous intelligent insights."},
                {q: "What is your typical project onboarding workflow?", a: "We begin with a thorough technical audit followed by rapid prototyping, establishing tight feedback loops with your core teams, meaning you are fully immersed in visual progress before any complex coding begins."}
              ].map((faq, i) => (
                <details className="pro-faq-item" key={i}>
                  <summary className="pro-faq-q">
                    {faq.q}
                    <span className="pro-faq-plus">+</span>
                  </summary>
                  <div className="pro-faq-a">
                    {faq.a}
                  </div>
                </details>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="pro-section bg-light text-center relative overflow-hidden" style={{ textAlign: 'center' }}>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} 
            transition={{ duration: 8, repeat: Infinity }} 
            className="cta-bg-glow" 
          />
          <div className="pro-container relative z-10">
            <motion.div variants={animateUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="cta-pro-card hover-glow glass-card" style={{ padding: '60px 40px', borderRadius: '30px', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
              <h2 className="pro-heading">Ready for your project?</h2>
              <p style={{ color: '#475569' }}>Let's create something extraordinary together. We look forward to hearing from you.</p>
              <Link to="/contact#contact-form" className="pro-cta-btn">
                Book a Call
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;