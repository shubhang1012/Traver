import { useScrollReveal } from '../hooks/useAnimations';
import './FounderStory.css';

export default function FounderStory() {
  const [ref, revealed] = useScrollReveal();

  return (
    <section className="founder-story">
      <div className="container">
        <div className={`founder-story__content reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
          <div className="founder-story__text">
            <span className="section-label">The Story</span>
            <h2 className="founder-story__title">
              We're building this<br />because we needed it.
            </h2>
            <p className="founder-story__body">
              We aren't a company that discovered a market gap and decided to fill it.
            </p>
            <p className="founder-story__body">
              We're travelers who kept running into the same dead end: beautiful destinations,
              meaningful experiences — and not always the right company to share them with.
            </p>
            <p className="founder-story__body">
              We've opened group chats for upcoming trips and immediately felt the chaos coming.
              Matched with people on platforms and found exactly zero that actually understood
              what we were looking for. Sat at hostel bars not sure how to start a real conversation.
            </p>
            <p className="founder-story__body">
              So we started building the thing we wished existed. Traver started with a simple question:
            </p>
            <p className="founder-story__question">
              What if finding a travel companion was as intentional — and as well-designed — as finding a flight?
            </p>
            <p className="founder-story__body">
              That was missing. We're building it now.
            </p>
          </div>

          <div className="founder-story__image-col">
            <div className="founder-story__image-placeholder">
              <div className="founder-story__placeholder-inner">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeLinecap="round"/>
                  <circle cx="12" cy="7" r="4" strokeLinecap="round"/>
                </svg>
                <p>Team photo coming soon</p>
              </div>
            </div>
            <div className="founder-story__tagline-card">
              <p className="founder-story__tagline">Built by travelers, for travelers.</p>
              <p className="founder-story__tagline-sub">
                [Founder names] — a team that believes the journey is better with company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}