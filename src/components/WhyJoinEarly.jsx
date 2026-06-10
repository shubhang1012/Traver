import { useScrollReveal } from '../hooks/useAnimations';
import './WhyJoinEarly.css';

const benefits = [
  {
    title: 'Early Access',
    body: 'Be among the first to use Traver when we launch — before it\'s polished, before it\'s perfect, before it\'s famous.',
  },
  {
    title: 'Founding Member Status',
    body: 'First 1,000 waitlist members get founding member badges and lifetime early-access benefits. This won\'t be offered again.',
  },
  {
    title: 'Shape the Product',
    body: 'We\'ll reach out to early waitlist members for feedback, surveys, and conversations. Your ideas will directly influence what we build.',
  },
  {
    title: 'Exclusive Updates',
    body: 'Monthly behind-the-scenes progress updates. No corporate newsletter — just real talk from the team building this.',
  },
];

export default function WhyJoinEarly() {
  const [ref, revealed] = useScrollReveal();
  const [statsRef, statsRevealed] = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="why-join-early">
      <div className="container">
        <div className={`why-join-early__hero reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
          <span className="section-label section-label--light">Be Early</span>
          <h2 className="why-join-early__title">
            You're early.<br />
            <span className="why-join-early__title-accent">That matters.</span>
          </h2>
          <p className="why-join-early__lead">
            Most people wait until something is finished to show up. Early people show up while it's being
            built — and they shape what it becomes. Joining the Traver waitlist isn't just about getting the
            app first. It's about being part of something from the start.
          </p>
        </div>

        <div className={`why-join-early__grid stagger ${statsRevealed ? 'revealed' : ''}`} ref={statsRef}>
          {benefits.map((b) => (
            <div key={b.title} className="why-join-early__card reveal">
              <h3 className="why-join-early__card-title">{b.title}</h3>
              <p className="why-join-early__card-body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}