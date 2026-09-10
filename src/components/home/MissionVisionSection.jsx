import React, { useState } from 'react';
import { Target, Eye, Sparkles, Globe, ChevronDown, ChevronUp } from 'lucide-react';

export const MissionVisionSection = () => {
  const [expandedMission, setExpandedMission] = useState(false);
  const [expandedVision, setExpandedVision] = useState(false);

  return (
    <section className="relative py-12 sm:py-24 bg-gradient-to-br from-[#F4F8FF] via-[#FAFCFF] to-[#EFF5FF] text-[#050B14] overflow-hidden select-none">
      
      {/* Dynamic Multi-Color Ambient Background Orbs */}
      <div className="absolute top-1/4 left-1/6 w-[650px] h-[650px] rounded-full bg-cyan-300/35 blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/6 w-[650px] h-[650px] rounded-full bg-purple-300/35 blur-[160px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto mb-8 sm:mb-16 max-w-3xl text-center space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-sky-300/90 text-[#0284C7] text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>PURPOSE &amp; FUTURE DIRECTION</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-6xl font-black tracking-tight text-[#050B14]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#9333EA] to-[#E11D48]">Mission</span> &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] via-[#E11D48] to-[#0284C7]">Vision</span>
          </h2>
          <p className="text-slate-700 text-xs sm:text-base font-bold max-w-xl mx-auto leading-relaxed">
            Driving digital transformation forward with purpose, clarity, and impactful execution.
          </p>
        </div>

        {/* 2 Colorful Cards Grid (items-start prevents empty gap when one card expands) */}
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2.5 sm:gap-10 items-start">

          {/* Mission Card (Vibrant Electric Sky Theme) */}
          <div
            onClick={() => {
              if (typeof window !== 'undefined' && window.innerWidth < 640) {
                setExpandedMission(!expandedMission);
              }
            }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[2.5rem] border-2 border-sky-300/90 bg-gradient-to-br from-white via-sky-50/70 to-cyan-100/60 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-sky-500 cursor-pointer sm:cursor-default"
          >
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-[#0284C7] via-cyan-400 to-blue-600 w-full" />

            <div className="relative h-24 sm:h-64 overflow-hidden bg-slate-900 shrink-0">
              <img
                src="/mission-card-banner.webp"
                alt="Our Mission"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

              {/* Glowing Mission Badge Pill */}
              <div className="absolute left-2 top-2 sm:left-4 sm:top-4 inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-[#0284C7] text-white px-2 py-0.5 sm:px-3 sm:py-1 text-[8.5px] sm:text-xs font-black shadow-lg shadow-sky-500/40 border border-white/40 backdrop-blur-md">
                <Target className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
                <span className="uppercase tracking-widest">MISSION</span>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-3 p-2.5 sm:p-8 flex-1">
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="font-editorial text-base sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0284C7] to-[#0369A1] text-left">
                  Our Mission
                </h3>

                {/* Left-Aligned Mission Text: Always Full on PC, Expandable on Mobile */}
                <p className="text-left text-[10.5px] sm:text-sm font-semibold leading-snug sm:leading-relaxed text-slate-700">
                  <span className="hidden sm:inline">
                    To deliver cutting-edge, reliable, and scalable software solutions that empower businesses to thrive in the digital era. We are committed to translating complex challenges into elegant, intuitive, and high-performance digital products that drive real-world success. By constantly evolving and adopting the latest technological standards, we bridge the gap between ambitious ideas and seamless execution.
                  </span>
                  <span className="inline sm:hidden">
                    {expandedMission ? (
                      "To deliver cutting-edge, reliable, and scalable software solutions that empower businesses to thrive in the digital era. We are committed to translating complex challenges into elegant, intuitive, and high-performance digital products that drive real-world success. By constantly evolving and adopting the latest technological standards, we bridge the gap between ambitious ideas and seamless execution."
                    ) : (
                      "To deliver cutting-edge, reliable, and scalable software solutions that empower businesses to thrive in the digital era."
                    )}
                  </span>
                </p>

                {/* Tap to Elaborate Button: MOBILE ONLY (Hidden on PC View) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedMission(!expandedMission);
                  }}
                  className="sm:hidden mt-0.5 inline-flex items-center gap-1 text-[9px] font-black text-[#0284C7] bg-white border border-sky-300 px-2 py-0.5 rounded-full shadow-xs active:scale-95 transition"
                >
                  <span>{expandedMission ? 'Show Less' : 'Tap to Elaborate'}</span>
                  {expandedMission ? <ChevronUp className="w-2.5 h-2.5" /> : <ChevronDown className="w-2.5 h-2.5" />}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 border-t border-sky-200/80 pt-2 sm:pt-3 text-[9px] sm:text-sm font-extrabold text-slate-900">
                <div className="flex items-center gap-1 text-sky-800 bg-sky-100/90 border border-sky-200 px-2 py-0.5 rounded-full text-[8.5px] sm:text-xs">
                  <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#0284C7] shrink-0" />
                  <span className="truncate">Impact-Driven</span>
                </div>
                <span className="font-black text-[#0284C7] text-[9.5px] sm:text-sm hidden sm:inline">CodeThrive</span>
              </div>
            </div>
          </div>

          {/* Vision Card (Vibrant Neon Purple & Rose Theme) */}
          <div
            onClick={() => {
              if (typeof window !== 'undefined' && window.innerWidth < 640) {
                setExpandedVision(!expandedVision);
              }
            }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-[2.5rem] border-2 border-purple-300/90 bg-gradient-to-br from-white via-purple-50/70 to-pink-100/60 shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-purple-500 cursor-pointer sm:cursor-default"
          >
            {/* Top Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-[#9333EA] via-purple-400 to-pink-600 w-full" />

            <div className="relative h-24 sm:h-64 overflow-hidden bg-slate-900 shrink-0">
              <img
                src="/vision-card-banner.webp"
                alt="Our Vision"
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

              {/* Glowing Vision Badge Pill */}
              <div className="absolute left-2 top-2 sm:left-4 sm:top-4 inline-flex items-center gap-1 sm:gap-1.5 rounded-full bg-[#9333EA] text-white px-2 py-0.5 sm:px-3 sm:py-1 text-[8.5px] sm:text-xs font-black shadow-lg shadow-purple-500/40 border border-white/40 backdrop-blur-md">
                <Eye className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
                <span className="uppercase tracking-widest">VISION</span>
              </div>
            </div>

            <div className="flex flex-col justify-between space-y-3 p-2.5 sm:p-8 flex-1">
              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="font-editorial text-base sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] via-[#9333EA] to-[#6B21A8] text-left">
                  Our Vision
                </h3>

                {/* Left-Aligned Vision Text: Always Full on PC, Expandable on Mobile */}
                <p className="text-left text-[10.5px] sm:text-sm font-semibold leading-snug sm:leading-relaxed text-slate-700">
                  <span className="hidden sm:inline">
                    To become the most trusted global technology partner, recognized universally for our relentless innovation, unparalleled quality, and profound impact on our clients' success. We aim to shape the future of tech with solutions that lead industries forward. We envision a modern digital landscape where automation and intelligent software design set a new baseline for enterprise efficiency.
                  </span>
                  <span className="inline sm:hidden">
                    {expandedVision ? (
                      "To become the most trusted global technology partner, recognized universally for our relentless innovation, unparalleled quality, and profound impact on our clients' success. We aim to shape the future of tech with solutions that lead industries forward. We envision a modern digital landscape where automation and intelligent software design set a new baseline for enterprise efficiency."
                    ) : (
                      "To become the most trusted global technology partner, recognized universally for our relentless innovation and impact."
                    )}
                  </span>
                </p>

                {/* Tap to Elaborate Button: MOBILE ONLY (Hidden on PC View) */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setExpandedVision(!expandedVision);
                  }}
                  className="sm:hidden mt-0.5 inline-flex items-center gap-1 text-[9px] font-black text-purple-700 bg-white border border-purple-300 px-2 py-0.5 rounded-full shadow-xs active:scale-95 transition"
                >
                  <span>{expandedVision ? 'Show Less' : 'Tap to Elaborate'}</span>
                  {expandedVision ? <ChevronUp className="w-2.5 h-2.5" /> : <ChevronDown className="w-2.5 h-2.5" />}
                </button>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 border-t border-purple-200/80 pt-2 sm:pt-3 text-[9px] sm:text-sm font-extrabold text-slate-900">
                <div className="flex items-center gap-1 text-purple-800 bg-purple-100/90 border border-purple-200 px-2 py-0.5 rounded-full text-[8.5px] sm:text-xs">
                  <Globe className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-[#9333EA] shrink-0" />
                  <span className="truncate">Global Leadership</span>
                </div>
                <span className="font-black text-[#9333EA] text-[9.5px] sm:text-sm hidden sm:inline">CodeThrive</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
