import { X, Clock, Calendar } from 'lucide-react';
export const ArticleModal = ({ article, onClose, onContact }) => {
    if (!article)
        return null;
    return (<div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200" onClick={onClose} role="dialog" aria-modal="true">
      <div className="relative w-full max-w-3xl rounded-3xl bg-[linear-gradient(120deg,#38BDF8,#8B5CF6,#F59E0B,#38BDF8)] bg-[length:220%_220%] p-[2px] shadow-2xl animate-gradient-shift">
      <div className="relative bg-[#FFFFFF] rounded-[calc(1.5rem-2px)] overflow-hidden p-6 sm:p-10 text-[#0F172A] max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        
        <button onClick={onClose} aria-label="Close article" className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#0F172A] text-white shadow-lg ring-2 ring-white transition hover:scale-105 hover:bg-[#1E293B]">
          <X className="w-5 h-5"/>
        </button>

        {article.image && (<div className="h-48 sm:h-64 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 overflow-hidden relative">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20"/>
          </div>)}

        <div className="flex items-center gap-3 text-xs text-[#475569] mb-4">
          <span className="px-3 py-1 rounded-full badge-pill text-[#0F172A] font-bold border border-[#E2E8F0] bg-[#F8FAFC]">
            {article.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5"/>
            <span>{article.publishedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5"/>
            <span>{article.readTimeMinutes} min read</span>
          </div>
        </div>

        <h2 className="font-editorial font-black text-[#0F172A] tracking-tight mb-3 animate-soft-zoom" style={{ fontSize: '1rem', lineHeight: '1.2' }}>
          {article.title}
        </h2>

        <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] mb-8">
          <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white font-bold flex items-center justify-center text-xs">
            {article.author.avatar}
          </div>
          </div>
          <div>
            <div className="text-xs font-bold text-[#0F172A]">{article.author.name}</div>
            <div className="text-[11px] text-[#475569]">{article.author.role} • CODETHRIVE INFOTECH</div>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#334155] leading-relaxed mb-8">
          {article.fullContent && (<p className="font-medium text-[#0F172A] text-sm sm:text-base leading-relaxed bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0]">
              {article.fullContent}
            </p>)}
          {article.content.map((p, idx) => (<p key={idx} className="leading-relaxed">
              {p}
            </p>))}
        </div>

        <div className="pt-6 border-t border-[#E2E8F0] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {article.tags.map((tag, i) => (<span key={i} className="text-[11px] px-3 py-1 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569]">
                #{tag}
              </span>))}
          </div>

          <button onClick={() => {
            onClose();
            onContact();
        }} className="px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-[#0F172A] hover:bg-[#1E293B] transition">
            Discuss Architecture
          </button>
        </div>

      </div>
    </div>);
};
