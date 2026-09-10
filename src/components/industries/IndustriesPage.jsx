import React, { useState } from 'react';
import { INDUSTRIES } from '../../data/mockData';
import { ShieldCheck, ArrowRight, Zap } from 'lucide-react';

export const IndustriesPage = ({ setActiveTab }) => {
  const [selectedIndustryId, setSelectedIndustryId] = useState(INDUSTRIES[0]?.id || 'healthcare');
  const activeIndustry = INDUSTRIES.find((ind) => ind.id === selectedIndustryId) || INDUSTRIES[0];

  const handleBuildSolution = () => {
    if (setActiveTab) setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleViewWork = () => {
    if (setActiveTab) setActiveTab('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // High-res domain photography & theme mappings per industry
  const industryThemes = {
    healthcare: {
      accent: '#0284C7',
      bgImage: '/industry-healthcare.png',
      cardBorder: 'border-cyan-400/80 shadow-cyan-200/50',
      badgeBg: 'bg-cyan-100 text-[#0284C7] border-cyan-300',
      buttonBg: 'bg-[#0284C7] hover:bg-[#0369a1]'
    },
    education: {
      accent: '#9333EA',
      bgImage: '/industry-education.png',
      cardBorder: 'border-purple-400/80 shadow-purple-200/50',
      badgeBg: 'bg-purple-100 text-[#9333EA] border-purple-300',
      buttonBg: 'bg-[#9333EA] hover:bg-[#7e22ce]'
    },
    ecommerce: {
      accent: '#EC4899',
      bgImage: '/industry-ecommerce.png',
      cardBorder: 'border-pink-400/80 shadow-pink-200/50',
      badgeBg: 'bg-pink-100 text-[#EC4899] border-pink-300',
      buttonBg: 'bg-[#EC4899] hover:bg-[#db2777]'
    },
    enterprise: {
      accent: '#3B82F6',
      bgImage: '/industry-enterprise.png',
      cardBorder: 'border-blue-400/80 shadow-blue-200/50',
      badgeBg: 'bg-blue-100 text-[#3B82F6] border-blue-300',
      buttonBg: 'bg-[#3B82F6] hover:bg-[#2563eb]'
    },
    startups: {
      accent: '#D97706',
      bgImage: '/industry-startup.png',
      cardBorder: 'border-amber-400/80 shadow-amber-200/50',
      badgeBg: 'bg-amber-100 text-[#D97706] border-amber-300',
      buttonBg: 'bg-[#D97706] hover:bg-[#b45309]'
    },
    finance: {
      accent: '#059669',
      bgImage: '/industry-banking.png',
      cardBorder: 'border-emerald-400/80 shadow-emerald-200/50',
      badgeBg: 'bg-emerald-100 text-[#059669] border-emerald-300',
      buttonBg: 'bg-[#059669] hover:bg-[#047857]'
    },
    hospitality: {
      accent: '#E11D48',
      bgImage: '/industry-hotels.png',
      cardBorder: 'border-rose-400/80 shadow-rose-200/50',
      badgeBg: 'bg-rose-100 text-[#E11D48] border-rose-300',
      buttonBg: 'bg-[#E11D48] hover:bg-[#be123c]'
    },
    hotels: {
      accent: '#E11D48',
      bgImage: '/industry-hotels.png',
      cardBorder: 'border-rose-400/80 shadow-rose-200/50',
      badgeBg: 'bg-rose-100 text-[#E11D48] border-rose-300',
      buttonBg: 'bg-[#E11D48] hover:bg-[#be123c]'
    },
    manufacturing: {
      accent: '#EA580C',
      bgImage: '/industry-manufacturing.png',
      cardBorder: 'border-orange-400/80 shadow-orange-200/50',
      badgeBg: 'bg-orange-100 text-[#EA580C] border-orange-300',
      buttonBg: 'bg-[#EA580C] hover:bg-[#c2410c]'
    },
    travel: {
      accent: '#0EA5E9',
      bgImage: '/industry-travels.png',
      cardBorder: 'border-sky-400/80 shadow-sky-200/50',
      badgeBg: 'bg-sky-100 text-[#0EA5E9] border-sky-300',
      buttonBg: 'bg-[#0EA5E9] hover:bg-[#0284c7]'
    },
    travels: {
      accent: '#0EA5E9',
      bgImage: '/industry-travels.png',
      cardBorder: 'border-sky-400/80 shadow-sky-200/50',
      badgeBg: 'bg-sky-100 text-[#0EA5E9] border-sky-300',
      buttonBg: 'bg-[#0EA5E9] hover:bg-[#0284c7]'
    }
  };

  const theme = industryThemes[activeIndustry.id] || industryThemes.healthcare;
  const bgPhoto = theme.bgImage || activeIndustry.bgImage || '/industry-ecommerce.png';

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gradient-to-br from-[#F5F8FF] via-[#FAFCFF] to-[#EFF5FF] text-[#050B14] relative overflow-hidden select-none">
      
      {/* Background radial glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-indigo-200/20 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-200/20 blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header Section */}
        <div className="space-y-3">
          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.08]">
            Industries we transform <span className="text-[#6366f1]">with</span> <br />
            <span className="text-[#6366f1]">strategy</span> <span className="text-[#3b82f6]">and</span> <span className="text-[#0284c7]">motion.</span>
          </h1>

          <p className="max-w-3xl text-base sm:text-lg font-semibold leading-relaxed text-slate-700">
            Deep vertical knowledge meets hardened systems engineering. We architect compliance-ready products for organizations that need performance, trust, and a visible competitive edge.
          </p>
        </div>

        {/* 9 Industry Tab Cards Row (3 Columns x 3 Rows on Mobile View = Sleek Compact h-18 Height) */}
        <div className="grid grid-cols-3 lg:grid-cols-9 gap-1.5 sm:gap-3">
          {INDUSTRIES.map((ind) => {
            const isSelected = ind.id === selectedIndustryId;
            return (
              <button
                key={ind.id}
                onClick={() => setSelectedIndustryId(ind.id)}
                className={`p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl border text-center transition-all duration-300 flex flex-col items-center justify-center sm:justify-between h-18 sm:h-32 space-y-1 sm:space-y-0 cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-gradient-to-b from-white via-sky-50 to-cyan-100/90 border-2 border-[#0284C7] text-slate-950 shadow-md sm:shadow-xl shadow-sky-200/80 scale-[1.02] sm:scale-[1.03] z-10'
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:bg-slate-50 text-slate-800 shadow-xs hover:scale-[1.02]'
                }`}
              >
                {/* Glowing Active Animated Indicator Dot */}
                {isSelected && (
                  <span className="absolute top-1 right-1 flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0284C7] opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#0284C7]" />
                  </span>
                )}

                <div className={`w-8 h-8 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden shrink-0 transition-transform duration-300 ${
                  isSelected ? 'ring-2 sm:ring-4 ring-[#0284C7]/40 scale-105 shadow-xs sm:shadow-md' : 'bg-slate-100 border border-slate-200 shadow-xs'
                }`}>
                  <img
                    src={ind.iconImage}
                    alt={ind.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target).src = '/industry-ecommerce.png';
                    }}
                  />
                </div>

                <span className={`text-[8.5px] sm:text-[11px] font-black leading-tight truncate w-full px-0.5 ${isSelected ? 'text-[#0284C7]' : 'text-slate-900'}`}>
                  {ind.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Card */}
        {activeIndustry && (
          <div className="relative pt-4 sm:pt-5">
            
            {/* Centered Top Floating Header Badge Overlapping Box Top Edge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-max max-w-[92%] text-center">
              <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-4 py-1 sm:px-8 sm:py-2 rounded-full text-[11px] sm:text-base font-black uppercase tracking-wider sm:tracking-widest shadow-xl border-2 ${theme.badgeBg}`}>
                <Zap className="w-3.5 h-3.5 sm:w-5 sm:h-5 shrink-0" />
                <span className="truncate">{activeIndustry.name}</span>
              </div>
            </div>

            <div className={`relative rounded-3xl sm:rounded-[2.5rem] border-2 ${theme.cardBorder} overflow-hidden shadow-2xl p-3.5 sm:p-7 pt-6 sm:pt-8 min-h-[420px] sm:min-h-[450px] flex flex-col justify-between transition-all duration-500`}>
              
              {/* High-Resolution Domain Background Image & Light Gradient Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={bgPhoto}
                  alt={activeIndustry.name}
                  className="w-full h-full object-cover scale-105 transition-transform duration-700 opacity-80"
                  onError={(e) => {
                    (e.target).src = '/industry-ecommerce.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white/85 via-white/60 to-white/30" />
              </div>

              <div className="relative z-10 space-y-4 sm:space-y-5">
                
                {/* Top Row: Industry Badge, Title & Target Clients */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 pb-3 sm:pb-4 border-b-2 border-slate-950/15">
                
                <div className="space-y-1 sm:space-y-1.5">
                  <div className={`inline-flex items-center gap-1.5 px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-widest border shadow-xs ${theme.badgeBg}`}>
                    <Zap className="w-3.5 h-3.5" />
                    <span>{activeIndustry.badge || 'PRODUCTION READY'}</span>
                  </div>

                  <h2 className="text-xl sm:text-4xl font-black font-editorial text-slate-950 tracking-tight leading-tight">
                    {activeIndustry.heroHeadline || activeIndustry.name}
                  </h2>
                </div>

                {/* Target Clients Pills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                  <span className="text-[9.5px] sm:text-[10px] font-black tracking-widest text-slate-800 uppercase mr-1">
                    TARGET CLIENTS:
                  </span>
                  {(activeIndustry.targetClients || ['Hospitals', 'Clinics', 'Healthtech Startups']).map((client, i) => (
                    <span
                      key={i}
                      className="px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-slate-950 text-white text-[11px] sm:text-xs font-black shadow-md"
                    >
                      {client}
                    </span>
                  ))}
                </div>

              </div>

              {/* Core Domain Deliverables */}
              <div className="space-y-2.5 sm:space-y-3">
                <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-slate-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 pb-1.5 border-b border-slate-950/10">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>CORE DOMAIN SOLUTIONS &amp; DELIVERABLES</span>
                  </div>
                  <span className="text-[9.5px] sm:text-[10px] font-extrabold text-emerald-800 bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    VERIFIED PRODUCTION STANDARDS
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-3.5 pt-1">
                  {(activeIndustry.solutions || [
                    'Cloud-native systems engineered with sub-second API latency',
                    'Enterprise-grade security protocols with zero-trust TLS 1.3 data vaulting',
                    'Automated operational workflows reducing overhead by up to 80%',
                    'Real-time executive telemetry dashboards for continuous monitoring',
                    'Integrated multi-channel API connectors with automated failover'
                  ]).map((solution, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-slate-950 text-white flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5 shadow-md">
                        ✓
                      </div>
                      <span className="text-xs sm:text-sm font-black text-slate-950 leading-snug">
                        {solution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture SLA & Compliance Impact */}
              <div className="pt-3 border-t border-slate-950/10 text-xs font-extrabold text-slate-900 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Architecture Standard: <strong className="text-slate-950 font-black">99.99% Uptime SLA • SOC-2 Type II • Sub-Second API Latency</strong></span>
                </div>
                <div className="text-[#0284C7] font-black">
                  Production Deployment Ready
                </div>
              </div>

            </div>

            {/* Bottom Action Footer Bar inside Card */}
            <div className="relative z-10 pt-6 mt-6 border-t border-slate-300/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs font-extrabold text-slate-800">
                Featured Case Study in Sector: <span className="text-slate-950 underline font-black">{activeIndustry.featuredProject || 'Medical Shop Website'}</span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleViewWork}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/90 hover:bg-white text-slate-900 font-extrabold text-xs border border-slate-300 shadow-md transition cursor-pointer"
                >
                  View Case Studies
                </button>

                <button
                  onClick={handleBuildSolution}
                  className={`w-full sm:w-auto px-7 py-3 rounded-full ${theme.buttonBg} !text-white font-black text-xs shadow-lg flex items-center justify-center gap-2 transition hover:scale-105 cursor-pointer`}
                >
                  <span className="!text-white">Build Solution</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  );
};

export default IndustriesPage;
