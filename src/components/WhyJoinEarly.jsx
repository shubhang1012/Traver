import { useScrollReveal } from '../hooks/useAnimations';
import './WhyJoinEarly.css';

const benefits = [
  {
    title: 'Early Access',
    body: "Be among the first to use Traver when we launch — before it's polished, before it's perfect, before it's famous.",
  },
  {
    title: 'Built Together',
    body: "The first 1,000 members won't just get early access — they'll help shape the experience, unlock exclusive benefits, and leave their mark on Traver's journey.",
  },
  {
    title: 'Shape the Product',
    body: "We'll reach out to early waitlist members for feedback, surveys, and conversations. Your ideas will directly influence what we build.",
  },
  {
    title: 'Exclusive Updates',
    body: 'Monthly behind-the-scenes progress updates. No corporate newsletter — just real talk from the team building this.',
  },
];

export default function WhyJoinEarly() {
  const [heroRef, heroRevealed] = useScrollReveal();
  const [cardsRef, cardsRevealed] = useScrollReveal({
    threshold: 0.2,
  });

  return (
    <section className="why-join-early">
      <div className="container">
        {/* Hero */}
        <div
          ref={heroRef}
          className={`why-join-early__hero reveal ${
            heroRevealed ? 'revealed' : ''
          }`}
        >
          <span className="section-label section-label--light">
            Be Early
          </span>

          <h2 className="why-join-early__title">
            You're early.
            <br />
            <span className="why-join-early__title-accent">
              That matters.
            </span>
          </h2>

          <p className="why-join-early__lead">
            Most people wait until something is finished to show up.
            Early people show up while it's being built — and they
            shape what it becomes. Joining the Traver waitlist isn't
            just about getting the app first. It's about being part
            of something from the start.
          </p>
        </div>

        {/* Benefits */}
        <div
          ref={cardsRef}
          className="why-join-early__grid stagger"
        >
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`why-join-early__card reveal ${
                cardsRevealed ? 'revealed' : ''
              }`}
            >
              <h3 className="why-join-early__card-title">
                {benefit.title}
              </h3>

              <p className="why-join-early__card-body">
                {benefit.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}