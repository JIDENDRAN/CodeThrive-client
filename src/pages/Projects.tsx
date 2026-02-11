import React, { useState, useEffect } from "react";
import "./ProjectsPage.css";
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