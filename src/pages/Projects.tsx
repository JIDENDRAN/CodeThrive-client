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
    id: 14,
    title: 'Restaurant Website',
    description: 'A premium, highly interactive dining website template designed for modern fine dining and restaurant venues.',
    features: [
      'Visual Signature Menu Showcase',
      'Interactive Reservations Booking',
      'Responsive Mobile-First Interface',
      'Dynamic Banner Hero Sections',
      'Gourmet Culinary Galleries',
    ],
    category: 'Web',
    demoPath: 'https://chipper-narwhal-2b443d.netlify.app/'
  },
  {
    id: 15,
    title: 'Gym Website',
    description: 'An energetic, modern fitness club management and scheduling portal with vibrant animations.',
    features: [
      'Interactive Class Schedules',
      'Trainer Profile Highlights',
      'Vibrant Progress Trackers',
      'Membership Plan Checkout',
      'Integrated Fitness Blog',
    ],
    category: 'Web',
    demoPath: 'https://ornate-squirrel-175112.netlify.app/'
  },
  {
    id: 16,
    title: 'Cake & Bakery Shop',
    description: 'A charming, visual e-commerce catalog template for custom cakes, bakery goods, and online orders.',
    features: [
      'Interactive Custom Cake Builder',
      'Delightful Dessert Catalogs',
      'Secure Ordering Checklist',
      'Festive Event Catering Orders',
      'Customer Loyalty Points',
    ],
    category: 'Web',
    demoPath: 'https://ephemeral-semolina-06c7fc.netlify.app/'
  },
  {
    id: 17,
    title: 'Medical Shop Website',
    description: 'A clean, high-performance web storefront for medical shops, prescription uploads, and health products.',
    features: [
      'Direct Prescription Uploads',
      'OTC Drug Categorized Search',
      'Secure Checkout Gateway',
      'Real-time Medicine Inventory',
      'Pharmacist Consultancy Panel',
    ],
    category: 'Web',
    demoPath: 'https://sparkly-pixie-11db8a.netlify.app/'
  },
  {
    id: 18,
    title: 'Pet Shop Website',
    description: 'A friendly and bright pet shop catalog website featuring interactive pet products and care services.',
    features: [
      'Interactive Product Catalog',
      'Pet Boarding Appointments',
      'Breed Health Resource Hub',
      'Vet Booking Calendar',
      'Subscription Pet Food Delivery',
    ],
    category: 'Web',
    demoPath: 'https://joyful-gelato-a2cbd9.netlify.app/'
  },
  {
    id: 19,
    title: 'Groceries Shop',
    description: 'A colorful, automated grocery store shopping website with quick checkout and instant cart management.',
    features: [
      'Lightning-Fast Cart Adder',
      'Categorized Fresh Produce',
      'Daily Special Deals & Coupons',
      'Doorstep Delivery Scheduling',
      'Organic Ingredient Verification',
    ],
    category: 'Web',
    demoPath: 'https://stalwart-froyo-a435ec.netlify.app/'
  },
  {
    id: 20,
    title: 'Clothing Store',
    description: 'A high-end clothing store catalog presenting the latest fashion apparel collections with dynamic visual grids.',
    features: [
      'Interactive Fashion Lookbooks',
      'Visual Size & Color Selectors',
      'Dynamic Stock Counter',
      'Trend-Setter Style Filtering',
      'Seamless Shopping Experience',
    ],
    category: 'Web',
    demoPath: 'https://luminous-strudel-016c8f.netlify.app/'
  },
  {
    id: 21,
    title: 'Organics Store',
    description: 'A clean, health-focused online store selling organic cosmetics, foods, and eco-friendly products.',
    features: [
      'Certified Organic Badge Finder',
      'Eco-Friendly Zero Waste Guides',
      'Custom Bundle Product Builder',
      'Subscription Box Orders',
      'Holistic Wellness Blog',
    ],
    category: 'Web',
    demoPath: 'https://silly-syrniki-acc03b.netlify.app/'
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
                    onClick={() => {
                      if (project.demoPath.startsWith("http")) {
                        window.open(project.demoPath, "_blank");
                      } else {
                        navigate(project.demoPath);
                      }
                    }}
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
