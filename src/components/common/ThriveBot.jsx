import React, { useState } from 'react';
import { X, Phone, Calendar, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

const WhatsappIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ThriveBot = ({ setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      subtitle: '+91 9150781685',
      badge: 'Instant Chat',
      badgeBg: 'bg-emerald-600 text-white font-black',
      iconBg: 'bg-emerald-500 text-white shadow-md',
      borderBg: 'border-2 border-emerald-400 bg-gradient-to-r from-emerald-100/90 via-emerald-50 to-teal-100/80 hover:from-emerald-200 hover:to-teal-100',
      icon: <WhatsappIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      action: () => window.open(`https://wa.me/919150781685`, '_blank')
    },
    {
      id: 'call',
      name: 'Direct Call',
      subtitle: '+91 9150781685',
      badge: '9 AM – 6 PM',
      badgeBg: 'bg-blue-600 text-white font-black',
      iconBg: 'bg-blue-600 text-white shadow-md',
      borderBg: 'border-2 border-blue-400 bg-gradient-to-r from-sky-100/90 via-blue-50 to-indigo-100/80 hover:from-sky-200 hover:to-indigo-100',
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      action: () => { window.location.href = `tel:${COMPANY_INFO?.phone || '+919150781685'}`; }
    },
    {
      id: 'booking',
      name: 'Book a Meeting',
      subtitle: '30-min discovery session',
      badge: 'Free Consult',
      badgeBg: 'bg-purple-600 text-white font-black',
      iconBg: 'bg-purple-600 text-white shadow-md',
      borderBg: 'border-2 border-purple-400 bg-gradient-to-r from-purple-100/90 via-indigo-50 to-violet-100/80 hover:from-purple-200 hover:to-violet-100',
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      action: () => {
        setIsOpen(false);
        if (setActiveTab) setActiveTab('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    {
      id: 'location',
      name: 'HQ Location',
      subtitle: 'Sungam, Coimbatore, TN',
      badge: 'Google Maps',
      badgeBg: 'bg-rose-600 text-white font-black',
      iconBg: 'bg-rose-600 text-white shadow-md',
      borderBg: 'border-2 border-rose-400 bg-gradient-to-r from-rose-100/90 via-pink-50 to-red-100/80 hover:from-rose-200 hover:to-pink-100',
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      action: () => window.open(COMPANY_INFO?.mapsUrl || 'https://maps.google.com', '_blank')
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      subtitle: 'CodeThrive Infotech',
      badge: 'Network',
      badgeBg: 'bg-cyan-600 text-white font-black',
      iconBg: 'bg-cyan-600 text-white shadow-md',
      borderBg: 'border-2 border-cyan-400 bg-gradient-to-r from-cyan-100/90 via-sky-50 to-blue-100/80 hover:from-cyan-200 hover:to-blue-100',
      icon: <LinkedinIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      action: () => window.open(COMPANY_INFO?.socialLinks?.linkedin || 'https://linkedin.com', '_blank')
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      
      {/* Circular Logo Trigger Button (Only Logo Visible by Default, Reveals "Let's Talk" on Touch/Hover) */}
      {!isOpen && (
        <div className="relative group flex items-center justify-end">
          
          {/* Tooltip Label Revealed on Touch / Hover */}
          <div className="absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-slate-950/90 text-white text-xs font-black tracking-wide shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/20">
            Let's Talk 👋
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#8C5A6E] via-[#6D4253] to-[#4A2B37] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer border border-white/20 active:scale-95"
            aria-label="Let's Talk"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900 absolute top-0 right-0 animate-pulse" />
          </button>

        </div>
      )}

      {/* Expanded Popup Dialog Card */}
      {isOpen && (
        <div className="w-[300px] sm:w-[360px] bg-white border-2 border-slate-300 text-slate-900 rounded-2xl shadow-2xl animate-fade-in relative overflow-hidden">
          
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-[#2D1B28] via-[#3D2536] to-[#1E121B] text-white p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-xl p-1 bg-white/10 flex items-center justify-center border border-white/20 shrink-0">
                <img
                  src="/brand-symbol-transparent.png"
                  alt="CodeThrive"
                  className="w-full h-full object-contain"
                  onError={(e) => { (e.target).src = '/logo.png'; }}
                />
              </div>
              <div>
                <h4 className="font-black text-xs sm:text-sm text-white leading-tight">Connect with CodeThrive</h4>
                <p className="text-[10px] sm:text-[11px] text-slate-300 leading-tight">Fast response via any channel</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 sm:p-1.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>

          {/* 5 Contact Option Cards */}
          <div className="p-2 sm:p-3.5 space-y-1.5 sm:space-y-2.5 max-h-[380px] sm:max-h-[420px] overflow-y-auto">
            {contactOptions.map((opt) => (
              <div
                key={opt.id}
                onClick={opt.action}
                className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl ${opt.borderBg} transition-all duration-200 cursor-pointer flex items-center justify-between group shadow-sm active:scale-98`}
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl ${opt.iconBg} flex items-center justify-center shrink-0 shadow-sm`}>
                    {opt.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[11px] sm:text-xs font-black text-slate-950">{opt.name}</span>
                      <span className={`text-[8.5px] sm:text-[9.5px] font-black px-1.5 py-0.5 rounded-full ${opt.badgeBg}`}>
                        {opt.badge}
                      </span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-700 mt-0.5">{opt.subtitle}</p>
                  </div>
                </div>

                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-500 group-hover:text-slate-900 transition shrink-0" />
              </div>
            ))}
          </div>

          {/* Footer Bar */}
          <div className="border-t border-slate-200 p-2.5 sm:p-3.5 flex items-center justify-between text-[11px] sm:text-xs font-bold text-slate-900 bg-slate-50">
            <span className="text-[10px] sm:text-xs">Need custom assistance?</span>
            <button
              onClick={() => {
                setIsOpen(false);
                if (setActiveTab) setActiveTab('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-[#0284C7] hover:text-[#0369A1] font-black text-[10.5px] sm:text-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Go to Contact Page →</span>
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default ThriveBot;
