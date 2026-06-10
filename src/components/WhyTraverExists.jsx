import { useScrollReveal } from '../hooks/useAnimations';
import './WhyTraverExists.css';

export default function WhyTraverExists() {
  const [ref1, revealed1] = useScrollReveal();
  const [ref2, revealed2] = useScrollReveal();
  const [ref3, revealed3] = useScrollReveal();

  return (
    <section className="why-exists" id="why-exists">
      <div className="container">
        <div className={`why-exists__header reveal ${revealed1 ? 'revealed' : ''}`} ref={ref1}>
          <span className="section-label">Why We Exist</span>
          <h2 className="why-exists__title">
            Travel is universal.<br />Connection shouldn't be left to chance.
          </h2>
        </div>

        <div className="why-exists__grid">
          <div className={`why-exists__text reveal-left ${revealed2 ? 'revealed' : ''}`} ref={ref2}>
            <p className="why-exists__lead">
              You know that feeling. You booked the dream trip. The flights, the Airbnb, the itinerary — all set.
              But somewhere in the middle of it, the feeling kicks in.
            </p>
            <p className="why-exists__body">
              It&apos;s not that you can&apos;t meet people when you travel. You can. Hostel bars, walking tours,
              random train conversations. But those connections are fleeting — built on circumstance, not compatibility.
              And the things that make a trip truly special? Nobody to share them with.
            </p>
            <p className="why-exists__body">
              <strong>Traver was built for people who want both:</strong> the freedom of independent travel
              and the richness of doing it with people who actually get them.
              Not every trip needs company. But when it does — it should be easy to find.
            </p>
          </div>

          <div className={`why-exists__image-wrap reveal-right ${revealed3 ? 'revealed' : ''}`} ref={ref3}>
            <img src="/about-travel.png" alt="Scenic coastal road with travelers" className="why-exists__image" />
            <div className="why-exists__image-card">
              <p className="why-exists__image-card-text">
                "I wish someone I actually connect with was here."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}