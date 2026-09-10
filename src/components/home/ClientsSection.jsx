import React, { useState } from 'react';
import { RotateCcw, Maximize2, X, Sparkles } from 'lucide-react';

export const ClientsSection = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [selectedScreenshot, setSelectedScreenshot] = useState(null);

  const toggleFlip = (instanceId) => {
    setFlippedCards((prev) => ({ ...prev, [instanceId]: !prev[instanceId] }));
  };

  const clients = [
    {
      id: 'samyuktha',
      name: 'Samyuktha Tours',
      fullName: 'Samyuktha Tours & Travels',
      tagline: 'Enterprise Booking Engine',
      industry: 'TRAVEL',
      metricPill: '+140% Bookings',
      impactMetric: '⚡ 12,000+ Monthly Bookings',
      location: 'Madurai',
      logo: '/clients/samyuktha.png',
      screenshot: '/clients/preview-samyuktha.png',
      description: 'End-to-end digital travel booking & customer management portal.',
      bullets: [
        'Automated Itinerary Engine',
        'Online Ticket Booking API',
        'Customer CRM & SMS Alerts',
        '24/7 WhatsApp Booking Bot'
      ],
      metrics: '12,000+ monthly bookings',
      bg: 'bg-[#FFE4BC]',
      darkBg: 'bg-[#1E1910]',
      border: 'border-amber-400',
      boxBg: 'bg-white border-amber-300',
      chipBg: 'bg-amber-300 text-amber-950 border-amber-400 font-black',
      titleColor: 'text-[#4A2006]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'maduraitour',
      name: 'Madurai Tour Taxi',
      fullName: 'Madurai Tour Taxi',
      tagline: 'AI Fleet Dispatch Suite',
      industry: 'MOBILITY',
      metricPill: '< 2 min Dispatch',
      impactMetric: '⚡ Sub-3-Second Dispatch',
      location: 'Madurai',
      logo: '/clients/madurai-tour-taxi.png',
      screenshot: '/clients/preview-madurai-taxi.png',
      description: 'Scalable fleet management and automated ride booking platform.',
      bullets: [
        'Real-time GPS Dispatch',
        'Driver Telemetry Dashboard',
        'Instant Fare Calculator',
        'Automated Driver Payouts'
      ],
      metrics: 'Sub-3-second driver allocation',
      bg: 'bg-[#CBEBFB]',
      darkBg: 'bg-[#0B1E28]',
      border: 'border-cyan-400',
      boxBg: 'bg-white border-cyan-300',
      chipBg: 'bg-cyan-300 text-cyan-950 border-cyan-400 font-black',
      titleColor: 'text-[#043E4F]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'maduraibest',
      name: 'Madurai Best Tours',
      fullName: 'Madurai Best Tours & Travels',
      tagline: 'Multi-Day Tour Checkout',
      industry: 'HOSPITALITY',
      metricPill: '99.99% Uptime',
      impactMetric: '⚡ 3.8x Booking Growth',
      location: 'Madurai',
      logo: '/clients/madurai-best.png',
      screenshot: '/clients/preview-madurai-best.png',
      description: 'Tourism experience platforms with multi-day package builders.',
      bullets: [
        'Multi-Day Tour Builder',
        'Payment Gateway Integration',
        'Multi-Language Portal',
        'Custom Package Customizer'
      ],
      metrics: '3.8x increase in online bookings',
      bg: 'bg-[#EAD5FF]',
      darkBg: 'bg-[#1F1035]',
      border: 'border-purple-400',
      boxBg: 'bg-white border-purple-300',
      chipBg: 'bg-purple-300 text-purple-950 border-purple-400 font-black',
      titleColor: 'text-[#3B1378]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'therapyuniverse',
      name: 'Therapy Universe',
      fullName: 'The Therapy Universe',
      tagline: 'EHR Clinician Portal',
      industry: 'HEALTHCARE',
      metricPill: '4.9/5 Rating',
      impactMetric: '⚡ 99.9% Encrypted EHR Uptime',
      location: 'Coimbatore',
      logo: '/clients/therapy-universe.png',
      screenshot: '/clients/preview-madurai-therapy.png',
      description: 'Modern healthcare management and clinical patient portal.',
      bullets: [
        'HIPAA/EHR Patient Portal',
        'Smart Appointment Booking',
        'Physio Rehab Tracker',
        'Telehealth Video Consults'
      ],
      metrics: '99.9% uptime with encrypted EHR',
      bg: 'bg-[#C6F6D5]',
      darkBg: 'bg-[#0B2319]',
      border: 'border-emerald-400',
      boxBg: 'bg-white border-emerald-300',
      chipBg: 'bg-emerald-300 text-emerald-950 border-emerald-400 font-black',
      titleColor: 'text-[#043C2E]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'amfstudio',
      name: 'AMF Studio',
      fullName: 'AMF Studio',
      tagline: '4K Cloud Asset Pipeline',
      industry: 'MEDIA',
      metricPill: '5x Faster Video',
      impactMetric: '⚡ 500GB+ Daily Transcoding',
      location: 'Madurai',
      logo: '/clients/amf-studio.png',
      screenshot: '/clients/preview-amf-studio.png',
      description: 'Enterprise video production workflows & cloud proofing.',
      bullets: [
        '4K Media Storage Pipeline',
        'Client Proofing & Reviews',
        'Automated Cloud Transcoding',
        'High-Speed GPU Rendering'
      ],
      metrics: '500GB+ daily media transcoding',
      bg: 'bg-[#FBCFE8]',
      darkBg: 'bg-[#2A0B1A]',
      border: 'border-pink-400',
      boxBg: 'bg-white border-pink-300',
      chipBg: 'bg-pink-300 text-pink-950 border-pink-400 font-black',
      titleColor: 'text-[#6B1135]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'thulir',
      name: 'Thulir Healthcare',
      fullName: 'Thulir Healthcare',
      tagline: 'Holistic Wellness Portal',
      industry: 'HEALTHCARE',
      metricPill: '10k+ Patients',
      impactMetric: '⚡ 10,000+ Active Patients',
      location: 'Coimbatore',
      logo: '/clients/thulir-healthcare.jpg',
      screenshot: '/clients/preview-thulir.jpg',
      description: 'Integrated healthcare and wellness appointment management system.',
      bullets: [
        'Digital Patient Records',
        'Appointment Booking',
        'Wellness Tracking',
        'Prescription Portal'
      ],
      metrics: '10,000+ active patients',
      bg: 'bg-[#B4F8D3]',
      darkBg: 'bg-[#0B2319]',
      border: 'border-emerald-400',
      boxBg: 'bg-white border-emerald-300',
      chipBg: 'bg-emerald-300 text-emerald-950 border-emerald-400 font-black',
      titleColor: 'text-[#033B2C]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'fleetmgmt',
      name: 'Fleet Management',
      fullName: 'Fleet Operations & Logistics',
      tagline: 'Smart Operations Suite',
      industry: 'LOGISTICS',
      metricPill: '99.9% Uptime',
      impactMetric: '⚡ 500+ Active Vehicles',
      location: 'Chennai',
      logo: '/clients/fleet-management.jpg',
      screenshot: '/clients/preview-fleet-management.jpg',
      description: 'Smart fleet telemetry, vehicle tracking, and operations platform.',
      bullets: [
        'Real-Time GPS Tracking',
        'Fuel & Maintenance Analytics',
        'Driver Telemetry',
        'Route Optimization'
      ],
      metrics: '500+ active vehicles managed',
      bg: 'bg-[#FDE68A]',
      darkBg: 'bg-[#1E1B0E]',
      border: 'border-amber-400',
      boxBg: 'bg-white border-amber-300',
      chipBg: 'bg-amber-300 text-amber-950 border-amber-400 font-black',
      titleColor: 'text-[#5C2607]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'varavastra',
      name: 'Vara Vastra Boutique',
      fullName: 'Vara Vastra Boutique',
      tagline: 'Luxury E-Commerce & Couture',
      industry: 'FASHION',
      metricPill: '+185% Sales',
      impactMetric: '⚡ 15,000+ Monthly Orders',
      location: 'Coimbatore',
      logo: '/clients/vara-vastra.jpg',
      screenshot: '/clients/preview-vara-vastra.jpg',
      description: 'Premium luxury saree & couture e-commerce platform with custom order builder.',
      bullets: [
        'Custom Saree Customizer',
        'Online Payment Gateway',
        'Inventory Management API',
        'Customer Loyalty Club'
      ],
      metrics: '15,000+ monthly boutique orders',
      bg: 'bg-[#FFE4E6]',
      darkBg: 'bg-[#2B0A12]',
      border: 'border-rose-400',
      boxBg: 'bg-white border-rose-300',
      chipBg: 'bg-rose-300 text-rose-950 border-rose-400 font-black',
      titleColor: 'text-[#881337]',
      link: 'https://codethriveinfotech.in'
    },
    {
      id: 'testguard',
      name: 'TestGuard',
      fullName: 'TestGuard AI Software Testing',
      tagline: 'AI Automated QA Suite',
      industry: 'CYBER & QA',
      metricPill: '99.9% Defect Catch',
      impactMetric: '⚡ 10,000+ Automated Tests',
      location: 'Bangalore',
      logo: '/clients/testguard.jpg',
      screenshot: '/clients/preview-testguard.jpg',
      description: 'Autonomous AI-powered software testing, security detection, and QA platform.',
      bullets: [
        'AI Test Automation Engine',
        'Security Vulnerability Scanner',
        'API Regression Testing',
        'CI/CD Pipeline Integration'
      ],
      metrics: '10,000+ automated test suites',
      bg: 'bg-[#E0F2FE]',
      darkBg: 'bg-[#032B45]',
      border: 'border-sky-400',
      boxBg: 'bg-white border-sky-300',
      chipBg: 'bg-sky-300 text-sky-950 border-sky-400 font-black',
      titleColor: 'text-[#024466]',
      link: 'https://codethriveinfotech.in'
    }
  ];

  // Helper Card Renderer
  const renderCard = (c, instanceId) => {
    const isFlipped = !!flippedCards[instanceId];
    return (
      <div
        key={instanceId}
        onClick={(e) => {
          e.stopPropagation();
          toggleFlip(instanceId);
        }}
        className="perspective-[1000px] h-[235px] sm:h-[310px] max-w-[270px] cursor-pointer group/card w-full mx-auto select-none"
      >
        <div
          className={`relative w-full h-full duration-700 transition-transform [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : 'group-hover/card:[transform:rotateY(180deg)]'
          }`}
        >
          
          {/* FRONT SIDE */}
          <div
            className={`absolute inset-0 w-full h-full [backface-visibility:hidden] ${c.bg} ${c.border} border-2 rounded-2xl p-2 sm:p-5 shadow-md hover:shadow-xl flex flex-col justify-between overflow-hidden transition-all`}
          >
            <div className="space-y-1 sm:space-y-2.5 flex-1 flex flex-col justify-between">
              
              {/* Top Row: Industry Tag + Metric Pill */}
              <div className="flex items-center justify-between gap-1">
                <div className={`rounded-full font-black tracking-wider uppercase border text-[7.5px] sm:text-[10px] px-1.5 sm:px-2.5 py-0.5 truncate max-w-[75px] sm:max-w-none ${c.chipBg}`}>
                  {c.industry}
                </div>

                <div className="rounded-full font-black bg-slate-900 text-white text-[7.5px] sm:text-[10px] px-1.5 sm:px-2.5 py-0.5 shadow-xs truncate max-w-[85px] sm:max-w-none">
                  {c.metricPill}
                </div>
              </div>

              {/* White Background Rectangle Box for Logo (Full Prominent Size Preserved) */}
              <div className="w-full h-20 sm:h-26 bg-white rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-center p-1.5 overflow-hidden">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-16 sm:h-22 max-h-full max-w-full object-contain filter drop-shadow-xs group-hover/card:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target).src = '/logo.png';
                  }}
                />
              </div>

              {/* Client Title & Tagline */}
              <div className="text-center space-y-0">
                <h3 className={`text-xs sm:text-base font-black font-editorial leading-tight ${c.titleColor}`}>
                  {c.name}
                </h3>
                <div className="text-[8.5px] sm:text-[11.5px] font-extrabold text-slate-900 leading-tight truncate">
                  {c.tagline}
                </div>
              </div>

              {/* Rich Content Highlights Description */}
              <div className="bg-white/90 rounded-lg p-1 sm:p-1.5 text-[7.5px] sm:text-[10.5px] text-slate-950 font-bold leading-tight flex items-start gap-0.5 border border-slate-300/80 shadow-2xs">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-600 shrink-0 mt-0.5" />
                <span className="line-clamp-2">{c.description}</span>
              </div>

            </div>

            {/* Bottom Bar: Location + Interactive Tap-to-Flip Button */}
            <div className="pt-1 mt-1 flex items-center justify-between font-black border-t border-slate-300/80 text-slate-950 text-[7.5px] sm:text-[10px]">
              <span className="flex items-center gap-0.5 truncate">📍 {c.location}</span>
              <div className="flex items-center gap-1 font-black px-1.5 sm:px-2 py-0.5 rounded-full shadow-2xs transition-colors duration-300 bg-white text-sky-950 border border-sky-400 hover:bg-sky-600 hover:text-white shrink-0">
                <span>Flip</span>
                <RotateCcw className="w-2 h-2 sm:w-2.5 sm:h-2.5 animate-spin-slow" />
              </div>
            </div>

          </div>

          {/* BACK SIDE */}
          <div
            className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] ${c.bg} ${c.border} border-2 rounded-2xl p-2 sm:p-5 shadow-xl flex flex-col justify-between overflow-hidden transition-all`}
          >
            <div className="space-y-1 sm:space-y-2.5 flex-1 flex flex-col justify-between">
              
              {/* Browser Frame */}
              <div className="rounded-xl overflow-hidden border border-slate-300/80 shadow-md bg-slate-950 flex flex-col">
                <div className="bg-slate-900 px-1.5 sm:px-2 py-0.5 sm:py-1 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80" />
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedScreenshot(c);
                    }}
                    className="flex items-center gap-0.5 text-[7.5px] sm:text-[8.5px] font-bold text-sky-400 hover:text-sky-300 transition cursor-pointer"
                  >
                    <span>Full View</span>
                    <Maximize2 className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                  </button>
                </div>

                <div 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedScreenshot(c);
                  }}
                  className="relative h-20 sm:h-36 w-full overflow-hidden bg-slate-950 flex items-center justify-center p-1 group/img cursor-pointer"
                >
                  <img
                    src={c.screenshot}
                    alt={`${c.fullName} Website Screenshot`}
                    className="w-full h-full object-contain group-hover/img:scale-105 transition-transform duration-500 rounded-md"
                    onError={(e) => {
                      (e.target).src = '/codethrive-hero.png';
                    }}
                  />

                  <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-sky-500 text-white text-[8px] sm:text-[9px] font-bold flex items-center gap-1 shadow-lg">
                      <Maximize2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      <span>View Full</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Title & Key Highlights */}
              <div className="space-y-0 text-center px-0.5">
                <h4 className={`text-xs sm:text-sm font-black font-editorial ${c.titleColor} leading-tight truncate`}>
                  {c.name}
                </h4>
                <div className="text-[8.5px] sm:text-[9.5px] text-slate-900 font-extrabold leading-tight truncate">
                  {c.impactMetric}
                </div>
              </div>

              {/* Rich Key Feature Highlight Badge on Back Side */}
              <div className="bg-white/90 rounded-lg p-1 text-[7.5px] sm:text-[9px] text-slate-950 font-bold leading-tight flex items-center justify-center gap-1 border border-slate-300/80 shadow-2xs">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-600 shrink-0" />
                <span className="truncate">{c.bullets?.[0] || c.description}</span>
              </div>

            </div>

            {/* Bottom Flip Back Action */}
            <div className="pt-1 mt-1 flex items-center justify-between font-black border-t border-slate-300/80 text-slate-950 text-[7.5px] sm:text-[10px]">
              <span className="font-bold text-slate-700 truncate">Touch box to flip back</span>
              <div className="flex items-center gap-1 font-black px-1.5 sm:px-2 py-0.5 rounded-full shadow-2xs transition-colors duration-300 bg-white text-sky-950 border border-sky-400 hover:bg-sky-600 hover:text-white shrink-0">
                <span>Front</span>
                <RotateCcw className="w-2 h-2 sm:w-2.5 sm:h-2.5 animate-spin-slow" />
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-white via-slate-50/50 to-white text-[#050B14] relative overflow-hidden select-none">
      
      {/* Keyframe Left-to-Right Marquee Animation Styles (GPU Accelerated for 60fps Mobile Smoothness) */}
      <style>{`
        @keyframes marqueeLeftToRight {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
        .animate-marquee-ltr {
          animation: marqueeLeftToRight 28s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        .animate-marquee-ltr:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Top Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] font-black tracking-widest uppercase border border-slate-200 shadow-xs">
            OUR CLIENTS &amp; PARTNERS
          </div>

          <h2 className="font-editorial text-3xl sm:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            Our Clients
          </h2>

          <p className="text-slate-600 text-xs sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            Empowering ambitious startups and market leaders with scalable custom software, high-performance web applications, and enterprise digital solutions.
          </p>
        </div>

        {/* Continuous Left-to-Right Infinite Marquee Carousel */}
        <div className="relative w-full overflow-hidden py-4 group/marquee">
          
          {/* Left & Right Gradient Soft Fades (Hidden on Mobile) */}
          <div className="hidden sm:block pointer-events-none absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
          <div className="hidden sm:block pointer-events-none absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

          {/* Marquee Row Moving Left to Right (2 Columns side-by-side in 1 Row on Mobile) */}
          <div className="flex gap-2.5 sm:gap-6 w-max animate-marquee-ltr">
            {/* Duplicated client list for seamless infinite loop */}
            {[...clients, ...clients].map((c, index) => (
              <div key={`${c.id}-${index}`} className="w-[calc(50vw-18px)] sm:w-[270px] max-w-[175px] sm:max-w-[270px] shrink-0">
                {renderCard(c, `${c.id}-${index}`)}
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* FULLSCREEN LIGHTBOX POPUP MODAL FOR 100% UN-CROPPED FULL RESOLUTION SCREENSHOT */}
      {selectedScreenshot && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedScreenshot(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl p-4 sm:p-6 flex flex-col justify-between overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg sm:text-xl font-black font-editorial text-white">
                  {selectedScreenshot.fullName}
                </h3>
                <p className="text-xs text-sky-400 font-bold">
                  {selectedScreenshot.metrics}
                </p>
              </div>
              
              <button
                onClick={() => setSelectedScreenshot(null)}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 100% Full Un-cropped Image View */}
            <div className="py-4 my-auto overflow-y-auto max-h-[70vh] flex items-center justify-center bg-slate-950 rounded-2xl border border-slate-800 p-2">
              <img
                src={selectedScreenshot.screenshot}
                alt={`${selectedScreenshot.fullName} Full Screenshot`}
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-center">
              <span className="text-xs text-slate-400 font-semibold">
                Click anywhere outside or X to close
              </span>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ClientsSection;
