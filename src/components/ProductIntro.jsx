import { useScrollReveal } from '../hooks/useAnimations';
import './ProductIntro.css';

const cards = [
  {
    title: 'Find Companions',
    body: 'Match with travelers headed the same direction — not random strangers, but people you\'re actually excited to explore with.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="7" r="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 21v-2a4 4 0 0 0-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Plan Together',
    body: 'Collaborative itineraries, shared wishlists, group cost splitting — planning that\'s actually fun, in one place.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2v6h6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 13h8M8 17h8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Explore Better',
    body: 'Interactive maps, local insights, shared experiences. Go beyond the tourist trail — together.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

export default function ProductIntro() {
  const [ref, revealed] = useScrollReveal();

  return (
    <section className="product-intro">
      <div className="container">
        <div className={`product-intro__header reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
          <span className="section-label">What We Build</span>
          <h2 className="product-intro__title">Travel, with the people who get it.</h2>
        </div>
        <div className="product-intro__grid">
          {cards.map((card) => (
            <IntroCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroCard({ card }) {
  return (
    <div className="intro-card">
      <div className="intro-card__icon">{card.icon}</div>
      <h3 className="intro-card__title">{card.title}</h3>
      <p className="intro-card__body">{card.body}</p>
    </div>
  );
}