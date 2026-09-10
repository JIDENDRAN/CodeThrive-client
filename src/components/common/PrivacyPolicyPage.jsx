import React from 'react';
import { ShieldCheck, Mail, Lock, Eye, Cookie, MessageSquare, Key, Database, RefreshCw, ArrowLeft } from 'lucide-react';

export const PrivacyPolicyPage = ({ setActiveTab }) => {
  const sections = [
    {
      number: '1',
      title: 'Information we collect',
      icon: <Eye className="w-5 h-5 text-sky-500" />,
      content: [
        'We collect information you provide directly to us, such as your name, email address, company, and message when you fill out our contact form or engage our services.',
        'We also collect limited analytics data about how visitors use our website, including pages visited and approximate location, through privacy-respecting analytics tools.'
      ]
    },
    {
      number: '2',
      title: 'How we use your information',
      icon: <Lock className="w-5 h-5 text-indigo-500" />,
      content: [
        'We use the information you provide to respond to your inquiries, deliver and improve our services, and communicate with you about projects and updates.',
        'We do not sell, rent, or trade your personal information to third parties. We may share data with trusted service providers who help us operate our business, under strict confidentiality obligations.'
      ]
    },
    {
      number: '3',
      title: 'Cookies',
      icon: <Cookie className="w-5 h-5 text-amber-500" />,
      content: [
        'Our website uses essential cookies to function properly and optional analytics cookies to understand how visitors use the site. You can disable non-essential cookies in your browser settings at any time.'
      ]
    },
    {
      number: '4',
      title: 'Communications',
      icon: <MessageSquare className="w-5 h-5 text-emerald-500" />,
      content: [
        'If you contact us through email, phone, WhatsApp, SMS, or our website forms, we use the details you provide to respond to your request and coordinate an appropriate follow-up.',
        'You can ask us to stop non-essential communications at any time. Service-related messages may still be sent when they are necessary to support an active engagement.'
      ]
    },
    {
      number: '5',
      title: 'Data security',
      icon: <ShieldCheck className="w-5 h-5 text-rose-500" />,
      content: [
        'We take reasonable technical and organizational measures to protect your information against unauthorized access, alteration, or destruction. All data in transit is encrypted using industry-standard TLS.',
        'Despite our efforts, no method of transmission over the internet is completely secure. We cannot guarantee absolute security but we work hard to protect your data.'
      ]
    },
    {
      number: '6',
      title: 'Your rights',
      icon: <Key className="w-5 h-5 text-purple-500" />,
      content: [
        'You have the right to request access to, correction of, or deletion of your personal data. You may also opt out of marketing communications at any time.',
        'To exercise any of these rights, email us at codethriveinfotech@gmail.com and we will respond within 24 hours.'
      ],
      hasEmailLink: true
    },
    {
      number: '7',
      title: 'Data retention',
      icon: <Database className="w-5 h-5 text-cyan-500" />,
      content: [
        'We retain personal information only for as long as it is reasonably needed to provide services, meet legal and accounting requirements, resolve disputes, and enforce agreements.',
        'When information is no longer required, we securely delete it or anonymize it where practical.'
      ]
    },
    {
      number: '8',
      title: 'Changes to this policy',
      icon: <RefreshCw className="w-5 h-5 text-teal-500" />,
      content: [
        'We may update this Privacy Policy from time to time. We will post any changes on this page and update the "last updated" date above. We encourage you to review this page periodically.'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#FFF8F2] text-[#050B14] relative overflow-hidden select-none">
      
      {/* Background Radial Spotlights */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-200/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-200/20 blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Back Button */}
        {setActiveTab && (
          <button
            onClick={() => setActiveTab('home')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-black text-slate-800 hover:bg-slate-50 transition cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </button>
        )}

        {/* Header Title */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-[11px] font-black uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Legal &amp; Data Transparency</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm font-bold text-slate-500">
            Last updated: September 2026 • CodeThrive Infotech Confidentiality Commitment
          </p>
        </div>

        {/* 8 Privacy Sections */}
        <div className="space-y-5">
          {sections.map((sec) => (
            <div
              key={sec.number}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow space-y-3"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  {sec.icon}
                </div>
                <h3 className="font-black text-base sm:text-lg text-slate-950">
                  {sec.number}. {sec.title}
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm font-medium leading-relaxed text-slate-700 pl-11">
                {sec.content.map((paragraph, pIdx) => {
                  if (sec.hasEmailLink && paragraph.includes('codethriveinfotech@gmail.com')) {
                    const parts = paragraph.split('codethriveinfotech@gmail.com');
                    return (
                      <p key={pIdx}>
                        {parts[0]}
                        <a
                          href="mailto:codethriveinfotech@gmail.com"
                          className="font-black text-[#0284C7] hover:underline underline-offset-2"
                        >
                          codethriveinfotech@gmail.com
                        </a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={pIdx}>{paragraph}</p>;
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Contact Footer Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1C1005] via-[#2A1808] to-[#1C1005] text-white space-y-3 shadow-xl">
          <h4 className="font-black text-base text-[#F3D77F] flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#F3D77F]" />
            Have questions about our privacy practices?
          </h4>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            Reach out directly to our privacy officer at{' '}
            <a
              href="mailto:codethriveinfotech@gmail.com"
              className="text-[#F3D77F] font-bold underline underline-offset-2"
            >
              codethriveinfotech@gmail.com
            </a>
            . We answer all data inquiries within 24 hours.
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
