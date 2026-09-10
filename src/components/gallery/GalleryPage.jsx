import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Maximize2, MapPin, Sparkles, Building2, CheckCircle2, 
  ArrowRight, Phone, Clock, X, ChevronLeft, ChevronRight, Eye
} from 'lucide-react';

export const TOUR_STOPS = [
  {
    step: '01',
    id: 'signboard',
    title: 'Headquarters Signboard & Facade',
    tagline: 'Exterior Landmark & Brand Identity',
    badge: 'HQ LANDMARK',
    category: 'Exterior Architecture',
    imageUrl: '/gallery/codethrive-signboard.jpg',
    location: 'Srihari Nivas, Sungam, Coimbatore',
    story: 'The signature landmark of CodeThrive Infotech in Coimbatore, welcoming global clients, partners, and engineering talent to our technology campus.',
    specs: [
      'Custom Architectural Signage',
      'Prominent Sungam Landmark',
      'Signature Tri-Spiral Emblem'
    ],
    borderGlow: 'hover:border-amber-400 hover:shadow-amber-200/40'
  },
  {
    step: '02',
    id: 'entrance',
    title: 'Campus Entrance & Welcome Gate',
    tagline: 'Grounded Roots & Modern Tech',
    badge: 'WELCOME PORTAL',
    category: 'Campus & Welcome',
    imageUrl: '/gallery/office-entrance.jpg',
    location: 'Ground Floor, Srihari Nivas',
    story: 'A welcoming entrance pairing traditional South Indian hospitality with secure access protocols and expansive panoramic daylight windows.',
    specs: [
      'Traditional Festive Welcome',
      'Panoramic Daylight Enclosures',
      'Secure Controlled Entry'
    ],
    borderGlow: 'hover:border-rose-400 hover:shadow-rose-200/40'
  },
  {
    step: '03',
    id: 'client-lounge',
    title: 'Client Lounge',
    tagline: 'First Impressions of Elegance',
    badge: 'CLIENT LOUNGE',
    category: 'Client Experience',
    imageUrl: '/gallery/reception-lounge.jpg',
    location: 'Executive Lounge, Srihari Nivas',
    story: 'A contemporary client lounge featuring geometric textured walls, a custom consultation desk, and comfortable executive seating for visiting partners.',
    specs: [
      'Custom Two-Tone Desk',
      'Geometric Textured Wall',
      'Executive Visitor Seating'
    ],
    borderGlow: 'hover:border-cyan-400 hover:shadow-cyan-200/40'
  },
  {
    step: '04',
    id: 'executive',
    title: 'Executive Leadership Suite',
    tagline: 'Strategic Scoping & Roadmaps',
    badge: 'STRATEGY SUITE',
    category: 'Leadership & Strategy',
    imageUrl: '/gallery/executive-suite.jpg',
    location: 'Management Wing, Suite 101',
    story: 'Our executive cabin dedicated to technical scoping, sprint roadmap governance, client negotiations, and deep software architecture planning.',
    specs: [
      'Dual Tech Scoping Stations',
      'Ambient Backlit Displays',
      'Private Executive Lounge'
    ],
    borderGlow: 'hover:border-purple-400 hover:shadow-purple-200/40'
  },
  {
    step: '05',
    id: 'engineering',
    title: 'Software Engineering Bay',
    tagline: 'The Agile Sprint & Innovation Lab',
    badge: 'DEVELOPMENT PODS',
    category: 'Workplace & Engineering',
    imageUrl: '/gallery/engineering-bay.jpg',
    location: 'Engineering Floor, Coimbatore HQ',
    story: 'The collaborative hub where our frontend, backend, and AI engineers build scalable web platforms, mobile apps, and enterprise systems.',
    specs: [
      'High-Speed Gigabit Fiber',
      'Acoustic Developer Pods',
      'Motto: "Work For It"'
    ],
    borderGlow: 'hover:border-emerald-400 hover:shadow-emerald-200/40'
  }
];

export const GalleryPage = ({ setActiveTab }) => {
  const [activeItem, setActiveItem] = useState(null);

  const currentIndex = activeItem ? TOUR_STOPS.findIndex((item) => item.id === activeItem.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveItem(TOUR_STOPS[currentIndex - 1]);
    } else {
      setActiveItem(TOUR_STOPS[TOUR_STOPS.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < TOUR_STOPS.length - 1) {
      setActiveItem(TOUR_STOPS[currentIndex + 1]);
    } else {
      setActiveItem(TOUR_STOPS[0]);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeItem) return;
      if (e.key === 'Escape') setActiveItem(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, currentIndex]);

  const scrollToStop = (id) => {
    const el = document.getElementById(`tour-stop-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 min-h-screen bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#FFF8F2] text-[#050B14] relative overflow-hidden select-none">
      
      {/* Ambient Lighting Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-amber-200/20 blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-sky-200/20 blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-[500px] h-[500px] bg-purple-200/20 blur-[180px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-16">
        
        {/* Crisp Header Hero Section */}
        <div className="relative rounded-2xl sm:rounded-[2.5rem] bg-white/80 backdrop-blur-md p-5 sm:p-10 lg:p-12 border border-amber-200/80 shadow-xl shadow-amber-950/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-200/20 blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-900 text-[10px] sm:text-[11px] font-black uppercase tracking-widest shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>CAMPUS TOUR</span>
            </div>

            <h1 className="font-editorial text-2xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              A Tour of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900">
                CodeThrive Infotech
              </span>
            </h1>

            <p className="text-xs sm:text-base font-medium text-slate-600 leading-relaxed max-w-xl">
              Explore our Coimbatore campus at Srihari Nivas — from our executive suites to our agile developer bays.
            </p>
          </div>

          {/* Quick-Jump Navigation Tabs (Horizontal Scrollable on Mobile) */}
          <div className="relative z-10 pt-4 mt-4 sm:pt-6 sm:mt-6 border-t border-slate-200/80">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:flex-wrap">
              {TOUR_STOPS.map((stop) => (
                <button
                  key={stop.id}
                  onClick={() => scrollToStop(stop.id)}
                  className="shrink-0 px-3 py-1.5 rounded-xl bg-white hover:bg-amber-50 border border-slate-200/90 hover:border-amber-400 text-slate-700 hover:text-amber-900 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer group shadow-xs hover:shadow-sm"
                >
                  <span className="w-4 h-4 rounded-md bg-amber-100 text-amber-800 group-hover:bg-amber-500 group-hover:text-white flex items-center justify-center text-[9.5px] font-black transition-colors">
                    {stop.step}
                  </span>
                  <span className="whitespace-nowrap">{stop.badge}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ZIG-ZAG STORYTELLING ROWS */}
        <div className="relative space-y-10 sm:space-y-20">
          
          {/* Subtle Vertical Center Guide Line */}
          <div className="hidden lg:block absolute top-8 bottom-8 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-amber-300/30 via-purple-300/30 to-cyan-300/30 pointer-events-none" />

          {TOUR_STOPS.map((stop, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={stop.id}
                id={`tour-stop-${stop.id}`}
                className="relative scroll-mt-28"
              >
                
                {/* Center Number Marker */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white border-3 border-amber-400 shadow-lg items-center justify-center font-editorial font-black text-amber-900 text-xs">
                  {stop.step}
                </div>

                <div className="p-3 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none bg-white/80 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none border border-amber-200/80 lg:border-none shadow-lg lg:shadow-none grid grid-cols-12 gap-3 sm:gap-10 items-center">
                  
                  {/* IMAGE COLUMN (Side-by-Side Horizontal Zigzag on Mobile & PC) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`col-span-5 lg:col-span-6 ${isEven ? 'order-1 lg:order-1' : 'order-2 lg:order-2'}`}
                  >
                    <div
                      onClick={() => setActiveItem(stop)}
                      className={`group relative rounded-xl sm:rounded-3xl overflow-hidden border-2 border-white shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-slate-950 ${stop.borderGlow}`}
                    >
                      <div className="relative h-36 sm:h-80 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                        {/* Ambient Backdrop for signboard */}
                        {stop.id === 'signboard' && (
                          <>
                            <img
                              src={stop.imageUrl}
                              alt=""
                              aria-hidden="true"
                              className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-65 pointer-events-none"
                            />
                            <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                          </>
                        )}

                        <img
                          src={stop.imageUrl}
                          alt={stop.title}
                          className={`relative z-10 transition-transform duration-500 ease-out ${
                            stop.id === 'signboard'
                              ? 'h-full w-auto max-w-full object-contain scale-100 group-hover:scale-100 drop-shadow-2xl'
                              : 'w-full h-full object-cover group-hover:scale-106'
                          }`}
                          onError={(e) => {
                            (e.target).src = '/codethrive-hero.png';
                          }}
                        />

                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity pointer-events-none" />

                        {/* Badges */}
                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10 flex items-center gap-1">
                          <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-slate-950/80 backdrop-blur-md text-[#F3D77F] border border-[#F3D77F]/40 flex items-center justify-center font-black text-[9.5px] sm:text-[11px] shadow-sm">
                            {stop.step}
                          </span>
                          <span className="hidden sm:inline px-2.5 py-0.5 rounded-full text-[9.5px] font-black uppercase tracking-wider bg-slate-900/85 backdrop-blur-md text-amber-300 border border-amber-400/40 shadow-sm">
                            {stop.badge}
                          </span>
                        </div>

                        {/* Expand Hint */}
                        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-white text-[9px] sm:text-[11px] font-black flex items-center gap-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all shadow-md">
                          <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
                          <span>HD</span>
                        </div>

                        {/* Location Bottom */}
                        <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 z-10 flex items-center justify-between text-white">
                          <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-bold text-amber-300 drop-shadow-sm max-w-full">
                            <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
                            <span className="truncate">{stop.badge}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* CONTENT COLUMN (Side-by-Side Horizontal Zigzag on Mobile & PC) */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: 0.05 }}
                    className={`col-span-7 lg:col-span-6 space-y-1.5 sm:space-y-3.5 ${isEven ? 'order-2 lg:order-2' : 'order-1 lg:order-1'}`}
                  >
                    
                    {/* Tagline */}
                    <div className="flex items-center gap-1.5">
                      <span className="text-[9px] sm:text-[10.5px] font-black uppercase tracking-widest text-amber-800 truncate">
                        {stop.tagline}
                      </span>
                    </div>

                    {/* Headline */}
                    <h2 className="font-editorial text-xs sm:text-2xl lg:text-3xl font-black text-slate-950 tracking-tight leading-snug line-clamp-2">
                      {stop.title}
                    </h2>

                    {/* Short Story */}
                    <p className="text-[10px] sm:text-sm font-semibold leading-snug text-slate-700 line-clamp-2 sm:line-clamp-none">
                      {stop.story}
                    </p>

                    {/* 3 Compact Specs Pills (Desktop & Tablet) */}
                    <div className="hidden sm:flex flex-wrap gap-1.5 pt-0.5">
                      {stop.specs.map((spec, i) => (
                        <div
                          key={i}
                          className="px-2.5 py-1 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center gap-1.5 text-xs font-bold text-slate-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Trigger */}
                    <div className="pt-1 flex items-center gap-2">
                      <button
                        onClick={() => setActiveItem(stop)}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-slate-950 font-black text-[10px] sm:text-xs shadow-md shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-1 cursor-pointer border border-amber-300/70 shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, #F5CF60 0%, #E8B830 50%, #C8920A 100%)'
                        }}
                      >
                        <Eye className="w-3 h-3 text-amber-950" />
                        <span>Inspect in HD</span>
                        <ArrowRight className="w-3 h-3 text-amber-950 group-hover:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-[9.5px] sm:text-[11px] font-bold text-slate-400 truncate">
                        Stop {stop.step}/05
                      </span>
                    </div>

                  </motion.div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Coimbatore Campus Location Card */}
        <div className="px-5 sm:px-8 py-3.5 sm:py-4.5 rounded-2xl sm:rounded-3xl bg-white/80 backdrop-blur-md text-slate-900 border border-amber-200/80 shadow-lg shadow-amber-950/5 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          <div className="space-y-1 text-center lg:text-left max-w-xl">
            <div className="text-[10.5px] font-black uppercase tracking-widest text-amber-700 flex items-center justify-center lg:justify-start gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-amber-600" />
              <span>COIMBATORE HEADQUARTERS</span>
            </div>

            <h3 className="font-editorial text-lg sm:text-xl font-black text-slate-900">
              Experience CodeThrive in Person
            </h3>

            <p className="text-[11.5px] sm:text-xs font-medium text-slate-600 leading-relaxed">
              No : 1, Srihari Nivas, Indira Nagar, Sungam, Coimbatore, Tamil Nadu – 641045
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-0.5 text-[11px] font-bold text-slate-700">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-600" />
                <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-amber-600" />
                <span>+91 9150781685</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full lg:w-auto">
            <a
              href="https://www.google.com/maps/search/?api=1&query=CodeThrive+Infotech+No+1+Srihari+Nivas+Indira+Nagar+Sungam+Coimbatore+Tamil+Nadu+641045"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-4 py-2 rounded-full text-xs font-black text-slate-950 transition-transform hover:scale-105 shadow-md shadow-amber-500/20 text-center flex items-center justify-center gap-1.5 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #F5CF60 0%, #E8B830 50%, #C8920A 100%)'
              }}
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Google Maps</span>
            </a>

            <button
              onClick={() => {
                if (setActiveTab) setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-4 py-2 rounded-full text-xs font-bold text-slate-800 border border-slate-300 hover:bg-slate-100 transition-colors cursor-pointer text-center"
            >
              Contact Team
            </button>
          </div>

        </div>

      </div>

      {/* FULL-SCREEN HD LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/92 backdrop-blur-xl flex items-center justify-center p-2.5 sm:p-6 overflow-y-auto"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setActiveItem(null)}
              className="fixed top-3 right-3 sm:top-6 sm:right-6 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 hover:bg-amber-500 text-white border border-white/20 shadow-xl flex items-center justify-center transition cursor-pointer"
              title="Close (Esc)"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Left Nav */}
            <button
              onClick={handlePrev}
              className="fixed left-1.5 sm:left-6 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 hover:bg-amber-500 text-white border border-white/20 shadow-xl flex items-center justify-center transition cursor-pointer"
              title="Previous Stop"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Right Nav */}
            <button
              onClick={handleNext}
              className="fixed right-1.5 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 hover:bg-amber-500 text-white border border-white/20 shadow-xl flex items-center justify-center transition cursor-pointer"
              title="Next Stop"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              className="bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full border-2 border-amber-300 shadow-2xl overflow-hidden relative text-slate-950 my-auto flex flex-col max-h-[90vh] sm:max-h-[88vh]"
            >
              <div className="overflow-y-auto flex-1 flex flex-col no-scrollbar">
                
                {/* Photo Header */}
                <div className="relative h-52 sm:h-80 md:h-96 w-full bg-slate-950 overflow-hidden shrink-0 flex items-center justify-center">
                  {activeItem.id === 'signboard' && (
                    <>
                      <img
                        src={activeItem.imageUrl}
                        alt=""
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60 pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                    </>
                  )}
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className={`relative z-10 ${
                      activeItem.id === 'signboard' 
                        ? 'h-full w-auto max-w-full object-contain drop-shadow-2xl' 
                        : 'w-full h-full object-contain sm:object-cover'
                    }`}
                  />
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 z-10 text-white space-y-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] sm:text-[9.5px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
                      STOP {activeItem.step} • {activeItem.badge}
                    </span>
                    <h2 className="font-editorial text-lg sm:text-2xl font-black text-white pt-0.5 sm:pt-1 leading-tight">
                      {activeItem.title}
                    </h2>
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs text-amber-300 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{activeItem.location}</span>
                    </div>
                  </div>
                </div>

                {/* Narrative Details */}
                <div className="p-4 sm:p-6 space-y-3.5 sm:space-y-4">
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed text-slate-700">
                    {activeItem.story}
                  </p>

                  <div className="space-y-2">
                    <h4 className="text-[10px] sm:text-[11px] font-black text-slate-500 uppercase tracking-widest">
                      FACILITY SPECIFICATIONS
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {activeItem.specs.map((spec, idx) => (
                        <div key={idx} className="p-2 sm:p-2.5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-center gap-1.5 text-xs font-bold text-slate-900">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Jump Thumbnails */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    <div className="text-[9.5px] font-black uppercase tracking-widest text-slate-400">
                      JUMP TO ANOTHER STOP:
                    </div>
                    <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                      {TOUR_STOPS.map((stop) => (
                        <div
                          key={stop.id}
                          onClick={() => setActiveItem(stop)}
                          className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 cursor-pointer transition-all ${
                            stop.id === activeItem.id 
                              ? 'border-amber-500 scale-105 shadow-md' 
                              : 'border-slate-200 opacity-60 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={stop.imageUrl}
                            alt={stop.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 shrink-0">
                <div className="text-xs font-semibold text-slate-500">
                  Stop {currentIndex + 1} of {TOUR_STOPS.length}
                </div>

                <button
                  onClick={() => {
                    setActiveItem(null);
                    if (setActiveTab) setActiveTab('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-5 py-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black text-xs shadow-sm transition cursor-pointer text-center"
                >
                  Schedule Office Visit
                </button>
              </div>

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default GalleryPage;
