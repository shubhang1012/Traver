import { useState } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import './FAQ.css';

const faqs = [
  {
    q: 'When is Traver launching?',
    a: 'We don\'t have a fixed date yet — and we\'d rather launch something great than something on a deadline. We\'ll be reaching out to waitlist members first. You\'ll know before anyone else.',
  },
  {
    q: 'Will Traver be free to use?',
    a: 'Core features will always be free. We\'re exploring a premium tier with deeper integrations and exclusive experiences. Early members will always get the best access.',
  },
  {
    q: 'Does Traver replace dating apps?',
    a: 'No. Traver is explicitly for platonic, travel-minded connection. No swiping for romance. No heart emojis unless you mean them as friends. We built this specifically for people not looking for that.',
  },
  {
    q: 'Is Traver safe?',
    a: 'Safety is foundational to everything we\'re building — not an afterthought. Verified profiles, privacy controls, in-app reporting, and location sharing that\'s always opt-in. We\'ll share more on this before launch.',
  },
  {
    q: 'I love solo travel. Do I need Traver?',
    a: 'No — and that\'s the point. Traver is for people who want to connect when they want to connect. Come when you want, skip when you don\'t. You don\'t have to travel differently to use it.',
  },
  {
    q: 'How is Traver different from other travel apps?',
    a: 'Most apps help you book travel or find places. Traver helps you find people. We believe the people are what makes the trip — and we\'re designing around that from day one.',
  },
  {
    q: 'Can I suggest features or give feedback?',
    a: 'Absolutely. That\'s literally why we want early members. Sign up for the waitlist and we\'ll be in touch. Your input will shape what we build.',
  },
  {
    q: 'How do you plan to make money?',
    a: 'We have ideas. We\'ll share them when it makes sense. We won\'t surprise you with a paywall disguised as a feature.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [ref, revealed] = useScrollReveal();

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section" id="faq">
      <div className="container container--narrow">
        <div className={`faq-section__header reveal ${revealed ? 'revealed' : ''}`} ref={ref}>
          <span className="section-label">FAQ</span>
          <h2 className="faq-section__title">Answers. We're an open book.</h2>
        </div>

        <div className="faq-section__list">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
      <button className="faq-item__question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.q}</span>
        <svg
          className="faq-item__icon"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="faq-item__answer">
        <p>{faq.a}</p>
      </div>
    </div>
  );
}