import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, Check } from 'lucide-react';

export const CostEstimatorModal = ({ isOpen, onClose, onBookCall }) => {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('enterprise-web');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'database', 'dashboard']);

  if (!isOpen) return null;

  const projectTypes = [
    { id: 'enterprise-web', title: 'Web Application & Platform', baseWeeks: 6, baseCost: 15000, desc: 'High-scale React, Next.js, and microservices' },
    { id: 'ai-platform', title: 'AI & Automation Suite', baseWeeks: 8, baseCost: 22000, desc: 'Private LLM fine-tuning, vector DBs & RAG pipelines' },
    { id: 'fintech-system', title: 'Fintech & High-Scale Core', baseWeeks: 10, baseCost: 30000, desc: 'Sub-30ms ledgers, PCI-DSS vault & fraud detection' },
    { id: 'mobile-app', title: 'Cross-Platform Mobile App', baseWeeks: 6, baseCost: 18000, desc: 'iOS & Android Flutter/React Native with offline sync' }
  ];

  const featuresList = [
    { id: 'auth', name: 'SSO & Auth Vault', cost: 2500, weeks: 1 },
    { id: 'database', name: 'High-Throughput Database', cost: 4000, weeks: 1.5 },
    { id: 'dashboard', name: 'Real-time Analytics Dashboard', cost: 3500, weeks: 1 },
    { id: 'ai-rag', name: 'Custom AI / RAG Pipeline', cost: 6000, weeks: 2 },
    { id: 'payments', name: 'PCI-Compliant Billing & Invoicing', cost: 3000, weeks: 1 }
  ];

  const toggleFeature = (id) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const selectedTypeObj = projectTypes.find((p) => p.id === projectType) || projectTypes[0];

  const featureCost = selectedFeatures.reduce((acc, fId) => {
    const f = featuresList.find((item) => item.id === fId);
    return acc + (f ? f.cost : 0);
  }, 0);

  const featureWeeks = selectedFeatures.reduce((acc, fId) => {
    const f = featuresList.find((item) => item.id === fId);
    return acc + (f ? f.weeks : 0);
  }, 0);

  const totalWeeks = selectedTypeObj.baseWeeks + Math.ceil(featureWeeks * 0.7);
  const totalCost = selectedTypeObj.baseCost + featureCost;

  const handleFinish = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    if (onBookCall) onBookCall();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl text-white overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Cost Estimator</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black font-editorial text-white">
            Estimate Your Project Scope
          </h2>
        </div>

        {/* Step 1: Select Type */}
        {step === 1 && (
          <div className="space-y-4">
            <p className="text-sm font-semibold text-slate-300">Choose primary product architecture:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectTypes.map((type) => (
                <div
                  key={type.id}
                  onClick={() => setProjectType(type.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    projectType === type.id
                      ? 'bg-sky-950/40 border-sky-500 shadow-[0_0_20px_rgba(2,132,199,0.25)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-sm text-white">{type.title}</h4>
                    {projectType === type.id && <Check className="w-4 h-4 text-sky-400" />}
                  </div>
                  <p className="text-xs text-slate-400 mt-1">{type.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-4 py-3 rounded-xl font-bold bg-sky-600 hover:bg-sky-500 text-white transition shadow-lg shadow-sky-600/20 cursor-pointer"
            >
              Next: Select Core Capabilities →
            </button>
          </div>
        )}

        {/* Step 2: Features & Summary */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <p className="text-sm font-semibold text-slate-300 mb-2">Toggle optional capabilities:</p>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {featuresList.map((f) => {
                  const isSelected = selectedFeatures.includes(f.id);
                  return (
                    <div
                      key={f.id}
                      onClick={() => toggleFeature(f.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition ${
                        isSelected
                          ? 'bg-sky-950/40 border-sky-500/80 text-white'
                          : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-bold">{f.name}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-slate-300">+${f.cost.toLocaleString()}</span>
                        <div className={`w-4 h-4 rounded border flex items-center justify-center ${isSelected ? 'bg-sky-500 border-sky-500' : 'border-slate-600'}`}>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Estimated Total Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-950/60 to-indigo-950/60 border border-sky-500/30 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-sky-400 uppercase tracking-wide">Estimated Timeline</p>
                <p className="text-xl font-black text-white">{totalWeeks} Weeks</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Budget Range</p>
                <p className="text-2xl font-black text-white">${totalCost.toLocaleString()}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition text-xs cursor-pointer"
              >
                ← Back
              </button>
              <button
                onClick={handleFinish}
                className="w-2/3 py-3 rounded-xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white transition text-xs shadow-lg shadow-sky-600/30 cursor-pointer"
              >
                Confirm & Request Scope Proposal 🎉
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
