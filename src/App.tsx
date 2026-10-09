import { useState, useEffect } from 'react'
import './index.css'

// ============================================
// ICONS (inline SVG components)
// ============================================
const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
)

const IconArrowUpRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 7h10v10"/><path d="M7 17 17 7"/>
  </svg>
)

const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
  </svg>
)

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
  </svg>
)

const IconSmartphone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>
  </svg>
)

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12a9 3 0 0 0 18 0"/>
  </svg>
)

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/>
  </svg>
)

const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
  </svg>
)

const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const IconLinkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
)

const IconGithub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
)

const IconPhone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

// ============================================
// DATA
// ============================================
const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    icon: <IconGlobe />,
    name: 'Websites & Web Apps',
    description: 'Building responsive, fast, and SEO-optimized web platforms on modern architectures for maximum speed and scale.',
  },
  {
    icon: <IconCode />,
    name: 'Frontend Development',
    description: 'Crafting pixel-perfect, accessible, and highly interactive UIs using React, TypeScript, and modern toolchains.',
  },
  {
    icon: <IconDatabase />,
    name: 'Backend & APIs',
    description: 'Designing secure server-side systems, RESTful and GraphQL APIs, and scalable database architectures.',
  },
  {
    icon: <IconSmartphone />,
    name: 'Mobile Development',
    description: 'Engineering performant cross-platform iOS and Android apps using React Native with native-feel interactions.',
  },
]

const works = [
  {
    emoji: '🖥️',
    emojiColor: 'linear-gradient(135deg, #dbeafe, #bfdbfe)',
    title: 'Trusted.Techs — Expert Tech Support in Cebu',
    description: 'A professional tech support and IT solutions website for Cebu-based clients. Features 24/7 repair services, cybersecurity solutions, data recovery, and same-day service by certified technicians.',
    tags: ['React', 'Tailwind CSS', 'Vite', 'Vercel'],
    featured: true,
    link: 'https://trusted-techs.vercel.app/',
  },
  {
    emoji: '💰',
    emojiColor: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
    title: 'PennyTrack — Personal Expense Tracker & Budget Management',
    description: 'A full-stack personal finance web app to track income, record expenses, manage budgets, and visualize spending habits through interactive analytics. Supports Philippine Peso (₱) and multi-currency tracking.',
    tags: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    link: 'https://penny-track-wine.vercel.app/',
  },
]

const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vue.js'],
  Backend: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'],
  Mobile: ['React Native', 'Expo', 'iOS', 'Android'],
  DevOps: ['Docker', 'AWS', 'CI/CD', 'Linux', 'Git'],
}

const experience = [
  {
    date: '2023 — 2025',
    role: 'Graphic Designer',
    company: 'RS Design',
    description: 'Designed custom graphics and visual assets tailored to client requirements, utilizing Adobe Photoshop for precision layouts and high-quality final exports.',
  },
  {
    date: '2020 — 2022',
    role: 'Web Designer',
    company: 'J3 Design',
    description: 'Designed and deployed responsive, user-friendly WordPress web pages using Elementor and page-building tools, ensuring visual consistency and performance across mobile, tablet, and desktop devices.',
  },
]

// ============================================
// COMPONENTS
// ============================================

function Navbar({ onContactClick }: { onContactClick: () => void }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setDrawerOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="navbar"
        style={{ boxShadow: scrolled ? '0 1px 12px rgba(0,0,0,0.06)' : 'none' }}
      >
        <div className="navbar-inner">
          <a className="navbar-logo" href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            Japhet<span>.dev</span>
          </a>

          <nav className="navbar-nav" aria-label="Main navigation">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar-cta">
            <button
              className="navbar-talk"
              onClick={onContactClick}
              id="navbar-lets-talk-btn"
              aria-label="Open contact section"
            >
              Let's Talk
              <IconArrowUpRight />
            </button>
          </div>

          <button
            className="navbar-mobile-btn"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            id="navbar-mobile-menu-btn"
          >
            <IconMenu />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`} aria-hidden={!drawerOpen}>
        <div className="mobile-drawer-overlay" onClick={() => setDrawerOpen(false)} />
        <div className="mobile-drawer-panel" role="dialog" aria-label="Navigation menu">
          <div className="mobile-drawer-header">
            <span className="navbar-logo">Japhet<span style={{ color: 'var(--fg-muted)' }}>.dev</span></span>
            <button className="mobile-drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Close menu">
              <IconX />
            </button>
          </div>
          <nav className="mobile-drawer-nav">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => { setDrawerOpen(false); onContactClick() }}>
            Let's Talk <IconArrowRight />
          </button>
        </div>
      </div>
    </>
  )
}

function HeroSection({ onContactClick }: { onContactClick: () => void }) {
  return (
    <section className="hero-section section-wrapper" id="hero" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-grid">
          {/* Content */}
          <div className="hero-content">
            <div className="badge animate-fade-in-up" role="status" aria-live="polite">
              <span className="badge-dot" aria-hidden="true" />
              Open to opportunities & collaborations
            </div>

            <div className="animate-fade-in-up delay-1">
              <h1 id="hero-heading" className="hero-heading">
                Hi, I'm Japhet Paler.<br />
                Full-Stack Developer.
              </h1>
            </div>

            <p className="hero-subtext animate-fade-in-up delay-2">
              Engineering scalable software — from web and mobile applications
              to backend infrastructure and AI-powered solutions.
            </p>

            <div className="hero-actions animate-fade-in-up delay-3">
              <button
                className="btn btn-primary"
                onClick={onContactClick}
                id="hero-lets-talk-btn"
                aria-label="Go to contact section"
              >
                Let's talk <IconArrowRight />
              </button>
              <a
                className="btn btn-secondary"
                href="#works"
                id="hero-view-work-btn"
                onClick={e => { e.preventDefault(); document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                View my work
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual animate-fade-in-up delay-2">
            <div style={{ position: 'relative', width: '100%', maxWidth: 460 }}>
              <div className="browser-mockup">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span className="browser-dot red" />
                    <span className="browser-dot yellow" />
                    <span className="browser-dot green" />
                  </div>
                  <div className="browser-url">japhet.dev/projects</div>
                  <div style={{ width: 40 }} />
                </div>
                <div className="browser-body">
                  <div className="code-window" aria-label="Code snippet preview">
                    {[
                      { num: '1', content: <><span className="code-comment">// Building the future, one commit at a time</span></> },
                      { num: '2', content: null },
                      { num: '3', content: <><span className="code-kw">const</span> <span className="code-var">developer</span> <span className="code-op">=</span> {'{'}</> },
                      { num: '4', content: <>&nbsp;&nbsp;<span className="code-str">name</span>: <span className="code-str">"Japhet Paler"</span>,</> },
                      { num: '5', content: <>&nbsp;&nbsp;<span className="code-str">role</span>: <span className="code-str">"Full-Stack Developer"</span>,</> },
                      { num: '6', content: <>&nbsp;&nbsp;<span className="code-str">stack</span>: [<span className="code-str">"React"</span>, <span className="code-str">"Node"</span>, <span className="code-str">"TypeScript"</span>],</> },
                      { num: '7', content: <>&nbsp;&nbsp;<span className="code-fn">available</span>: <span className="code-kw">true</span>,</> },
                      { num: '8', content: <>{'}'}</> },
                      { num: '9', content: null },
                      { num: '10', content: <><span className="code-fn">console</span>.<span className="code-fn">log</span>(<span className="code-str">"Let's build something great!"</span>)</> },
                    ].map((line, i) => (
                      <div key={i} className="code-line">
                        <span className="code-num">{line.num}</span>
                        <span>{line.content}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="hero-float-card" aria-label="Portfolio statistics">
                <div className="hero-float-card-label">At a glance</div>
                <div className="hero-float-card-stats">
                  <div className="hero-stat">
                    <span className="hero-stat-value">3+</span>
                    <span className="hero-stat-label">Years exp.</span>
                  </div>
                  <div className="hero-stat">
                    <span className="hero-stat-value">20+</span>
                    <span className="hero-stat-label">Projects</span>
                  </div>
                  <div className="hero-stat">
                    <span className="hero-stat-value">15+</span>
                    <span className="hero-stat-label">Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I Can Do mini-strip */}
        <div className="animate-fade-in-up delay-4" style={{ marginTop: 40, paddingTop: 32, borderTop: '1px dashed var(--border-dashed)' }}>
          <span className="label" style={{ marginBottom: 20, display: 'block' }}>Tech I Work With</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'React Native', 'PostgreSQL', 'Docker', 'AWS'].map(tech => (
              <span key={tech} className="skill-chip">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="services-section section-wrapper" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">What I Can Do</span>
          <h2 id="services-heading" className="section-title">Services & Expertise</h2>
          <p className="section-description">
            From concept to deployment, I deliver end-to-end solutions that are fast, reliable, and built to scale.
          </p>
        </div>

        <div className="services-grid" role="list">
          {services.map((service, i) => (
            <div
              key={i}
              className="service-card reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
              role="listitem"
            >
              <div className="service-icon" aria-hidden="true">{service.icon}</div>
              <div>
                <div className="service-name">{service.name}</div>
                <p className="service-description" style={{ marginTop: 8 }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorksSection() {
  return (
    <section className="works-section section-wrapper" id="works" aria-labelledby="works-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Selected Works</span>
          <h2 id="works-heading" className="section-title">Recent Projects</h2>
          <p className="section-description">
            A curated selection of projects I've built — spanning SaaS, e-commerce, mobile, and AI.
          </p>
        </div>

        <div className="works-grid" role="list">
          {works.map((work, i) => (
            <article
              key={i}
              className={`work-card reveal ${work.featured ? 'featured' : ''}`}
              role="listitem"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => work.link !== '#' && window.open(work.link, '_blank')}
            >
              <div className="work-card-header">
                <div
                  className="work-card-icon"
                  style={{ background: work.emojiColor }}
                  aria-hidden="true"
                >
                  {work.emoji}
                </div>
                <div className="work-card-arrow" aria-label="View project">
                  <IconArrowUpRight />
                </div>
              </div>
              <h3 className="work-card-title">{work.title}</h3>
              <p className="work-card-description">{work.description}</p>
              <div className="work-card-tags" aria-label="Technologies used">
                {work.tags.map(tag => (
                  <span key={tag} className="work-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section section-wrapper" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">About</span>
          <h2 id="about-heading" className="section-title">Who I Am</h2>
        </div>

        <div className="about-grid">
          {/* Left: Bio + Skills */}
          <div className="about-content reveal">
            <p className="about-text">
              I'm a passionate Full-Stack Developer based in Cebu, Philippines with{' '}
              <strong style={{ color: 'var(--fg)' }}>3+ years of experience</strong> building
              production-grade web and mobile applications for startups and enterprises worldwide.
            </p>
            <p className="about-text">
              I care deeply about clean code, great developer experience, and shipping products that
              make a real impact. When I'm not coding, I'm exploring new technologies, contributing
              to open source, or hiking local trails.
            </p>

            <div style={{ borderTop: '1px dashed var(--border-dashed)', paddingTop: 24, marginTop: 4 }}>
              <div className="about-skills">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="skills-category">
                    <span className="skills-category-label">{category}</span>
                    <div className="skills-list" role="list" aria-label={`${category} skills`}>
                      {items.map(skill => (
                        <span key={skill} className="skill-chip" role="listitem">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Experience Timeline */}
          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            <span className="label" style={{ marginBottom: 24, display: 'block' }}>Experience</span>
            <div className="experience-list" role="list">
              {experience.map((exp, i) => (
                <div key={i} className="experience-item" role="listitem">
                  <div className="exp-date">{exp.date}</div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-company">{exp.company}</div>
                  <p className="exp-description">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [toast, setToast] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Show toast
    setToast(true)
    setTimeout(() => setToast(false), 3500)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact-section section-wrapper" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Contact</span>
          <h2 id="contact-heading" className="section-title">Let's Work Together</h2>
        </div>

        <div className="contact-grid">
          {/* Info */}
          <div className="contact-info reveal">
            <p className="contact-tagline">
              Have a project in mind?<br />
              Let's make it happen.
            </p>
            <p className="contact-desc">
              I'm open to full-time roles, freelance projects, and interesting collaborations.
              Drop me a message and I'll get back to you within 24 hours.
            </p>

            <div className="contact-links">
              <a
                href="mailto:palerjaphet@gmail.com"
                className="contact-link"
                id="contact-email-link"
                aria-label="Send email to Japhet Paler"
              >
                <IconMail />
                palerjaphet@gmail.com
                <span className="contact-link-arrow" aria-hidden="true"><IconArrowRight /></span>
              </a>
              <a
                href="tel:+639683171104"
                className="contact-link"
                id="contact-phone-link"
                aria-label="Call Japhet Paler"
              >
                <IconPhone />
                +63 968 317 1104
                <span className="contact-link-arrow" aria-hidden="true"><IconArrowRight /></span>
              </a>
              <a
                href="https://www.linkedin.com/in/japhet-paler-856833298"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-linkedin-link"
                aria-label="Visit Japhet Paler's LinkedIn profile"
              >
                <IconLinkedin />
                linkedin.com/in/japhet-paler
                <span className="contact-link-arrow" aria-hidden="true"><IconArrowRight /></span>
              </a>
              <a
                href="https://github.com/palerJP"
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
                id="contact-github-link"
                aria-label="Visit Japhet Paler's GitHub profile"
              >
                <IconGithub />
                github.com/palerJP
                <span className="contact-link-arrow" aria-hidden="true"><IconArrowRight /></span>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ animationDelay: '0.15s' }}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    className="form-input"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    className="form-input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  className="form-input"
                  type="text"
                  placeholder="Project inquiry, collaboration..."
                  value={form.subject}
                  onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary form-submit"
                id="contact-submit-btn"
              >
                Send Message <IconArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Toast notification */}
      <div
        className={`toast ${toast ? 'show' : ''}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        ✓ Message sent! I'll get back to you soon.
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer section-wrapper">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copy">
            © {new Date().getFullYear()} Japhet Paler. All rights reserved.
          </span>
          <div className="footer-links">
            <a
              href="https://github.com/palerJP"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-github-link"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/japhet-paler-856833298"
              className="footer-link"
              target="_blank"
              rel="noopener noreferrer"
              id="footer-linkedin-link"
            >
              LinkedIn
            </a>
            <a
              href="mailto:palerjaphet@gmail.com"
              className="footer-link"
              id="footer-email-link"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============================================
// SCROLL REVEAL HOOK
// ============================================
function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ============================================
// APP
// ============================================
function App() {
  useScrollReveal()

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar onContactClick={scrollToContact} />
      <main>
        <HeroSection onContactClick={scrollToContact} />
        <ServicesSection />
        <WorksSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
