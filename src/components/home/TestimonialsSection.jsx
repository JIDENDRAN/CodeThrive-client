import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);

  const handleNext = () => {
    if (isBlinking) return;
    setIsBlinking(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 2) % TESTIMONIALS.length);
      setTimeout(() => {
        setIsBlinking(false);
      }, 50);
    }, 200);
  };

  const handlePrev = () => {
    if (isBlinking) return;
    setIsBlinking(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev <= 1 ? TESTIMONIALS.length - 2 : prev - 2));
      setTimeout(() => {
        setIsBlinking(false);
      }, 50);
    }, 200);
  };

  const handleSelect = (targetIndex) => {
    if (isBlinking || targetIndex === currentIndex) return;
    setIsBlinking(true);
    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setTimeout(() => {
        setIsBlinking(false);
      }, 50);
    }, 200);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isBlinking) {
        setIsBlinking(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 2) % TESTIMONIALS.length);
          setTimeout(() => {
            setIsBlinking(false);
          }, 50);
        }, 200);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [isBlinking]);

  return (
    <section className="py-12 sm:py-18 bg-gradient-to-br from-pink-100/70 via-rose-50 to-fuchsia-100/50 text-[#050B14] relative overflow-hidden select-none">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300/25 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-100 border border-pink-300 text-pink-800 text-xs font-black uppercase tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5 text-pink-600" />
            Client Endorsements
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl font-black text-[#050B14] tracking-tight">
            What Leaders Say About CodeThrive
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-semibold">
            Real feedback from executive leaders, founders, and enterprise technology directors.
          </p>
        </div>

        {/* 1. MOBILE VIEW: 1 Card per Slide */}
        <div className="block sm:hidden">
          {(() => {
            const testimonial = TESTIMONIALS[currentIndex % TESTIMONIALS.length];
            return (
              <article
                key={testimonial.id}
                className={`relative rounded-3xl bg-white p-5 border border-pink-200/80 shadow-xl transition-all duration-300 max-w-md mx-auto flex flex-col justify-between transform ${
                  isBlinking
                    ? 'opacity-0 scale-95 blur-[3px]'
                    : 'opacity-100 scale-100 blur-0'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Quote className="w-7 h-7 text-pink-400" />
                    <div className="flex items-center gap-1">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="font-sans text-sm font-bold text-slate-900 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-100 pt-3 mt-2">
                  {testimonial.avatarUrl ? (
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full object-cover shadow-md shrink-0 border-2 border-white"
                    />
                  ) : (
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarBg} text-white font-black text-xs flex items-center justify-center shadow-md shrink-0 border-2 border-white`}>
                      {testimonial.initials}
                    </div>
                  )}
                  <div>
                    <h4 className="font-sans text-xs font-black text-slate-950 leading-tight">
                      {testimonial.author}
                    </h4>
                    <p className="font-sans text-[11px] font-bold text-pink-600 mt-0.5">
                      {testimonial.role} — <span className="text-slate-700">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })()}
        </div>

        {/* 2. DESKTOP & TABLET VIEW: 2 Cards per Slide Side-by-Side */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-6">
          {[0, 1].map((offset) => {
            const testimonial = TESTIMONIALS[(currentIndex + offset) % TESTIMONIALS.length];

            return (
              <article
                key={`${testimonial.id}-${offset}`}
                className={`relative rounded-3xl bg-white p-6 border border-pink-200/80 shadow-xl transition-all duration-300 flex flex-col justify-between transform ${
                  isBlinking
                    ? 'opacity-0 scale-95 blur-[3px]'
                    : 'opacity-100 scale-100 blur-0'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Quote className="w-8 h-8 text-pink-400" />
                    <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/80">
                      {[...Array(testimonial.rating || 5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs font-black text-amber-950 ml-1">5.0</span>
                    </div>
                  </div>

                  <p className="font-sans text-sm sm:text-base font-bold text-slate-900 leading-relaxed mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3.5 border-t border-slate-100 pt-4 mt-2">
                  {testimonial.avatarUrl ? (
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      className="w-11 h-11 rounded-full object-cover shadow-md shrink-0 border-2 border-white"
                    />
                  ) : (
                    <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.avatarBg} text-white font-black text-sm flex items-center justify-center shadow-md shrink-0 border-2 border-white`}>
                      {testimonial.initials}
                    </div>
                  )}
                  <div>
                    <h4 className="font-sans text-sm font-black text-slate-950 leading-tight">
                      {testimonial.author}
                    </h4>
                    <p className="font-sans text-xs font-bold text-pink-600 mt-0.5">
                      {testimonial.role} — <span className="text-slate-700">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Carousel Navigation Controls & Dots (5 Dots for 5 Pages of 10 Total Reviews) */}
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full bg-white border border-pink-200 hover:bg-pink-100 text-slate-700 hover:text-pink-700 shadow-md active:scale-95 transition cursor-pointer"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator (Exactly 5 Dots) */}
          <div className="flex items-center gap-1.5 bg-white border border-pink-200 px-3.5 py-1.5 rounded-full shadow-xs">
            {[0, 1, 2, 3, 4].map((pageIndex) => {
              const activePageIndex = Math.floor(currentIndex / 2);
              return (
                <button
                  key={pageIndex}
                  onClick={() => handleSelect(pageIndex * 2)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activePageIndex === pageIndex ? 'w-5 bg-pink-600' : 'w-2 bg-pink-200'
                  }`}
                  aria-label={`Go to page ${pageIndex + 1}`}
                />
              );
            })}
          </div>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full bg-white border border-pink-200 hover:bg-pink-100 text-slate-700 hover:text-pink-700 shadow-md active:scale-95 transition cursor-pointer"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
