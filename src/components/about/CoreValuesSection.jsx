import React from 'react';
import { Sparkles } from 'lucide-react';

export const CoreValuesSection = () => {
  const values = [
    {
      id: 'precision',
      title: 'Precision Engineering',
      description: 'Every line of code is deliberate. We build performance-first architectures designed to handle enterprise scale seamlessly.',
      image: '/core-value-engine.png',
      titleGradient: 'from-sky-600 via-cyan-500 to-indigo-600',
      accentGlow: 'from-sky-400/20 via-cyan-400/15 to-indigo-500/10',
      orbGlow: 'bg-cyan-400/60',
      shapeClass: 'rounded-2xl sm:rounded-tl-[3.5rem] sm:rounded-br-[3.5rem] sm:rounded-tr-3xl sm:rounded-bl-3xl'
    },
    {
      id: 'client-first',
      title: 'Client-First Culture',
      description: 'We treat every project as our own product. Your business success is our priority — going far beyond delivery to ensure ROI.',
      image: '/core-value-compass.png',
      titleGradient: 'from-rose-600 via-pink-500 to-amber-500',
      accentGlow: 'from-rose-400/20 via-pink-400/15 to-amber-400/10',
      orbGlow: 'bg-rose-400/60',
      shapeClass: 'rounded-2xl sm:rounded-t-[4.5rem] sm:rounded-b-3xl'
    },
    {
      id: 'innovation',
      title: 'Innovation Driven',
      description: 'Staying at the bleeding edge — integrating autonomous AI systems, cloud-native pipelines, and modern stacks for lasting advantage.',
      image: '/core-value-brain.png',
      titleGradient: 'from-indigo-600 via-sky-500 to-cyan-500',
      accentGlow: 'from-indigo-400/20 via-sky-400/15 to-cyan-400/10',
      orbGlow: 'bg-indigo-400/50',
      shapeClass: 'rounded-2xl sm:rounded-tr-[4.5rem] sm:rounded-bl-[4.5rem] sm:rounded-tl-3xl sm:rounded-br-3xl'
    },
    {
      id: 'quality',
      title: 'Quality Standards',
      description: "Our 98% client retention rate reflects our standard. We don't just ship code — we ship rock-solid, production-grade confidence.",
      image: '/core-value-shield.png',
      titleGradient: 'from-amber-600 via-yellow-500 to-rose-500',
      accentGlow: 'from-amber-400/20 via-yellow-400/15 to-rose-400/10',
      orbGlow: 'bg-amber-400/60',
      shapeClass: 'rounded-2xl sm:rounded-[3.2rem]'
    }
  ];

  return (
    <section className="py-10 sm:py-24 bg-gradient-to-br from-[#F0F4FF] via-[#F8FAFF] to-[#EFF5FF] text-[#050B14] relative overflow-hidden select-none">
      
      {/* High-Tech Circuit Board / AI Node Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/core-values-bg.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-60 scale-105 filter drop-shadow-md"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F4FF]/50 via-transparent to-[#EFF5FF]/50 pointer-events-none" />
      </div>

      {/* Real-Time Ambient Dynamic Glowing Light Orbs */}
      <div className="absolute top-0 left-1/4 w-[750px] h-[750px] bg-gradient-to-r from-cyan-300/25 to-sky-300/25 blur-[180px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[750px] h-[750px] bg-gradient-to-r from-purple-300/25 to-pink-300/25 blur-[180px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-16">
        
        {/* Top Header Section */}
        <div className="text-center space-y-2 sm:space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0284C7] text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>WHAT DRIVES US</span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#9333EA] to-[#E11D48]">Values</span>
          </h2>

          <p className="text-slate-700 text-xs sm:text-base font-bold max-w-2xl mx-auto leading-relaxed">
            The foundational engineering principles behind every digital product and enterprise system we design.
          </p>
        </div>

        {/* 4 Multi-Color Real-Time Animated Glass Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-8 items-stretch">
          {values.map((v) => (
            <div
              key={v.id}
              className={`group relative bg-white/85 backdrop-blur-xl border-none p-3 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_70px_rgba(14,165,233,0.22)] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between overflow-hidden ${v.shapeClass}`}
            >
              {/* Top Edge Specular Glass Reflection Highlight */}
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-white/90 to-transparent pointer-events-none" />

              {/* Multi-Color Internal Ambient Glow Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${v.accentGlow} opacity-30 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

              <div className="space-y-3 sm:space-y-6 relative z-10 pt-1 pb-1 flex flex-col items-center">
                
                {/* PURE FREE-FLOATING 3D IMAGE (No Box / No Border) */}
                <div className="flex justify-center items-center relative pt-0.5 pb-0.5 sm:pt-2 sm:pb-2 w-full">
                  {/* Glowing Ambient Halo Behind Image */}
                  <div className={`absolute w-20 h-20 sm:w-36 sm:h-36 rounded-full ${v.orbGlow} blur-xl sm:blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`} />
                  
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-24 h-24 sm:w-44 sm:h-44 object-contain relative z-10 transition-transform duration-700 group-hover:scale-110 filter drop-shadow-2xl"
                  />
                </div>

                {/* Multi-Color Title & Description (Centered) */}
                <div className="space-y-1 sm:space-y-2.5 text-center">
                  <h3 className={`text-sm sm:text-2xl font-black font-editorial tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r ${v.titleGradient}`}>
                    {v.title}
                  </h3>
                  <p className="text-[10px] sm:text-sm text-slate-800 font-semibold leading-tight sm:leading-relaxed">
                    {v.description}
                  </p>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValuesSection;
