import { X } from 'lucide-react';
export const ProjectModal = ({ project, onClose, onContact }) => {
    if (!project)
        return null;
    return (<div onClick={(e) => { if (e.target === e.currentTarget)
        onClose(); }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-[2rem] bg-[linear-gradient(135deg,#38bdf8,#8b5cf6,#f59e0b,#38bdf8)] bg-[length:220%_220%] p-[1.5px] shadow-[0_20px_60px_rgba(15,23,42,0.18)] animate-gradient-shift">
        <div className="relative max-h-[90vh] overflow-y-auto rounded-[calc(2rem-1.5px)] bg-[#FFFFFF] p-6 sm:p-10 text-[#0F172A]">
          <button onClick={onClose} aria-label="Close modal" className="z-50 absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 rounded-full bg-[#0F172A]/90 hover:bg-[#0F172A] text-white flex items-center justify-center backdrop-blur-md shadow-2xl border border-white/30 transition cursor-pointer hover:scale-105 active:scale-95">
            <X className="w-5 h-5 text-white"/>
          </button>

          {project.imageUrl && (<div className="h-52 sm:h-64 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-6 overflow-hidden relative">
              <img src={project.imageUrl} alt={project.title} loading="lazy" onError={(e) => {
                (e.target).src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
            }} className="w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFFFF] via-transparent to-black/30"/>
              <div className="absolute bottom-4 left-6 sm:left-10">
                <span className="text-xs px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0F172A] font-bold border border-[#E2E8F0] shadow-sm">
                  {project.category}
                </span>
              </div>
            </div>)}

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">{project.industry}</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-[#0F172A] via-[#1D4ED8] to-[#7C3AED] bg-clip-text text-transparent">
            {project.title}
          </h2>
          <p className="text-xs mb-6 font-medium text-[#475569]">
            <span className="font-bold bg-gradient-to-r from-[#0F172A] to-[#7C3AED] bg-clip-text text-transparent">Client Partner:</span> {project.client}
          </p>

          <div className="mb-6 rounded-2xl bg-[linear-gradient(120deg,#38bdf8,#8b5cf6,#f59e0b,#38bdf8)] bg-[length:220%_220%] p-[1px] animate-gradient-shift shadow-[0_6px_18px_rgba(59,130,246,0.08)]">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 rounded-[calc(1rem-1px)] bg-[#F8FAFC] p-5">
              {project.impactMetrics.map((m, i) => (<div key={i} className="text-center">
                  <div className="text-[11px] text-[#64748B]">{m.label}</div>
                  <div className="font-editorial text-2xl font-bold mt-0.5 bg-gradient-to-r from-[#0F172A] via-[#1D4ED8] to-[#7C3AED] bg-clip-text text-transparent">{m.value}</div>
                </div>))}
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r from-[#0F172A] to-[#0EA5E9] bg-clip-text text-transparent">The Engineering Challenge</h4>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2 bg-gradient-to-r from-[#1D4ED8] to-[#7C3AED] bg-clip-text text-transparent">Codethrive Architectural Solution</h4>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 bg-gradient-to-r from-[#0F172A] to-[#7C3AED] bg-clip-text text-transparent">Deployed Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (<span key={i} className="px-3 py-1 rounded-full bg-[#EEF2FF] border border-[#C7D2FE] text-xs font-semibold text-[#4338CA]">
                  {tech}
                </span>))}
            </div>
          </div>

          {project.features && project.features.length > 0 && (<div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider mb-2.5 bg-gradient-to-r from-[#0F172A] to-[#0EA5E9] bg-clip-text text-transparent">Key Capabilities & Features</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.features.map((feat, i) => (<div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#8B5CF6]"/>
                    {feat}
                  </div>))}
              </div>
            </div>)}

          <div className="pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center justify-end gap-3">
            <button onClick={() => {
            onClose();
            onContact();
        }} className="px-7 py-3 rounded-full text-xs font-semibold tracking-wide text-white bg-[#0F172A] hover:bg-[#1E293B] shadow-md transition">
              Request Similar Solution
            </button>
          </div>
        </div>
      </div>
    </div>);
};
