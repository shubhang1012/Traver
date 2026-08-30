import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './PageTransition.css';

// Minimum time the overlay stays fully visible (ms)
const MIN_VISIBLE_MS = 700;
// Duration of each enter/leave animation (ms) — must match CSS
const ANIM_MS = 550;

export default function PageTransition() {
  const location = useLocation();
  const [phase, setPhase] = useState('entering'); // entering | visible | leaving | done
  const [ptDuration, setPtDuration] = useState(MIN_VISIBLE_MS + ANIM_MS * 2);
  const prevPath = useRef(null);
  const enterStart = useRef(Date.now());
  const leaveTimer = useRef(null);
  const removeTimer = useRef(null);

  // Helper: schedule the leave phase, respecting minimum visible time
  const scheduleLeave = (visibleSince) => {
    const elapsed = Date.now() - visibleSince;
    const remaining = Math.max(MIN_VISIBLE_MS - elapsed, 0);

    leaveTimer.current = setTimeout(() => {
      setPhase('leaving');
      removeTimer.current = setTimeout(() => {
        setPhase('done');
        window.scrollTo({ top: 0, behavior: 'instant' });
      }, ANIM_MS);
    }, remaining);
  };

  // ── Initial page load ──
  useEffect(() => {
    prevPath.current = location.pathname;
    enterStart.current = Date.now();
    // Set CSS var so the loading bar matches total duration
    const total = MIN_VISIBLE_MS + ANIM_MS;
    setPtDuration(total);

    // After enter animation completes, mark visible then schedule leave
    const visibleTimer = setTimeout(() => {
      setPhase('visible');
      scheduleLeave(Date.now());
    }, ANIM_MS);

    return () => {
      clearTimeout(visibleTimer);
      clearTimeout(leaveTimer.current);
      clearTimeout(removeTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Route changes ──
  useEffect(() => {
    // Ignore the first render (handled by initial effect)
    if (prevPath.current === null || prevPath.current === location.pathname) return;
    prevPath.current = location.pathname;

    // Clear any existing timers
    clearTimeout(leaveTimer.current);
    clearTimeout(removeTimer.current);

    // Restart overlay
    window.scrollTo({ top: 0, behavior: 'instant' });
    enterStart.current = Date.now();
    setPhase('entering');

    const visibleTimer = setTimeout(() => {
      setPhase('visible');
      scheduleLeave(Date.now());
    }, ANIM_MS);

    return () => {
      clearTimeout(visibleTimer);
      clearTimeout(leaveTimer.current);
      clearTimeout(removeTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  if (phase === 'done') return null;

  const barDurationMs = MIN_VISIBLE_MS + ANIM_MS;

  return (
    <div
      className={`pt-overlay pt-overlay--${phase === 'visible' ? 'visible' : phase === 'leaving' ? 'leaving' : 'entering'}`}
      style={{ '--pt-duration': `${barDurationMs}ms` }}
      aria-hidden="true"
    >
      <div className="pt-logo">
        traver<span className="pt-logo__dot">.</span>
      </div>

      <div className="pt-bar-track">
        <div className="pt-bar-fill" />
      </div>
    </div>
  );
}
