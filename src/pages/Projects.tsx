import React, { useState, useEffect } from "react";
import "./ProjectsPage.css";
import "./ProjectsPageTablet.css";
import "./ProjectsPageMobile.css";
import { useNavigate } from "react-router-dom"; 
import TitleBar from "../component/TitleBar";
import Footer from "../component/Footer";

type Category = "All" | "Web" | "AI" | "Enterprise";

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  category: "Web" | "AI" | "Enterprise";
  demoPath: string; 
}

const demoProjects: Project[] = [
  {
    id: 6,
    title: 'Food Restaurant Website',
    description: 'A highly visual, premium website template designed for gourmet restaurants.',
    features: [
      'Signature Menus',
      'Table Booking System',
      'Dynamic Hero Section',
      'Responsive Layout',
      'Interactive Culinary Showcase',
    ],
    category: 'Web',
    demoPath: '/demo/food-restaurant'
  },
  {
    id: 8,
    title: 'Rice Mill Management System',
    description: 'An advanced, colorful, and fully animated ERP solution designed specifically for modern rice mill operations.',
    features: [
      'Paddy Procurement & Weighbridge',
      'Inventory & Silo Management',
      'Milling Process Control',
      'Quality Checking (QC)',
      'Sales & Dispatch Logistics',
    ],
    category: 'Enterprise',
    demoPath: '/demo/rice-mill'
  },
  {
    id: 1,
    title: "Supermarket Billing System",
    description: "A scalable POS and billing management solution for modern retail operations.",
    features: [
      "Barcode scanning",
      "GST billing",
      "Daily sales reports",
      "Product & stock management",
      "Multi-branch support",
    ],
    category: "Enterprise",
    demoPath: "/demo/billing"
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description: "A modern online shopping platform with seamless user experience.",
    features: [
      "Product catalog",
      "Cart & checkout",
      "Online payments",
      "Admin panel",
      "Order tracking",
    ],
    category: "Web",
    demoPath: "/demo/ecommerce"
  },
  {
    id: 3,
    title: "Ticket Booking System",
    description: "A comprehensive system for booking movie, travel, and event tickets.",
    features: [
      "Seat selection",
      "Booking history",
      "Online payment",
      "User accounts",
      "Event scheduling",
    ],
    category: "Web",
    demoPath: "/demo/tickets"
  },
  {
    id: 4,
    title: "College ERP Management",
    description: "End-to-end ERP solution for academic institutions and universities.",
    features: [
      "Student record system",
      "Exam & marks management",
      "Attendance automation",
      "Departments & staff",
      "Timetable scheduling",
    ],
    category: "Enterprise",
    demoPath: "/demo/college-erp"
  },
  {
    id: 5,
    title: "Hospital Management System",
    description: "A comprehensive system for patient care and clinical operations.",
    features: [
      "Patient registration",
      "Doctor scheduling",
      "Billing & pharmacy",
      "Medical records",
      "Reports & analytics",
    ],
    category: "AI",
    demoPath: "/demo/hospital"
  },
  {
    id: 7,
    title: "Mobile Attendance App",
    description: "A premium, sophisticated attendance management system for corporate enterprises.",
    features: [
      "Geo-Fencing Check-in",
      "Biometric Verification",
      "Live Analytics",
      "Shift Management",
      "Employee Portal",
    ],
    category: "Enterprise",
    demoPath: "/demo/attendance-app"
  },
  {
    id: 9,
    title: "Real Estate & PropTech Portal",
    description: "An immersive property listing ecosystem with 3D tours, blockchain contracts, and agent dashboards.",
    features: [
      "Property Listings & Search",
      "Virtual 3D Tours",
      "Agent CRM Dashboard",
      "Automated Contracts",
      "Lead Management",
    ],
    category: "Web",
    demoPath: "/demo/real-estate"
  },
  {
    id: 10,
    title: "Cloud HR Management",
    description: "End-to-end cloud human resources management, payroll, and recruitment portal.",
    features: [
      "Employee Onboarding",
      "Payroll & Taxes",
      "Performance Reviews",
      "Leave Balances",
      "Recruitment Pipeline",
    ],
    category: "Enterprise",
    demoPath: "/demo/cloud-hr"
  },
  {
    id: 11,
    title: "Smart Logistics & Fleet Tracking",
    description: "AI-powered global supply chain and fleet tracking platform with real-time route optimization.",
    features: [
      "Live GPS Tracking",
      "Route Optimization",
      "Driver App Integration",
      "Fuel Monitoring",
      "Freight Billing",
    ],
    category: "AI",
    demoPath: "/demo/logistics"
  }
];

const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(demoProjects);
  const navigate = useNavigate();
  const categories: Category[] = ["All", "Web", "AI", "Enterprise"];

  useEffect(() => {
    const filtered =
      activeCategory === "All"
        ? demoProjects
        : demoProjects.filter((p) => p.category === activeCategory);
    setFilteredProjects(filtered);
    setExpandedId(null);
  }, [activeCategory]);

  return (
    <>
      <TitleBar />
      
      <div className="projects-container">
        <div className="container-fluid px-3 px-sm-4 px-lg-5">
          <h1 className="projects-title">Demo Projects</h1>

          {/* Filter Buttons */}
          <div className="projects-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="project-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="card-header">
                  <h3>{project.title}</h3>
                  <span className={`category-badge ${project.category.toLowerCase()}`}>
                    {project.category}
                  </span>
                </div>

                <p className="card-description">{project.description}</p>

                {expandedId === project.id && (
                  <div className="card-features">
                    {project.features.map((feat, i) => (
                      <span key={i} className="feature-badge">
                        {feat}
                      </span>
                    ))}
                  </div>
                )}

                <div className="card-actions">
                  <button
                    className="btn"
                    onClick={() =>
                      setExpandedId(expandedId === project.id ? null : project.id)
                    }
                  >
                    {expandedId === project.id ? "Hide Details" : "View Details"}
                  </button>
                 
                  <button
                    className="btn primary"
                    onClick={() => navigate(project.demoPath)}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProjectsPage;
