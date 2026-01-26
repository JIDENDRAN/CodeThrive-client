import React, { useState, FormEvent } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = "919150781685";
    const message = `Hello, my name is ${formData.name}.\nEmail: ${formData.email}.\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank", "noopener,noreferrer");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      {/* Background Circles */}
      <div className="bg-circles">
        <div className="circle" style={{ top: "15%", left: "10%" }} />
        <div className="circle" style={{ top: "70%", left: "30%" }} />
        <div className="circle" style={{ top: "40%", left: "80%" }} />
      </div>

      <div className="container py-5 position-relative">
        <h1 className="text-center mb-5 fw-bold text-dark">Contact Us</h1>
        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-5">
            <div className="info-card p-4 h-100">
              <h4 className="mb-4 fw-bold">Get in Touch</h4>
              <p><span className="icon">📧</span> <a href="mailto:codethriveinfotech@gmail.com">codethriveinfotech@gmail.com</a></p>
              <p><span className="icon">📞</span> <a href="tel:+919150781685">+91 9150781685</a></p>
              <p><span className="icon">💬</span> <a href="https://wa.me/919150781685" target="_blank" rel="noopener noreferrer">+91 9150781685</a></p>
              <p><span className="icon">📍</span> 15/5, 1st Floor, Saravana Complex, Pappampatti Pirivu, Trichy Road, Coimbatore - 641402</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-md-7">
            <div className="form-card p-4">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-12 form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label>Name</label>
                </div>
                <div className="col-12 form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label>Email</label>
                </div>
                <div className="col-12 form-group">
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder=" "
                    required
                  />
                  <label>Message</label>
                </div>
                <div className="col-12 d-grid">
                  <button
                    type="submit"
                    className="btn-whatsapp"
                    disabled={!formData.name || !formData.email || !formData.message}
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style>{`
        .contact-container {
          position: relative;
          min-height: 100vh;
          background: linear-gradient(135deg, #fdfbfb, #ebedee);
          overflow: hidden;
        }

        .bg-circles .circle {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(0, 123, 255, 0.2);
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }

        .info-card {
          background: #ffffffcc;
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          box-shadow: 0 15px 25px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        .info-card:hover { transform: translateY(-5px); }

        .info-card p { font-size: 1.05rem; margin-bottom: 1rem; }
        .info-card .icon { font-size: 1.2rem; margin-right: 0.5rem; }

        .form-card {
          background: #ffffffcc;
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: 0 15px 25px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }
        .form-card:hover { transform: translateY(-5px); }

        .form-group { position: relative; }
        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem 0.75rem;
          border-radius: 0.75rem;
          border: 1px solid #ccc;
          background: transparent;
          font-size: 1rem;
          outline: none;
        }

        .form-group label {
          position: absolute;
          left: 1rem;
          top: 1rem;
          transition: 0.3s;
          color: #555;
          pointer-events: none;
          background: transparent;
          padding: 0 0.25rem;
        }

        .form-group input:focus + label,
        .form-group input:not(:placeholder-shown) + label,
        .form-group textarea:focus + label,
        .form-group textarea:not(:placeholder-shown) + label {
          top: -0.5rem;
          left: 0.75rem;
          font-size: 0.85rem;
          color: #007bff;
          background: #ffffffcc;
        }

        .btn-whatsapp {
          background: #25D366;
          color: #fff;
          padding: 0.85rem 1.2rem;
          font-size: 1.1rem;
          border: none;
          border-radius: 0.75rem;
          font-weight: bold;
          transition: 0.3s;
        }
        .btn-whatsapp:hover {
          background: #1ebe57;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .bg-circles .circle { display: none; }
        }
      `}</style>
    </div>
  );
};

export default Contact;
