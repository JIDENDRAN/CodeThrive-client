import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Hero } from './components/home/Hero';
import { ServicesSection } from './components/home/ServicesSection';
import { ClientsSection } from './components/home/ClientsSection';
import { IndustriesPage } from './components/industries/IndustriesPage';
import { TestimonialsSection } from './components/home/TestimonialsSection';
import { CtaBanner } from './components/home/CtaBanner';
import { AboutPage } from './components/about/AboutPage';
import { ProjectsPage } from './components/projects/ProjectsPage';
import { GalleryPage } from './components/gallery/GalleryPage';
import { InsightsPage } from './components/insights/InsightsPage';
import { ContactPage } from './components/contact/ContactPage';
import { PrivacyPolicyPage } from './components/common/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/common/TermsOfServicePage';
import { ScheduleModal } from './components/contact/ScheduleModal';
import { CookieConsent } from './components/common/CookieConsent';
import { ThriveBot } from './components/common/ThriveBot';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-transparent text-[#050B14] flex flex-col font-sans selection:bg-sky-600 selection:text-white overflow-x-hidden w-full">
      {/* Top Gold Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-grow w-full overflow-x-hidden">
        {activeTab === 'home' && (
          <>
            <Hero setActiveTab={setActiveTab} />
            <ServicesSection setActiveTab={setActiveTab} />
            <ClientsSection />
            <TestimonialsSection />
            <CtaBanner
              setActiveTab={setActiveTab}
              onBookConsultation={() => setIsScheduleOpen(true)}
            />
          </>
        )}

        {activeTab === 'about' && (
          <AboutPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'industries' && (
          <IndustriesPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'projects' && (
          <ProjectsPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'gallery' && (
          <GalleryPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'insights' && (
          <InsightsPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'contact' && (
          <ContactPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'privacy' && (
          <PrivacyPolicyPage setActiveTab={setActiveTab} />
        )}

        {activeTab === 'terms' && (
          <TermsOfServicePage setActiveTab={setActiveTab} />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} activeTab={activeTab} />

      {/* Overlays */}
      <ScheduleModal isOpen={isScheduleOpen} onClose={() => setIsScheduleOpen(false)} />
      <CookieConsent />
      <ThriveBot setActiveTab={setActiveTab} />
    </div>
  );
}
