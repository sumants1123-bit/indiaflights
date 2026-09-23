'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Trip',
    description: 'Enter your route, dates, and preferences through our simple quote form. The more you share, the better we can help.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Find Your Options',
    description: 'A travel specialist reviews available itinerary possibilities for your route, dates, and preferences — then prepares suitable options.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Choose & Travel',
    description: 'Review your options, select what works for you, and complete the booking with expert assistance every step of the way.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.step-card');
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('revealed'), i * 200);
            });
            if (pathRef.current) {
              pathRef.current.classList.add('animate-dash-draw');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 bg-background relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-96 h-96 blob-primary opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Simple Process</span>
          <h2 className="font-display text-section-xl text-foreground font-semibold mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Getting personalized flight options takes just a few minutes. No account needed, no commitment required.
          </p>
        </div>

        {/* Animated flight path SVG — desktop only */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[55%] -translate-y-1/2 w-[75%] pointer-events-none z-0">
          <svg viewBox="0 0 800 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
            <path
              ref={pathRef}
              d="M 50 40 Q 250 10 400 40 Q 550 70 750 40"
              stroke="#C8965A"
              strokeWidth="1.5"
              strokeDasharray="8 5"
              fill="none"
              style={{ strokeDashoffset: 300, strokeDasharray: '300' }}
            />
            <text x="400" y="28" textAnchor="middle" fontSize="14" fill="#C8965A" className="animate-plane-fly">✈</text>
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative z-10">
          {steps?.map((step, i) => (
            <div key={i} className="step-card scroll-reveal flex flex-col items-center text-center">
              {/* Step number + icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary">
                  {step?.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center font-display">
                  {i + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{step?.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">{step?.description}</p>

              {/* Connector arrow — desktop */}
              {i < steps?.length - 1 && (
                <div className="hidden md:flex absolute right-0 top-10 -translate-y-1/2 text-primary/30 text-2xl" aria-hidden>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/request-quote" className="btn-primary px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2">
            Start Your Quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}