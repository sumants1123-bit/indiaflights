import React from 'react';
import Link from 'next/link';

const trustPoints = [
  'Competitive Fares',
  'Domestic & International Flights',
  'USA–India & Canada–India Travel',
  'Hotels Across India & Worldwide',
  'Train & Bus Booking',
  'Personalized Travel Assistance',
  'Quick WhatsApp Support',
  'Experienced Travel Professionals',
];

export default function WhyHimalayaSection() {
  return (
    <section className="py-16 sm:py-20 bg-foreground relative overflow-hidden">
      <div className="absolute inset-0 jaali-subtle opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">Why Choose Us</span>
            <h2 className="font-display text-section-xl text-white font-semibold leading-tight mb-5">
              Travel support that<br />
              <span className="italic font-light text-gold-light">stays personal.</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              From your first fare enquiry to your final itinerary, Northstar Travel Solutions combines practical travel experience with responsive, one-to-one assistance.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/request-quote" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold">
                Get a Quote
              </Link>
              <a
                href="https://wa.me/919115652165"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-semibold hover:border-white/60 transition-colors"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                WhatsApp a Specialist
              </a>
            </div>
          </div>

          {/* Right: checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {trustPoints?.map((point) => (
              <div key={point} className="flex items-center gap-3 py-3 px-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#D97706" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-white/85 text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
