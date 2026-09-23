'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'Personal Fare Search',
    description: 'We compare itinerary possibilities around your travel needs — not just the cheapest option, but the right option for your schedule.',
    span: 'lg:col-span-2',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'India Route Expertise',
    description: 'Deep knowledge of connections, baggage requirements, transit visas, and complex India itineraries built from years of specialization.',
    span: 'lg:col-span-1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Flexible Travel Options',
    description: 'Ask about alternate dates, airports, and routing possibilities that could work better for your schedule.',
    span: 'lg:col-span-1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: 'Human Support',
    description: 'Talk to a real person before and after booking. No chatbots, no automated responses — just genuine assistance.',
    span: 'lg:col-span-1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
    title: 'Multi-City Trips',
    description: 'Help planning complicated itineraries involving Delhi, Mumbai, Amritsar, Goa — or any combination of cities.',
    span: 'lg:col-span-1',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Family & Group Travel',
    description: 'Assistance with family itineraries, senior travelers, children, and group requirements — all coordinated in one place.',
    span: 'lg:col-span-2',
  },
];

export default function WhyBookSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.why-card');
            items.forEach((item, i) => {
              setTimeout(() => item.classList.add('revealed'), i * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-14">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Why Choose Us</span>
            <h2 className="font-display text-section-xl text-foreground font-semibold leading-tight">
              More Than a<br />
              <span className="italic font-light text-primary">Search Engine.</span>
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              International flights to India — especially with families, multiple cities, layovers, and complex baggage — can be genuinely complicated. We exist to make that process simpler.
            </p>
            <Link href="/request-quote" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold mt-6">
              Talk to a Specialist
            </Link>
          </div>
        </div>

        {/* Bento grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        {/* Row 1: [col-1: PersonalFare cs-2] [col-3: IndiaExpertise cs-1] */}
        {/* Row 2: [col-1: FlexibleTravel cs-1] [col-2: HumanSupport cs-1] [col-3: MultiCity cs-1 — wait, needs 3] */}
        {/* Adjusted: 3-col grid, cards: PersonalFare(cs-2), IndiaExpertise(cs-1), FlexibleTravel(cs-1), HumanSupport(cs-1), MultiCity(cs-1), FamilyGroup(cs-2) — but that's 8 cols. Use 3-col: cs-1 all, last card cs-3 to fill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 0 — PersonalFare — spans 2 cols on lg */}
          {/* Card comment: col-1 to col-2, row 1 */}
          <div className="why-card scroll-reveal bg-card rounded-2xl border border-border p-6 sm:p-7 shadow-warm-sm card-hover lg:col-span-2">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              {benefits?.[0]?.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{benefits?.[0]?.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{benefits?.[0]?.description}</p>
          </div>

          {/* Card 1 — IndiaExpertise — col-3, row 1 */}
          <div className="why-card scroll-reveal bg-primary rounded-2xl p-6 sm:p-7 shadow-gold card-hover lg:col-span-1">
            <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
              {benefits?.[1]?.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-white mb-2">{benefits?.[1]?.title}</h3>
            <p className="text-white/80 text-sm leading-relaxed">{benefits?.[1]?.description}</p>
          </div>

          {/* Card 2 — FlexibleTravel — col-1, row 2 */}
          <div className="why-card scroll-reveal bg-card rounded-2xl border border-border p-6 sm:p-7 shadow-warm-sm card-hover">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              {benefits?.[2]?.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{benefits?.[2]?.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{benefits?.[2]?.description}</p>
          </div>

          {/* Card 3 — HumanSupport — col-2, row 2 */}
          <div className="why-card scroll-reveal bg-card rounded-2xl border border-border p-6 sm:p-7 shadow-warm-sm card-hover">
            <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
              {benefits?.[3]?.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{benefits?.[3]?.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{benefits?.[3]?.description}</p>
          </div>

          {/* Card 4 — MultiCity — col-3, row 2 */}
          <div className="why-card scroll-reveal bg-foreground rounded-2xl p-6 sm:p-7 card-hover">
            <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4">
              {benefits?.[4]?.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-white mb-2">{benefits?.[4]?.title}</h3>
            <p className="text-white/65 text-sm leading-relaxed">{benefits?.[4]?.description}</p>
          </div>

          {/* Card 5 — FamilyGroup — spans 2 cols on lg, col-1 to col-2, row 3 — last card fills remaining */}
          <div className="why-card scroll-reveal bg-card rounded-2xl border border-border p-6 sm:p-7 shadow-warm-sm card-hover lg:col-span-2">
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
              {benefits?.[5]?.icon}
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{benefits?.[5]?.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{benefits?.[5]?.description}</p>
          </div>

          {/* Card 6 — CTA card — col-3, row 3 to fill grid */}
          <div className="why-card scroll-reveal bg-secondary border-2 border-primary/30 border-dashed rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center card-hover">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-primary mb-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            <p className="font-display text-lg font-semibold text-foreground mb-2">Have a question?</p>
            <p className="text-muted-foreground text-sm mb-4">Talk to a real travel specialist today.</p>
            <Link href="/contact" className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}