'use client';

import React, { useState } from 'react';

interface Route {
  from: string;
  to: string;
  fare?: string;
  currency?: string;
}

const tabs = ['USA ↔ India', 'Canada ↔ India', 'UAE & Gulf ↔ India'];

const routeData: Record<string, Route[]> = {
  'USA ↔ India': [
    { from: 'San Francisco', to: 'Delhi', fare: '699', currency: '$' },
    { from: 'San Francisco', to: 'Mumbai', fare: '699', currency: '$' },
    { from: 'San Francisco', to: 'Bangalore' },
    { from: 'Los Angeles', to: 'Delhi', fare: '699', currency: '$' },
    { from: 'Los Angeles', to: 'Mumbai' },
    { from: 'Seattle', to: 'Delhi' },
    { from: 'Dallas', to: 'Delhi', fare: '699', currency: '$' },
    { from: 'Houston', to: 'Delhi' },
    { from: 'New York', to: 'Delhi', fare: '649', currency: '$' },
    { from: 'Chicago', to: 'Delhi', fare: '649', currency: '$' },
    { from: 'Denver', to: 'Delhi' },
    { from: 'Phoenix', to: 'Chennai' },
  ],
  'Canada ↔ India': [
    { from: 'Toronto', to: 'Delhi', fare: '1,399', currency: 'CAD' },
    { from: 'Toronto', to: 'Mumbai', fare: '1,399', currency: 'CAD' },
    { from: 'Toronto', to: 'Amritsar', fare: '1,449', currency: 'CAD' },
    { from: 'Toronto', to: 'Ahmedabad' },
    { from: 'Vancouver', to: 'Delhi', fare: '1,449', currency: 'CAD' },
    { from: 'Vancouver', to: 'Mumbai' },
    { from: 'Calgary', to: 'Delhi', fare: '1,499', currency: 'CAD' },
  ],
  'UAE & Gulf ↔ India': [
    { from: 'Dubai', to: 'Delhi', fare: '399', currency: 'AED' },
    { from: 'Dubai', to: 'Mumbai', fare: '399', currency: 'AED' },
    { from: 'Dubai', to: 'Ahmedabad', fare: '399', currency: 'AED' },
    { from: 'Dubai', to: 'Amritsar', fare: '449', currency: 'AED' },
    { from: 'Abu Dhabi', to: 'Delhi', fare: '399', currency: 'AED' },
    { from: 'Abu Dhabi', to: 'Mumbai' },
    { from: 'Sharjah', to: 'Delhi', fare: '399', currency: 'AED' },
    { from: 'Muscat', to: 'India' },
    { from: 'Kuwait', to: 'India' },
    { from: 'Doha', to: 'India' },
  ],
};

function RouteCard({ route }: { route: Route }) {
  const waMsg = encodeURIComponent(
    `Hi Northstar Travel Solutions, I'm looking for flight options from ${route.from} to ${route.to}. Please share the latest available fare.`
  );
  return (
    <div className="group flex items-center justify-between gap-3 py-3.5 px-4 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-warm-sm transition-all duration-200">
      <div className="flex items-center gap-3 min-w-0">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/8 flex items-center justify-center">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">
            {route.from} <span className="text-muted-foreground font-normal">→</span> {route.to}
          </p>
          {route.fare ? (
            <p className="text-xs text-primary font-medium mt-0.5">From {route.currency}{route.fare}*</p>
          ) : (
            <p className="text-xs text-muted-foreground mt-0.5">Request current fare</p>
          )}
        </div>
      </div>
      <a
        href={`https://wa.me/919115652165?text=${waMsg}`}
        className="flex-shrink-0 text-xs font-semibold text-primary border border-primary/30 px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-all duration-200 whitespace-nowrap"
      >
        Check Fare
      </a>
    </div>
  );
}

export default function InternationalRoutesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentRoutes = routeData[tabs[activeTab]] || [];

  return (
    <section className="py-16 sm:py-20 bg-background" id="international-routes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">International Flights</span>
          <h2 className="font-display text-section-xl text-foreground font-semibold leading-tight mb-3">
            Popular India<br />
            <span className="italic font-light text-primary">Flight Routes</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Popular routes we regularly assist with. Request the latest available fare for your travel dates.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1 scrollbar-hide">
          {tabs?.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === i
                  ? 'bg-primary text-white shadow-gold'
                  : 'bg-secondary text-foreground hover:bg-secondary/80 border border-border'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Routes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {currentRoutes?.map((route, i) => (
            <RouteCard key={i} route={route} />
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://wa.me/919115652165"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            WhatsApp for Fare
          </a>
          <a href="/request-quote" className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
            Request a Quote
          </a>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-xs text-muted-foreground/70 leading-relaxed max-w-3xl border-t border-border pt-6">
          *Starting fares are indicative basic fares and are subject to availability. Taxes, airline fees, baggage charges, service fees and other applicable charges may be additional. Fares may change depending on travel dates, airline availability and booking conditions. Please contact us for the latest available fare.
        </p>
      </div>
    </section>
  );
}
