import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/logo-removebg.png";
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Decorative Divider */}
        <div className="footer-divider"></div>

        {/* Main Footer Content */}
        <div className="footer-content">
          
          {/* Left: Brand Section */}
          <div className="footer-brand">
            <div className="footer-logo">
              <motion.img
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={HeroImage}
                alt="Codethrive Logo"
                className="footer-logo-icon"
              />
              <div>
                <div className="footer-company-name">
                  <span className="footer-name-part1">CODE</span>
                  <span className="footer-name-part2">THRIVE</span>
                  <span className="footer-name-part3"> INFOTECH</span>
                </div>
                <div className="footer-tagline">Progress. Cultivate. Innovate.</div>
              </div>
            </div>
            <p className="footer-description">
              Empowering businesses with smart, scalable, and secure digital solutions. 
              Transform your vision into reality with CodeThrive Infotech.
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div className="footer-links">
            <h3 className="footer-links-title">Quick Links</h3>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link to="/" className="footer-link">Home</Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link to="/industries" className="footer-link">Industries</Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link to="/projects" className="footer-link">Projects</Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link to="/insights" className="footer-link">Insights</Link>
            </motion.div>
            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
              <Link to="/contact" className="footer-link">Contact</Link>
            </motion.div>
          </div>

          {/* Right: Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-contact-title">Get In Touch</h3>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📧</span>
              <span>codethriveinfotech@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <span>+91 9150781685</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>Coimbatore, Tamil Nadu, India</span>
            </div>

            {/* Social Media Links */}
            <div className="footer-social">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+919150781685"
                className="footer-social-link"
                aria-label="Call Us"
              >
                <FaPhoneAlt />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="sms:+919150781685"
                className="footer-social-link"
                aria-label="Message Us"
              >
                <MdMessage />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919150781685"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/codethrive_infotech"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://codethriveinfo.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-social-logo"
                aria-label="Student Profile"
              >
                <img src={HeroImage} alt="Student Profile" className="footer-social-logo-img" />
              </motion.a>
            </div>
          </div>
          
        </div>

        {/* Bottom: Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} <span className="footer-copyright-highlight">CodeThrive Infotech</span>. All rights reserved.
          </p>
          <p className="footer-motto">
            Progress. Cultivate. Innovate.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;