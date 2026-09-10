import React from 'react';
import { COMPANY_INFO } from '../../data/mockData';
import { Logo } from './Logo';

const PortfolioIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <path d="m10 15 5-3-5-3z" fill="currentColor"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z"/>
    <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.6-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1 .3-1.5.1-2.2-.6-4.8-3.2-5.4-5.4-.1-.5 0-1.1.1-1.5Z"/>
  </svg>
);

export const Footer = ({ setActiveTab }) => {
  const handleNav = (tab) => {
    if (setActiveTab) setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCapabilityNav = () => {
    if (setActiveTab) setActiveTab('home');
    setTimeout(() => {
      const servicesEl = document.getElementById('services');
      if (servicesEl) {
        servicesEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 500, behavior: 'smooth' });
      }
    }, 100);
  };

  const capabilities = [
    'Website Development & Web Apps',
    'Mobile App Builder & Engineering',
    'AI & Intelligent Systems',
    'Dedicated Business Support & Maintenance',
    'Custom CRM & ERP Solutions',
  ];

  const navLinks = [
    { label: 'Home', tab: 'home' },
    { label: 'About Us', tab: 'about' },
    { label: 'Industries', tab: 'industries' },
    { label: 'Work', tab: 'projects' },
    { label: 'Gallery', tab: 'gallery' },
    { label: 'Insights', tab: 'insights' },
    { label: "Let's Talk", tab: 'contact' }
  ];

  const social = [
    { icon: LinkedinIcon, label: 'LinkedIn', href: COMPANY_INFO?.socialLinks?.linkedin || 'https://www.linkedin.com/in/codethrive-infotech-5b6361402' },
    { icon: MessageIcon, label: 'Message', href: COMPANY_INFO?.socialLinks?.message || 'sms:+919150781685' },
    { icon: InstagramIcon, label: 'Instagram', href: COMPANY_INFO?.socialLinks?.instagram || 'https://www.instagram.com/codethriveinfotech_official?igsh=MTIzZXA5MXF5dXRlaQ==' },
    { icon: FacebookIcon, label: 'Facebook', href: COMPANY_INFO?.socialLinks?.facebook || 'https://www.facebook.com/share/18pBfimAcw/' },
    { icon: YoutubeIcon, label: 'YouTube', href: COMPANY_INFO?.socialLinks?.youtube || 'https://www.youtube.com/@CodeThriveInfotech' },
    { icon: PortfolioIcon, label: 'Portfolio (Add URL later)', href: COMPANY_INFO?.socialLinks?.portfolio || '#' },
    { icon: WhatsappIcon, label: 'WhatsApp', href: 'https://wa.me/919150781685' },
  ];

  return (
    <footer className="w-full bg-[#120B03] text-white overflow-hidden relative border-t border-[#F3D77F]/40 select-none">
      
      {/* Main 4-Column Body */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 items-start">

          {/* Col 1 — Brand (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3.5">
            <Logo size="md" showTagline variant="light" monochrome />
            <p className="text-xs sm:text-sm leading-relaxed font-semibold text-[#F3D77F] max-w-sm">
              We build high-performance digital products — websites, apps, and AI systems — for ambitious businesses across the globe.
            </p>
            <div className="flex items-center gap-2.5 pt-0.5">
              {social.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full border border-[#F3D77F]/40 bg-[#F3D77F]/10 text-[#F3D77F] flex items-center justify-center hover:bg-[#F3D77F] hover:text-black transition-all duration-200"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — | CAPABILITIES (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-[#F3D77F] flex items-center gap-1.5">
              <span className="font-extrabold">|</span>
              <span>CAPABILITIES</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-bold text-[#F3D77F]">
              {capabilities.map((cap, i) => (
                <li
                  key={i}
                  onClick={handleCapabilityNav}
                  className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer leading-snug flex items-center gap-1.5 group"
                >
                  <span className="text-[#F3D77F]/60 group-hover:text-white transition-colors text-xs">›</span>
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — | NAVIGATION (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-[#F3D77F] flex items-center gap-1.5">
              <span className="font-extrabold">|</span>
              <span>NAVIGATION</span>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm font-bold text-[#F3D77F]">
              {navLinks.map((link) => (
                <li
                  key={link.tab}
                  onClick={() => handleNav(link.tab)}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — | CONTACT US (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-[#F3D77F] flex items-center gap-1.5">
              <span className="font-extrabold">|</span>
              <span>CONTACT US</span>
            </div>
            
            <div className="space-y-2.5 text-xs sm:text-sm font-bold text-[#F3D77F]">
              
              {/* Email */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2.5 group hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#F3D77F]/10 border border-[#F3D77F]/30 flex items-center justify-center shrink-0 text-[#F3D77F] text-xs">
                  ✉
                </div>
                <span className="break-all">{COMPANY_INFO.email}</span>
              </a>

              {/* Phone */}
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2.5 group hover:text-white transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#F3D77F]/10 border border-[#F3D77F]/30 flex items-center justify-center shrink-0 text-[#F3D77F] text-xs">
                  📞
                </div>
                <span>{COMPANY_INFO.phone}</span>
              </a>

              {/* Location (Tap-Friendly Google Maps Link for Mobile & PC) */}
              <a
                href={COMPANY_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 group text-[#F3D77F] hover:text-white transition-all cursor-pointer active:scale-98 py-0.5"
                title="Open Google Maps Location"
              >
                <div className="w-7 h-7 rounded-lg bg-[#F3D77F]/15 border border-[#F3D77F]/40 flex items-center justify-center shrink-0 text-[#F3D77F] text-xs mt-0.5 group-hover:bg-[#F3D77F] group-hover:text-black transition-colors shadow-xs">
                  📍
                </div>
                <div className="space-y-0.5">
                  <span className="text-[9.5px] font-black uppercase tracking-widest text-[#F3D77F]/80 block">Headquarters (Coimbatore)</span>
                  <span className="leading-relaxed font-bold text-xs sm:text-sm block group-hover:underline underline-offset-2">
                    {COMPANY_INFO.address}
                  </span>
                </div>
              </a>

              {/* Hours */}
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-[#F3D77F]/10 border border-[#F3D77F]/30 flex items-center justify-center shrink-0 text-[#F3D77F] text-xs">
                  🕒
                </div>
                <span>Monday – Saturday: 9:00 AM – 6:00 PM</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Copyright Bar */}
      <div className="bg-[#070502] border-t border-[#F3D77F]/20 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-[#F3D77F]">
          <div>
            © 2026 CODETHRIVE INFOTECH. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span
              onClick={() => handleNav('privacy')}
              className="hover:text-white transition cursor-pointer"
            >
              Privacy Policy
            </span>
            <span
              onClick={() => handleNav('terms')}
              className="hover:text-white transition cursor-pointer"
            >
              Terms of Service
            </span>
            <span
              onClick={() => handleNav('home')}
              className="hover:text-white transition cursor-pointer"
            >
              Sitemap
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
