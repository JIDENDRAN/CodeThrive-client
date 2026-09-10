import { Sparkles, ArrowRight, ShieldCheck, Zap, Clock, Rocket, MessageSquare } from 'lucide-react';

export const CtaBanner = ({ setActiveTab, onBookConsultation }) => {
    return (<section className="relative overflow-hidden border-t border-slate-200 bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#F1F5F9] py-5 sm:py-6">
      
      {/* Vibrant Multi-Color Floating Orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-300/30 blur-[120px] pointer-events-none animate-float"/>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-300/30 blur-[120px] pointer-events-none animate-float-slow"/>
      <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none"/>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Colorful Flowing Gradient Outer Border Container */}
        <div className="relative rounded-[1.8rem] p-[2px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 shadow-[0_15px_45px_rgba(6,182,212,0.15)] animate-gradient-shift">
          
          {/* Main Card Body (Reduced Box Height on Mobile View) */}
          <div className="rounded-[1.7rem] bg-white/95 backdrop-blur-xl p-3.5 sm:p-6 lg:p-8 text-center">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-widest bg-gradient-to-r from-cyan-100 via-blue-100 to-purple-100 border border-cyan-300 text-cyan-950 shadow-xs mb-1.5 sm:mb-2.5">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-600 animate-spin" style={{ animationDuration: '6s' }}/>
              <span>LET'S BUILD TOGETHER</span>
            </div>

            {/* Colourful Animated Title */}
            <h2 className="font-editorial text-lg sm:text-3xl lg:text-[2.4rem] font-black text-[#050B14] tracking-tight leading-tight max-w-3xl mx-auto mb-1.5 sm:mb-2">
              Have a project in mind?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 animate-gradient-shift">
                Let’s engineer something exceptional.
              </span>
            </h2>

            {/* Description Subtext */}
            <p className="text-[#0F172A] text-xs sm:text-lg font-bold max-w-2xl mx-auto leading-normal sm:leading-relaxed mb-2.5 sm:mb-4">
              Schedule a 30-minute discovery call with our engineering partners to discuss architecture, timelines, and execution.
            </p>

            {/* 4 Colourful Feature Pills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 max-w-2xl mx-auto mb-2.5 sm:mb-4">
              <div className="flex items-center justify-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-cyan-50/90 border border-cyan-200 text-cyan-950 text-[9.5px] sm:text-[11px] font-black shadow-xs">
                <Rocket className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-600 shrink-0"/>
                <span className="truncate">2-Wk MVP Sprints</span>
              </div>

              <div className="flex items-center justify-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-purple-50/90 border border-purple-200 text-purple-950 text-[9.5px] sm:text-[11px] font-black shadow-xs">
                <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-600 shrink-0"/>
                <span className="truncate">Enterprise Security</span>
              </div>

              <div className="flex items-center justify-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-emerald-50/90 border border-emerald-200 text-emerald-950 text-[9.5px] sm:text-[11px] font-black shadow-xs">
                <Zap className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-emerald-600 shrink-0"/>
                <span className="truncate">99.99% SLA Uptime</span>
              </div>

              <div className="flex items-center justify-center gap-1 px-2 py-1 sm:px-2.5 sm:py-1.5 rounded-lg bg-amber-50/90 border border-amber-200 text-amber-950 text-[9.5px] sm:text-[11px] font-black shadow-xs">
                <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-600 shrink-0"/>
                <span className="truncate">24/7 Tech Lead Supp.</span>
              </div>
            </div>

            {/* Colourful Interactive CTA Buttons */}
            <div className="flex flex-row items-center justify-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <button onClick={onBookConsultation} className="px-3.5 py-2 sm:px-7 sm:py-3 rounded-full text-[11px] sm:text-sm font-black tracking-wide text-[#1A1205] bg-gradient-to-r from-[#F7E7A4] via-[#F2C75A] to-[#D39B2B] hover:from-[#F9E9B8] hover:via-[#F4D77A] hover:to-[#E0A62E] shadow-[0_0_15px_rgba(242,199,90,0.35)] hover:shadow-[0_0_30px_rgba(242,199,90,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-1 cursor-pointer">
                <span>Schedule Call</span>
                <ArrowRight className="w-3.5 h-3.5"/>
              </button>

              <button onClick={() => {
            setActiveTab('contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }} className="px-3.5 py-2 sm:px-7 sm:py-3 rounded-full text-[11px] sm:text-sm font-black tracking-wide text-[#050B14] bg-white border border-slate-300 hover:border-cyan-500 hover:bg-cyan-50/50 transition-all duration-300 hover:scale-105 shadow-xs flex items-center gap-1 cursor-pointer">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-600"/>
                <span>Talk To Team</span>
              </button>
            </div>

            {/* Bottom Live Guarantee Bar */}
            <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-center gap-2 text-[9px] sm:text-[10.5px] font-bold text-slate-500">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-ping"/>
                <span className="text-emerald-700 font-extrabold">Live Response:</span> &lt; 15 Mins
              </span>
              <span>•</span>
              <span>No Obligation</span>
              <span>•</span>
              <span>24/7 Delivery</span>
            </div>

          </div>
        </div>

      </div>
    </section>);
};
