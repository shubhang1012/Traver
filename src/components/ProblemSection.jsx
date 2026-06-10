import { useScrollReveal } from '../hooks/useAnimations';
import './ProblemSection.css';

const problems = [
  {
    title: 'Social travel is broken.',
    body: 'Social media makes travel look like a solo aesthetic adventure. But real connection? That\'s hard to find when you\'re actually there.',
  },
  {
    title: 'Dating apps don\'t work for friends.',
    body: 'You\'re not looking for romance — you\'re looking for a hiking buddy in Portugal or a foodie friend in Bangkok. Swiping isn\'t the answer.',
  },
  {
    title: 'Finding travel partners is a gamble.',
    body: 'Facebook groups, Reddit threads, couchsurfing. They\'re clunky, unsafe, and full of people who don\'t share your travel style at all.',
  },
  {
    title: 'Solo travel is amazing — until it\'s not.',
    body: 'Freedom is incredible. But some sunsets hit different when someone you\'re excited about is watching them with you.',
  },
];

export default function ProblemSection() {
  const [ref, revealed] = useScrollReveal();

  return (
    <section className="problem-section">
      <div className="container">
        <div className={`problem-section__header reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
          <span className="section-label">The Problem</span>
          <h2 className="problem-section__title">
            Current travel tools solve<br />where to go. Not <em>who</em> to go with.
          </h2>
        </div>

        <div className="problem-section__grid">
          {problems.map((problem) => (
            <ProblemCard key={problem.title} problem={problem} />
          ))}
        </div>

        <div className="problem-section__pivot">
          <p className="problem-section__pivot-text">
            We've been there. All of us have.
            <span className="problem-section__pivot-cta"> That's exactly why we're building Traver.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ problem }) {
  const [ref, revealed] = useScrollReveal();
  return (
    <div className={`problem-card reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
      <h3 className="problem-card__title">{problem.title}</h3>
      <p className="problem-card__body">{problem.body}</p>
    </div>
  );
}