import React, { useState, useEffect } from "react";
import TitleBar from "../component/TitleBar";
import Footer from "../component/Footer";

type Category = "Growth" | "Security" | "Engineering" | "People";

interface Insight {
  title: string;
  description: string;
  category: Category;
}

const insightsData: Insight[] = [
  {
    title: "Company Founded",
    description:
      "Founded the company with a clear mission to build secure, scalable, and high-quality software solutions for modern businesses.",
    category: "Growth",
  },
  {
    title: "Core Engineering Foundations",
    description:
      "Defined core technology stack, coding standards, and architectural guidelines to ensure long-term maintainability.",
    category: "Engineering",
  },
  {
    title: "Security-First Development Practices",
    description:
      "Adopted secure coding standards, access control policies, and data protection measures across all projects.",
    category: "Security",
  },
  {
    title: "Initial Client Engagements",
    description:
      "Successfully delivered early client projects and established trust through transparent communication and reliability.",
    category: "Growth",
  },
  {
    title: "Engineering Team Expansion",
    description:
      "Expanded the engineering team to support multiple concurrent projects while maintaining quality standards.",
    category: "People",
  },
  {
    title: "Process Automation & DevOps",
    description:
      "Implemented CI/CD pipelines, automated testing, and streamlined deployment workflows to improve delivery speed.",
    category: "Engineering",
  },
  {
    title: "Strengthened Security & Compliance",
    description:
      "Enhanced security audits, monitoring, and compliance practices to support enterprise-grade systems.",
    category: "Security",
  },
  {
    title: "Client-Centric Delivery & Growth",
    description:
      "Refined delivery models based on client feedback, improving turnaround time, reliability, and long-term partnerships.",
    category: "Growth",
  },
];

const categories: Category[] = ["Growth", "Security", "Engineering", "People"];

const categoryColors: Record<Category, string> = {
  Growth: "#4d96ff",
  Security: "#ff6b6b",
  Engineering: "#6bcb77",
  People: "#845ec2",
};

const Insights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | "All">("All");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  const filteredInsights =
    activeFilter === "All"
      ? insightsData
      : insightsData.filter((i) => i.category === activeFilter);

  return (
    <>
      <TitleBar />
      
      <div className="insights-page">
        <div className="container-fluid px-3 px-sm-4 px-lg-5">
          <h1 className="insights-main-title">Company Insights</h1>
          <p className="insights-subtitle">
            Our journey — growth, engineering, security, and people.
          </p>

          {/* Filters */}
          <div className="filter-bar">
            <button
              className={`filter-btn ${activeFilter === "All" ? "active" : ""}`}
              onClick={() => setActiveFilter("All")}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
                style={
                  activeFilter === cat
                    ? {
                        backgroundColor: categoryColors[cat],
                        borderColor: categoryColors[cat],
                        color: "#fff",
                      }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className={`timeline-container ${loaded ? "show" : ""}`}>
            <div className="timeline">
              {filteredInsights.map((item, index) => (
                <div
                  key={index}
                  className="timeline-item"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="timeline-marker">
                    <span
                      className="category-dot"
                      style={{ backgroundColor: categoryColors[item.category] }}
                    ></span>
                  </div>
                  <div className="timeline-content">
                    <div
                      className="timeline-card"
                      style={{
                        borderLeft: `4px solid ${categoryColors[item.category]}`,
                      }}
                    >
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-description">{item.description}</p>
                      <span
                        className="category-tag"
                        style={{
                          backgroundColor: `${categoryColors[item.category]}22`,
                          color: categoryColors[item.category],
                        }}
                      >
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      <style>{`
        /* ======================= */
        /* 🎯 MAIN SECTION */
        /* ======================= */
        .insights-page {
          padding: 20px 0px 120px 0px;
          background: #f5f5f5;
          min-height: 100vh;
          font-family: "Inter", "Segoe UI", system-ui, sans-serif;
        }

        /* ======================= */
        /* 📌 TITLE */
        /* ======================= */
        .insights-main-title {
          text-align: center;
          font-weight: 800;
          font-size: 36px;
          margin-top: 0px;
          margin-bottom: 15px;
          background: linear-gradient(90deg, #1a1a1a, #292626f7, #1a1a1a);
          background-size: 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: titleShine 4s linear infinite;
        }

        @keyframes titleShine {
          0% { background-position: 0%; }
          100% { background-position: 200%; }
        }

        .insights-subtitle {
          text-align: center;
          color: #6b7280;
          margin-bottom: 40px;
          font-size: 16px;
        }

        /* ======================= */
        /* 🎨 FILTER BAR */
        /* ======================= */
        .filter-bar {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 50px;
          position: relative;
          z-index: 2;
        }

        .filter-btn {
          border: 2px solid #e5e7eb;
          background: #fff;
          padding: 10px 24px;
          border-radius: 999px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .filter-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
        }

        .filter-btn.active {
          background: #111827;
          color: #fff;
          border-color: #111827;
          transform: scale(1.08);
        }

        /* ======================= */
        /* 📍 TIMELINE CONTAINER */
        /* ======================= */
        .timeline-container {
          position: relative;
          max-width: 900px;
          margin: auto;
        }

        .timeline {
          position: relative;
          padding-left: 40px;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 17px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #e5e7eb 0%, #d1d5db 50%, #e5e7eb 100%);
          border-radius: 2px;
        }

        /* ======================= */
        /* 🎯 TIMELINE ITEM */
        /* ======================= */
        .timeline-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 35px;
          opacity: 0;
          transform: translateX(-30px);
          animation: slideInTimeline 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          position: relative;
        }

        @keyframes slideInTimeline {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* ======================= */
        /* 📍 TIMELINE MARKER */
        /* ======================= */
        .timeline-marker {
          position: absolute;
          left: -40px;
          top: 15px;
          z-index: 2;
        }

        .category-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: block;
          box-shadow: 0 0 0 4px #f5f5f5, 0 0 0 6px currentColor;
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.8;
          }
        }

        /* ======================= */
        /* 📄 TIMELINE CONTENT */
        /* ======================= */
        .timeline-content {
          flex: 1;
        }

        .timeline-card {
          background: #ffffff;
          padding: 24px 28px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .timeline-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.7s ease;
        }

        .timeline-card:hover {
          transform: translateY(-8px) translateX(5px) scale(1.02);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .timeline-card:hover::before {
          left: 100%;
        }

        /* ======================= */
        /* 📝 CARD CONTENT */
        /* ======================= */
        .card-title {
          font-weight: 700;
          font-size: 20px;
          margin-bottom: 12px;
          color: #111827;
          transition: color 0.3s ease;
        }

        .timeline-card:hover .card-title {
          color: #1f2937;
        }

        .card-description {
          color: #000000;
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        /* ======================= */
        /* 🏷️ CATEGORY TAG */
        /* ======================= */
        .category-tag {
          display: inline-block;
          font-size: 13px;
          padding: 6px 16px;
          border-radius: 999px;
          font-weight: 600;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
        }

        .category-tag:hover {
          transform: scale(1.1) translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* ======================= */
        /* 📱 MOBILE RESPONSIVE */
        /* ======================= */
        @media (max-width: 576px) {
          .insights-page {
            padding: 20px 0px 80px 0px;
          }

          .insights-main-title {
            font-size: 26px;
            margin-bottom: 10px;
            padding: 0 15px;
          }

          .insights-subtitle {
            font-size: 14px;
            margin-bottom: 30px;
            padding: 0 15px;
          }

          .filter-bar {
            gap: 8px;
            margin-bottom: 35px;
            padding: 0 15px;
          }

          .filter-btn {
            padding: 8px 18px;
            font-size: 14px;
          }

          .timeline-container {
            padding: 0 10px;
          }

          .timeline {
            padding-left: 30px;
          }

          .timeline::before {
            left: 13px;
          }

          .timeline-marker {
            left: -30px;
          }

          .category-dot {
            width: 14px;
            height: 14px;
            box-shadow: 0 0 0 3px #f5f5f5, 0 0 0 5px currentColor;
          }

          .timeline-item {
            margin-bottom: 25px;
          }

          .timeline-card {
            padding: 18px 20px;
            border-radius: 14px;
          }

          .card-title {
            font-size: 17px;
            margin-bottom: 10px;
          }

          .card-description {
            font-size: 14px;
            margin-bottom: 12px;
          }

          .category-tag {
            font-size: 12px;
            padding: 5px 14px;
          }
        }

        /* ======================= */
        /* 💻 TABLET RESPONSIVE */
        /* ======================= */
        @media (min-width: 577px) and (max-width: 991px) {
          .insights-page {
            padding: 20px 0px 100px 0px;
          }

          .insights-main-title {
            font-size: 30px;
            padding: 0 20px;
          }

          .insights-subtitle {
            font-size: 15px;
            padding: 0 20px;
          }

          .filter-bar {
            margin-bottom: 40px;
          }

          .filter-btn {
            padding: 9px 20px;
          }

          .timeline {
            padding-left: 35px;
          }

          .timeline::before {
            left: 15px;
          }

          .timeline-marker {
            left: -35px;
          }

          .category-dot {
            width: 16px;
            height: 16px;
          }

          .timeline-card {
            padding: 20px 24px;
          }

          .card-title {
            font-size: 18px;
          }
        }

        /* ======================= */
        /* 🌐 LARGE SCREEN */
        /* ======================= */
        @media (min-width: 992px) and (max-width: 1399px) {
          .insights-page {
            padding: 20px 0px 110px 0px;
          }

          .insights-main-title {
            font-size: 34px;
            padding: 0 25px;
          }
        }

        @media (min-width: 1400px) {
          .insights-page {
            padding: 20px 30px 120px 30px;
          }

          .insights-main-title {
            font-size: 36px;
          }
        }

        /* ======================= */
        /* 🎬 STAGGERED ANIMATIONS */
        /* ======================= */
        .timeline-item:nth-child(1) { animation-delay: 0.1s; }
        .timeline-item:nth-child(2) { animation-delay: 0.2s; }
        .timeline-item:nth-child(3) { animation-delay: 0.3s; }
        .timeline-item:nth-child(4) { animation-delay: 0.4s; }
        .timeline-item:nth-child(5) { animation-delay: 0.5s; }
        .timeline-item:nth-child(6) { animation-delay: 0.6s; }
        .timeline-item:nth-child(7) { animation-delay: 0.7s; }
        .timeline-item:nth-child(8) { animation-delay: 0.8s; }
      `}</style>
    </>
  );
};

export default Insights;