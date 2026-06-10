import { useScrollReveal } from '../hooks/useAnimations';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Create Your Profile',
    description: 'Tell us where you\'re headed, when, and what kind of trip you\'re after. We build the rest from there.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Find Your People',
    description: 'We match you with travelers heading the same direction — based on vibe, budget, interests, and travel style. Not random strangers. People you\'re actually thrilled to explore with.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21l-4.35-4.35" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11 8v6M8 11h6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Plan Together',
    description: 'Create or join a travel group. Share itineraries, vote on activities, split costs, and coordinate in one place — not a chaotic group chat.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19 8v6M22 11h-6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Travel Together',
    description: 'Set off. Meet up. Make the trip. The best stories are written with people you\'re excited to be with.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [headerRef, headerRevealed] = useScrollReveal();

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className={`how-it-works__header reveal ${headerRevealed ? 'revealed' : ''}`} ref={headerRef}>
          <span className="section-label">How It Works</span>
          <h2 className="how-it-works__title">
            Simple by design.<br />
            <span className="gradient-text">Powerful when you need it.</span>
          </h2>
          <p className="how-it-works__subtitle">
            Four steps between you and the travel companion you've been looking for.
          </p>
        </div>

        <div className="how-it-works__steps stagger">
          {steps.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }) {
  const [ref, revealed] = useScrollReveal();

  return (
    <div className={`step-card reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
      <div className="step-card__number">{step.number}</div>
      <div className="step-card__icon">{step.icon}</div>
      <h3 className="step-card__title">{step.title}</h3>
      <p className="step-card__description">{step.description}</p>
    </div>
  );
}
