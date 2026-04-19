import React, { useState, useEffect } from "react";
import TitleBar from "../component/TitleBar";
import Footer from "../component/Footer";

// Local highly optimized images for faster loading
import blueprintImg from "../assets/insights/blueprint.jpg";
import coreAiImg from "../assets/insights/core-ai.jpg";
import securityFirstImg from "../assets/insights/security-first.jpg";
import clientExpansionImg from "../assets/insights/client-expansion.jpg";
import scalingTalentImg from "../assets/insights/scaling-talent.jpg";
import devopsImg from "../assets/insights/devops.jpg";
import enterpriseImg from "../assets/insights/enterprise.jpg";
import clientGrowthImg from "../assets/insights/client-growth.jpg";

type Category = "Growth" | "Security" | "Engineering" | "People";

interface Insight {
  title: string;
  description: string;
  fullContent: string;
  category: Category;
  image: string;
}

// Images heavily optimized (webp, quality=60, width=500) for extremely fast loading times
const insightsData: Insight[] = [
  {
    title: "The Blueprint Established",
    description: "Founded the company with a clear mission to build secure, scalable, and high-quality software solutions for modern businesses.",
    fullContent: "The inception of CodeThrive was rooted in the ideology that high-quality digital solutions shouldn't be a privilege. We laid out a multi-year blueprint focusing heavily on organic growth, identifying the exact pain points in enterprise-level execution, and systematically addressing them with agile workflows.",
    category: "Growth",
    image: blueprintImg,
  },
  {
    title: "Core AI & Engineering",
    description: "Defined core technology stack, coding standards, and architectural guidelines to ensure long-term maintainability.",
    fullContent: "Engineering at its core is problem-solving. We integrated heavily with Next.js, React, and Python microservices to ensure our architectures were entirely headless and scalable. We adopted strict AI-assisted code review paradigms, reducing human error by up to 40% in our first quarter of implementation.",
    category: "Engineering",
    image: coreAiImg,
  },
  {
    title: "Security-First Paradigm",
    description: "Adopted secure coding standards, access control policies, and data protection measures across all projects.",
    fullContent: "A product is only as good as its defense. Through aggressive red-teaming, strict zero-trust architecture, and 24/7 endpoint telemetry, our internal compliance guarantees top-tier cybersecurity standards are mapped accurately against every user endpoint.",
    category: "Security",
    image: securityFirstImg,
  },
  {
    title: "Initial Client Expansion",
    description: "Successfully delivered early client projects and established trust through transparent communication and reliability.",
    fullContent: "Trust is built in increments and lost in buckets. By prioritizing transparent communication and aggressive delivery timelines, our earliest client engagements evolved into multi-year strategic technical partnerships, scaling our organic network drastically.",
    category: "Growth",
    image: clientExpansionImg,
  },
  {
    title: "Scaling The Talent",
    description: "Expanded the engineering team to support multiple concurrent projects while maintaining exceptional quality standards.",
    fullContent: "Hiring efficiently is our greatest moat. We transitioned to a borderless hiring methodology—identifying top 1% algorithmic engineers, focusing heavily on talent density rather than sheer headcount. This led to cross-pollination of ideas and drastically faster deployment times.",
    category: "People",
    image: scalingTalentImg,
  },
  {
    title: "DevOps & Automation",
    description: "Implemented CI/CD pipelines, automated testing, and streamlined deployment workflows to improve delivery speed.",
    fullContent: "Our automation pipelines changed the game. Moving from manual staging to heavily containerized Kubernetes orchestration enabled our teams to push reliable updates multiple times a day without fear of downtime. Terraform infrastructure-as-code eliminated all manual provisioning.",
    category: "Engineering",
    image: devopsImg,
  },
  {
    title: "Enterprise Compliance Tracker",
    description: "Enhanced security audits, monitoring, and compliance practices to support large-scale enterprise systems.",
    fullContent: "As we entered the enterprise sector, SOC2 and ISO compliance became non-negotiable. We automated our compliance documentation through custom dashboards, providing enterprise clients real-time cryptographic proofs of their ecosystem's resilience.",
    category: "Security",
    image: enterpriseImg,
  },
  {
    title: "Client-Centric Growth Loop",
    description: "Refined delivery models based on continuous client feedback, significantly improving turnaround time & long-term partnerships.",
    fullContent: "It's never just about writing code—it's about driving measurable outcomes. We introduced real-time collaborative sprints with stakeholders, radically improving transparency. This shortened feature lead times and secured 99% client retention.",
    category: "Growth",
    image: clientGrowthImg,
  },
];

const categories: Category[] = ["Growth", "Security", "Engineering", "People"];

const themeColors: Record<Category, { primary: string; light: string }> = {
  Growth: { primary: "#2563eb", light: "#eff6ff" }, 
  Security: { primary: "#e11d48", light: "#fff1f2" }, 
  Engineering: { primary: "#059669", light: "#ecfdf5" }, 
  People: { primary: "#7c3aed", light: "#f5f3ff" }, 
};

const Insights: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<Category | "All">("All");
  const [selectedInsight, setSelectedInsight] = useState<Insight | null>(null);

  const filteredInsights =
    activeFilter === "All"
      ? insightsData
      : insightsData.filter((i) => i.category === activeFilter);
      
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const scrollElements = document.querySelectorAll(".scroll-trigger");
    scrollElements.forEach((el) => observer.observe(el));

    return () => {
      scrollElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [filteredInsights]); // Re-run when filters change

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedInsight) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; }
  }, [selectedInsight]);

  return (
    <>
      <TitleBar />
      
      <div className="bright-editorial-page">
        {/* Animated Background blobs */}
        <div className="editorial-bg">
           <div className="float-blob blob-1"></div>
           <div className="float-blob blob-2"></div>
        </div>

        <div className="container-fluid px-3 px-sm-4 px-lg-5 position-relative">
          
          {/* Header Section */}
          <div className="editorial-header scroll-trigger">
            <span className="editorial-badge pulse-anim">Our Innovations</span>
            <h1 className="editorial-title">
              Engineering <span className="text-highlight">Insights.</span>
            </h1>
            <p className="editorial-subtitle">
              Explore our strategic methodologies, artificial intelligence adoption, and the core principles driving our enterprise solutions.
            </p>
          </div>

          {/* Premium Filters Menu */}
          <div className="editorial-filters scroll-trigger staggered-filter">
            <button
              className={`filter-btn ${activeFilter === "All" ? "active-all" : ""}`}
              onClick={() => setActiveFilter("All")}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                style={{
                   ...(activeFilter === cat 
                     ? { backgroundColor: themeColors[cat].primary, color: "#fff", borderColor: themeColors[cat].primary }
                     : { color: "#475569" })
                }}
                onClick={() => setActiveFilter(cat)}
              >
                <div className="filter-dot" style={{ backgroundColor: activeFilter === cat ? "#fff" : themeColors[cat].primary }}></div>
                {cat}
              </button>
            ))}
          </div>

          {/* Alternating Asymmetric Layout */}
          <div className="editorial-layout">
            {filteredInsights.map((item, index) => {
              const theme = themeColors[item.category];
              const isEven = index % 2 === 0;

              return (
                <div 
                  key={index} 
                  className={`editorial-row scroll-trigger ${isEven ? "image-left" : "image-right"}`}
                >
                   {/* Column 1: Image container - Heavily Optimized */}
                   <div className="editorial-visual-col perspective-container">
                      <div className="image-glass-container parallax-card" style={{ '--theme-glow': theme.primary } as React.CSSProperties}>
                         <div className="image-wrapper">
                            <img src={item.image} alt={item.title} loading="lazy" className="insight-image" />
                         </div>
                         <div className="glass-reflection"></div>
                      </div>
                   </div>

                   {/* Column 2: Text Content */}
                   <div className="editorial-text-col text-cascade">
                      <div className="card-top-accent cascade-item">
                         <span className="cat-badge bounce-hover" style={{ color: theme.primary, backgroundColor: theme.light }}>
                            {item.category}
                         </span>
                      </div>
                      
                      <h2 className="insight-heading cascade-item">{item.title}</h2>
                      <p className="insight-paragraph cascade-item">{item.description}</p>
                      
                      <div className="insight-footer cascade-item">
                         <button 
                            className="read-article-btn shimmer-btn" 
                            style={{ '--btn-color': theme.primary } as React.CSSProperties}
                            onClick={() => setSelectedInsight(item)}
                         >
                            <span>Read Article</span>
                            <div className="btn-arrow arrow-bounce">
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="5" y1="12" x2="19" y2="12"></line>
                                  <polyline points="12 5 19 12 12 19"></polyline>
                               </svg>
                            </div>
                         </button>
                      </div>
                   </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
      
      {/* 🔮 INTERACTIVE MODAL FULL CONTENT 🔮 */}
      {selectedInsight && (
         <div className="insight-modal-overlay" onClick={() => setSelectedInsight(null)}>
            <div className="insight-modal-content" onClick={(e) => e.stopPropagation()}>
               <div className="modal-close pulse-anim" onClick={() => setSelectedInsight(null)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <line x1="18" y1="6" x2="6" y2="18"></line>
                     <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
               </div>
               
               <div 
                 className="modal-image-banner" 
                 style={{ backgroundImage: `url(${selectedInsight.image})` }}
               >
                  <div className="modal-banner-overlay"></div>
                  <div className="modal-badge-float pop-up-anim" style={{ backgroundColor: themeColors[selectedInsight.category].primary }}>
                     {selectedInsight.category} Highlights
                  </div>
               </div>

               <div className="modal-body-text">
                  <h2 className="slide-right-anim">{selectedInsight.title}</h2>
                  <h4 className="modal-short-desc slide-right-anim-delay">{selectedInsight.description}</h4>
                  <div className="modal-divider expand-width-anim"></div>
                  <p className="modal-long-desc fade-up-anim">{selectedInsight.fullContent}</p>
                  
                  <div className="modal-actions fade-up-anim">
                     <button className="close-btn-bottom" onClick={() => setSelectedInsight(null)}>
                        Close Article
                     </button>
                  </div>
               </div>
            </div>
         </div>
      )}

      <Footer />
      
      <style>{`
        /* ======================= */
        /* ☀️ BRIGHT PROFESSIONAL THEME */
        /* ======================= */
        .bright-editorial-page {
           padding: 100px 0 160px;
           background-color: #ffffff;
           min-height: 100vh;
           font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
           position: relative;
           overflow: hidden;
           color: #0f172a;
        }

        .editorial-bg {
           position: absolute;
           inset: 0;
           z-index: 0;
           pointer-events: none;
           overflow: hidden;
        }

        .float-blob {
           position: absolute;
           filter: blur(90px);
           border-radius: 50%;
           opacity: 0.15;
           animation: drift 20s infinite alternate ease-in-out;
        }

        .blob-1 {
           width: 600px;
           height: 600px;
           background: #2563eb;
           top: -100px;
           left: -200px;
        }

        .blob-2 {
           width: 500px;
           height: 500px;
           background: #e11d48;
           bottom: 10%;
           right: -150px;
           animation-delay: -5s;
        }

        @keyframes drift {
           0% { transform: translateY(0) scale(1); }
           100% { transform: translateY(100px) scale(1.2); }
        }

        /* SCROLL TRIGGER ANIMATIONS */
        .scroll-trigger {
           opacity: 0;
           transform: translateY(60px);
           transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-trigger.animated-in {
           opacity: 1;
           transform: translateY(0);
        }

        /* Cascade text animations internally on appearance */
        .text-cascade .cascade-item {
           opacity: 0;
           transform: translateX(-20px);
           transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .scroll-trigger.animated-in .text-cascade .cascade-item:nth-child(1) { transition-delay: 0.2s; opacity: 1; transform: translateX(0); }
        .scroll-trigger.animated-in .text-cascade .cascade-item:nth-child(2) { transition-delay: 0.3s; opacity: 1; transform: translateX(0); }
        .scroll-trigger.animated-in .text-cascade .cascade-item:nth-child(3) { transition-delay: 0.4s; opacity: 1; transform: translateX(0); }
        .scroll-trigger.animated-in .text-cascade .cascade-item:nth-child(4) { transition-delay: 0.5s; opacity: 1; transform: translateX(0); }


        /* HEADER SECTION */
        .editorial-header {
           text-align: center;
           max-width: 800px;
           margin: 0 auto 60px;
           position: relative;
           z-index: 2;
        }

        .pulse-anim {
           animation: gentlePulse 2s infinite ease-in-out;
        }

        @keyframes gentlePulse {
           0%, 100% { transform: scale(1); }
           50% { transform: scale(1.05); }
        }

        .editorial-badge {
           display: inline-block;
           font-size: 0.85rem;
           font-weight: 800;
           letter-spacing: 2px;
           text-transform: uppercase;
           color: #64748b;
           background: #f1f5f9;
           padding: 8px 24px;
           border-radius: 50px;
           margin-bottom: 25px;
        }

        .editorial-title {
           font-size: clamp(3rem, 6vw, 4.5rem);
           font-weight: 900;
           color: #0f172a;
           line-height: 1.1;
           margin-bottom: 25px;
           letter-spacing: -0.04em;
        }

        .text-highlight {
           color: #2563eb;
           position: relative;
           display: inline-block;
        }

        .editorial-subtitle {
           font-size: 1.25rem;
           color: #475569;
           line-height: 1.6;
           font-weight: 400;
        }

        /* FILTERS */
        .editorial-filters {
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           gap: 12px;
           margin-bottom: 90px;
           position: relative;
           z-index: 2;
        }

        .filter-btn {
           background: #ffffff;
           border: 1px solid #e2e8f0;
           padding: 12px 28px;
           border-radius: 50px;
           font-size: 0.95rem;
           font-weight: 700;
           cursor: pointer;
           display: flex;
           align-items: center;
           gap: 10px;
           transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
           box-shadow: 0 4px 6px rgba(0,0,0,0.02);
        }

        .filter-btn:hover {
           transform: translateY(-4px) scale(1.02);
           box-shadow: 0 12px 20px rgba(0,0,0,0.08);
           border-color: #cbd5e1;
        }

        .filter-btn.active-all {
           background: #0f172a;
           color: #ffffff;
           border-color: #0f172a;
        }

        .filter-dot {
           width: 8px;
           height: 8px;
           border-radius: 50%;
           display: inline-block;
        }

        /* LAYOUT */
        .editorial-layout {
           max-width: 1200px;
           margin: 0 auto;
           position: relative;
           z-index: 2;
           display: flex;
           flex-direction: column;
           gap: 100px;
        }

        .editorial-row {
           display: flex;
           align-items: center;
           gap: 80px;
        }

        .editorial-row.image-left { flex-direction: row; }
        .editorial-row.image-right { flex-direction: row-reverse; }

        .editorial-visual-col { flex: 0.7; max-width: 450px; position: relative; }
        .editorial-text-col { flex: 1.2; display: flex; flex-direction: column; justify-content: center; }

        /* IMAGES & ANIMATIONS */
        .perspective-container {
           perspective: 1000px;
        }

        .parallax-card {
           position: relative;
           border-radius: 32px;
           padding: 16px;
           background: #f8fafc;
           box-shadow: 0 25px 50px -12px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.02);
           transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease;
        }

        .parallax-card::before {
           content: '';
           position: absolute;
           top: 20%; left: 20%; right: 20%; bottom: 20%;
           background: var(--theme-glow);
           filter: blur(60px);
           opacity: 0.15;
           z-index: 0;
           border-radius: 50%;
           transition: opacity 0.6s ease;
        }

        .editorial-row:hover .parallax-card {
           transform: scale(1.02) translateY(-10px) rotateX(2deg) rotateY(-2deg);
           box-shadow: 0 45px 70px -15px var(--theme-glow), 0 0 0 1px rgba(0,0,0,0.05);
        }
        
        .editorial-row:hover .parallax-card::before { opacity: 0.4; }

        .image-wrapper {
           position: relative;
           z-index: 2;
           border-radius: 20px;
           overflow: hidden;
           aspect-ratio: 1 / 1;
           background-color: #e2e8f0;
        }

        .insight-image {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.6s ease;
        }

        .editorial-row:hover .insight-image {
           transform: scale(1.08);
           filter: brightness(1.08) contrast(1.05);
        }

        /* TEXT CONTENT */
        .bounce-hover {
           transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .bounce-hover:hover {
           transform: scale(1.08);
        }

        .cat-badge {
           display: inline-block;
           font-size: 0.9rem;
           font-weight: 800;
           padding: 8px 20px;
           border-radius: 30px;
           text-transform: uppercase;
           letter-spacing: 1px;
           margin-bottom: 25px;
        }

        .insight-heading {
           font-size: clamp(2rem, 3vw, 2.5rem);
           font-weight: 800;
           color: #0f172a;
           margin-bottom: 20px;
           line-height: 1.2;
           letter-spacing: -0.03em;
        }

        .insight-paragraph {
           font-size: 1.15rem;
           line-height: 1.7;
           color: #475569;
           margin-bottom: 40px;
        }

        .read-article-btn {
           background: transparent;
           border: 2px solid #e2e8f0;
           padding: 14px 32px;
           border-radius: 50px;
           font-size: 1rem;
           font-weight: 700;
           color: #0f172a;
           cursor: pointer;
           display: inline-flex;
           align-items: center;
           gap: 12px;
           position: relative;
           overflow: hidden;
           transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Shimmer effect on button */
        .shimmer-btn::after {
           content: '';
           position: absolute;
           top: -50%; right: -50%; bottom: -50%; left: -50%;
           background: linear-gradient(to bottom, rgba(229, 229, 229, 0), rgba(255,255,255,0.5) 50%, rgba(229, 229, 229, 0));
           transform: rotateZ(60deg) translate(-5em, 7.5em);
           opacity: 0;
           transition: all 0.5s ease;
        }

        .read-article-btn:hover::after {
           opacity: 1;
           transform: rotateZ(60deg) translate(2em, -5em);
        }

        .arrow-bounce {
           display: flex;
           align-items: center;
           justify-content: center;
           color: var(--btn-color);
           transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .read-article-btn:hover {
           border-color: var(--btn-color);
           background-color: var(--btn-color);
           color: #ffffff;
           box-shadow: 0 10px 20px -5px var(--btn-color);
           transform: translateY(-2px);
        }

        .read-article-btn:hover .arrow-bounce {
           color: #ffffff;
           transform: translateX(5px);
        }

        /* ======================= */
        /* 🔮 POPUP MODAL STYLES   */
        /* ======================= */
        .insight-modal-overlay {
           position: fixed;
           top: 0; left: 0; right: 0; bottom: 0;
           background: rgba(15, 23, 42, 0.6);
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           z-index: 9999;
           display: flex;
           align-items: center;
           justify-content: center;
           padding: 20px;
           animation: modalFadeIn 0.4s ease forwards;
        }

        @keyframes modalFadeIn {
           from { opacity: 0; }
           to { opacity: 1; }
        }

        .insight-modal-content {
           background: #ffffff;
           width: 100%;
           max-width: 700px;
           max-height: 90vh;
           border-radius: 24px;
           overflow-y: auto;
           position: relative;
           box-shadow: 0 40px 80px rgba(0,0,0,0.2);
           animation: modalSlideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes modalSlideUp {
           from { opacity: 0; transform: translateY(80px) scale(0.92); }
           to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .modal-close {
           position: absolute;
           top: 20px;
           right: 20px;
           width: 40px;
           height: 40px;
           background: rgba(0,0,0,0.5);
           color: white;
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           cursor: pointer;
           z-index: 10;
           transition: background 0.3s ease;
        }

        .modal-close:hover {
           background: #e11d48;
           animation: none;
           transform: scale(1.1);
        }

        .modal-image-banner {
           width: 100%;
           height: 300px;
           background-size: cover;
           background-position: center;
           position: relative;
        }

        .modal-banner-overlay {
           position: absolute;
           inset: 0;
           background: linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.5));
        }

        .pop-up-anim {
           animation: popUp 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.3s both;
        }

        @keyframes popUp {
           0% { transform: scale(0); }
           100% { transform: scale(1); }
        }

        .modal-badge-float {
           position: absolute;
           bottom: 20px;
           left: 40px;
           color: white;
           font-weight: 800;
           text-transform: uppercase;
           letter-spacing: 1px;
           padding: 6px 16px;
           border-radius: 30px;
           font-size: 0.85rem;
           z-index: 2;
        }

        .modal-body-text {
           padding: 40px;
        }

        .slide-right-anim { animation: slideR 0.5s ease 0.4s both; }
        .slide-right-anim-delay { animation: slideR 0.5s ease 0.5s both; }
        .expand-width-anim { animation: expandW 0.8s ease 0.6s both; }
        .fade-up-anim { animation: fadeU 0.6s ease 0.7s both; }

        @keyframes slideR {
           0% { opacity: 0; transform: translateX(-20px); }
           100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes expandW {
           0% { width: 0%; }
           100% { width: 100%; }
        }

        @keyframes fadeU {
           0% { opacity: 0; transform: translateY(20px); }
           100% { opacity: 1; transform: translateY(0); }
        }

        .modal-body-text h2 {
           font-size: 2.2rem;
           font-weight: 900;
           color: #0f172a;
           margin-bottom: 15px;
           line-height: 1.2;
           letter-spacing: -0.02em;
        }

        .modal-short-desc {
           font-size: 1.15rem;
           color: #64748b;
           line-height: 1.6;
           font-weight: 400;
           margin-bottom: 30px;
        }

        .modal-divider {
           height: 1px;
           background: #e2e8f0;
           margin-bottom: 30px;
        }

        .modal-long-desc {
           font-size: 1.05rem;
           color: #334155;
           line-height: 1.8;
           margin-bottom: 40px;
        }

        .modal-actions {
           text-align: right;
        }

        .close-btn-bottom {
           background: transparent;
           border: 2px solid #e2e8f0;
           padding: 12px 28px;
           border-radius: 50px;
           font-weight: 700;
           cursor: pointer;
           transition: all 0.3s ease;
        }

        .close-btn-bottom:hover {
           background: #f1f5f9;
           border-color: #cbd5e1;
           color: #0f172a;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
           .editorial-layout { gap: 80px; }
           .editorial-row { gap: 40px; }
           .editorial-visual-col { max-width: 350px; }
        }
        
        @media (max-width: 768px) {
           .bright-editorial-page { padding: 60px 0 100px; }
           .editorial-layout { gap: 70px; }
           .editorial-row.image-left,
           .editorial-row.image-right { flex-direction: column; }
           .editorial-visual-col { width: 100%; max-width: none; flex: none; }
           .editorial-text-col { width: 100%; flex: none; }
           .modal-image-banner { height: 200px; }
           .modal-body-text { padding: 25px; }
           .modal-body-text h2 { font-size: 1.8rem; }
           .read-article-btn { width: 100%; justify-content: center; }
           .modal-badge-float { left: 25px; }
        }
      `}</style>
    </>
  );
};

export default Insights;