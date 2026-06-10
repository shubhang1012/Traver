import { useScrollReveal } from '../hooks/useAnimations';
import './VisionSection.css';

export default function VisionSection() {
  const [ref, revealed] = useScrollReveal();

  return (
    <section className="vision-section" id="vision">
      <div className="container container--narrow">
        <div className={`vision-section__content reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
          <span className="section-label section-label--light">Our Vision</span>

          <h2 className="vision-section__title">
            We believe the best trips are shared.
          </h2>

          <p className="vision-section__body">
            Not shared with everyone. Not shared with people you're okay with.
            Shared with the <strong>right</strong> people — people who make the same
            wrong turns and laugh about it, who stay up too late talking about nothing,
            who make a Tuesday in a foreign city feel like a Saturday at home.
          </p>

          <p className="vision-section__body">
            We believe travel is one of the most human things you can do. It strips you down.
            It opens you up. It shows you who you are when everything is new.
          </p>

          <p className="vision-section__body">
            And we believe technology should make that <em>better</em> — not replace it
            with a perfectly optimized itinerary or a lonely photo by a famous monument.
          </p>

          <div className="vision-section__quote">
            <blockquote>
              We want to live in a world where no one has to travel alone unless they want to.
            </blockquote>
            <cite>— Traver Team</cite>
          </div>
        </div>
      </div>
    </section>
  );
}