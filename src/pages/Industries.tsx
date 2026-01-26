import React, { useState, useEffect } from "react";

interface Industry {
  name: string;
  icon: string;
  description: string;
  color: string;
  services: string[];
  keyClients: string[];
  challengesSolved: string[];
  link?: string;
}

const industriesData: Industry[] = [
  {
    name: "Healthcare",
    icon: "🏥",
    color: "#FF6B6B",
    description: "We provide innovative healthcare solutions to hospitals, clinics, and health startups to improve patient care and operational efficiency.",
    services: ["EHR systems", "Telemedicine platforms", "Patient management apps", "Hospital workflow automation"],
    keyClients: ["Hospitals", "Clinics", "HealthTech startups"],
    challengesSolved: [
      "Reducing administrative overhead",
      "Improving patient engagement",
      "Enhancing operational efficiency",
      "Ensuring data security and HIPAA compliance"
    ],
    link: "/industries/healthcare"
  },
  {
    name: "Education & EdTech",
    icon: "🎓",
    color: "#6BCB77",
    description: "Our solutions help educational institutions and EdTech companies enhance learning experiences with modern technology.",
    services: ["Learning management systems (LMS)", "Virtual classrooms", "Online assessment platforms", "Educational mobile apps"],
    keyClients: ["Schools", "Colleges", "Online learning platforms", "EdTech startups"],
    challengesSolved: [
      "Engaging students remotely",
      "Tracking learning progress",
      "Streamlining admin operations",
      "Enhancing interactive learning"
    ],
    link: "/industries/education"
  },
  {
    name: "Retail & E-Commerce",
    icon: "🛒",
    color: "#4D96FF",
    description: "We enable retail and e-commerce businesses to boost sales and customer engagement with advanced digital solutions.",
    services: ["E-commerce websites", "POS integrations", "Inventory management systems", "Customer loyalty apps"],
    keyClients: ["Retail stores", "Online shops", "Shopping marketplaces"],
    challengesSolved: [
      "Increasing online sales",
      "Streamlining inventory management",
      "Improving customer engagement",
      "Optimizing checkout and payment flows"
    ],
    link: "/industries/retail"
  },
  {
    name: "Enterprise Systems",
    icon: "🏢",
    color: "#90433c",
    description: "We deliver robust enterprise software solutions to streamline business operations, HR, and internal workflows.",
    services: ["ERP solutions", "CRM systems", "Internal workflow automation", "HR management tools"],
    keyClients: ["Large corporations", "SMEs", "B2B service providers"],
    challengesSolved: [
      "Optimizing business processes",
      "Improving team collaboration",
      "Automating repetitive tasks",
      "Enhancing decision-making with analytics"
    ],
    link: "/industries/enterprise"
  },
  {
    name: "Startups & SaaS",
    icon: "🚀",
    color: "#FF6F91",
    description: "We help startups and SaaS companies scale quickly with tailored software development and cloud solutions.",
    services: ["SaaS platforms", "MVP development", "Cloud infrastructure setup", "API integrations"],
    keyClients: ["Tech startups", "SaaS businesses", "Innovative product teams"],
    challengesSolved: [
      "Launching products quickly",
      "Scaling efficiently",
      "Optimizing cost of development",
      "Ensuring high reliability and security"
    ],
    link: "/industries/startups"
  },
  {
    name: "Finance & Banking",
    icon: "💰",
    color: "#845EC2",
    description: "Our solutions improve banking, fintech, and financial services operations with secure, efficient technology.",
    services: ["Banking apps", "Fintech platforms", "Payment gateways", "Fraud detection systems"],
    keyClients: ["Banks", "Fintech startups", "Insurance companies", "Financial service providers"],
    challengesSolved: [
      "Improving transaction security",
      "Automating financial processes",
      "Reducing fraud",
      "Enhancing customer experience"
    ],
    link: "/industries/finance"
  },
  {
    name: "Hotels & Hospitality",
    icon: "🏨",
    color: "#b667a5",
    description: "We help hotels and hospitality businesses enhance guest experiences and streamline operations with modern technology.",
    services: ["Property management systems", "Booking engines", "Guest experience apps", "Restaurant & event management tools"],
    keyClients: ["Hotels", "Resorts", "Boutique stays", "Hospitality chains"],
    challengesSolved: [
      "Optimizing bookings and reservations",
      "Improving guest engagement",
      "Streamlining front desk and housekeeping operations",
      "Managing events and F&B efficiently"
    ],
    link: "/industries/hotels"
  },
  {
    name: "Manufacturing & Industrial",
    icon: "🏭",
    color: "#00B4D8",
    description: "We provide manufacturing and industrial companies with software solutions for process automation, production tracking, and resource management.",
    services: ["Production management systems", "Inventory tracking", "IoT-enabled monitoring", "Quality control software"],
    keyClients: ["Factories", "Manufacturing units", "Industrial plants", "Supply chain companies"],
    challengesSolved: [
      "Improving production efficiency",
      "Reducing downtime",
      "Ensuring quality compliance",
      "Tracking raw materials and inventory accurately"
    ],
    link: "/industries/manufacturing"
  },
  {
    name: "Travel & Tourism",
    icon: "✈️",
    color: "#FF5D8F",
    description: "We help travel and tourism businesses provide seamless booking experiences, manage itineraries, and enhance customer satisfaction.",
    services: ["Booking platforms", "Travel itinerary management", "Tourism mobile apps", "Customer loyalty systems"],
    keyClients: ["Travel agencies", "Tour operators", "Online travel portals", "Hospitality partners"],
    challengesSolved: [
      "Simplifying travel bookings",
      "Enhancing customer experience",
      "Managing tours and reservations efficiently",
      "Tracking traveler preferences for personalized services"
    ],
    link: "/industries/travel"
  }
];

const Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedIndustry ? "hidden" : "auto";
  }, [selectedIndustry]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndustry(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">Industries We Serve</h1>

      <div className="row g-4">
        {industriesData.map((industry, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div
              className="industry-card p-4 d-flex flex-column justify-content-center align-items-center text-center"
              style={{
                background: `linear-gradient(135deg, ${industry.color}44, ${industry.color}22)`,
                borderRadius: "1rem",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onClick={() => setSelectedIndustry(industry)}
            >
              <div className="industry-icon mb-3" style={{ fontSize: "3rem" }}>{industry.icon}</div>
              <h5 className="fw-bold">{industry.name}</h5>
            </div>
          </div>
        ))}
      </div>

      {selectedIndustry && (
        <div
          className="modal-overlay d-flex justify-content-center align-items-center"
          onClick={() => setSelectedIndustry(null)}
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100%", height: "100%",
            background: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            padding: "1rem",
          }}
        >
          <div
            className="modal-content bg-white p-4 rounded"
            style={{ maxWidth: "600px", width: "100%", maxHeight: "80vh", overflowY: "auto", position: "relative" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedIndustry(null)}
              style={{
                position: "absolute", top: "1rem", right: "1rem",
                background: "transparent", border: "none", fontSize: "1.5rem", cursor: "pointer"
              }}
            >
              &times;
            </button>

            <h3 style={{ color: selectedIndustry.color }}>{selectedIndustry.icon} {selectedIndustry.name}</h3>
            <p>{selectedIndustry.description}</p>

            {selectedIndustry.services?.length > 0 && (
              <>
                <h5>Services:</h5>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedIndustry.services.map((s, i) => (
                    <span key={i} style={{
                      padding: "0.3rem 0.8rem",
                      borderRadius: "50px",
                      backgroundColor: `${selectedIndustry.color}33`,
                      color: selectedIndustry.color,
                      fontWeight: 500,
                      fontSize: "0.9rem"
                    }}>{s}</span>
                  ))}
                </div>
              </>
            )}

            {selectedIndustry.keyClients?.length > 0 && (
              <>
                <h5 className="mt-3">Key Clients:</h5>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedIndustry.keyClients.map((c, i) => (
                    <span key={i} style={{
                      padding: "0.3rem 0.8rem",
                      borderRadius: "50px",
                      backgroundColor: `${selectedIndustry.color}33`,
                      color: selectedIndustry.color,
                      fontWeight: 500,
                      fontSize: "0.9rem"
                    }}>{c}</span>
                  ))}
                </div>
              </>
            )}

            {/* {selectedIndustry.link && (
              <a href={selectedIndustry.link} style={{
                display: "inline-block",
                marginTimport React, { useState, useEffect } from "react";

interface Industry {
  name: string;
  icon: string;
  description: string;
  color: string;
  services: string[];
  keyClients: string[];
  challengesSolved: string[];
  link?: string;
}

const industriesData: Industry[] = [
  // ... your same data
];

const Industries: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedIndustry ? "hidden" : "auto";
  }, [selectedIndustry]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndustry(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center fw-bold mb-5">Industries We Serve</h1>

      <div className="row g-4">
        {industriesData.map((industry, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <div
              className="industry-card p-4 d-flex flex-column justify-content-center align-items-center text-center"
              style={{ cursor: "pointer", borderRadius: "1rem" }}
              onClick={() => setSelectedIndustry(industry)}
            >
              <div className="industry-icon mb-3" style={{ fontSize: "3rem" }}>{industry.icon}</div>
              <h5 className="fw-bold">{industry.name}</h5>
            </div>
          </div>
        ))}
      </div>

      {selectedIndustry && (
        <div className="modal-overlay" onClick={() => setSelectedIndustry(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedIndustry(null)}>&times;</button>
            <h3 style={{ color: selectedIndustry.color }}>{selectedIndustry.icon} {selectedIndustry.name}</h3>
            <p>{selectedIndustry.description}</p>

            {selectedIndustry.services?.length > 0 && (
              <>
                <h5>Services:</h5>
                <div className="tag-container">
                  {selectedIndustry.services.map((s, i) => (
                    <span key={i} className="industry-tag" style={{ borderColor: selectedIndustry.color, color: selectedIndustry.color }}>{s}</span>
                  ))}
                </div>
              </>
            )}

            {selectedIndustry.keyClients?.length > 0 && (
              <>
                <h5 className="mt-3">Key Clients:</h5>
                <div className="tag-container">
                  {selectedIndustry.keyClients.map((c, i) => (
                    <span key={i} className="industry-tag" style={{ borderColor: selectedIndustry.color, color: selectedIndustry.color }}>{c}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        .industry-card {
          background: linear-gradient(135deg, #ffffff22, #ffffff11);
          transition: transform 0.3s, box-shadow 0.3s, background 0.6s;
        }
        .industry-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          background: linear-gradient(135deg, #ffffff33, #ffffff11);
        }

        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: #fff;
          border-radius: 1rem;
          max-width: 600px;
          width: 100%;
          max-height: 80vh;
          overflow-y: auto;
          padding: 2rem;
          position: relative;
          animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .modal-close {
          position: absolute;
          top: 1rem; right: 1rem;
          background: transparent; border: none;
          font-size: 1.5rem; cursor: pointer;
          transition: transform 0.2s;
        }
        .modal-close:hover { transform: scale(1.2); color: #007bff; }

        .tag-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .industry-tag {
          padding: 0.3rem 0.8rem;
          border-radius: 50px;
          border: 1px solid;
          font-weight: 500;
          font-size: 0.9rem;
          transition: transform 0.2s, background 0.3s, color 0.3s;
        }

        .industry-tag:hover {
          transform: scale(1.05);
          background: currentColor;
          color: #fff;
        }

        @media (max-width: 768px) {
          .industry-card { margin: 0 auto; }
          .modal-content { max-height: 90vh; padding: 1.5rem; }
        }
      `}</style>
    </div>
  );
};

export default Industries;
op: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: selectedIndustry.color,
                color: "#fff",
                borderRadius: "0.5rem",
                textDecoration: "none"
              }}>Learn More</a>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Industries;
