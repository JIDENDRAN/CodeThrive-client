import React, { useState, useEffect } from "react";
import "./ProjectsPage.css";
import { useNavigate } from "react-router-dom"; 

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
    description: "A scalable POS and billing management solution.",
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
    description: "A modern online shopping platform.",
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
    description: "A system for booking movie, travel, and event tickets.",
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
    description: "End-to-end ERP for academic institutions.",
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
    description: "A full system for patient and clinical operations.",
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
    <div className="projects-container">
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
             onClick={() => navigate(project.demoPath)} >
             Live Demo
  </button>


            </div>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style>{`
        .projects-container {
          max-width: 1200px;
          margin: auto;
          padding: 2rem 1rem;
        }

        .projects-title {
          text-align: center;
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 2rem;
        }

        .projects-categories {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .category-btn {
          padding: 0.5rem 1.2rem;
          border: 1px solid #ddd;
          border-radius: 25px;
          background: #fff;
          cursor: pointer;
          transition: all 0.3s;
        }
        .category-btn:hover {
          background: #f0f0f0;
        }
        .category-btn.active {
          background: #007bff;
          color: #fff;
          border-color: #007bff;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .project-card {
          background: #fff;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .category-badge {
          padding: 0.3rem 0.75rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #fff;
        }
        .category-badge.web { background: #4d96ff; }
        .category-badge.ai { background: #6bcb77; }
        .category-badge.enterprise { background: #ff6b6b; }

        .card-description {
          font-size: 1rem;
          color: #555;
          margin-bottom: 1rem;
        }

        .card-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .feature-badge {
          padding: 0.3rem 0.7rem;
          border-radius: 50px;
          background: #f0f0f0;
          font-size: 0.85rem;
          color: #333;
        }

        .card-actions {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .btn {
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          transition: 0.3s;
        }
        .btn:hover { opacity: 0.9; }

        .btn.primary {
          background: #007bff;
          color: #fff;
        }

        @media (max-width: 768px) {
          .projects-title { font-size: 2rem; }
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
