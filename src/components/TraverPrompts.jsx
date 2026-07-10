import { useScrollReveal } from '../hooks/useAnimations';
import './TraverPrompts.css';

/* ═══════════════════════════════════════════
   Journey Phase Data
   ═══════════════════════════════════════════ */

const PHASES = [
  {
    num: '01',
    icon: '🔍',
    title: 'Find your kind of traveller.',
    desc: 'Browse by destination, dates, travel style, and vibe. Traver surfaces people who match how you actually travel — not just where. Read their prompts, see their past trips, and know before you message.',
    pills: ['Smart filters', 'Travel prompts', 'Compatibility scores'],
  },
  {
    num: '02',
    icon: '💬',
    title: 'Break the ice without the awkward.',
    desc: "No cold DMs. Traver gives you shared context — mutual destinations, overlapping dates, similar interests — so conversations start naturally. Group chats form around trips, not small talk.",
    pills: ['Trip-based chat', 'Icebreaker prompts', 'Group formation'],
  },
  {
    num: '03',
    icon: '📋',
    title: 'Plan trips that actually happen.',
    desc: "Collaborative itineraries with drag-and-drop days. Vote on activities. Split costs before anyone asks. One shared space instead of 14 WhatsApp messages and a lost Google Doc.",
    pills: ['Shared itineraries', 'Cost splitting', 'Activity voting'],
  },
  {
    num: '04',
    icon: '✈️',
    title: 'Travel with your people, not your phone.',
    desc: 'On-trip tools that fade into the background. Live location sharing for safety, local recommendations from the community, and real-time updates — so you spend more time exploring, less time coordinating.',
    pills: ['Live maps', 'Local tips', 'Real-time sync'],
  },
  {
    num: '05',
    icon: '📸',
    title: "The trip doesn\u2019t end at the airport.",
    desc: "Shared photo journals, trip stories visible on your profile, and a growing map of everywhere you've been — with everyone you've been there with. Your travel life, beautifully archived.",
    pills: ['Trip journals', 'Shared galleries', 'Travel map'],
  },
];

/* ═══════════════════════════════════════════
   Visual Card Illustrations
   ═══════════════════════════════════════════ */

function DiscoverVisual() {
  return (
    <div className="mock-profile">
      <div className="mock-profile__header">
        <div className="mock-profile__avatar">🌏</div>
        <div className="mock-profile__info">
          <span className="mock-profile__name">Lara, 28</span>
          <span className="mock-profile__dest">Tokyo, Japan · Nov 12–22</span>
        </div>
        <div className="mock-profile__compat">
          <div className="mock-profile__compat-ring">92%</div>
          <span className="mock-profile__compat-label">Match</span>
        </div>
      </div>
      <div className="mock-profile__prompt">
        <p className="mock-profile__prompt-q">My travel tempo is…</p>
        <p className="mock-profile__prompt-a">
          50% exploring hidden alleyways, 50% sitting in cozy cafes reading.
        </p>
      </div>
    </div>
  );
}

function ConnectVisual() {
  return (
    <div className="mock-chat">
      <div className="mock-chat__context">
        🎯 You both: Tokyo · Nov 12–22 · Culture & food
      </div>
      <div className="mock-chat__bubble">
        <div className="mock-chat__avatar-sm">L</div>
        <div className="mock-chat__msg">
          I found this tiny ramen place in Shimokitazawa — want to check it out together?
        </div>
      </div>
      <div className="mock-chat__bubble mock-chat__bubble--right">
        <div className="mock-chat__avatar-sm">Y</div>
        <div className="mock-chat__msg">
          Yes! I was looking for someone to explore that neighbourhood with 🍜
        </div>
      </div>
      <div className="mock-chat__group-cta">
        👥 Start a trip group
      </div>
    </div>
  );
}

function PlanVisual() {
  return (
    <div className="mock-itinerary">
      <div className="mock-itinerary__day">
        <span className="mock-itinerary__day-badge">Day 1</span>
        <div className="mock-itinerary__day-items">
          <div className="mock-itinerary__item">
            <span className="mock-itinerary__item-icon">⛩️</span>
            Senso-ji Temple · Morning
          </div>
          <div className="mock-itinerary__item">
            <span className="mock-itinerary__item-icon">🍜</span>
            Ramen street in Shimokitazawa
          </div>
        </div>
      </div>
      <div className="mock-itinerary__day">
        <span className="mock-itinerary__day-badge">Day 2</span>
        <div className="mock-itinerary__day-items">
          <div className="mock-itinerary__item">
            <span className="mock-itinerary__item-icon">🎨</span>
            TeamLab Borderless · Afternoon
          </div>
          <div className="mock-itinerary__item">
            <span className="mock-itinerary__item-icon">🌃</span>
            Shibuya night walk
          </div>
        </div>
      </div>
      <div className="mock-itinerary__split">
        <span className="mock-itinerary__split-label">💰 Trip costs · Split 3 ways</span>
        <span className="mock-itinerary__split-amount">¥8,400 each</span>
      </div>
    </div>
  );
}

function ExperienceVisual() {
  return (
    <div className="mock-map">
      <div className="mock-map__canvas">
        {/* Stylized background dark map (Google Maps style) */}
        <svg className="mock-map__bg-svg" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true" style={{ background: '#121824' }}>
          {/* Tokyo Bay (water) */}
          <path
            d="M 220,120 Q 250,90 310,95 T 410,80 L 410,120 Z"
            fill="#0b0e16"
          />
          
          {/* Main Expressway Grid (teal/blue-gray roads) */}
          <path
            d="M -10,35 C 100,20 180,60 410,45"
            fill="none"
            stroke="#222f46"
            strokeWidth="2.5"
          />
          <path
            d="M 160,-10 C 170,50 140,80 180,130"
            fill="none"
            stroke="#222f46"
            strokeWidth="2.5"
          />
          <path
            d="M 270,-10 C 250,50 290,90 310,130"
            fill="none"
            stroke="#222f46"
            strokeWidth="2"
          />
          {/* Chuo-Sobu Line & railway routes (dotted/dashed gray lines) */}
          <path
            d="M -10,65 Q 120,40 260,75 T 410,35"
            fill="none"
            stroke="#334764"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          
          {/* Smaller local streets */}
          <path
            d="M -10,15 L 410,15 M -10,90 L 410,90 M 60,-10 L 60,130 M 110,-10 L 110,130 M 220,-10 L 220,130 M 350,-10 L 350,130"
            fill="none"
            stroke="#1b2537"
            strokeWidth="1"
          />

          {/* Place Name Labels */}
          <text x="60" y="85" fill="#5c6e88" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="bold">Setagaya</text>
          <text x="60" y="93" fill="#3c4b60" fontSize="6" fontFamily="system-ui, sans-serif">世田谷区</text>

          <text x="45" y="45" fill="#5c6e88" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="bold">Suginami</text>
          <text x="45" y="53" fill="#3c4b60" fontSize="6" fontFamily="system-ui, sans-serif">杉並区</text>

          <text x="210" y="30" fill="#ffffff" fontSize="9" fontFamily="system-ui, sans-serif" fontWeight="bold" textAnchor="middle">Taito City</text>
          <text x="210" y="40" fill="#a0aab8" fontSize="8" fontFamily="system-ui, sans-serif" textAnchor="middle">台東区</text>

          <text x="210" y="62" fill="#ffffff" fontSize="11" fontFamily="system-ui, sans-serif" fontWeight="bold" textAnchor="middle">Tokyo</text>
          <text x="210" y="74" fill="#a0aab8" fontSize="9" fontFamily="system-ui, sans-serif" textAnchor="middle">東京</text>

          <text x="360" y="70" fill="#ffffff" fontSize="8" fontFamily="system-ui, sans-serif" fontWeight="bold" textAnchor="middle">Urayasu</text>
          <text x="360" y="78" fill="#a0aab8" fontSize="7" fontFamily="system-ui, sans-serif" textAnchor="middle">浦安市</text>

          <text x="180" y="105" fill="#5c6e88" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="bold" textAnchor="middle">Shinagawa</text>
          <text x="180" y="113" fill="#3c4b60" fontSize="6" fontFamily="system-ui, sans-serif" textAnchor="middle">品川区</text>

          {/* Meiji Jingu (with stylized Torii icon) */}
          <g transform="translate(105, 55)">
            <path d="M-5,-4 L5,-4 M-5,-1 L5,-1 M-3.5,-1 L-3.5,5 M3.5,-1 L3.5,5 M-4.5,-5 L-4.5,-3 M4.5,-5 L4.5,-3" stroke="#a0aab8" strokeWidth="1" strokeLinecap="round" />
            <text x="0" y="14" fill="#a0aab8" fontSize="7" fontFamily="system-ui, sans-serif" fontWeight="semibold" textAnchor="middle">Meiji Jingu</text>
            <text x="0" y="21" fill="#3c4b60" fontSize="6" fontFamily="system-ui, sans-serif" textAnchor="middle">明治神宮</text>
          </g>

          {/* Route shields / badges */}
          <g transform="translate(90, 75)">
            <rect x="-5" y="-5" width="10" height="10" rx="2" fill="#1b4d3e" stroke="#2a755d" strokeWidth="0.5" />
            <text x="0" y="3" fill="#ffffff" fontSize="6" fontFamily="system-ui, sans-serif" fontWeight="bold" textAnchor="middle">4</text>
          </g>
          <g transform="translate(260, 48)">
            <rect x="-7" y="-5" width="14" height="10" rx="2" fill="#1b4d3e" stroke="#2a755d" strokeWidth="0.5" />
            <text x="0" y="3" fill="#ffffff" fontSize="6" fontFamily="system-ui, sans-serif" fontWeight="bold" textAnchor="middle">C2</text>
          </g>
        </svg>

        {/* Location Marker Pin / Glow (Nezu Shrine area) */}
        <div className="mock-map__marker" style={{ top: '42%', left: '45%' }}>
          <div className="mock-map__marker-pulse"></div>
          <svg className="mock-map__marker-icon" width="16" height="20" viewBox="0 0 12 15" fill="none">
            <path
              d="M6 0C2.686 0 0 2.686 0 6c0 4.5 6 9 6 9s6-4.5 6-9c0-3.314-2.686-6-6-6zm0 8.5c-1.38 0-2.5-1.12-2.5-2.5S4.62 3.5 6 3.5 8.5 4.62 8.5 6 7.38 8.5 6 8.5z"
              fill="var(--color-accent)"
            />
          </svg>
        </div>

        <div className="mock-map__pin mock-map__pin--1">
          <div className="mock-map__pin-dot">L</div>
          Senso-ji
        </div>
        <div className="mock-map__pin mock-map__pin--2">
          <div className="mock-map__pin-dot">Y</div>
          Shimokitazawa
        </div>
      </div>
      <div className="mock-map__tip">
        <span className="mock-map__tip-icon">💡</span>
        <span className="mock-map__tip-text">
          <strong>Local tip:</strong> The hidden garden behind Nezu Shrine is empty at sunset — absolutely worth the detour.
        </span>
      </div>
    </div>
  );
}

function ReliveVisual() {
  return (
    <div className="mock-journal">
      <div className="mock-journal__photos">
        <div className="mock-journal__photo">
          <img src="/tokyo-tower.png" alt="Tokyo Tower" className="mock-journal__img" />
        </div>
        <div className="mock-journal__photo">
          <img src="/tokyo-food.jpg" alt="Tokyo Food" className="mock-journal__img" />
        </div>
        <div className="mock-journal__photo">
          <img src="/mt-fuji.jpg" alt="Mount Fuji" className="mock-journal__img" />
        </div>
        <div className="mock-journal__photo">
          <img src="/shinjuku-street.jpg" alt="Shinjuku Street" className="mock-journal__img" />
        </div>
      </div>
      <div className="mock-journal__story">
        <div className="mock-journal__story-avatar">L</div>
        <div className="mock-journal__story-text">
          <span className="mock-journal__story-name">Lara shared a trip story</span>
          <span className="mock-journal__story-trip">Tokyo with You · 11 days ago</span>
        </div>
      </div>
      <div className="mock-journal__map-bar">
        <span className="mock-journal__map-icon">🗺️</span>
        <span className="mock-journal__map-text">Your travel map</span>
        <span className="mock-journal__map-count">4 countries</span>
      </div>
    </div>
  );
}

const VISUALS = [
  DiscoverVisual,
  ConnectVisual,
  PlanVisual,
  ExperienceVisual,
  ReliveVisual,
];

/* ═══════════════════════════════════════════
   Phase Component
   ═══════════════════════════════════════════ */

function PhaseRow({ phase, index }) {
  const [ref, revealed] = useScrollReveal({ threshold: 0.2 });
  const Visual = VISUALS[index];

  return (
    <div
      className={`travel-journey__phase ${revealed ? 'revealed' : ''}`}
      ref={ref}
    >
      {/* Node */}
      <div className="travel-journey__node">
        <span className="travel-journey__node-num">{phase.num}</span>
      </div>

      {/* Text */}
      <div className="travel-journey__text">
        <span className="travel-journey__phase-icon">{phase.icon}</span>
        <h3 className="travel-journey__phase-title">{phase.title}</h3>
        <p className="travel-journey__phase-desc">{phase.desc}</p>
        <div className="travel-journey__details">
          {phase.pills.map((pill, i) => (
            <span key={pill} className="travel-journey__pill">
              {i > 0 && <span className="travel-journey__pill-dot" />}
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Visual card */}
      <div className="travel-journey__visual">
        <div className="travel-journey__card">
          <Visual />
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════
   Main Section
   ═══════════════════════════════════════════ */

export default function TraverPrompts() {
  const [headerRef, headerRevealed] = useScrollReveal();

  return (
    <section className="travel-journey" id="journey">
      <div className="container">
        <div
          className={`travel-journey__header reveal ${headerRevealed ? 'revealed' : ''}`}
          ref={headerRef}
        >
          <span className="section-label">The Traver Experience</span>
          <h2 className="travel-journey__title">
            One platform. Every chapter of your trip.
          </h2>
          <p className="travel-journey__subtitle">
            From the spark of an idea to the stories you tell for years —
            Traver is with you before, during, and after every journey.
          </p>
        </div>
      </div>

      <div className="travel-journey__timeline">
        {PHASES.map((phase, i) => (
          <PhaseRow key={phase.num} phase={phase} index={i} />
        ))}
      </div>
    </section>
  );
}
