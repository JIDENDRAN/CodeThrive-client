import React, { useState } from 'react';
import { Search, ArrowRight, X, Clock, User, Calendar } from 'lucide-react';
import { INSIGHTS } from '../../data/mockData';

export const InsightsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = [
    'All',
    'Engineering',
    'AI & Machine Learning',
    'Cloud & Architecture',
    'Security & Compliance',
    'Product Strategy'
  ];

  const filteredArticles = INSIGHTS.filter((art) => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Dynamic vibrant styling per category
  const getCategoryStyles = (cat) => {
    switch (cat) {
      case 'Engineering':
        return {
          border: 'border-sky-300 hover:border-sky-500',
          accentBg: 'bg-sky-600',
          gradientBorder: 'from-sky-400 via-blue-500 to-cyan-400',
          cardBg: 'bg-gradient-to-br from-white via-sky-50/40 to-cyan-50/30',
          textColor: 'text-sky-700',
          glow: 'hover:shadow-sky-200/80',
          pillBg: 'bg-sky-100 text-sky-900 border-sky-200'
        };
      case 'AI & Machine Learning':
        return {
          border: 'border-purple-300 hover:border-purple-500',
          accentBg: 'bg-purple-600',
          gradientBorder: 'from-purple-500 via-pink-500 to-indigo-500',
          cardBg: 'bg-gradient-to-br from-white via-purple-50/40 to-pink-50/30',
          textColor: 'text-purple-700',
          glow: 'hover:shadow-purple-200/80',
          pillBg: 'bg-purple-100 text-purple-900 border-purple-200'
        };
      case 'Cloud & Architecture':
        return {
          border: 'border-emerald-300 hover:border-emerald-500',
          accentBg: 'bg-emerald-600',
          gradientBorder: 'from-emerald-400 via-teal-500 to-cyan-500',
          cardBg: 'bg-gradient-to-br from-white via-emerald-50/40 to-teal-50/30',
          textColor: 'text-emerald-700',
          glow: 'hover:shadow-emerald-200/80',
          pillBg: 'bg-emerald-100 text-emerald-900 border-emerald-200'
        };
      case 'Security & Compliance':
        return {
          border: 'border-rose-300 hover:border-rose-500',
          accentBg: 'bg-rose-600',
          gradientBorder: 'from-rose-500 via-orange-400 to-red-500',
          cardBg: 'bg-gradient-to-br from-white via-rose-50/40 to-orange-50/30',
          textColor: 'text-rose-700',
          glow: 'hover:shadow-rose-200/80',
          pillBg: 'bg-rose-100 text-rose-900 border-rose-200'
        };
      case 'Product Strategy':
        return {
          border: 'border-amber-300 hover:border-amber-500',
          accentBg: 'bg-amber-600',
          gradientBorder: 'from-amber-400 via-yellow-500 to-orange-400',
          cardBg: 'bg-gradient-to-br from-white via-amber-50/40 to-yellow-50/30',
          textColor: 'text-amber-700',
          glow: 'hover:shadow-amber-200/80',
          pillBg: 'bg-amber-100 text-amber-900 border-amber-200'
        };
      default:
        return {
          border: 'border-slate-200 hover:border-slate-400',
          accentBg: 'bg-slate-800',
          gradientBorder: 'from-slate-400 via-slate-500 to-slate-600',
          cardBg: 'bg-white',
          textColor: 'text-slate-700',
          glow: 'hover:shadow-slate-200',
          pillBg: 'bg-slate-100 text-slate-900 border-slate-200'
        };
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gradient-to-br from-[#F4F8FF] via-[#FAF7FF] to-[#FFF5F8] text-[#050B14] relative overflow-hidden select-none">
      
      {/* Dynamic Multi-Color Ambient Glow Blobs */}
      <div className="absolute top-10 left-1/4 w-[600px] h-[600px] bg-cyan-300/30 blur-[160px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-purple-300/30 blur-[160px] pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-rose-300/25 blur-[160px] pointer-events-none animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Colorful Top Header */}
        <div className="max-w-3xl space-y-4 animate-slide-in-up">

          <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-950">
            Perspectives on <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#9333EA] to-[#E11D48]">High-Scale Systems</span> &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9333EA] via-[#E11D48] to-[#0284C7]">AI</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-semibold">
            Architectural breakdowns, engineering best practices, and enterprise technology trends from CodeThrive leadership.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 animate-slide-in-up" style={{ animationDelay: '120ms' }}>
          
          {/* Vibrant Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {categories.map((cat) => {
              const styles = getCategoryStyles(cat);
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-black transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
                    isActive
                      ? `${styles.accentBg} text-white shadow-md scale-105`
                      : 'bg-white text-slate-800 border border-slate-200/90 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-600" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-2.5 rounded-full bg-white border border-slate-300 text-xs font-bold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 shadow-sm"
            />
          </div>

        </div>

        {/* Colorful Article Cards Grid (Compact Content Box Height on Mobile View) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-6">
          {filteredArticles.map((art, index) => {
            const styles = getCategoryStyles(art.category);
            return (
              <article
                key={art.id}
                onClick={() => setSelectedArticle(art)}
                style={{ animationDelay: `${index * 90}ms` }}
                className={`rounded-xl sm:rounded-3xl ${styles.cardBg} border-2 ${styles.border} transition-all duration-500 overflow-hidden flex flex-col justify-between group shadow-md sm:shadow-lg hover:shadow-2xl ${styles.glow} hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-in cursor-pointer`}
              >
                <div>
                  <div className="h-32 sm:h-52 overflow-hidden relative bg-slate-950">
                    <img
                      src={art.imageUrl}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                      <span className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8.5px] sm:text-[10px] font-black uppercase tracking-wider ${styles.accentBg} text-white shadow-md border border-white/30 backdrop-blur-md truncate max-w-[90px] sm:max-w-none inline-block`}>
                        {art.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 sm:p-6 space-y-1 sm:space-y-3">
                    <div className="flex items-center gap-1.5 sm:gap-3 text-[9px] sm:text-[12px] font-bold text-slate-500">
                      <span className="flex items-center gap-1"><Calendar className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${styles.textColor}`} /> {art.date}</span>
                      <span className="flex items-center gap-1"><Clock className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${styles.textColor}`} /> {art.readTime}</span>
                    </div>

                    <h3 className={`font-editorial text-xs sm:text-lg font-black text-slate-950 tracking-tight leading-tight group-hover:${styles.textColor} transition-colors line-clamp-2`}>
                      {art.title}
                    </h3>
                  </div>
                </div>

                <div className="p-2 sm:p-6 pt-0 flex items-center justify-between border-t border-slate-200/60 mt-1.5 sm:mt-4">
                  <div className="flex items-center gap-1 sm:gap-2 text-[9px] sm:text-[11px] font-extrabold text-slate-900">
                    <User className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${styles.textColor}`} />
                    <span className="truncate max-w-[75px] sm:max-w-[120px]">{art.author}</span>
                  </div>

                  <button className={`text-[9.5px] sm:text-xs font-black ${styles.textColor} flex items-center gap-0.5 sm:gap-1 group-hover:translate-x-1 transition-transform`}>
                    <span>Read</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Colorful Article Reader Dialog Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          {(() => {
            const styles = getCategoryStyles(selectedArticle.category);
            return (
              <div 
                className={`bg-white rounded-3xl border-2 ${styles.border} max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative space-y-6 overflow-hidden`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top Multi-Color Accent Bar */}
                <div className={`h-2.5 ${styles.accentBg} -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6`} />
                
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full ${styles.accentBg} text-white text-xs font-black uppercase shadow-sm`}>
                  {selectedArticle.category}
                </div>

                <h2 className="font-editorial text-2xl sm:text-4xl font-black text-slate-950 leading-snug">
                  {selectedArticle.title}
                </h2>

                <div className="flex items-center gap-4 text-xs font-bold text-slate-600 border-b border-slate-200 pb-4">
                  <span>By {selectedArticle.author} ({selectedArticle.authorRole})</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                <div className={`p-1 rounded-[1.4rem] bg-gradient-to-r ${styles.gradientBorder || 'from-[#FF2A6D] via-[#9333EA] to-[#0284C7]'} max-w-lg mx-auto w-full shadow-xl hover:shadow-2xl transition-all duration-500 group/modalImg cursor-pointer`}>
                  <div className="rounded-[1.2rem] overflow-hidden h-36 sm:h-48 w-full bg-slate-950 relative border-2 border-white shadow-inner">
                    <img
                      src={selectedArticle.imageUrl}
                      alt={selectedArticle.title}
                      className="w-full h-full object-cover group-hover/modalImg:scale-108 transition-transform duration-700 ease-out animate-in fade-in zoom-in-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover/modalImg:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <div className="prose max-w-none text-slate-800 text-sm sm:text-base leading-relaxed space-y-4 font-semibold">
                  <p className="text-lg font-black text-slate-950">
                    {selectedArticle.summary}
                  </p>
                  <p className="whitespace-pre-line text-slate-800 font-medium">
                    {selectedArticle.content || selectedArticle.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-600">Published by CodeThrive Infotech Engineering Practice</span>
                  <button
                    onClick={() => setSelectedArticle(null)}
                    className={`px-6 py-2.5 rounded-full ${styles.accentBg} text-white text-xs font-black shadow-md hover:scale-105 transition cursor-pointer`}
                  >
                    Close Reader
                  </button>
                </div>

              </div>
            );
          })()}
        </div>
      )}

    </div>
  );
};

export default InsightsPage;
