import React, { useState } from 'react';
import { Send, Calendar, MapPin, Mail, Phone, MessageSquare, ShieldCheck, Globe, Clock, ArrowUpRight, HelpCircle, ChevronDown } from 'lucide-react';
import { ScheduleModal } from './ScheduleModal';
import { COMPANY_INFO } from '../../data/mockData';

export const ContactPage = () => {
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    workEmail: '',
    companyEmail: '',
    projectOverview: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const messageLines = [
      `👋 *New Project Inquiry from Website*`,
      ``,
      `👤 *Name:* ${fullName}`,
      `📱 *Mobile / Phone:* ${formData.mobileNumber}`,
      `✉️ *Work Email:* ${formData.workEmail}`
    ];

    if (formData.companyEmail) {
      messageLines.push(`🏢 *Company Email:* ${formData.companyEmail}`);
    }

    messageLines.push(
      ``,
      `📋 *Project Overview & Requirements:*`,
      formData.projectOverview
    );

    const messageText = messageLines.join('\n');
    const whatsappUrl = `https://wa.me/919150781685?text=${encodeURIComponent(messageText)}`;

    window.open(whatsappUrl, '_blank');

    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ firstName: '', lastName: '', mobileNumber: '', workEmail: '', companyEmail: '', projectOverview: '' });
    }, 4000);
  };

  const handleChannelClick = (channel) => {
    if (channel === 'CHAT' || channel === 'WHATSAPP') {
      window.open(`https://wa.me/919150781685?text=Hi%20CodeThrive%20team,%20I%20want%20to%20discuss%20a%20project.`, '_blank');
    } else if (channel === 'CALL') {
      window.location.href = `tel:${COMPANY_INFO.phone}`;
    } else if (channel === 'MEET') {
      setIsScheduleOpen(true);
    } else if (channel === 'MAP') {
      window.open(COMPANY_INFO.mapsUrl, '_blank');
    } else if (channel === 'NETWORK') {
      window.open(COMPANY_INFO.socialLinks.linkedin, '_blank');
    }
  };

  return (
    <div className="pt-28 pb-24 min-h-screen bg-gradient-to-br from-[#FFF5F7] via-[#FAF5FF] to-[#FFF8F2] text-[#050B14] relative overflow-hidden select-none">
      
      {/* Background Radial Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pink-200/20 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sky-200/20 blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* TOP HERO BANNER CONTENT (2-Column Grid: Text Left + Contact Banner Image Right) */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-center pt-2">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
            <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Let's Build Something <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-[#9333EA] to-[#E11D48]">
                Extraordinary Together.
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 font-bold leading-normal max-w-xl mx-auto lg:mx-0">
              Have a project in mind or need technical advice? Our engineering team in Coimbatore is ready to collaborate.
            </p>

            {/* 3 Compact Trust Metric Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-0.5">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-emerald-200 shadow-xs text-[11px] font-extrabold text-slate-800">
                <Clock className="w-3 h-3 text-emerald-600 shrink-0" />
                <span>4-Hour Response</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-purple-200 shadow-xs text-[11px] font-extrabold text-slate-800">
                <ShieldCheck className="w-3 h-3 text-purple-600 shrink-0" />
                <span>100% Mutual NDA</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white border border-rose-200 shadow-xs text-[11px] font-extrabold text-slate-800">
                <MapPin className="w-3 h-3 text-rose-500 shrink-0" />
                <span>Coimbatore, India</span>
              </div>
            </div>
          </div>

          {/* Right Column: Branded Contact Banner Image (Fills the right side gap) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-purple-200/90 shadow-2xl group hover:shadow-purple-300/40 transition-all duration-500">
              <img
                src="/contact-hero.jpg"
                alt="CodeThrive Infotech Contact Us"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
        
        {/* ROW 1: QUICK CONNECT BAR (Distinct Purple Border & Rich Icon Colors) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-4">
          
          {/* Left Title Box */}
          <div className="space-y-2 lg:max-w-xs text-center lg:text-left shrink-0">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border-2 border-emerald-300 text-xs font-black uppercase tracking-widest shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>QUICK CONNECT</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-950 font-black leading-relaxed">
              Reach our team in a click — we usually reply within 4 business hours.
            </p>
          </div>

          {/* Right White Rounded Quick Connect Channels Bar (Distinct 2px Border) */}
          <div className="bg-white/95 backdrop-blur-md rounded-[2.2rem] border-2 border-purple-200/90 p-3.5 sm:p-4 shadow-2xl w-full flex-1 space-y-2.5">
            
            {/* 5 Channels Icon Row */}
            <div className="grid grid-cols-5 gap-1.5 text-center">
              
              {/* CHAT */}
              <button
                onClick={() => handleChannelClick('CHAT')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '0s' }}>
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-[#10B981] transition-colors">
                  CHAT
                </span>
              </button>

              {/* CALL (Purple, No Blue) */}
              <button
                onClick={() => handleChannelClick('CALL')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#8B5CF6] hover:bg-[#7C3AED] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '0.8s' }}>
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-[#8B5CF6] transition-colors">
                  CALL
                </span>
              </button>

              {/* MEET */}
              <button
                onClick={() => handleChannelClick('MEET')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#1E293B] hover:bg-[#0F172A] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '1.6s' }}>
                  <Calendar className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-slate-900 transition-colors">
                  MEET
                </span>
              </button>

              {/* MAP */}
              <button
                onClick={() => handleChannelClick('MAP')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#EF4444] hover:bg-[#DC2626] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '2.4s' }}>
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-[#EF4444] transition-colors">
                  MAP
                </span>
              </button>

              {/* NETWORK */}
              <button
                onClick={() => handleChannelClick('NETWORK')}
                className="flex flex-col items-center gap-1 group cursor-pointer"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#06B6D4] hover:bg-[#0891B2] text-white flex items-center justify-center shadow-md transition-transform group-hover:scale-110 animate-float" style={{ animationDelay: '3.2s' }}>
                  <Globe className="w-5 h-5" />
                </div>
                <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase text-slate-950 group-hover:text-[#06B6D4] transition-colors">
                  NETWORK
                </span>
              </button>

            </div>

            {/* Bottom Footer Text */}
            <div className="pt-1.5 border-t border-slate-100 text-center text-[9px] font-black uppercase tracking-widest text-slate-500">
              FAST REPLIES • DIRECT CALLS • EXPERT GUIDANCE
            </div>

          </div>

        </div>

        {/* ROW 2: MAIN BODY GRID (Form Left + 2 Cards Right - Perfectly Aligned Height Matching) */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN: Initiate Project Scope Form (Distinct Emerald Border & Green Button) */}
          <div className="lg:col-span-7 bg-white rounded-[2rem] border-2 border-emerald-300/90 p-4 sm:p-6 lg:p-7 shadow-2xl flex flex-col justify-between h-full space-y-3 sm:space-y-4">
            
            <div>
              <h2 className="font-editorial text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Initiate Project Scope
              </h2>
              <p className="mt-0.5 text-xs lg:text-sm font-bold text-slate-500">
                Average reply time: under 4 business hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2 animate-fade-in my-auto">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto text-xl font-bold shadow-md">
                  ✓
                </div>
                <h3 className="text-lg lg:text-xl font-black text-emerald-950 font-editorial">
                  Inquiry Received!
                </h3>
                <p className="text-xs lg:text-sm font-semibold text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Thank you! Our Engineering Leadership team has received your project details and will get back to you within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3.5">
                
                {/* Row 1: First Name & Last Name (2 Columns) */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-800 block">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-[#F8FAFC] border-2 border-slate-200 rounded-xl p-2 sm:p-2.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 transition shadow-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-800 block">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-[#F8FAFC] border-2 border-slate-200 rounded-xl p-2 sm:p-2.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 transition shadow-xs"
                    />
                  </div>
                </div>

                {/* Row 2: Mobile / Phone Number (Separate Row) */}
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-800 block">
                    Mobile / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 91507 81685"
                    value={formData.mobileNumber}
                    onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                    className="w-full bg-[#F8FAFC] border-2 border-slate-200 rounded-xl p-2 sm:p-2.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 transition shadow-xs"
                  />
                </div>

                {/* Row 3: Work Email & Company Email (2 Columns) */}
                <div className="grid sm:grid-cols-2 gap-2.5 sm:gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-800 block">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@enterprise.com"
                      value={formData.workEmail}
                      onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                      className="w-full bg-[#F8FAFC] border-2 border-slate-200 rounded-xl p-2 sm:p-2.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 transition shadow-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-black text-slate-800 block">
                      Company Email
                    </label>
                    <input
                      type="email"
                      placeholder="contact@company.com"
                      value={formData.companyEmail}
                      onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                      className="w-full bg-[#F8FAFC] border-2 border-slate-200 rounded-xl p-2 sm:p-2.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 transition shadow-xs"
                    />
                  </div>
                </div>

                {/* Row 4: Project Overview */}
                <div className="space-y-1">
                  <label className="text-xs font-black text-slate-800 block">
                    Project Overview & Requirements *
                  </label>
                  <textarea
                    required
                    rows={2.5}
                    placeholder="Describe your current product, target timeline, and key technical goals..."
                    value={formData.projectOverview}
                    onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                    className="w-full bg-[#F8FAFC] border-2 border-slate-200 rounded-xl p-2 sm:p-2.5 text-xs lg:text-sm font-semibold text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white focus:ring-2 focus:ring-emerald-200 transition shadow-xs resize-none"
                  />
                </div>

                {/* Bottom Bar: NDA + Send Inquiry Button (Emerald Green, No Blue) */}
                <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Protected by mutual Non-Disclosure Agreement (NDA).</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 lg:px-8 lg:py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 !text-white font-black text-xs lg:text-sm shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 transition hover:scale-105 cursor-pointer shrink-0"
                  >
                    <Send className="w-4 h-4 !text-white" />
                    <span className="!text-white">Send Inquiry</span>
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* RIGHT COLUMN: 2 Cards (Matching Height Stack) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full gap-4 lg:gap-5">
            
            {/* CARD 1: Book a Consultation (Distinct Purple Border & Warm Pastel Background) */}
            <div className="bg-gradient-to-br from-white via-purple-50/40 to-pink-50/30 rounded-[1.8rem] border-2 border-purple-300 p-4 sm:p-5 lg:p-6 shadow-2xl space-y-2.5 flex flex-col justify-between flex-1">
              <div className="space-y-2.5">
                <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-xl bg-purple-100 border border-purple-200 shadow-xs flex items-center justify-center text-purple-700">
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-purple-700" />
                </div>

                <h3 className="font-editorial text-xl sm:text-2xl lg:text-2xl font-black text-slate-950">
                  Book a Consultation
                </h3>

                <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                  Prefer a real-time discussion? Pick a convenient 30-minute window with our Engineering Leadership team.
                </p>
              </div>

              <button
                onClick={() => setIsScheduleOpen(true)}
                className="w-full py-2.5 lg:py-3 rounded-xl bg-slate-950 hover:bg-slate-900 !text-white font-black text-xs lg:text-sm flex items-center justify-center gap-2 transition hover:scale-[1.02] shadow-md cursor-pointer mt-2"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span className="text-white">Select Date &amp; Time Slot</span>
              </button>
            </div>

            {/* CARD 2: OFFICIAL HEADQUARTERS & CONTACTS (Distinct Warm Amber / Gold Theme) */}
            <div className="bg-gradient-to-br from-white via-amber-50/60 to-orange-50/40 rounded-[1.8rem] border-2 border-amber-300 p-4 sm:p-5 lg:p-6 shadow-2xl space-y-2.5 flex flex-col justify-between flex-1">
              
              <div className="space-y-2.5">
                <div className="text-[10px] font-black tracking-widest text-slate-500 uppercase">
                  OFFICIAL HEADQUARTERS &amp; CONTACTS
                </div>

                {/* Address Item (Interactive Tap-Friendly Card for Mobile & PC View) */}
                <a
                  href={COMPANY_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2.5 lg:p-3 rounded-2xl bg-white border-2 border-amber-200 hover:border-amber-400 transition-all cursor-pointer group active:scale-98 shadow-xs"
                  title="Open Google Maps Location"
                >
                  <div className="flex items-center justify-between gap-2 text-xs lg:text-sm font-black text-slate-950">
                    <div className="flex items-center gap-1.5">
                      <span className="text-amber-500 text-sm">📍</span>
                      <span>Coimbatore Office (HQ)</span>
                    </div>
                    <span className="text-[10px] font-black text-amber-900 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-full flex items-center gap-1 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                      <span>Map</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>

                  <p className="text-xs font-bold text-slate-700 mt-1 leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                </a>

                {/* Email */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-t border-amber-200/80 pt-2">
                  <Mail className="w-4 h-4 text-slate-600 shrink-0" />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-amber-700 transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <Phone className="w-4 h-4 text-slate-600 shrink-0" />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-amber-700 transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={() => handleChannelClick('WHATSAPP')}
                className="w-full py-2.5 lg:py-3 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-950 font-black text-xs lg:text-sm flex items-center justify-center gap-2 transition hover:scale-[1.02] shadow-sm border border-amber-300/80 cursor-pointer mt-2"
              >
                <span>💬 Chat on WhatsApp ({COMPANY_INFO.phone})</span>
              </button>
            </div>

          </div>
        </div>

        {/* ROW 3: FREQUENTLY ASKED QUESTIONS (FAQ Accordion Section) */}
        <div className="pt-10 border-t border-slate-200/80 space-y-8">
          
          {/* FAQ Section Header */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white border border-slate-200 text-[#0284C7] text-xs font-black uppercase tracking-widest shadow-xs">
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
              Got questions? <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#9333EA] to-[#E11D48]">We have answers.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 font-semibold leading-relaxed">
              Everything you need to know about starting a project with CodeThrive Infotech.
            </p>
          </div>

          {/* FAQ Accordion Cards Grid (2 Columns on Desktop with Natural Height Alignment) */}
          <div className="grid md:grid-cols-2 gap-4 items-start max-w-6xl mx-auto">
            {[
              {
                q: "How does CodeThrive Infotech structure project pricing and scope estimation?",
                a: "Every engagement is uniquely scoped based on technical requirements, architecture complexity, and feature roadmap. We provide transparent, itemized fixed-sprint quotes after a free 30-minute discovery session — guaranteeing zero hidden charges, clear milestone deliverables, and predictable execution timelines."
              },
              {
                q: "How quickly can CodeThrive Infotech kick off our development sprint?",
                a: "We can onboard and deploy a dedicated senior engineering pod within 3 to 5 business days following scope alignment and NDA execution. We work in rapid 2-week agile sprints with working staging builds delivered every Friday."
              },
              {
                q: "Do I get 100% full ownership of the source code, design files, and IP?",
                a: "Yes, 100%! Upon milestone completion, full ownership of all source code repositories (GitHub/GitLab), Figma design systems, database schemas, and intellectual property (IP) is legally transferred to your company."
              },
              {
                q: "Do you execute a Non-Disclosure Agreement (NDA) before discussing proprietary ideas?",
                a: "Absolutely. Protecting your confidential business logic and intellectual property is our top priority. We execute a standard mutual Non-Disclosure Agreement (NDA) before reviewing any project specifications or sensitive files."
              },
              {
                q: "Can you integrate custom AI models, OpenAI, or LLMs into our existing web or mobile app?",
                a: "Yes! We specialize in integrating GPT-4o, Anthropic Claude, custom RAG (Retrieval-Augmented Generation) knowledge bases, vector databases (Pinecone/Qdrant), autonomous AI agents, and local open-source models (Llama 3) into existing tech stacks."
              },
              {
                q: "What support and maintenance do you offer after our app or website goes live?",
                a: "We provide 30 days of complimentary post-launch monitoring, warranty, and bug fixes. Afterwards, we offer flexible Monthly Care & SLA plans for continuous 24/7 server monitoring, security patches, feature upgrades, and cloud scaling."
              },
              {
                q: "Can your developers augment our existing in-house engineering team?",
                a: "Definitely! We offer dedicated staff augmentation where our senior full-stack developers, mobile engineers, or AI architects embed directly into your Slack, Jira, and GitHub workflows to accelerate your roadmap."
              },
              {
                q: "How do you manage communication, progress tracking, and staging builds during development?",
                a: "We maintain complete transparency via weekly live video demos, interactive staging environment URLs, real-time Jira/Trello boards, and a dedicated WhatsApp or Slack channel for instant daily communication."
              },
              {
                q: "Which technologies and frameworks do your engineers specialize in?",
                a: "Our core stack includes React 19, Next.js 15, Node.js, Python/Django, Flutter, React Native, Tailwind CSS, PostgreSQL, MongoDB, Redis, AWS Cloud, Docker, and AI/ML integrations."
              },
              {
                q: "What if I only have a high-level idea without detailed technical documentation?",
                a: "That is completely fine! Our solution architects conduct a 1-on-1 Discovery Workshop to map out your user journeys, wireframes, database schema, tech stack recommendation, and a realistic launch roadmap."
              },
              {
                q: "Do you build compliant software for Healthcare, E-Commerce, or FinTech sectors?",
                a: "Yes! We build HIPAA-compliant healthcare portals, PCI-DSS compliant payment gateways for e-commerce, sub-30ms fintech ledger systems, and high-concurrency enterprise SAAS platforms."
              },
              {
                q: "Where is your campus located, and what timezones do your engineering teams support?",
                a: "Our global technology campus is located at Srihari Nivas, Indira Nagar, Sungam, Coimbatore, Tamil Nadu, India. Our engineering pods operate Monday to Saturday, supporting overlapping hours for US, Europe, Middle East, and APAC timezones."
              }
            ].map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className={`${!showAllFaqs && index >= 4 ? 'hidden' : ''} ${!showAllFaqs && index === 3 ? 'hidden md:block' : ''} rounded-2xl border transition-all duration-300 p-5.5 shadow-sm hover:shadow-lg cursor-pointer ${
                    isOpen
                      ? 'bg-gradient-to-br from-sky-50/90 via-white to-purple-50/50 border-sky-500 shadow-sky-100 ring-2 ring-sky-300/50'
                      : 'bg-white border-slate-200/90 hover:border-sky-400 hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <HelpCircle className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-sky-600' : 'text-slate-400'}`} />
                      <h3 className="text-sm font-black text-slate-950 leading-snug">
                        {faq.q}
                      </h3>
                    </div>

                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black shrink-0 transition-transform ${
                      isOpen ? 'bg-sky-500 text-white rotate-45 shadow-sm' : 'bg-slate-100 text-slate-800'
                    }`}>
                      +
                    </div>
                  </div>

                  {isOpen && (
                    <div className="pt-3.5 mt-3 border-t border-sky-100/90 text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed animate-fade-in pl-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button
            type="button"
            onClick={() => setShowAllFaqs((current) => !current)}
            aria-label={showAllFaqs ? 'Show fewer frequently asked questions' : 'Show more frequently asked questions'}
            title={showAllFaqs ? 'Show fewer questions' : 'Show more questions'}
            className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-sky-400 text-sky-600 shadow-lg shadow-sky-200/60 transition-transform duration-300 hover:scale-110 hover:bg-sky-50"
          >
            <span className="absolute inset-0 animate-ping rounded-full border border-sky-300 opacity-40" />
            <ChevronDown className={`relative h-6 w-6 animate-bounce transition-transform duration-300 ${showAllFaqs ? 'rotate-180' : ''}`} />
          </button>

        </div>

      </div>

      {/* Schedule Consultation Modal */}
      {isScheduleOpen && (
        <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
      )}

    </div>
  );
};

export default ContactPage;
