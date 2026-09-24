'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending message to node...');
    
    // Dynamically resolve backend endpoint
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://portfolio-backend-igx4.onrender.com';

    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('Message delivered successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Transmission error. Try again.');
      }
    } catch {
      setStatus('Server connection offline.');
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-cyber-bg,#05070f)] text-slate-100 relative bg-cyber-grid bg-[size:32px_32px]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[var(--color-cyber-bg,#05070f)]/90 border-b border-[var(--color-cyber-border,#1e293b)]/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-widest text-white">
            EMEKA<span className="text-[var(--color-cyber-cyan,#00f0ff)]">.IO</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm font-semibold tracking-wide text-slate-400">
            <a href="#about" className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">SYSTEM.ABOUT</a>
            <a href="#skills" className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">STACK.MATRIX</a>
            <a href="#projects" className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">PROJECTS</a>
            <a href="#services" className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">DELTAQUANT</a>
            <a href="#contact" className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">CONTACT</a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-[var(--color-cyber-cyan,#00f0ff)] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[var(--color-cyber-card,#0c1021)] border-b border-[var(--color-cyber-border,#1e293b)] px-6 py-4 flex flex-col space-y-4 text-sm font-semibold tracking-wide text-slate-300">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">SYSTEM.ABOUT</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">STACK.MATRIX</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">PROJECTS</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">DELTAQUANT</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors">CONTACT</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-28 pb-16 px-6 relative">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
          
          {/* Profile Image Container */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[var(--color-cyber-cyan,#00f0ff)] to-[var(--color-cyber-purple,#7000ff)] opacity-75 blur transition duration-500 group-hover:opacity-100"></div>
            <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)] flex items-center justify-center">
              <Image
                src="/profile.jpg"
                alt="Profile Image"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 224px, 288px"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-cyber-cyan,#00f0ff)]/30 bg-[var(--color-cyber-cyan,#00f0ff)]/10 text-[var(--color-cyber-cyan,#00f0ff)] text-xs font-mono tracking-widest uppercase">
              Data Scientist &amp; Full-Stack Architect
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Building &amp; Teaching High-Performance <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyber-cyan,#00f0ff)] to-[var(--color-cyber-purple,#7000ff)]">
                Algorithmic &amp; Web Systems
              </span>
            </h1>
            <p className="max-w-2xl text-slate-400 font-light leading-relaxed">
              I am a software developer, data scientist, database administrator, and technical educator. I design scalable full-stack applications, build machine learning pipelines, engineer automated trading bots, and teach Full-Stack Web Development, Data Processing, Advance Mathematics, and Physics.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
              <a href="#projects" className="px-8 py-3.5 rounded-lg font-semibold text-black bg-[var(--color-cyber-cyan,#00f0ff)] hover:bg-cyan-300 transition-all">
                Explore Projects
              </a>
              <a href="#contact" className="px-8 py-3.5 rounded-lg font-semibold text-slate-200 border border-[var(--color-cyber-border,#1e293b)] hover:border-[var(--color-cyber-purple,#7000ff)] bg-[var(--color-cyber-card,#0c1021)] transition-all">
                Initialize Contact
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 border-t border-[var(--color-cyber-border,#1e293b)]/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-12 flex items-center gap-3">
            <span className="text-[var(--color-cyber-cyan,#00f0ff)] font-mono text-xl">01.</span> My Background &amp; Credentials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)]/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[var(--color-cyber-cyan,#00f0ff)] mb-2">Education</h3>
              <p className="font-semibold text-slate-200">B.Tech in Industrial Physics</p>
              <p className="text-sm text-slate-400">Materials Science Option</p>
              <p className="text-xs font-mono text-slate-500 mt-2">Federal University of Technology, Owerri (FUTO) • 2014</p>
            </div>
            <div className="p-6 rounded-xl border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)]/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[var(--color-cyber-purple,#7000ff)] mb-2">Certifications</h3>
              <p className="font-semibold text-slate-200">Applied Data Science Lab</p>
              <p className="text-sm text-slate-400">WorldQuant University (2024)</p>
              <p className="font-semibold text-slate-200 mt-3">Microsoft Power BI Data Analyst</p>
              <p className="text-sm text-slate-400">(2025)</p>
            </div>
            <div className="p-6 rounded-xl border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)]/60 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[var(--color-cyber-green,#00ff66)] mb-2">Education &amp; Instruction</h3>
              <p className="font-semibold text-slate-200">Full-Stack &amp; STEM Instructor</p>
              <p className="text-sm text-slate-400">Gershom Goshen College &amp; Mentorship Programs</p>
              <p className="text-xs font-mono text-slate-500 mt-2">Web Dev, Data Processing &amp; STEM Educator • 2017 - Present</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Matrix */}
      <section id="skills" className="py-24 px-6 border-t border-[var(--color-cyber-border,#1e293b)]/40 bg-[var(--color-cyber-card,#0c1021)]/30 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-12 flex items-center gap-3">
            <span className="text-[var(--color-cyber-cyan,#00f0ff)] font-mono text-xl">02.</span> Tech Stack &amp; Curriculum
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Core Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'HTML5/CSS3'] },
              { title: 'Web Frameworks', items: ['Next.js', 'React', 'FastAPI', 'Tailwind CSS', 'Node.js'] },
              { title: 'Databases & DevOps', items: ['Docker', 'PostgreSQL', 'SQLite', 'MongoDB', 'MySQL', 'Neon Serverless'] },
              { title: 'Data & Instruction', items: ['pandas / NumPy', 'scikit-learn', 'Power BI', 'Full-Stack Training', 'MT5 API', 'Tauri'] }
            ].map((cat, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)]">
                <h3 className="text-sm font-mono text-[var(--color-cyber-cyan,#00f0ff)] uppercase tracking-wider mb-4">{cat.title}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="text-slate-300 text-sm flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cyber-cyan,#00f0ff)]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-24 px-6 border-t border-[var(--color-cyber-border,#1e293b)]/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-12 flex items-center gap-3">
            <span className="text-[var(--color-cyber-cyan,#00f0ff)] font-mono text-xl">03.</span> Featured Systems &amp; Deployments
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Enterprise Bakery Management & Accounting System',
                tech: 'FastAPI • PostgreSQL • Next.js • Tailwind CSS • Docker',
                desc: 'Specialized enterprise management software built with automated recipe-based ingredient depletion, batch production costing, daily POS sales accounting, and profit/loss reporting.'
              },
              {
                title: 'DeltaQuant Offline-Capable POS System',
                tech: 'FastAPI • PostgreSQL • Next.js • Tauri',
                desc: 'Full-stack enterprise desktop point-of-sale software engineered with desktop licensing, payment processing, local data persistence, and Windows desktop packaging.'
              },
              {
                title: 'Automated MT5 & OANDA Algorithmic Bot',
                tech: 'Python • MetaTrader 5 • Twilio WhatsApp API',
                desc: 'Quantitative Forex execution engine monitoring XAU/USD and EUR/USD market structures to execute trades automatically and stream real-time alerts to WhatsApp.'
              },
              {
                title: 'Machine Learning Financial Risk & Prediction Engine',
                tech: 'Python • XGBoost • Random Forest • LSTM',
                desc: 'Built predictive machine learning models for Tesla stock price forecasting (LSTM) and real-time credit card fraud detection using XGBoost and Random Forest algorithms.'
              },
              {
                title: 'Full-Stack Event RSVP & E-Commerce Platforms',
                tech: 'Next.js • Tailwind CSS • FastAPI • Neon PostgreSQL • Docker',
                desc: 'Modern, responsive web applications featuring dynamic user interfaces, RESTful API endpoints, state management, and continuous deployment via Render and Neon.'
              }
            ].map((proj, idx) => (
              <div key={idx} className="p-8 rounded-xl border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)] hover:border-[var(--color-cyber-cyan,#00f0ff)]/50 transition-all group">
                <h3 className="text-2xl font-bold text-white group-hover:text-[var(--color-cyber-cyan,#00f0ff)] transition-colors mb-2">{proj.title}</h3>
                <p className="text-xs font-mono text-[var(--color-cyber-purple,#7000ff)] mb-4">{proj.tech}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DeltaQuant Solutions */}
      <section id="services" className="py-24 px-6 border-t border-[var(--color-cyber-border,#1e293b)]/40 bg-[var(--color-cyber-card,#0c1021)]/30 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="p-10 rounded-2xl border border-[var(--color-cyber-purple,#7000ff)]/40 bg-gradient-to-br from-[var(--color-cyber-card,#0c1021)] via-[var(--color-cyber-bg,#05070f)] to-[var(--color-cyber-card,#0c1021)] relative overflow-hidden">
            <div className="relative z-10">
              <span className="text-xs font-mono text-[var(--color-cyber-purple,#7000ff)] tracking-widest uppercase">Consulting, Mentorship &amp; Training</span>
              <h2 className="text-4xl font-extrabold text-white mt-2 mb-4">DeltaQuant Solutions</h2>
              <p className="max-w-2xl text-slate-300 text-base leading-relaxed mb-6">
                Through DeltaQuant Solutions, I deliver hands-on Full-Stack Web Development training (HTML, CSS, JavaScript, React, FastAPI), 1-on-1 institutional Forex trading mentorship, technical price action analysis on XAU/USD &amp; EUR/USD, and custom algorithmic trading solutions.
              </p>
              <a href="#contact" className="inline-block px-6 py-3 rounded-lg text-sm font-semibold bg-[var(--color-cyber-purple,#7000ff)] hover:bg-purple-600 text-white transition-all">
                Request Training / Mentorship
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 px-6 border-t border-[var(--color-cyber-border,#1e293b)]/40 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">Initialize Communication</h2>
            <p className="text-slate-400 text-sm mt-2">Send a message directly to my backend database server.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)] text-slate-100 focus:border-[var(--color-cyber-cyan,#00f0ff)] focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)] text-slate-100 focus:border-[var(--color-cyber-cyan,#00f0ff)] focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)] text-slate-100 focus:border-[var(--color-cyber-cyan,#00f0ff)] focus:outline-none"
            />
            <textarea
              rows={5}
              placeholder="Your Message..."
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-[var(--color-cyber-border,#1e293b)] bg-[var(--color-cyber-card,#0c1021)] text-slate-100 focus:border-[var(--color-cyber-cyan,#00f0ff)] focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold text-black bg-[var(--color-cyber-cyan,#00f0ff)] hover:bg-cyan-300 transition-all"
            >
              TRANSMIT MESSAGE
            </button>
            {status && <p className="text-center text-sm font-mono text-[var(--color-cyber-cyan,#00f0ff)] mt-4">{status}</p>}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs font-mono text-slate-500 border-t border-[var(--color-cyber-border,#1e293b)]/40">
        &copy; {new Date().getFullYear()} DeltaQuant Solutions. All Rights Reserved. Built with Next.js, Tailwind CSS &amp; FastAPI.
      </footer>
    </div>
  );
}