import React, { useState, useEffect } from "react";
import HealthcareIcon from "../assets/healthcare.png";
import EducationIcon from "../assets/education.png";
import EcommerceIcon from "../assets/ecommerce.png";
import EnterpriseIcon from "../assets/enterprise.png";
import StartupsIcon from "../assets/startup.png";
import BankingIcon from "../assets/banking.png";
import HotelsIcon from "../assets/hotels.png";
import ManufacturingIcon from "../assets/manufacturing.png";
import TravelsIcon from "../assets/travels.png";
import TitleBar from "../component/TitleBar";
import "./Industries.css";
import Footer from "../component/Footer";

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
    icon: HealthcareIcon,
    color: "#0e8e8e",
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
    icon: EducationIcon,
    color: "#07063f",
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
    icon: EcommerceIcon,
    color: "#ef2b2b",
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
    icon: EnterpriseIcon,
    color: "#ea792e",
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
    icon: StartupsIcon,
    color: "#9d198b",
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
    icon: BankingIcon,
    color: "#EFBF04",
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
    icon: HotelsIcon,
    color: "#2f034b",
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
    icon: ManufacturingIcon,
    color: "#012711",
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
    icon: TravelsIcon,
    color: "#00a10d",
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
    <>
      <TitleBar />
      
      <div className="industry-section">
        <div className="container-fluid px-3 px-sm-4 px-lg-5">
          <h1 className="industry-main-title">Industries We Serve</h1>

          <div className="row g-3 g-sm-4 g-lg-5">
            {industriesData.map((industry, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div
                  className="industry-card"
                  style={{
                    background: `linear-gradient(135deg, ${industry.color}44, ${industry.color}22)`,
                  }}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {/* Image Container */}
                  <div className="industry-image">
                    <img 
                      src={industry.icon} 
                      alt={industry.name}
                    />
                  </div>

                  {/* Footer with Title and Arrow */}
                  <div className="industry-footer">
                    <h5 className="shine-text">{industry.name}</h5>
                    <div 
                      className="arrow-btn" 
                      style={{ backgroundColor: industry.color }}
                    >
                      ↗
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedIndustry && (
            <div
              className="modal-overlay"
              onClick={() => setSelectedIndustry(null)}
            >
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setSelectedIndustry(null)}
                >
                  &times;
                </button>

                <div className="modal-header">
                  <div className="modal-icon-wrapper">
                    <img 
                      src={selectedIndustry.icon} 
                      alt={selectedIndustry.name}
                      className="modal-icon"
                    />
                  </div>
                  <h3 style={{ color: selectedIndustry.color }}>
                    {selectedIndustry.name}
                  </h3>
                </div>

                <p className="modal-description">{selectedIndustry.description}</p>

                {selectedIndustry.services?.length > 0 && (
                  <div className="modal-section">
                    <h5 className="modal-subtitle">Services:</h5>
                    <div className="tag-container">
                      {selectedIndustry.services.map((s, i) => (
                        <span
                          key={i}
                          className="industry-tag"
                          style={{
                            backgroundColor: `${selectedIndustry.color}33`,
                            color: selectedIndustry.color,
                          }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedIndustry.keyClients?.length > 0 && (
                  <div className="modal-section">
                    <h5 className="modal-subtitle">Key Clients:</h5>
                    <div className="tag-container">
                      {selectedIndustry.keyClients.map((c, i) => (
                        <span
                          key={i}
                          className="industry-tag"
                          style={{
                            backgroundColor: `${selectedIndustry.color}33`,
                            color: selectedIndustry.color,
                          }}
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedIndustry.challengesSolved?.length > 0 && (
                  <div className="modal-section">
                    <h5 className="modal-subtitle">Challenges We Solve:</h5>
                    <ul className="challenges-list">
                      {selectedIndustry.challengesSolved.map((challenge, i) => (
                        <li key={i} style={{ color: selectedIndustry.color }}>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Industries;