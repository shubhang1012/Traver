import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current) {
      imgRef.current.classList.add('loaded');
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg">
        <img
          ref={imgRef}
          src="/Gemini_Generated_Image_q34mg6q34mg6q34m.png"
          alt="Travelers exploring the world together"
          className="hero__bg-image"
        />
        <div className="hero__bg-overlay"></div>
      </div>

      <div className="hero__orb hero__orb--1" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--2" aria-hidden="true"></div>
      <div className="hero__orb hero__orb--3" aria-hidden="true"></div>

      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-dot"></span>
          <span>Built to Explore.</span>
        </div>

        <h1 className="hero__title">
          Every great trip<br />
          <em>deserves the right company.</em>
        </h1>

        <p className="hero__subtitle">
          Traver is the travel app designed to get you off your phone and onto the road.
          Find your people, close the app, and go explore.
        </p>
      </div>
    </section>
  );
}