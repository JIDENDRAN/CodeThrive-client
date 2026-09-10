import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export const CookieConsent = ({ onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    if (onAccept) onAccept();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
    if (onDecline) onDecline();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-[9999] p-4 max-w-sm w-full">
      <div className="bg-slate-900 border border-slate-700 text-white rounded-2xl shadow-2xl p-5 relative">
        <button
          onClick={handleDecline}
          className="absolute top-3 right-3 p-1 rounded-full text-slate-400 hover:text-white transition cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <h4 className="font-bold text-sm text-white mb-1">Cookie Preferences</h4>
        <p className="text-xs text-slate-300 mb-4 leading-relaxed font-normal">
          We use essential cookies to optimize site telemetry, security, and experience.
        </p>

        <div className="flex gap-2">
          <button
            onClick={handleAccept}
            className="flex-1 py-2 px-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs transition cursor-pointer"
          >
            Accept All
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition cursor-pointer"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};
