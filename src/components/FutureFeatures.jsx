import { useScrollReveal } from '../hooks/useAnimations';
import './FutureFeatures.css';

const features = [
  {
    title: 'Smart Matching',
    description: 'Match based on destination, travel style, interests, and vibe — not just where people are headed, but who they are.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" strokeLinecap="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Interactive Trip Maps',
    description: 'See where your connections are headed. Discover new destinations. Build shared wishlists your whole group can vote on.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" strokeLinecap="round"/>
        <line x1="8" y1="2" x2="8" y2="18" strokeLinecap="round"/>
        <line x1="16" y1="6" x2="16" y2="22" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Travel Groups',
    description: 'Create or join a travel group. Coordinate with everyone in one place — not a chaotic thread with 8 people.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" strokeLinecap="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Verified Profiles',
    description: 'Travel is personal. You\'ll know who\'s real, who shares your style, and who you\'ll actually enjoy spending time with — before you commit.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Built-in Chat',
    description: 'Coordinate before and during the trip with secure, in-app messaging. Share locations, tips, and real-time updates — all in one place.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'More Coming Soon',
    description: 'Group itinerary planner, in-app booking integrations, local expert matching, and sustainable travel tools — all on our roadmap.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="10" strokeLinecap="round"/>
        <path d="M12 8v4l3 3" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function FutureFeatures() {
  const [headerRef, headerRevealed] = useScrollReveal();

  return (
    <section className="future-features" id="features">
      <div className="container">
        <div className={`future-features__header reveal ${headerRevealed ? 'revealed' : ''}`} ref={headerRef}>
          <span className="section-label">Features</span>
          <h2 className="future-features__title">
            Built for how you<br />actually travel.
          </h2>
          <p className="future-features__subtitle">
            Core features that make finding, planning, and traveling with people actually enjoyable.
          </p>
        </div>

        <div className="future-features__grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }) {
  return (
    <div className="future-feature-card">
      <div className="future-feature-card__icon">{feature.icon}</div>
      <h3 className="future-feature-card__title">{feature.title}</h3>
      <p className="future-feature-card__description">{feature.description}</p>
    </div>
  );
}