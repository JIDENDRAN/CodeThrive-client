import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

const FOOTER_BG = 'linear-gradient(160deg, #1C1005 0%, #1A0E02 50%, #180D00 100%)';
const GOLD_PRIMARY = '#F3D77F';
const GOLD_BRIGHT = '#FFF2BF';
const GOLD_MUTED = '#FFE08A';
const GOLD_BORDER = 'linear-gradient(90deg, #5C4000 0%, #F7D66B 25%, #F6E29C 50%, #F7D66B 75%, #5C4000 100%)';

export const Navbar = ({ activeTab, setActiveTab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'industries', label: 'Industries' },
    { id: 'projects', label: 'Work' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: "Let's Talk" }
  ];

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Gold Accent Border */}
      <div className="h-[3px] w-full" style={{ background: GOLD_BORDER }} />

      {/* Main Navbar Bar */}
      <div
        className={`transition-all duration-300 ${isScrolled ? 'py-2 sm:py-2.5' : 'py-2.5 sm:py-3.5'}`}
        style={{
          background: FOOTER_BG,
          borderBottom: '1px solid rgba(243, 215, 127, 0.22)',
          boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.50)' : 'none'
        }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              onClick={() => handleNavClick('home')}
              className="cursor-pointer transition-transform hover:scale-105 shrink-0"
            >
              <Logo size="lg" showTagline={false} variant="light" animateThrive />
            </div>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center ml-auto mr-3 space-x-1.5">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm transition-all relative px-4 py-2 rounded-xl font-bold cursor-pointer ${
                      isActive
                        ? 'shadow-[0_0_15px_rgba(243,215,127,0.25)]'
                        : 'hover:bg-white/10'
                    }`}
                    style={{
                      color: isActive ? GOLD_BRIGHT : GOLD_MUTED,
                      background: isActive ? 'rgba(243, 215, 127, 0.18)' : 'transparent',
                      border: isActive ? '1px solid rgba(243, 215, 127, 0.40)' : '1px solid transparent'
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #F3D77F, #F5CF60)' }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="px-6 py-2.5 rounded-full text-xs font-black tracking-wide text-[#1A0E02] transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(243,215,127,0.35)] hover:shadow-[0_0_30px_rgba(243,215,127,0.6)] cursor-pointer"
                style={{
                  background: 'linear-gradient(135deg, #F5CF60 0%, #E8B830 50%, #C8920A 100%)'
                }}
              >
                {"Let's Connect"}
              </button>
            </div>

            {/* Mobile hamburger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl border cursor-pointer active:scale-95 transition-transform"
                style={{
                  borderColor: 'rgba(243,215,127,0.40)',
                  background: 'rgba(243,215,127,0.15)',
                  color: GOLD_PRIMARY
                }}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t mt-1.5 py-3 px-4 space-y-1 bg-[#1C1005]/95 backdrop-blur-md shadow-2xl animate-fadeIn" style={{ borderColor: 'rgba(243,215,127,0.2)' }}>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="flex items-center justify-between w-full text-left px-3.5 py-2.5 rounded-xl font-extrabold text-xs cursor-pointer transition-all active:scale-[0.99]"
                  style={{
                    color: isActive ? GOLD_BRIGHT : GOLD_MUTED,
                    background: isActive ? 'rgba(243,215,127,0.20)' : 'rgba(255,255,255,0.03)',
                    border: isActive ? '1px solid rgba(243,215,127,0.35)' : '1px solid transparent'
                  }}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full shadow-[0_0_8px_#F3D77F]" style={{ background: GOLD_PRIMARY }} />
                  )}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('contact')}
              className="block w-full text-center px-4 py-3 rounded-full font-black text-xs text-[#1A0E02] mt-3 shadow-lg cursor-pointer transition-transform active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #F5CF60 0%, #E8B830 50%, #C8920A 100%)'
              }}
            >
              {"Let's Connect"}
            </button>
          </div>
        )}

        {/* Running Ticker Marquee Bar at Bottom of Header (Reduced Background Height Alone) */}
        <div
          className="h-5.5 sm:h-6 py-0.5 flex items-center justify-center overflow-hidden select-none"
          style={{
            background: 'linear-gradient(90deg, #180D02 0%, #150B01 50%, #180D02 100%)',
            borderTop: '1px solid rgba(243, 215, 127, 0.40)'
          }}
        >
          <div className="flex items-center gap-10 animate-marquee-ltr font-black uppercase tracking-widest whitespace-nowrap leading-none">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 my-auto leading-none">
                <span className="flex items-center gap-2 font-black leading-none" style={{ color: GOLD_BRIGHT }}>
                  <img
                    src="/brand-symbol-transparent.png"
                    alt="CodeThrive Symbol"
                    className="w-3.5 h-3.5 object-contain shrink-0 filter brightness-150 saturate-200"
                    onError={(e) => { (e.target).src = '/logo.png'; }}
                  />
                  <span className="tracking-wider font-black text-[10.5px] sm:text-sm leading-none" style={{ color: GOLD_BRIGHT, fontWeight: 900 }}>CODETHRIVE INFOTECH</span>
                </span>
                <span className="font-black tracking-widest text-[9.5px] sm:text-xs leading-none" style={{ color: GOLD_PRIMARY, fontWeight: 900 }}>
                  Progress. Cultivate. Innovate.
                </span>
                <span className="font-black text-[10px] sm:text-xs leading-none" style={{ color: GOLD_MUTED }}>✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
