import React from 'react';
import { MapPin, Mail, Phone, Clock, MessageSquare, ArrowRight, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const LeadershipAndContactSection = ({ setActiveTab }) => {
  const handleStartConsultation = () => {
    if (setActiveTab) setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreWork = () => {
    if (setActiveTab) setActiveTab('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-12 py-10 bg-gradient-to-b from-white via-slate-50/50 to-white text-[#050B14] border-t border-slate-200/80 select-none">

      {/* SECTION: GET IN TOUCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white border border-slate-200 text-[#0284C7] text-[10px] font-black tracking-widest uppercase shadow-xs">
            FIND US
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E11D48] via-[#0284C7] to-[#9333EA]">Touch</span>
          </h2>
        </div>

        {/* 2-Column Split: Compact 2x2 Grid Left + Compact Consultation Box Right */}
        <div className="grid lg:grid-cols-12 gap-3.5 sm:gap-4 items-stretch">
          
          {/* LEFT SIDE: 4 Compact Cards in 2 Columns & 2 Rows */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-2.5 sm:gap-3">
            
            {/* ROW 1 - COL 1: ADDRESS (Hot Pink) */}
            <div
              onClick={() => window.open('https://maps.google.com/?q=Coimbatore,TamilNadu', '_blank')}
              className="bg-gradient-to-br from-white via-pink-100 to-rose-200/90 rounded-xl sm:rounded-2xl border-2 border-pink-400 p-2.5 sm:p-3 space-y-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer flex flex-col justify-between min-h-0 sm:min-h-[72px]"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-[#E11D48] text-white flex items-center justify-center shadow-xs shrink-0">
                  <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9px] font-black tracking-widest uppercase text-[#E11D48]">
                  ADDRESS (MAP)
                </div>
              </div>

              <p className="text-[9px] sm:text-[11px] font-extrabold text-slate-950 leading-tight">
                {COMPANY_INFO.address}
              </p>
            </div>

            {/* ROW 1 - COL 2: EMAIL (Electric Blue) */}
            <div
              onClick={() => window.location.href = `mailto:${COMPANY_INFO.email}`}
              className="bg-gradient-to-br from-white via-sky-100 to-cyan-200/90 rounded-xl sm:rounded-2xl border-2 border-sky-400 p-2.5 sm:p-3 space-y-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer flex flex-col justify-between min-h-0 sm:min-h-[72px]"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-[#0284C7] text-white flex items-center justify-center shadow-xs shrink-0">
                  <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9px] font-black tracking-widest uppercase text-[#0284C7]">
                  EMAIL (SEND)
                </div>
              </div>

              <p className="text-[9px] sm:text-[11px] font-extrabold text-slate-950 truncate">
                {COMPANY_INFO.email}
              </p>
            </div>

            {/* ROW 2 - COL 1: PHONE (Royal Purple) */}
            <div
              onClick={() => window.location.href = `tel:${COMPANY_INFO.phone}`}
              className="bg-gradient-to-br from-white via-purple-100 to-indigo-200/90 rounded-xl sm:rounded-2xl border-2 border-purple-400 p-2.5 sm:p-3 space-y-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer flex flex-col justify-between min-h-0 sm:min-h-[72px]"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-[#9333EA] text-white flex items-center justify-center shadow-xs shrink-0">
                  <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9px] font-black tracking-widest uppercase text-[#9333EA]">
                  PHONE (CALL)
                </div>
              </div>

              <p className="text-[9px] sm:text-[11px] font-extrabold text-slate-950">
                {COMPANY_INFO.phone}
              </p>
            </div>

            {/* ROW 2 - COL 2: WORKING HOURS (Golden Amber) */}
            <div
              onClick={() => window.open(`https://wa.me/919150781685?text=Hi%20CodeThrive%20team,%20I%20want%20to%20know%20your%20working%20hours%20and%20schedule%20a%20call.`, '_blank')}
              className="bg-gradient-to-br from-white via-amber-100 to-yellow-200/90 rounded-xl sm:rounded-2xl border-2 border-amber-400 p-2.5 sm:p-3 space-y-1 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group cursor-pointer flex flex-col justify-between min-h-0 sm:min-h-[72px]"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg bg-[#D97706] text-white flex items-center justify-center shadow-xs shrink-0">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>
                <div className="text-[8px] sm:text-[9px] font-black tracking-widest uppercase text-[#D97706]">
                  WORKING HOURS
                </div>
              </div>

              <p className="text-[9px] sm:text-[11px] font-extrabold text-slate-950 leading-tight">
                Mon - Sat: 9 AM - 6 PM
              </p>
            </div>

          </div>

          {/* RIGHT SIDE: Compact Exceptional Consultation Card */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#E0F7FF] via-white to-[#F3E8FF] border-2 border-sky-300 rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-lg space-y-2.5 flex flex-col justify-between relative overflow-hidden">
            
            <div className="space-y-1.5">
              
              {/* Top Row: ENGINEERING TEAM ONLINE Badge Left + Lock Icon Right */}
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100/90 border border-emerald-300/90 text-emerald-800 text-[9px] sm:text-[9.5px] font-black uppercase tracking-wider shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>ENGINEERING TEAM ONLINE</span>
                </div>

                <div className="text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-0.5">
                <h3 className="font-editorial text-lg sm:text-xl font-black text-slate-950 tracking-tight leading-snug">
                  Ready to build something exceptional?
                </h3>

                <p className="text-[10px] sm:text-[11px] text-slate-600 font-semibold leading-relaxed">
                  Our lead architects review product scopes and respond with technical proposals within 24 hours.
                </p>
              </div>

            </div>

            {/* Action Buttons Row */}
            <div className="space-y-1.5 pt-1.5 border-t border-slate-200/60">
              <button
                onClick={handleStartConsultation}
                className="w-full py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#06B6D4] to-[#9333EA] hover:from-[#0891B2] hover:to-[#7E22CE] text-white font-black text-xs sm:text-xs shadow-md shadow-purple-200 flex items-center justify-center gap-1.5 transition-transform hover:scale-[1.01] cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span className="text-white font-black">Start A Project Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>

              <button
                onClick={handleExploreWork}
                className="w-full py-1.5 sm:py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-extrabold text-xs sm:text-xs border border-slate-200/90 shadow-xs flex items-center justify-center transition-all cursor-pointer"
              >
                Explore Case Studies &amp; Work
              </button>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default LeadershipAndContactSection;
