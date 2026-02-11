import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import TitleBar from "../component/TitleBar";
import Footer from "../component/Footer";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. FORMAT MESSAGE FOR WHATSAPP
    const whatsappMessage = `
🔔 *NEW CONTACT FORM SUBMISSION*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
🏢 *Company:* ${formData.company || 'Not provided'}
📋 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
_Sent from CodeThrive Website_
    `.trim();

    // 2. FORMAT MESSAGE FOR EMAIL
    const emailBody = `
NEW CONTACT FORM SUBMISSION

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'Not provided'}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from CodeThrive Contact Form
    `.trim();

    // 3. SEND TO WHATSAPP (Opens WhatsApp with pre-filled message)
    const whatsappUrl = `https://wa.me/919150781685?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // 4. SEND TO EMAIL (Opens email client with pre-filled email)
    const mailtoLink = `mailto:codethriveinfotech@gmail.com?subject=${encodeURIComponent('Contact Form: ' + formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');

    // 5. SHOW SUCCESS MESSAGE
    setSubmitted(true);

    // 6. RESET FORM AFTER 3 SECONDS
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: ""
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <>
      <TitleBar />
      
      <div className="contact-page">
        
        {/* HERO SECTION */}
        <section className="contact-hero">
          <div className="contact-hero-content">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="hero-badge"
            >
              <motion.span 
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="badge-icon"
              >
                💬
              </motion.span>
              <span className="badge-text">Get In Touch</span>
            </motion.div>
            
            <motion.h1 
              className="contact-hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="title-line"
              >
                LET'S BUILD
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="title-line"
              >
                SOMETHING AMAZING
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="title-line gradient-text"
              >
                TOGETHER
              </motion.span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="contact-hero-description"
            >
              Ready to transform your business with cutting-edge technology? 
              We're here to help bring your vision to life.
            </motion.p>
          </div>

          {/* Floating Shapes */}
          <div className="floating-shapes">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`shape shape-${i + 1}`}
                animate={{
                  x: [0, 30, 0, -30, 0],
                  y: [0, -30, 20, -20, 0],
                  rotate: [0, 90, 180, 270, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  delay: i * 2
                }}
              />
            ))}
          </div>
        </section>

        {/* CONTACT CONTENT */}
        <section className="contact-content-section">
          <div className="contact-content-container">
            
            {/* Contact Info Cards */}
            <div className="contact-info-grid">
              {/* Email Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(94, 196, 232, 0.3)" }}
                className="info-card email-card"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="info-card-icon"
                >
                  <Mail size={32} />
                </motion.div>
                <h3>Email</h3>
                <a href="mailto:codethriveinfotech@gmail.com">codethriveinfotech@gmail.com</a>
              </motion.div>

              {/* Phone Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                className="info-card phone-card"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="info-card-icon"
                >
                  <Phone size={32} />
                </motion.div>
                <h3>Phone</h3>
                <a href="tel:+919150781685">+91 9150781685</a>
              </motion.div>

              {/* Location Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)" }}
                className="info-card location-card"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="info-card-icon"
                >
                  <MapPin size={32} />
                </motion.div>
                <h3>Location</h3>
                <p>15/5 , 1 st Floor , Saravana Complex ,Opp to K-Mart</p>
                <p>Papampattipirivu, Trichy road , Coimbatore - 641103</p>
              </motion.div>

              {/* Working Hours Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)" }}
                className="info-card hours-card"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="info-card-icon"
                >
                  <Clock size={32} />
                </motion.div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="contact-form-section"
              id="contact-form"
            >
              <div className="contact-form-wrapper">
                <h3 className="form-title">Send us a Message</h3>
                <div style={{ 
                  textAlign: 'center', 
                  padding: '15px', 
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #e0f2fe 0%, #dbeafe 100%)',
                  borderRadius: '12px',
                  border: '2px solid rgba(59, 130, 246, 0.2)'
                }}>
                  <p style={{ margin: '0', color: '#1e40af', fontWeight: '600', fontSize: '0.95rem' }}>
                    📧 Email & 📱 WhatsApp will open with your message
                  </p>
                  <p style={{ margin: '5px 0 0 0', color: '#3b82f6', fontSize: '0.85rem' }}>
                    Just click Send in both windows to complete!
                  </p>
                </div>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="form-group"
                    >
                      <label htmlFor="name">Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="form-group"
                    >
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>

                  <div className="form-row">
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="form-group"
                    >
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                      />
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="form-group"
                    >
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </motion.div>
                  </div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="form-group"
                  >
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                    />
                  </motion.div>

                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="form-group"
                  >
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                    />
                  </motion.div>

                  <motion.button 
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="submit-btn"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <>
                        <span className="btn-icon">✅</span>
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send to Email & WhatsApp
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight size={20} />
                        </motion.span>
                      </>
                    )}
                  </motion.button>

                  {submitted && (
                    <motion.div 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="success-message"
                    >
                      <motion.span 
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 0.6 }}
                        className="success-icon"
                      >
                        🎉
                      </motion.span>
                      Email & WhatsApp opened! Please send both messages to complete.
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

          </div>
        </section>

        {/* CTA SECTION */}
        <section className="contact-cta">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="cta-content"
          >
            <motion.div 
              animate={{ 
                rotate: [0, 180, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="cta-icon"
            >
              🚀
            </motion.div>
            <h2 className="cta-title">Ready to Start Your Project?</h2>
            <p className="cta-text">
              Let's discuss how we can help you achieve your business goals with innovative technology solutions.
            </p>
            <div className="cta-buttons">
              <motion.a 
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-btn primary"
              >
                Get Started Now
              </motion.a>
              <motion.a 
                href="tel:+919150781685"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-btn secondary"
              >
                📞 Call Us Directly
              </motion.a>
            </div>
          </motion.div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default Contact;