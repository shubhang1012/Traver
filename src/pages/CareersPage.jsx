import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CareersPage.css';

const JOBS = [
  {
    id: 1,
    title: 'Software Engineer',
    team: 'Engineering',
    type: 'Remote · Full-time',
    location: 'Anywhere in the world',
    description:
      'Help us architect and ship the core Traver platform — from real-time matching algorithms to collaborative trip planning tools. You\'ll work across our backend services, API layer, and web app.',
    requirements: [
      '3+ years of full-stack or backend experience',
      'Proficiency in Node.js, TypeScript, or Python',
      'Experience with real-time systems (WebSockets, Firebase, or similar)',
      'Strong database design skills (PostgreSQL, Redis)',
      'A passion for building things people actually use',
    ],
    nice: ['Experience with travel or social apps', 'Background in recommendation systems'],
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    team: 'Design',
    type: 'Remote · Full-time',
    location: 'Anywhere in the world',
    description:
      'Own the end-to-end design of Traver — from the first onboarding screen to the moment two strangers plan their first trip together. You\'ll shape how millions of people experience spontaneous connection.',
    requirements: [
      '3+ years of product design experience',
      'Expert Figma skills with a polished portfolio',
      'Strong systems thinking — design tokens, component libraries, scalability',
      'Deep empathy for users and a love of user research',
      'Ability to move fast without compromising quality',
    ],
    nice: ['Motion design chops', 'Experience designing for mobile-first products'],
  },
  {
    id: 3,
    title: 'Growth Marketer',
    team: 'Growth',
    type: 'Remote · Part-time',
    location: 'Anywhere in the world',
    description:
      'Drive Traver\'s early user acquisition through creative, data-driven campaigns. You\'ll experiment across channels — social, content, referrals, and partnerships — to find what resonates with the next generation of travellers.',
    requirements: [
      '2+ years of growth or digital marketing experience',
      'Comfort running A/B tests and analysing funnel data',
      'Strong copywriting and storytelling instincts',
      'Experience with social media campaigns and community building',
    ],
    nice: ['Background in travel, lifestyle, or consumer apps', 'Influencer or creator marketing experience'],
  },
  {
    id: 4,
    title: 'Community Manager',
    team: 'Community',
    type: 'Remote · Full-time',
    location: 'Anywhere in the world',
    description:
      'Be the voice and soul of Traver\'s community. You\'ll manage our social channels, engage with early users, run community events, and create the kind of belonging that makes people recommend Traver to every friend planning a trip.',
    requirements: [
      '2+ years of community management or social media experience',
      'Excellent written communication skills',
      'Genuine enthusiasm for travel and human connection',
      'Comfortable with analytics and community health metrics',
    ],
    nice: ['Experience growing a community from scratch', 'Video content creation skills'],
  },
  {
    id: 5,
    title: 'Product Manager',
    team: 'Product',
    type: 'Remote · Full-time',
    location: 'Anywhere in the world',
    description:
      'Define what Traver builds next. You\'ll work closely with engineering, design, and our community to prioritise the features that matter most — balancing bold vision with pragmatic delivery.',
    requirements: [
      '3+ years of product management at a tech startup or consumer app',
      'Strong analytical skills and comfort with data-driven decisions',
      'Clear, persuasive communication — written and verbal',
      'Experience shipping 0→1 products or major new features',
    ],
    nice: ['Background in travel or social networking products', 'Technical understanding of APIs and systems'],
  },
];

const PERKS = [
  { icon: '🌍', title: 'Work from anywhere', body: 'We are fully remote. Work from a beach in Bali or a café in Lisbon. As long as you deliver, we don\'t care.' },
  { icon: '✈️', title: 'Annual travel stipend', body: '$1,500/year to use on travel — because we can\'t ask you to build a travel app without actually travelling.' },
  { icon: '📚', title: 'Learning budget', body: '$750/year for books, courses, or conferences. Grow on us.' },
  { icon: '🏥', title: 'Health coverage', body: 'Comprehensive health, dental, and vision for you and your dependants (where available).' },
  { icon: '🕐', title: 'Flexible hours', body: 'We care about outcomes, not hours. Work when you\'re at your best.' },
  { icon: '🚀', title: 'Founding equity', body: 'Early team members receive meaningful equity. We\'re building this together.' },
];

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Careers — Traver';
  }, []);

  const handleApply = (jobTitle) => {
    const subject = encodeURIComponent(`Job Application — ${jobTitle} — Traver`);
    const body = encodeURIComponent(
      `Hi Traver team,\n\nI'm interested in the ${jobTitle} role.\n\n[Please tell us about yourself, your experience, and why you want to join Traver.]\n\nBest,\n[Your name]`
    );
    window.location.href = `mailto:shubhang102002@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="careers-page">
      {/* ── Navbar back link ── */}
      <nav className="careers-nav container--wide">
        <Link to="/" className="careers-nav__logo">
          traver<span className="careers-nav__dot">.</span>
        </Link>
        <Link to="/" className="careers-nav__back">
          ← Back to site
        </Link>
      </nav>

      {/* ── Hero ── */}
      <header className="careers-hero">
        <div className="container careers-hero__inner">
          <span className="careers-hero__label">We&apos;re hiring</span>
          <h1 className="careers-hero__title">
            Help us build<br />
            <em>the future of social travel.</em>
          </h1>
          <p className="careers-hero__subtitle">
            Traver is an early-stage startup on a mission to make sure no one has to
            travel alone unless they want to. We&apos;re a small, remote-first team that moves
            fast and cares deeply about craft, community, and the humans we serve.
          </p>
          <div className="careers-hero__stats">
            <div className="careers-hero__stat">
              <span className="careers-hero__stat-num">{JOBS.length}</span>
              <span className="careers-hero__stat-label">Open roles</span>
            </div>
            <div className="careers-hero__stat">
              <span className="careers-hero__stat-num">100%</span>
              <span className="careers-hero__stat-label">Remote</span>
            </div>
            <div className="careers-hero__stat">
              <span className="careers-hero__stat-num">Early</span>
              <span className="careers-hero__stat-label">Stage startup</span>
            </div>
          </div>
        </div>
      </header>

      {/* ── Values strip ── */}
      <section className="careers-values">
        <div className="container">
          <p className="careers-values__eyebrow">What we believe in</p>
          <div className="careers-values__list">
            {['Ship fast, learn faster', 'Radical ownership', 'Empathy first', 'No ego, only craft', 'Default to async'].map((v) => (
              <span key={v} className="careers-values__pill">{v}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ── */}
      <section className="careers-roles">
        <div className="container">
          <div className="careers-roles__header">
            <h2 className="careers-roles__title">Open positions</h2>
            <p className="careers-roles__subtitle">
              Don&apos;t see your role? Email us at{' '}
              <a href="mailto:shubhang102002@gmail.com" className="careers-roles__email">
                shubhang102002@gmail.com
              </a>{' '}
              — we&apos;re always open to exceptional people.
            </p>
          </div>

          <div className="careers-roles__list">
            {JOBS.map((job) => (
              <article key={job.id} className="job-card">
                <div className="job-card__header">
                  <div className="job-card__meta">
                    <span className="job-card__team">{job.team}</span>
                    <h3 className="job-card__title">{job.title}</h3>
                    <div className="job-card__tags">
                      <span className="job-card__tag">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                        </svg>
                        {job.location}
                      </span>
                      <span className="job-card__tag job-card__tag--type">{job.type}</span>
                    </div>
                  </div>
                  <button className="job-card__apply" onClick={() => handleApply(job.title)}>
                    Apply now
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                <p className="job-card__description">{job.description}</p>

                <div className="job-card__details">
                  <div className="job-card__section">
                    <h4 className="job-card__section-title">What we&apos;re looking for</h4>
                    <ul className="job-card__list">
                      {job.requirements.map((r) => <li key={r}>{r}</li>)}
                    </ul>
                  </div>
                  <div className="job-card__section">
                    <h4 className="job-card__section-title">Nice to have</h4>
                    <ul className="job-card__list job-card__list--nice">
                      {job.nice.map((n) => <li key={n}>{n}</li>)}
                    </ul>
                  </div>
                </div>

                <button className="job-card__apply-bottom" onClick={() => handleApply(job.title)}>
                  Apply for {job.title}
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Perks ── */}
      <section className="careers-perks">
        <div className="container">
          <h2 className="careers-perks__title">Life at Traver</h2>
          <p className="careers-perks__subtitle">We take care of our team so our team can take care of the world.</p>
          <div className="careers-perks__grid">
            {PERKS.map((perk) => (
              <div key={perk.title} className="perk-card">
                <span className="perk-card__icon">{perk.icon}</span>
                <h3 className="perk-card__title">{perk.title}</h3>
                <p className="perk-card__body">{perk.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="careers-cta">
        <div className="container careers-cta__inner">
          <h2 className="careers-cta__title">Ready to build something meaningful?</h2>
          <p className="careers-cta__sub">
            We read every application. Send us your CV and a short note on why Traver excites you.
          </p>
          <a href="mailto:shubhang102002@gmail.com?subject=Job Application — Traver" className="careers-cta__btn">
            Send your application
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </section>

      {/* ── Footer strip ── */}
      <div className="careers-footer-strip">
        <div className="container">
          <Link to="/" className="careers-footer-strip__logo">traver<span>.</span></Link>
          <p className="careers-footer-strip__copy">© {new Date().getFullYear()} Traver Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
