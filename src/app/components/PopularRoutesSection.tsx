'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const routes = [
  { from: 'Toronto', fromCode: 'YYZ', to: 'Delhi', toCode: 'DEL', flag: '🇨🇦' },
  { from: 'Toronto', fromCode: 'YYZ', to: 'Mumbai', toCode: 'BOM', flag: '🇨🇦' },
  { from: 'Vancouver', fromCode: 'YVR', to: 'Delhi', toCode: 'DEL', flag: '🇨🇦' },
  { from: 'New York', fromCode: 'JFK', to: 'Delhi', toCode: 'DEL', flag: '🇺🇸' },
  { from: 'New York', fromCode: 'JFK', to: 'Mumbai', toCode: 'BOM', flag: '🇺🇸' },
  { from: 'Chicago', fromCode: 'ORD', to: 'Delhi', toCode: 'DEL', flag: '🇺🇸' },
  { from: 'San Francisco', fromCode: 'SFO', to: 'Delhi', toCode: 'DEL', flag: '🇺🇸' },
  { from: 'Dallas', fromCode: 'DFW', to: 'Hyderabad', toCode: 'HYD', flag: '🇺🇸' },
  { from: 'Washington', fromCode: 'IAD', to: 'Delhi', toCode: 'DEL', flag: '🇺🇸' },
  { from: 'Los Angeles', fromCode: 'LAX', to: 'Mumbai', toCode: 'BOM', flag: '🇺🇸' },
];

export default function PopularRoutesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.route-card-item');
            cards.forEach((card, i) => {
              setTimeout(() => {
                card.classList.add('revealed');
              }, i * 80);
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
    <section id="flights" ref={sectionRef} className="py-16 sm:py-20 bg-background jaali-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Popular Connections</span>
          <h2 className="font-display text-section-xl text-foreground font-semibold mb-4">
            Popular Routes to India
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Flying from North America to India? We specialize in these routes and know the best connections, seasonal patterns, and routing options.
          </p>
        </div>

        {/* Grid: 2 cols mobile, 3 cols md, 5 cols lg — 10 cards = 2 rows of 5 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {routes?.map((route, i) => (
            <Link
              key={i}
              href="/request-quote"
              className="route-card route-card-item scroll-reveal card-hover group bg-card rounded-2xl border border-border p-4 sm:p-5 flex flex-col gap-3 shadow-warm-sm hover:border-primary/40"
            >
              {/* Flag + origin */}
              <div className="flex items-center gap-2">
                <span className="text-lg">{route?.flag}</span>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">{route?.fromCode}</p>
                  <p className="text-sm font-semibold text-foreground leading-tight">{route?.from}</p>
                </div>
              </div>

              {/* Animated route line SVG */}
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="flex-1 relative h-4">
                  <svg viewBox="0 0 100 20" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <path
                      d="M0 10 Q50 2 100 10"
                      fill="none"
                      stroke="#DDD8CF"
                      strokeWidth="1.5"
                      strokeDasharray="4 3"
                    />
                    <path
                      className="route-line"
                      d="M0 10 Q50 2 100 10"
                      fill="none"
                      stroke="#C8965A"
                      strokeWidth="1.5"
                    />
                    <g className="animate-plane-fly">
                      <text x="45" y="6" fontSize="8" textAnchor="middle" className="fill-primary">✈</text>
                    </g>
                  </svg>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>

              {/* Destination */}
              <div>
                <p className="text-xs text-muted-foreground font-medium">{route?.toCode}</p>
                <p className="text-sm font-semibold text-foreground leading-tight">{route?.to}</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">India 🇮🇳</p>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-2 border-t border-border/60">
                <span className="text-xs font-semibold text-primary group-hover:text-accent transition-colors flex items-center gap-1">
                  Request Fare
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-[10px] text-muted-foreground mt-0.5">Flexible-date options available</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground mb-4">Don&apos;t see your route? We cover many more destinations.</p>
          <Link href="/request-quote" className="btn-outline px-7 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            Ask About Any Route
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}