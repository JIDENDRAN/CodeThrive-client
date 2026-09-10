import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../../data/mockData';
import { Search, ArrowRight, ExternalLink, Play, X, CheckCircle2, Calendar, Star, ChevronLeft, ChevronRight } from 'lucide-react';

// Auto-Changing Multi-Image Carousel Component
const AutoImageSlider = ({ images = [], title = '', heightClass = 'h-44 sm:h-56' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Changes automatically every 3 seconds

    return () => clearInterval(timer);
  }, [images]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const currentImgList = images.length > 0 ? images : ['/codethrive-hero.png'];

  return (
    <div className={`relative ${heightClass} w-full overflow-hidden bg-slate-950 group/slider`}>
      
      {/* Auto Fading Images */}
      {currentImgList.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${title} Showcase ${idx + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100 pointer-events-none'
          }`}
          onError={(e) => {
            (e.target).src = 'https://images.unsplash.com/photo-1556742049-0a6756574f9d?auto=format&fit=crop&w=900&q=80';
          }}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

      {/* Manual Arrow Controls (Visible on Hover) */}
      {currentImgList.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-slate-950/70 hover:bg-sky-600 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-slate-950/70 hover:bg-sky-600 text-white flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Pagination Dots (Bottom Right) */}
      {currentImgList.length > 1 && (
        <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-slate-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
          {currentImgList.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-cyan-400 w-4' : 'bg-white/50 w-1.5 hover:bg-white'
              }`}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export const ProjectsPage = ({ setActiveTab }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState(null);

  const categories = [
    'All',
    'Cloud & SaaS',
    'Healthcare',
    'Enterprise'
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleLaunchLiveDemo = (e, url) => {
    e.stopPropagation();
    window.open(url || 'https://codethriveinfotech.in', '_blank');
  };

  const handleScheduleCall = () => {
    setActiveProject(null);
    if (setActiveTab) setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#FFF8F2] text-[#050B14] relative overflow-hidden select-none">
      
      {/* Background Radial Glow Spotlights */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-300/20 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-300/20 blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-cyan-300/20 blur-[170px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Top Header Title & Subtitle */}
        <div className="space-y-3">
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#EC4899] via-[#9333EA] to-[#0284C7] tracking-tight">
            Our Portfolio & Live Work
          </h1>
          <p className="max-w-3xl text-sm sm:text-base font-semibold leading-relaxed text-slate-700">
            Explore our engineering deployments across FinTech gateways, private enterprise AI agents, headless commerce, and HIPAA-compliant telehealth ecosystems.
          </p>
        </div>

        {/* Category Filters Row & Search Input */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 pt-2">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-black transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#FF2A6D] to-[#FF4D4D] text-white shadow-md shadow-pink-200 scale-105'
                      : 'bg-white text-slate-800 border border-slate-200/90 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Right Aligned Search Input */}
          <div className="relative w-full lg:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-pink-500" />
            <input
              type="text"
              placeholder="Search tech, industry or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-2.5 rounded-full bg-white border border-pink-200 text-xs font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-pink-400 shadow-sm"
            />
          </div>

        </div>

        {/* 8 Colorful Cards Grid (Compact Content Box Height on Mobile View) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-7 pt-2">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group bg-white rounded-xl sm:rounded-3xl border-2 border-slate-200/90 hover:border-sky-400 shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
            >
              <div>
                
                {/* AUTO-CHANGING MULTI-IMAGE CAROUSEL CONTAINER (Full h-32 Image Height) */}
                <div className="relative">
                  <AutoImageSlider 
                    images={project.images || [project.imageUrl]} 
                    title={project.title} 
                    heightClass="h-32 sm:h-52" 
                  />

                  {/* WEB & Industry Badge Top Left */}
                  <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex items-center gap-1 sm:gap-2">
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider bg-[#FF2A6D] text-white shadow-md">
                      WEB
                    </span>
                    <span className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-cyan-300 border border-cyan-400/40 shadow-md truncate max-w-[80px] sm:max-w-none">
                      {project.industry || 'ENGINEERING'}
                    </span>
                  </div>

                  {/* Click to Elaborate Overlay Hint Bottom Left */}
                  <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 z-10 flex items-center gap-1 text-[8.5px] sm:text-[10px] font-bold text-white/90">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 animate-ping" />
                    <span>Case study</span>
                  </div>
                </div>

                {/* Reduced Height Content Box Body */}
                <div className="p-2 sm:p-4 space-y-1 sm:space-y-2.5">
                  
                  {/* Category */}
                  <div className="text-[8px] sm:text-[10px] font-black tracking-widest uppercase text-[#0284C7]">
                    {project.category || 'CASE STUDY'}
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-xl font-black font-editorial tracking-tight text-slate-950 group-hover:text-[#0284C7] transition-colors leading-tight line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Metric Stats Box (Sleek Compact Padding) */}
                  <div className="p-1 sm:p-3 rounded-lg sm:rounded-2xl bg-gradient-to-r from-slate-50 to-sky-50/50 border border-slate-200/90 grid grid-cols-2 gap-1 sm:gap-2">
                    {(project.metrics || []).slice(0, 2).map((m, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <div className="text-[7.5px] sm:text-[9.5px] font-black uppercase text-slate-500 truncate">
                          {m.label}
                        </div>
                        <div className="text-xs sm:text-lg font-black font-editorial text-sky-700">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Bottom Card Footer Bar */}
              <div className="px-5 pb-5 flex items-center justify-between gap-2 border-t border-slate-100 pt-3">
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                  {(project.technologies || []).slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-800 text-[9.5px] font-bold border border-slate-200/90"
                    >
                      {tech}
                    </span>
                  ))}
                  {(project.technologies || []).length > 3 && (
                    <span className="text-[9.5px] font-bold text-slate-400">
                      +{(project.technologies || []).length - 3}
                    </span>
                  )}
                </div>

                {/* Open Elaborate Modal Arrow Button */}
                <div
                  className="w-9 h-9 rounded-full bg-[#0284C7] group-hover:bg-[#0284c7] text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform"
                  title="View elaborate case study details"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* ELABORATE PROJECT READER MODAL */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in">
          <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] max-w-4xl w-full max-h-[90vh] flex flex-col border-2 border-sky-300 shadow-2xl relative text-slate-950 overflow-hidden">
            
            {/* Modal Header Bar (Clean, Non-overlapping) */}
            <div className="shrink-0 bg-gradient-to-r from-sky-50 via-purple-50 to-pink-50 text-slate-950 p-4 sm:p-6 flex items-center justify-between border-b border-slate-200/90 shadow-xs">
              <div className="flex items-center gap-2.5 sm:gap-3 overflow-hidden">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider bg-[#FF2A6D] text-white shrink-0">
                  {activeProject.category || activeProject.industry || 'CASE STUDY'}
                </span>
                <h3 className="font-editorial text-base sm:text-2xl font-black text-slate-950 truncate">
                  {activeProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveProject(null)}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 shadow-xs flex items-center justify-center transition cursor-pointer shrink-0 ml-2"
                aria-label="Close project modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-700" />
              </button>
            </div>

            {/* Modal Scrollable Body Container */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6 sm:space-y-8">
              
              {/* Cover Banner Image with Auto Slider */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 shadow-xl">
                <AutoImageSlider
                  images={activeProject.images || [activeProject.imageUrl]}
                  title={activeProject.title}
                  heightClass="h-52 sm:h-80"
                />
              </div>

              {/* Section 1: Executive Summary */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-[#0284C7] uppercase tracking-widest">
                  EXECUTIVE SUMMARY & PROBLEM STATEMENT
                </h4>
                <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">
                  {activeProject.description} Designed for high-concurrency production workloads, this system architecture guarantees fault tolerance, sub-second latency, and automated horizontal scaling.
                </p>
              </div>

              {/* Section 2: Key Technical Deliverables */}
              <div className="space-y-4">
                <h4 className="text-xs font-black text-[#9333EA] uppercase tracking-widest">
                  PRODUCTION DELIVERABLES & CORE FEATURES
                </h4>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-sky-50/80 border border-sky-200/90 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-black text-sky-950">
                      <CheckCircle2 className="w-4 h-4 text-[#0284C7]" />
                      <span>Sub-Second Latency Architecture</span>
                    </div>
                    <p className="text-xs text-slate-600 font-semibold pl-6">
                      Custom REST/GraphQL APIs backed by Redis cache layers and distributed CDN edge nodes.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200/90 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-black text-purple-950">
                      <CheckCircle2 className="w-4 h-4 text-[#9333EA]" />
                      <span>SOC-2 & Encryption Vault</span>
                    </div>
                    <p className="text-xs text-slate-600 font-semibold pl-6">
                      End-to-end TLS 1.3 data-in-transit and AES-256 encrypted database backups.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/90 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-black text-emerald-950">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                      <span>Automated CI/CD Deployment</span>
                    </div>
                    <p className="text-xs text-slate-600 font-semibold pl-6">
                      Zero-downtime GitHub Actions staging with automated unit and integration tests.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-pink-50/80 border border-pink-200/90 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-black text-pink-950">
                      <CheckCircle2 className="w-4 h-4 text-[#E11D48]" />
                      <span>Real-Time Analytics Dashboard</span>
                    </div>
                    <p className="text-xs text-slate-600 font-semibold pl-6">
                      Live telemetry dashboards tracking user sessions, API response times, and checkout conversion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Verified Performance Metrics Grid */}
              <div className="space-y-4">
                <h4 className="text-xs font-black text-[#D97706] uppercase tracking-widest">
                  VERIFIED PRODUCTION METRICS & IMPACT
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {(activeProject.metrics || []).map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/90 text-center space-y-1">
                      <div className="text-[10px] font-black uppercase text-amber-800 truncate">
                        {m.label}
                      </div>
                      <div className="text-xl sm:text-2xl font-black font-editorial text-amber-950">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Tech Stack Badges */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">
                  TECHNOLOGY STACK USED
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(activeProject.technologies || []).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-900 text-xs font-bold border border-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Section 5: Client Verified Rating (Light Amber Theme) */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50/90 via-orange-50/70 to-yellow-50/90 border-2 border-amber-200 text-slate-950 flex items-center justify-between gap-4 shadow-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-slate-800">
                    "CodeThrive delivered this platform 2 weeks ahead of schedule with 99.99% uptime."
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <div className="text-xs font-black text-slate-950">Verified Client Review</div>
                  <div className="text-[10px] font-extrabold text-amber-900">5.0 / 5.0 Rating</div>
                </div>
              </div>

            </div>

            {/* Modal Footer Bar */}
            <div className="shrink-0 bg-white p-4 sm:p-6 rounded-b-[2rem] sm:rounded-b-[2.3rem] border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-2xl">
              <button
                onClick={(e) => handleLaunchLiveDemo(e, activeProject.demoUrl)}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#9333EA] hover:from-[#0891B2] hover:to-[#7E22CE] text-white font-black text-xs shadow-lg shadow-purple-200 flex items-center justify-center gap-2 cursor-pointer transition hover:scale-105"
              >
                <Play className="w-4 h-4 fill-white text-white" />
                <span className="text-white font-black">▶ Launch Live Demo ({activeProject.title})</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </button>

              <button
                onClick={handleScheduleCall}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-xs border-2 border-amber-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer transition hover:scale-105"
              >
                <Calendar className="w-4 h-4 text-amber-700" />
                <span className="text-amber-950 font-black">Schedule Technical Scoping Call</span>
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ProjectsPage;
