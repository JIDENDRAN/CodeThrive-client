import React, { useState } from 'react';

export const TechStackMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'ai', label: 'AI & Data' },
    { id: 'cloud', label: 'Cloud & DevOps' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' }
  ];

  const technologies = [
    { name: 'PyTorch & TensorFlow', cat: 'ai', desc: 'Custom Deep Learning Models', badge: 'AI/ML' },
    { name: 'LangChain & LlamaIndex', cat: 'ai', desc: 'Agentic Workflows & RAG Pipelines', badge: 'AI/ML' },
    { name: 'Milvus / Pinecone', cat: 'ai', desc: 'Billion-Scale Vector Search', badge: 'AI/ML' },
    { name: 'vLLM & Hugging Face', cat: 'ai', desc: 'Private LLM Inference Optimization', badge: 'AI/ML' },
    { name: 'Kubernetes & Docker', cat: 'cloud', desc: 'Container Orchestration & Spot Mesh', badge: 'DevOps' },
    { name: 'Terraform & OpenTofu', cat: 'cloud', desc: 'Infrastructure as Code (IaC)', badge: 'DevOps' },
    { name: 'AWS & GCP Architecture', cat: 'cloud', desc: 'Multi-Region High Availability', badge: 'DevOps' },
    { name: 'ArgoCD & GitHub Actions', cat: 'cloud', desc: 'Zero-Downtime GitOps CI/CD', badge: 'DevOps' },
    { name: 'React 19 & Next.js 15', cat: 'frontend', desc: 'Server Components & Edge Rendering', badge: 'Frontend' },
    { name: 'TypeScript & Vite', cat: 'frontend', desc: 'Type-Safe High-Performance Tooling', badge: 'Frontend' },
    { name: 'Tailwind CSS & Radix UI', cat: 'frontend', desc: 'Accessible Enterprise Design Systems', badge: 'Frontend' },
    { name: 'Framer Motion', cat: 'frontend', desc: 'Fluid 60fps Micro-Interactions', badge: 'Frontend' },
    { name: 'Go (Golang)', cat: 'backend', desc: 'Ultra-Low Latency & High Concurrency', badge: 'Backend' },
    { name: 'Node.js & Python', cat: 'backend', desc: 'Scalable Microservices & APIs', badge: 'Backend' },
    { name: 'Apache Kafka & RabbitMQ', cat: 'backend', desc: 'Event-Driven Distributed Messaging', badge: 'Backend' },
    { name: 'PostgreSQL & Redis', cat: 'backend', desc: 'ACID Relational & In-Memory Caching', badge: 'Backend' },
    { name: 'React Native', cat: 'mobile', desc: 'Cross-Platform Native Experience', badge: 'Mobile' },
    { name: 'Flutter & Dart', cat: 'mobile', desc: 'High-Performance 120Hz Mobile UI', badge: 'Mobile' },
    { name: 'Swift & Kotlin', cat: 'mobile', desc: 'Native Device Hardware Enclaves', badge: 'Mobile' },
    { name: 'WebRTC & MQTT', cat: 'mobile', desc: 'Sub-100ms Video & IoT Telemetry', badge: 'Mobile' }
  ];

  const filtered = activeCategory === 'all'
    ? technologies
    : technologies.filter((t) => t.cat === activeCategory);

  return (
    <section className="relative py-20 sm:py-24 bg-[#080E1A] border-t border-slate-800 overflow-hidden text-white">
      {/* Background radial glow */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3">
              Modern Tooling Matrix
            </div>
            <h2 className="font-editorial text-3xl sm:text-5xl font-black text-white tracking-tight">
              Engineered with Precision Tools
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-sky-500 text-white shadow-[0_0_15px_rgba(2,132,199,0.5)]'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 transition-all duration-300 shadow-sm group hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-sky-400 px-2 py-0.5 rounded-full bg-sky-950/60 border border-sky-800/50">
                  {item.badge}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                {item.name}
              </div>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackMatrix;
