import React, { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Code2, Cpu, Globe, Rocket, Star, Users, Zap } from 'lucide-react';

const TYPED_WORDS = ['high-concurrency', 'enterprise-grade', 'AI-powered', 'cloud-native'];

export const Hero = ({ setActiveTab }) => {
  const [typedIndex, setTypedIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Metric animated counter state
  const [countProjects, setCountProjects] = useState(0);
  const [countRating, setCountRating] = useState('0.0');
  const [countClients, setCountClients] = useState(0);
  const [countRetention, setCountRetention] = useState(0);

  // Animated Count-Up effect for Hero metrics
  useEffect(() => {
    const duration = 1200;
    const steps = 35;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current++;
      const progress = current / steps;
      const ease = 1 - Math.pow(1 - progress, 3);

      setCountProjects(Math.floor(ease * 180));
      setCountRating((ease * 9.9).toFixed(1));
      setCountClients(Math.floor(ease * 45));
      setCountRetention(Math.floor(ease * 96));

      if (current >= steps) {
        clearInterval(timer);
        setCountProjects(180);
        setCountRating('9.9');
        setCountClients(45);
        setCountRetention(96);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Mouse move parallax handler
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  // Typing effect
  useEffect(() => {
    const word = TYPED_WORDS[typedIndex];
    let timeout;
    if (!isDeleting && displayText.length < word.length) {
      timeout = setTimeout(() => setDisplayText(word.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === word.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 45);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTypedIndex((i) => (i + 1) % TYPED_WORDS.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, typedIndex]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[calc(100vh-86px)] flex flex-col justify-between pt-20 sm:pt-28 lg:pt-32 pb-6 sm:pb-8 overflow-hidden bg-gradient-to-br from-sky-50/80 via-white to-indigo-50/60 text-[#050B14]"
    >
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover object-[50%_15%] sm:object-center opacity-35 sm:opacity-50 pointer-events-none scale-100 transition-all duration-300"
        src="/hero-background.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-0 bg-white/30 pointer-events-none" />

      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-300/20 blur-[160px] rounded-full pointer-events-none animate-pulse" />

      {/* Watermark Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full pointer-events-none select-none overflow-hidden opacity-10">
        <span className="font-editorial text-[4.5rem] sm:text-[13rem] font-black tracking-tighter text-slate-400/30 whitespace-nowrap">
          Building Greater Futures
        </span>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-1 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 w-full">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-12 w-full">

          {/* Left / Main Column */}
          <div className="lg:col-span-7 text-center lg:text-left w-full">

            {/* 1. Headline */}
            <h1 className="font-editorial text-3xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight leading-[1.05] text-[#050B14] mb-3 sm:mb-5">
              We build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600">
                {displayText}
              </span>
              <span className="animate-pulse text-sky-600">|</span> <br />
              software for <br />
              brands that <span className="font-italic-accent text-sky-600 italic font-normal">scale.</span>
            </h1>

            {/* 2. Subtitle */}
            <p className="text-xs sm:text-base text-slate-950 max-w-xl mx-auto lg:mx-0 leading-relaxed font-black mb-4 sm:mb-6">
              Codethrive partners with founders and enterprises to craft high-concurrency digital platforms with architectural rigor, precision, and reliable scalability.
            </p>

            {/* 3. DESKTOP VIEW ONLY: Action Buttons Above Metrics */}
            <div className="hidden lg:flex flex-row items-center justify-start gap-3.5 mb-8">
              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full text-xs font-black tracking-wide bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 !text-white shadow-lg shadow-indigo-500/25 transition-transform hover:scale-105 flex items-center gap-2 cursor-pointer border border-indigo-400/40"
              >
                <span className="!text-white text-white">See our work</span>
                <ArrowRight className="w-4 h-4 !text-white text-white" />
              </button>

              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3.5 rounded-full text-xs font-black tracking-wide bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 !text-white shadow-lg shadow-amber-500/25 transition-all hover:scale-105 flex items-center gap-2 cursor-pointer border border-amber-300/40"
              >
                <Calendar className="w-4 h-4 !text-white text-white" />
                <span className="!text-white text-white">Book a call</span>
              </button>
            </div>

            {/* 4. MOBILE VIEW ONLY: Interactive Orbital Animation Graphic in Center */}
            <div className="flex lg:hidden items-center justify-center relative my-2 w-full">
              <div
                style={{
                  transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
                }}
                className="relative w-full max-w-[320px] sm:max-w-[440px] h-[200px] sm:h-[360px] flex items-center justify-center transition-transform duration-300 ease-out mx-auto"
              >
                {/* Radial Glow Pulse */}
                <div className="absolute inset-0 bg-radial from-sky-300/40 via-purple-300/25 to-transparent blur-3xl rounded-full animate-pulse" />

                {/* Orbit Rings */}
                <div className="absolute w-[185px] sm:w-[350px] h-[185px] sm:h-[350px] rounded-full border border-sky-400/40 animate-spin-slow" />
                <div className="absolute w-[140px] sm:w-[260px] h-[140px] sm:h-[260px] rounded-full border border-dashed border-purple-400/50 animate-reverse-spin" />

                {/* Center Brand Badge (Bigger on Mobile View) */}
                <div className="relative z-20 flex flex-col items-center justify-center animate-float">
                  <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl sm:rounded-[2rem] p-2.5 sm:p-3 flex items-center justify-center shadow-2xl shadow-sky-400/40 border-2 border-white/90 bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-600 transition-transform duration-300 hover:scale-110">
                    <img
                      src="/brand-symbol-transparent.png"
                      alt="CodeThrive"
                      className="w-full h-full object-contain filter drop-shadow-xl"
                      onError={(e) => { (e.target).src = '/logo.png'; }}
                    />
                  </div>
                  <span className="mt-1 text-[9px] sm:text-xs font-black tracking-widest text-slate-900 uppercase">
                    CODETHRIVE INFOTECH
                  </span>
                </div>

                {/* Capability Badges on Orbital Arc */}
                <div className="absolute top-0 left-0 z-10 animate-float">
                  <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-sky-50 via-cyan-50 to-blue-50 border-2 border-sky-400 text-[9px] sm:text-[10px] font-black text-sky-950 shadow-md">
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-sky-600 shrink-0" />
                    <span>Website Development</span>
                  </div>
                </div>

                <div className="absolute top-0 right-0 z-10 animate-float-slow">
                  <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-purple-50 via-fuchsia-50 to-pink-50 border-2 border-purple-400 text-[9px] sm:text-[10px] font-black text-purple-950 shadow-md">
                    <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-purple-600 shrink-0" />
                    <span>Mobile App Builder</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -left-1 sm:-left-4 z-10 animate-float">
                  <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 border-2 border-indigo-500 text-[9px] sm:text-[10px] font-black text-indigo-950 shadow-md">
                    <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600 shrink-0" />
                    <span>AI Systems</span>
                  </div>
                </div>

                <div className="absolute top-1/2 -translate-y-1/2 -right-1 sm:-right-4 z-10 animate-float-slow">
                  <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 border-2 border-emerald-400 text-[9px] sm:text-[10px] font-black text-emerald-950 shadow-md">
                    <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                    <span>CRM &amp; ERP</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 z-10 animate-float">
                  <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-400 text-[9px] sm:text-[10px] font-black text-amber-950 shadow-md">
                    <Globe className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-600 shrink-0" />
                    <span>Cloud Architecture</span>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 z-10 animate-float-slow">
                  <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-rose-50 via-pink-50 to-red-50 border-2 border-rose-400 text-[9px] sm:text-[10px] font-black text-rose-950 shadow-md">
                    <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-600 shrink-0" />
                    <span>Business Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Clean Animated Metrics (Boxless & Borderless) */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto lg:mx-0">
              
              {/* Metric 1 */}
              <div className="space-y-1 group cursor-default transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-emerald-600">
                  <Rocket className="w-4 h-4 text-emerald-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-emerald-700">Shipped</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 font-editorial tracking-tight group-hover:text-emerald-600 transition-colors">
                  {countProjects}+
                </div>
                <div className="text-[9px] sm:text-[11px] font-black text-slate-800 uppercase tracking-wider">
                  PROJECTS SHIPPED
                </div>
              </div>

              {/* Metric 2 */}
              <div className="space-y-1 group cursor-default transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-500 group-hover:rotate-12 transition-transform" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-amber-700">Rating</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 font-editorial tracking-tight group-hover:text-amber-600 transition-colors">
                  {countRating}
                </div>
                <div className="text-[9px] sm:text-[11px] font-black text-slate-800 uppercase tracking-wider">
                  AVG. CLIENT RATING
                </div>
              </div>

              {/* Metric 3 */}
              <div className="space-y-1 group cursor-default transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-purple-600">
                  <Globe className="w-4 h-4 text-purple-600 group-hover:rotate-45 transition-transform duration-500" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-purple-700">Global</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 font-editorial tracking-tight group-hover:text-purple-600 transition-colors">
                  {countClients}+
                </div>
                <div className="text-[9px] sm:text-[11px] font-black text-slate-800 uppercase tracking-wider">
                  GLOBAL CLIENTS
                </div>
              </div>

              {/* Metric 4 */}
              <div className="space-y-1 group cursor-default transition-transform duration-300 hover:-translate-y-1 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-rose-600">
                  <Users className="w-4 h-4 text-rose-600 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-black tracking-widest uppercase text-rose-700">Retention</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-slate-950 font-editorial tracking-tight group-hover:text-rose-600 transition-colors">
                  {countRetention}%
                </div>
                <div className="text-[9px] sm:text-[11px] font-black text-slate-800 uppercase tracking-wider">
                  CLIENT RETENTION
                </div>
              </div>

            </div>

            {/* 6. MOBILE VIEW ONLY: Action Buttons ("See our work" & "Book a call") AT THE VERY BOTTOM */}
            <div className="flex lg:hidden flex-row items-center justify-center gap-3.5 mt-6 pt-4 border-t border-slate-200/60">
              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full text-xs font-black tracking-wide bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 !text-white shadow-lg shadow-indigo-500/25 transition-transform active:scale-95 flex items-center gap-2 cursor-pointer border border-indigo-400/40"
              >
                <span className="!text-white text-white">See our work</span>
                <ArrowRight className="w-4 h-4 !text-white text-white" />
              </button>

              <button
                onClick={() => {
                  if (setActiveTab) setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 rounded-full text-xs font-black tracking-wide bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 !text-white shadow-lg shadow-amber-500/25 transition-all active:scale-95 flex items-center gap-2 cursor-pointer border border-amber-300/40"
              >
                <Calendar className="w-4 h-4 !text-white text-white" />
                <span className="!text-white text-white">Book a call</span>
              </button>
            </div>

          </div>

          {/* DESKTOP VIEW ONLY: Right Column Orbital Animation Graphic */}
          <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative">
            <div
              style={{
                transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`
              }}
              className="relative w-full max-w-[460px] h-[390px] flex items-center justify-center transition-transform duration-300 ease-out"
            >
              {/* Radial Glow Pulse */}
              <div className="absolute inset-0 bg-radial from-sky-300/40 via-purple-300/25 to-transparent blur-3xl rounded-full animate-pulse" />

              {/* Orbit Rings */}
              <div className="absolute w-[370px] h-[370px] rounded-full border border-sky-400/40 animate-spin-slow" />
              <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-purple-400/50 animate-reverse-spin" />

              {/* Center Brand Badge */}
              <div className="relative z-20 flex flex-col items-center justify-center animate-float">
                <div className="w-28 h-28 rounded-[2.2rem] p-4 flex items-center justify-center shadow-2xl shadow-sky-400/40 border-2 border-white/90 bg-gradient-to-br from-sky-500 via-indigo-600 to-purple-600 transition-transform duration-300 hover:scale-110">
                  <img
                    src="/brand-symbol-transparent.png"
                    alt="CodeThrive"
                    className="w-full h-full object-contain filter drop-shadow-xl"
                    onError={(e) => { (e.target).src = '/logo.png'; }}
                  />
                </div>
                <span className="mt-2.5 text-xs font-black tracking-widest text-slate-900 uppercase">
                  CODETHRIVE INFOTECH
                </span>
              </div>

              {/* 6 Capability Badges Positioned on Curved Orbital Arc */}
              <div className="absolute top-2 left-6 z-10 animate-float" style={{ animationDelay: '0s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-sky-50 via-cyan-50 to-blue-50 border-2 border-sky-400 text-xs font-black text-sky-950 shadow-lg shadow-sky-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Globe className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Website Development</span>
                </div>
              </div>

              <div className="absolute top-2 right-6 z-10 animate-float-slow" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-purple-50 via-fuchsia-50 to-pink-50 border-2 border-purple-400 text-xs font-black text-purple-950 shadow-lg shadow-purple-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Code2 className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Mobile App Builder</span>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -left-16 z-10 animate-float" style={{ animationDelay: '1.6s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-indigo-50 via-blue-50 to-cyan-50 border-2 border-indigo-500 text-xs font-black text-indigo-950 shadow-lg shadow-indigo-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Cpu className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>AI & Intelligent Systems</span>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 -right-16 z-10 animate-float-slow" style={{ animationDelay: '2.4s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 border-2 border-emerald-400 text-xs font-black text-emerald-950 shadow-lg shadow-emerald-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Zap className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Custom CRM & ERP</span>
                </div>
              </div>

              <div className="absolute bottom-2 left-6 z-10 animate-float" style={{ animationDelay: '3.2s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border-2 border-amber-400 text-xs font-black text-amber-950 shadow-lg shadow-amber-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Globe className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Cloud Architecture</span>
                </div>
              </div>

              <div className="absolute bottom-2 right-6 z-10 animate-float-slow" style={{ animationDelay: '4.0s' }}>
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-red-50 border-2 border-rose-400 text-xs font-black text-rose-950 shadow-lg shadow-rose-200/60 hover:scale-105 transition-all cursor-pointer">
                  <Code2 className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Business Support</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
