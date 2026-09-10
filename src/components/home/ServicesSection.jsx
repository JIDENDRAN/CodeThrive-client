import React, { useState } from 'react';
import { ArrowRight, LayoutGrid, Smartphone, Cpu, Shield, Sparkles, Layout, X, CheckCircle2, Rocket } from 'lucide-react';

export const ServicesSection = ({ setActiveTab }) => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'web-dev',
      title: 'Website Development & Web Apps',
      description: 'Ultra-fast, responsive, modern web platforms engineered with React, Next.js, and custom CMS architecture.',
      elaborateContent: 'We construct high-concurrency web platforms, SaaS portals, e-commerce engines, and corporate websites. From zero-to-one architectural scoping to edge-rendered CDN deployments, we focus on sub-second page load times, SEO optimization, and seamless user experiences.',
      bullets: [
        'Mobile-First Responsive Design',
        'Interactive UI/UX & Dynamic Galleries',
        'Custom CMS & Headless Architecture',
        'SEO & Performance Audit Optimization'
      ],
      deliverables: [
        'Production React / Next.js Source Code',
        'Headless CMS Admin Control Panel',
        'Global CDN Setup & Domain SSL Configuration',
        'Speed & Security Optimization Audit'
      ],
      tags: ['React 19', 'Next.js 15', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
      icon: <LayoutGrid className="w-4 h-4 text-white" />,
      iconBg: 'bg-purple-600',
      titleColor: 'text-[#D946EF]',
      btnColor: 'bg-slate-950 text-white'
    },
    {
      id: 'mobile-builder',
      title: 'Mobile App Builder & Engineering',
      description: 'High-performance cross-platform mobile apps for iOS & Android with Flutter, React Native, and native capabilities.',
      elaborateContent: 'We engineer intuitive, battery-efficient, and pixel-perfect mobile applications for iOS and Android. Using Flutter and React Native, our mobile engineering pods build offline-first sync engines, biometric security vaults, and seamless in-app payment flows.',
      bullets: [
        'Cross-Platform iOS & Android',
        'Offline-First Sync Engine',
        'Biometric Auth & Security Vault',
        'Push Notifications & Telemetry'
      ],
      deliverables: [
        'iOS App Store & Google Play Store Submissions',
        'Cross-Platform Mobile Codebase',
        'Backend REST / GraphQL API Services',
        'Admin Monitoring & Analytics Console'
      ],
      tags: ['Flutter', 'React Native', 'Swift (iOS)', 'Kotlin (Android)', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
      icon: <Smartphone className="w-4 h-4 text-white" />,
      iconBg: 'bg-pink-600',
      titleColor: 'text-[#0284C7]',
      btnColor: 'bg-[#0284C7] text-white'
    },
    {
      id: 'ai-systems',
      title: 'AI & Intelligent Systems',
      description: 'Custom AI workflows, automated chatbots, smart search, and predictive analytics tailored for business growth.',
      elaborateContent: 'Empower your company with domain-tuned AI models and retrieval-augmented generation (RAG) knowledge bases. We design task-oriented AI assistants, document ingestion pipelines, and automated business workflows that reduce manual overhead by up to 80%.',
      bullets: [
        'Autonomous AI Customer Assistants',
        'Automated Document Ingestion & RAG',
        'Private Knowledge Base Vector Search',
        'Predictive Data Analytics Models'
      ],
      deliverables: [
        'Fine-Tuned AI Model Weights & APIs',
        'RAG Vector Database Infrastructure',
        'Interactive AI Assistant Chat Widget',
        'AI Data Privacy & Security Protocols'
      ],
      tags: ['Python', 'LangChain', 'PyTorch', 'OpenAI API', 'Vector DBs', 'FastAPI'],
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
      icon: <Cpu className="w-4 h-4 text-white" />,
      iconBg: 'bg-purple-600',
      titleColor: 'text-[#9333EA]',
      btnColor: 'bg-slate-950 text-white'
    },
    {
      id: 'support-maintenance',
      title: 'Dedicated Business Support & Maintenance',
      description: '24/7 technical assistance, cloud maintenance, server optimization, bug fixes, and continuous feature updates.',
      elaborateContent: 'Keep your digital systems running at peak performance with dedicated 24/7 engineering pods. We provide proactive security patch management, automated database backups, zero-downtime server deployments, and continuous feature development sprints.',
      bullets: [
        '24/7 SLA Uptime Guarantee',
        'Proactive Security Patches & Backups',
        'Zero-Downtime Server Maintenance',
        'Dedicated Senior Engineering Support'
      ],
      deliverables: [
        '24/7 SLA Technical Escalation Line',
        'Monthly Security & Health Audit Reports',
        'Automated Offsite Database Backups',
        'Continuous Agile Feature Deployments'
      ],
      tags: ['AWS', 'Google Cloud (GCP)', 'Docker', 'Kubernetes', 'Terraform'],
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80',
      icon: <Shield className="w-4 h-4 text-white" />,
      iconBg: 'bg-purple-600',
      titleColor: 'text-[#9333EA]',
      btnColor: 'bg-slate-950 text-white'
    },
    {
      id: 'crm-erp',
      title: 'Custom CRM & ERP Solutions',
      description: 'Tailored enterprise software to automate operations, manage inventory, streamline billing, and elevate HR.',
      elaborateContent: 'Replace clunky spreadsheets and fragmented tools with a unified custom CRM & ERP ecosystem. Our enterprise software automates order tracking, inventory synchronization, invoicing, employee payroll, and executive financial dashboards.',
      bullets: [
        'Role-Based Access Control (RBAC)',
        'Real-Time Stock & Inventory Sync',
        'Automated Invoicing & Tax Ledgers',
        'Executive Analytics & BI Consoles'
      ],
      deliverables: [
        'Custom Web & Mobile ERP Suite',
        'Multi-Warehouse Inventory Control',
        'Third-Party Payment & Accounting Sync',
        'Comprehensive User Permission Vault'
      ],
      tags: ['PostgreSQL', 'Node.js', 'React', 'Redis', 'Docker'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
      icon: <Sparkles className="w-4 h-4 text-white" />,
      iconBg: 'bg-pink-600',
      titleColor: 'text-[#C026D3]',
      btnColor: 'bg-slate-950 text-white'
    },
    {
      id: 'ui-ux',
      title: 'UI/UX & Digital Product Design',
      description: 'Modern brand identities, interactive Figma prototypes, and conversion-optimized interfaces that captivate customers.',
      elaborateContent: 'We craft human-centric UI/UX design systems and brand identities that turn casual visitors into loyal users. Through wireframing, interactive Figma prototypes, and user testing, we design interfaces optimized for high conversion rates.',
      bullets: [
        'High-Fidelity Interactive Prototypes',
        'Responsive Cross-Device Layouts',
        'Comprehensive Brand Design Systems',
        'Conversion Rate Optimization (CRO)'
      ],
      deliverables: [
        'Complete Figma Design Files & Assets',
        'Interactive Clickable Prototypes',
        'UI Component Token Design System',
        'UX Research & User Journey Maps'
      ],
      tags: ['Figma', 'Adobe XD', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80',
      icon: <Layout className="w-4 h-4 text-white" />,
      iconBg: 'bg-purple-600',
      titleColor: 'text-[#9333EA]',
      btnColor: 'bg-slate-950 text-white'
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleStartProject = () => {
    setSelectedService(null);
    if (setActiveTab) setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 sm:py-28 text-slate-950 relative overflow-hidden">
      
      {/* Background High-Res Skyscraper Office Image with Crisp Lighting & Subtle Contrast Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/services-bg.jpg"
          alt="Skyscraper Executive Office Background"
          className="w-full h-full object-cover object-center transform scale-102 filter brightness-[1.02] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/30 to-white/70 backdrop-blur-[0.3px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Top Header Section */}
        <div>
          {/* SERVICES & EXPERTISE Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/90 text-[#0284C7] text-[10px] font-black tracking-widest uppercase border border-sky-300/80 shadow-lg backdrop-blur-md mb-4">
            <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
            <span>SERVICES & EXPERTISE</span>
          </div>

          {/* Headline */}
          <h2 className="font-editorial text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
            Crafting software with <span className="text-[#0284c7]">deliberate</span> <br />
            <span className="text-[#0284c7]">simplicity & power.</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 max-w-3xl text-sm sm:text-base font-black leading-relaxed text-slate-950">
            We work across the entire product lifecycle—from zero-to-one architectural scoping to high-concurrency cloud infrastructure and AI integration.
          </p>
        </div>

        {/* 6 Services Cards Grid (Glassmorphic Floating Cards over High-Res Skyscraper View) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7">
          {services.map((s) => (
            <div
              key={s.id}
              onClick={() => handleServiceClick(s)}
              className="group bg-white/95 sm:bg-white/90 backdrop-blur-md hover:bg-white rounded-2xl sm:rounded-3xl border-2 border-slate-200/90 hover:border-sky-400 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 overflow-hidden"
            >
              <div>
                
                {/* Image & Top Left Icon Badge (Compact Height on Mobile) */}
                <div className="relative h-20 sm:h-40 w-full overflow-hidden bg-slate-100">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-1.5 left-1.5 sm:top-3 sm:left-3 z-10">
                    <div className={`w-5 h-5 sm:w-7 sm:h-7 rounded-md sm:rounded-lg ${s.iconBg} flex items-center justify-center shadow-md`}>
                      {s.icon}
                    </div>
                  </div>
                </div>

                {/* Card Content Body (Dark Black Text Content) */}
                <div className="p-2 sm:p-5 space-y-1 sm:space-y-2.5">
                  
                  <h3 className={`text-[11px] sm:text-lg font-black font-editorial tracking-tight leading-tight ${s.titleColor}`}>
                    {s.title}
                  </h3>

                  <p className="text-[9.5px] sm:text-xs text-black font-bold sm:font-extrabold leading-tight line-clamp-2">
                    {s.description}
                  </p>

                  {/* Bullet points hidden on mobile to keep cards ultra minimal */}
                  <div className="hidden sm:block space-y-1 pt-0.5">
                    {s.bullets.slice(0, 2).map((b, idx) => (
                      <div key={idx} className="flex items-center gap-1 text-xs font-black text-black truncate">
                        <span className="text-sky-600 font-black">•</span>
                        <span className="truncate">{b}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>

              {/* Bottom Card Footer Bar (Compact Mobile Padding & Single-Row Alignment) */}
              <div className="px-2.5 sm:px-4 pb-2.5 sm:pb-4 pt-1.5 sm:pt-2.5 flex items-center justify-between gap-1 border-t border-slate-100 min-h-[38px] sm:min-h-[44px]">
                
                <div className="flex items-center gap-1 flex-nowrap overflow-hidden">
                  {s.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 sm:px-2.5 py-0.5 rounded-full bg-slate-200/90 text-black text-[8.5px] sm:text-[10px] font-black border border-slate-400 truncate max-w-[50px] sm:max-w-none shrink-0"
                    >
                      {tag}
                    </span>
                  ))}
                  {s.tags.length > 2 && (
                    <span className="px-1.5 py-0.5 rounded-full bg-slate-200/90 text-black text-[8.5px] sm:text-[10px] font-black border border-slate-400 shrink-0">
                      +{s.tags.length - 2}
                    </span>
                  )}
                </div>

                <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${s.btnColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md ml-auto`}>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Elaborate Content Modal Dialog */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-10 relative space-y-6">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badge & Title */}
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-black uppercase">
                <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                <span>CodeThrive Service Capability</span>
              </div>

              <h2 className="font-editorial text-3xl sm:text-5xl font-black text-slate-950 leading-tight">
                {selectedService.title}
              </h2>
            </div>

            {/* Hero Image Showcase */}
            <div className="rounded-2xl overflow-hidden h-64 sm:h-80 w-full bg-slate-900 shadow-lg relative">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Elaborate Description Paragraph */}
            <div className="space-y-3">
              <h3 className="text-lg font-black font-editorial text-slate-950">
                Detailed Scope & Architectural Scoping
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-semibold">
                {selectedService.elaborateContent}
              </p>
            </div>

            {/* Features & Key Capabilities Grid */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-black font-editorial text-slate-950">
                Key Features Included
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedService.bullets.map((b, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architectural Deliverables */}
            <div className="space-y-3 pt-2">
              <h3 className="text-lg font-black font-editorial text-slate-950">
                Production Deliverables
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {selectedService.deliverables.map((d, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <Rocket className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-3 pt-2">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                Technologies & Tools Used:
              </h3>
              <div className="flex flex-wrap gap-2">
                {selectedService.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons Footer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleStartProject}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-sky-600 hover:bg-sky-700 text-white font-black text-xs tracking-wide shadow-lg shadow-sky-200 transition hover:scale-105 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Book Project Scoping Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition cursor-pointer"
              >
                Close Overview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ServicesSection;
