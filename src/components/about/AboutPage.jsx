import React from 'react';
import { ArrowRight, Cpu, Shield, Rocket } from 'lucide-react';
import { MissionVisionSection } from '../home/MissionVisionSection';
import { CoreValuesSection } from './CoreValuesSection';
import { WhyCodeThrive } from '../home/WhyCodeThrive';
import { LeadershipAndContactSection } from './LeadershipAndContactSection';

export function AboutPage({ setActiveTab }) {
  const handleContact = () => {
    if (setActiveTab) setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjects = () => {
    if (setActiveTab) setActiveTab('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-[#050B14]">

      {/* Hero Showcase Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EBF5FF] via-[#F4F9FF] to-[#E9F3FF] px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        
        {/* High-Resolution Tech Architecture Background Photography (Brighter & Clearer) */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="CodeThrive Infotech Technology Architecture"
            className="w-full h-full object-cover opacity-60 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/75 via-[#F4F9FF]/55 to-[#E9F3FF]/35 backdrop-blur-[0.5px]" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          
          {/* Left Column Text & Pills */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
              Building High- <br className="hidden sm:inline" />
              Performance <br className="hidden sm:inline" />
              <span className="text-[#0ea5e9]">Digital Platforms &</span> <br className="hidden sm:inline" />
              <span className="text-[#0ea5e9]">Enterprise AI.</span>
            </h1>

            {/* Description (Dark Black Font) */}
            <p className="text-sm sm:text-base text-black leading-relaxed font-extrabold max-w-2xl">
              CODETHRIVE INFOTECH is an engineering product powerhouse based in Coimbatore, India. We team up with ambitious founders, startups, and enterprises to craft high-concurrency websites, mobile products, AI systems, and custom CRM/ERP platforms.
            </p>

            {/* MOBILE ONLY: Video Showcase directly down to paragraph */}
            <div className="block lg:hidden w-full my-4">
              <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl shadow-sky-300/40 border-2 border-white bg-slate-900 group">
                <video
                  src="/about-showcase.mp4"
                  className="w-full h-[240px] sm:h-[360px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedData={(event) => {
                    event.currentTarget.play().catch(() => {});
                  }}
                  aria-label="CodeThrive Infotech showcase"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Keyframe Float Animation Styles for Pills */}
            <style>{`
              @keyframes floatPill {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
              }
            `}</style>

            {/* 3 Feature Pills Row (Vibrant Distinct Colors & Smooth Floating Animations) */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <div
                style={{ animation: 'floatPill 3.6s ease-in-out infinite', animationDelay: '0s' }}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#B3F0FF] border-2 border-[#00B4D8] shadow-md hover:shadow-xl text-xs font-black text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Cpu className="w-4 h-4 text-sky-900 group-hover:rotate-180 transition-transform duration-700" />
                <span className="font-black text-black">100% Senior Pods</span>
              </div>

              <div
                style={{ animation: 'floatPill 3.6s ease-in-out infinite', animationDelay: '1.2s' }}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E7D1FF] border-2 border-[#8B5CF6] shadow-md hover:shadow-xl text-xs font-black text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Shield className="w-4 h-4 text-purple-900 group-hover:scale-125 transition-transform duration-300" />
                <span className="font-black text-black">SOC-2 &amp; HIPAA</span>
              </div>

              <div
                style={{ animation: 'floatPill 3.6s ease-in-out infinite', animationDelay: '2.4s' }}
                className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#BDF5D4] border-2 border-[#10B981] shadow-md hover:shadow-xl text-xs font-black text-black hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <Rocket className="w-4 h-4 text-emerald-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="font-black text-black">2-Week Agile Sprints</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleContact}
                className="px-7 py-3.5 rounded-full text-xs font-black tracking-wide bg-[#0ea5e9] hover:bg-[#0284c7] text-white shadow-lg shadow-sky-200 transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleProjects}
                className="px-7 py-3.5 rounded-full text-xs font-black tracking-wide bg-pink-500 hover:bg-pink-600 text-white shadow-lg shadow-pink-200 transition-all hover:scale-105 border border-pink-400 cursor-pointer"
              >
                See Our Work
              </button>
            </div>

          </div>

          {/* Right Column Image & Video Card Showcase (Desktop Only) */}
          <div className="hidden lg:flex lg:col-span-6 justify-center w-full">
            <div className="relative w-full max-w-2xl sm:max-w-3xl rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sky-300/40 border-4 border-white bg-slate-900 group">
              <video
                src="/about-showcase.mp4"
                className="w-full h-[480px] sm:h-[560px] lg:h-[600px] object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onLoadedData={(event) => {
                  event.currentTarget.play().catch(() => {});
                }}
                aria-label="CodeThrive Infotech showcase"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <MissionVisionSection />

      {/* Why CodeThrive (Matching user screenshot media_1788377024298.png) */}
      <WhyCodeThrive />

      {/* Core Values Section */}
      <CoreValuesSection />

      {/* Meet the Leadership & Get in Touch Sections (Matching screenshot media_1788378364804.png) */}
      <LeadershipAndContactSection setActiveTab={setActiveTab} />

    </div>
  );
}

export default AboutPage;
