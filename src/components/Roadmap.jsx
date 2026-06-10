import { useScrollReveal } from '../hooks/useAnimations';
import './Roadmap.css';

const phases = [
  {
    label: 'Right Now',
    title: 'Building the foundations',
    description: 'Matching, profiles, core group features, and the mobile app — from the ground up.',
    status: 'active',
  },
  {
    label: 'Next 3 Months',
    title: 'Beta launch',
    description: 'A small community gets in. Active feedback loops. Real improvements, fast, based on real users.',
    status: 'upcoming',
  },
  {
    label: 'Next 6 Months',
    title: 'Public launch',
    description: 'Open to everyone. Expanding destination coverage. First partnerships with travel experiences.',
    status: 'upcoming',
  },
  {
    label: 'Next 12 Months',
    title: 'Going deeper',
    description: 'Group itinerary planner. Booking integrations. Verified local communities. Sustainable travel tools.',
    status: 'upcoming',
  },
  {
    label: 'And Beyond',
    title: 'Shaped by you',
    description: 'The roadmap belongs to the community. Early members get a direct say in what we build next.',
    status: 'future',
  },
];

export default function Roadmap() {
  const [ref, revealed] = useScrollReveal();

  return (
    <section className="roadmap" id="roadmap">
      <div className="container">
        <div className={`roadmap__header reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
          <span className="section-label">Roadmap</span>
          <h2 className="roadmap__title">
            Where we are.<br />Where we're going.
          </h2>
          <p className="roadmap__subtitle">
            No fake timelines. We're sharing where we are honestly — and what we're excited about building next.
          </p>
        </div>

        <div className="roadmap__timeline">
          {phases.map((phase, i) => (
            <RoadmapItem key={phase.label} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RoadmapItem({ phase, index }) {
  const [ref, revealed] = useScrollReveal({ threshold: 0.15 });

  return (
    <div className={`roadmap__item reveal ${revealed ? 'revealed' : ''}`} ref={ref} style={{ transitionDelay: `${index * 80}ms` }}>
      <div className="roadmap__item-marker">
        <div className={`roadmap__dot roadmap__dot--${phase.status}`}></div>
        {index < phases.length - 1 && <div className="roadmap__line"></div>}
      </div>
      <div className="roadmap__item-content">
        <span className="roadmap__item-label">{phase.label}</span>
        <h3 className="roadmap__item-title">{phase.title}</h3>
        <p className="roadmap__item-desc">{phase.description}</p>
      </div>
    </div>
  );
}