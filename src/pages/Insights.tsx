import React, { useState } from "react";

type Category = "Growth" | "Security" | "Engineering" | "People";

interface Insight {
  year: number;
  month: string;
  title: string;
  description: string;
  category: Category;
}

const insightsData: Insight[] = [
  { year: 2024, month: "December", title: "Company Founded", description: "Founded the company with a clear mission to build secure, scalable, and high-quality software solutions for modern businesses.", category: "Growth" },
  { year: 2025, month: "January", title: "Core Engineering Foundations", description: "Defined core technology stack, coding standards, and architectural guidelines to ensure long-term maintainability.", category: "Engineering" },
  { year: 2025, month: "March", title: "Security-First Development Practices", description: "Adopted secure coding standards, access control policies, and data protection measures across all projects.", category: "Security" },
  { year: 2025, month: "June", title: "Initial Client Engagements", description: "Successfully delivered early client projects and established trust through transparent communication and reliability.", category: "Growth" },
  { year: 2025, month: "September", title: "Engineering Team Expansion", description: "Expanded the engineering team to support multiple concurrent projects while maintaining quality standards.", category: "People" },
  { year: 2025, month: "November", title: "Process Automation & DevOps", description: "Implemented CI/CD pipelines, automated testing, and streamlined deployment workflows to improve delivery speed.", category: "Engineering" },
  { year: 2025, month: "December", title: "Strengthened Security & Compliance", description: "Enhanced security audits, monitoring, and compliance practices to support enterprise-grade systems.", category: "Security" },
  { year: 2026, month: "January", title: "Client-Centric Delivery & Growth", description: "Refined delivery models based on client feedback, improving turnaround time, reliability, and long-term partnerships.", category: "Growth" },
];

const categories: Category[] = ["Growth", "Security", "Engineering", "People"];

const Insights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | "All">("All");

  const filteredInsights =
    activeFilter === "All"
      ? insightsData
      : insightsData.filter((i) => i.category === activeFilter);

  const groupedByYear = filteredInsights.reduce<Record<number, Insight[]>>(
    (acc, item) => {
      acc[item.year] = acc[item.year] || [];
      acc[item.year].push(item);
      return acc;
    },
    {}
  );

  return (
    <div className="container py-5 position-relative insights-page">
      {/* Background Shapes */}
      <div className="bg-shapes">
        <span className="shape shape-1"></span>
        <span className="shape shape-2"></span>
        <span className="shape shape-3"></span>
      </div>

      <h1 className="text-center fw-bold mb-3">Company Insights</h1>
      <p className="text-center text-muted mb-5">
        Our journey since inception — growth, engineering, security, and people.
      </p>

      {/* Filters */}
      <div className="filter-bar mb-5">
        <button
          className={activeFilter === "All" ? "active" : ""}
          onClick={() => setActiveFilter("All")}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeFilter === cat ? "active" : ""}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="timeline">
        {Object.keys(groupedByYear)
          .sort((a, b) => Number(b) - Number(a))
          .map((year) => (
            <div key={year} className="timeline-year">
              <h3 className="year-label">{year}</h3>
              {groupedByYear[Number(year)].map((item, index) => (
                <div key={index} className="timeline-item">
                  <span
                    className={`category-dot ${item.category.toLowerCase()}`}
                  ></span>
                  <div className="timeline-card">
                    <span className="timeline-date">
                      {item.month} {item.year}
                    </span>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                    <span className={`category-tag ${item.category.toLowerCase()}`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
      </div>

      {/* Styles */}
      <style>{`
        .insights-page {
          overflow: hidden;
        }

        /* Background Shapes */
        .bg-shapes {
          position: absolute;
          inset: 0;
          z-index: 0;
        }
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.3;
          animation: float 15s ease-in-out infinite alternate;
        }
        .shape-1 { width: 300px; height: 300px; background: #4d96ff; top: -80px; left: -100px; }
        .shape-2 { width: 400px; height: 400px; background: #6bcb77; bottom: -120px; right: -120px; }
        .shape-3 { width: 250px; height: 250px; background: #ffd93d; top: 40%; right: 20%; }

        @keyframes float {
          0% { transform: translateY(0px) translateX(0px);}
          50% { transform: translateY(-20px) translateX(20px);}
          100% { transform: translateY(0px) translateX(0px);}
        }

        /* Filters */
        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 2;
        }
        .filter-bar button {
          border: 1px solid #ddd;
          background: #fff;
          padding: 0.45rem 1rem;
          border-radius: 20px;
          cursor: pointer;
          transition: 0.3s;
        }
        .filter-bar button.active {
          background: #000;
          color: #fff;
          border-color: #000;
        }

        /* Timeline */
        .timeline { position: relative; z-index: 2; max-width: 800px; margin: auto; }
        .timeline::before {
          content: "";
          position: absolute;
          left: 16px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: #e5e5e5;
          border-radius: 2px;
        }

        .year-label { margin-left: 40px; margin-bottom: 1.5rem; font-weight: bold; font-size: 1.25rem; }

        .timeline-item { display: flex; margin-bottom: 1.5rem; align-items: flex-start; }

        .category-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          margin-left: 9px;
          margin-right: 20px;
          margin-top: 10px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.7; }
        }

        .growth { background: #4d96ff; }
        .security { background: #ff6b6b; }
        .engineering { background: #6bcb77; }
        .people { background: #845ec2; }

        .timeline-card {
          background: #fff;
          padding: 1rem 1.2rem;
          border-radius: 12px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.1);
          width: 100%;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .timeline-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
        }

        .timeline-date { font-size: 0.8rem; color: #888; display: block; margin-bottom: 0.3rem; }

        .category-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.6rem;
          border-radius: 12px;
          background: #f0f0f0;
          margin-top: 0.5rem;
          display: inline-block;
        }
        .category-tag.growth { background: #4d96ff33; color: #4d96ff; }
        .category-tag.security { background: #ff6b6b33; color: #ff6b6b; }
        .category-tag.engineering { background: #6bcb7733; color: #6bcb77; }
        .category-tag.people { background: #845ec233; color: #845ec2; }

        /* Responsive */
        @media (max-width: 768px) {
          .timeline::before { left: 8px; }
          .year-label { margin-left: 30px; }
          .timeline-item { flex-direction: column; margin-left: 20px; }
          .category-dot { margin-bottom: 8px; }
        }
      `}</style>
    </div>
  );
};

export default Insights;
