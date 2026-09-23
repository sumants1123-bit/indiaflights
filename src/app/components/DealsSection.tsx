import React from 'react';
import Link from 'next/link';

const dealCards = [
  {
    icon: '📅',
    title: 'Flexible Dates?',
    description: 'Let us check nearby dates that may offer better routing or availability for your journey.',
    cta: 'Ask About Date Options',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Flying With Family?',
    description: 'Ask about itinerary options suitable for family travel — including seating and baggage assistance.',
    cta: 'Family Travel Enquiry',
  },
  {
    icon: '🗺️',
    title: 'Multiple Indian Cities?',
    description: 'We can help structure your international and domestic connections for multi-city trips.',
    cta: 'Plan Multi-City Trip',
  },
  {
    icon: '⏰',
    title: 'Traveling Soon?',
    description: 'Ask a specialist to review available routing options for last-minute and near-term travel.',
    cta: 'Check Availability',
  },
];

export default function DealsSection() {
  return (
    <section id="deals" className="py-16 sm:py-20 bg-secondary jaali-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Fare Options</span>
          <h2 className="font-display text-section-xl text-foreground font-semibold mb-4">
            Looking for a<br />
            <span className="italic font-light text-primary">Better Fare?</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            International airfares vary significantly based on routing, timing, and flexibility. We can explore options with you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dealCards?.map((card, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border p-6 shadow-warm-sm card-hover flex flex-col">
              <span className="text-3xl mb-4">{card?.icon}</span>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{card?.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{card?.description}</p>
              <Link href="/request-quote" className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                {card?.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/request-quote" className="btn-primary px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2">
            Ask About Current Options
          </Link>
        </div>
      </div>
    </section>
  );
}