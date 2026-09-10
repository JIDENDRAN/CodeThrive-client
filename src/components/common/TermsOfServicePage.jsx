import React from 'react';
import { FileText, CheckCircle2, Briefcase, UserCheck, Shield, DollarSign, Lock, AlertTriangle, Scale, ArrowLeft, Mail } from 'lucide-react';

export const TermsOfServicePage = ({ setActiveTab }) => {
  const sections = [
    {
      number: '1',
      title: 'Acceptance of terms',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />,
      content: [
        'By accessing or using the CodeThrive Infotech website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our website or services.'
      ]
    },
    {
      number: '2',
      title: 'Services',
      icon: <Briefcase className="w-5 h-5 text-[#0284C7]" />,
      content: [
        'CodeThrive Infotech provides software development, design, cloud, and consulting services. The specific scope, deliverables, timeline, and pricing of any engagement will be defined in a separate agreement signed by both parties.',
        'We reserve the right to refuse or discontinue service to any client for reasons including non-payment, unlawful activity, or breach of these terms.'
      ]
    },
    {
      number: '3',
      title: 'Client responsibilities',
      icon: <UserCheck className="w-5 h-5 text-purple-500" />,
      content: [
        'Clients are responsible for providing accurate information, timely feedback, required approvals, and lawful access to systems or materials needed for the engagement.',
        'Delays in receiving required inputs may affect delivery dates. We will communicate material changes to scope, timing, or dependencies as soon as reasonably possible.'
      ]
    },
    {
      number: '4',
      title: 'Intellectual property',
      icon: <Shield className="w-5 h-5 text-indigo-500" />,
      content: [
        'Upon full payment of all applicable fees, ownership of custom work product created specifically for a client transfers to that client, as outlined in the project agreement.',
        'CodeThrive retains ownership of pre-existing tools, libraries, frameworks, and methodologies used in the course of delivering services, which are licensed to the client on a perpetual, royalty-free basis.'
      ]
    },
    {
      number: '5',
      title: 'Payment terms',
      icon: <DollarSign className="w-5 h-5 text-amber-500" />,
      content: [
        'Unless otherwise agreed in writing, invoices are due within 30 days of issuance. Late payments may accrue interest at 1.5% per month. We reserve the right to suspend work on overdue accounts.'
      ]
    },
    {
      number: '6',
      title: 'Confidentiality',
      icon: <Lock className="w-5 h-5 text-rose-500" />,
      content: [
        'Both parties agree to keep confidential any proprietary or sensitive information shared during the course of an engagement. This obligation survives termination of any project agreement.'
      ]
    },
    {
      number: '7',
      title: 'Limitation of liability',
      icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
      content: [
        'To the maximum extent permitted by law, CodeThrive Infotech shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the fees paid by the client for the specific project giving rise to the claim.'
      ]
    },
    {
      number: '8',
      title: 'Governing law',
      icon: <Scale className="w-5 h-5 text-teal-500" />,
      content: [
        'These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Coimbatore, Tamil Nadu.'
      ]
    }
  ];

  return (
    <div className="pt-28 pb-20 min-h-screen bg-gradient-to-br from-[#FFFDF9] via-[#FAF6F0] to-[#FFF8F2] text-[#050B14] relative overflow-hidden select-none">
      
      {/* Background Radial Spotlights */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-200/20 blur-[150px] pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-300 text-blue-900 text-[11px] font-black uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5 text-blue-600" />
            <span>Client Engagement Agreement</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Terms of Service
          </h1>

          <p className="text-xs sm:text-sm font-bold text-slate-500">
            Last updated: September 2026 • Governing Rules for CodeThrive Infotech Services
          </p>
        </div>

        {/* 8 Terms Sections */}
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
                {sec.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Legal Support Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#1C1005] via-[#2A1808] to-[#1C1005] text-white space-y-3 shadow-xl">
          <h4 className="font-black text-base text-[#F3D77F] flex items-center gap-2">
            <Mail className="w-4 h-4 text-[#F3D77F]" />
            Questions regarding our Terms of Service?
          </h4>
          <p className="text-xs text-slate-300 font-medium leading-relaxed">
            Contact our legal and project administration desk at{' '}
            <a
              href="mailto:codethriveinfotech@gmail.com"
              className="text-[#F3D77F] font-bold underline underline-offset-2"
            >
              codethriveinfotech@gmail.com
            </a>
            . We are happy to clarify engagement terms before starting your project.
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsOfServicePage;
