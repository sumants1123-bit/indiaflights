import React from 'react';

const domesticRoutes = [
  { from: 'Delhi', to: 'Mumbai' },
  { from: 'Delhi', to: 'Bangalore' },
  { from: 'Delhi', to: 'Hyderabad' },
  { from: 'Delhi', to: 'Chennai' },
  { from: 'Delhi', to: 'Amritsar' },
  { from: 'Delhi', to: 'Chandigarh' },
  { from: 'Mumbai', to: 'Goa' },
  { from: 'Mumbai', to: 'Kochi' },
  { from: 'Bangalore', to: 'Hyderabad' },
  { from: 'Chennai', to: 'Mumbai' },
  { from: 'Kolkata', to: 'Delhi' },
  { from: 'Ahmedabad', to: 'Delhi' },
];

export default function DomesticFlightsSection() {
  return (
    <section id="domestic" className="py-14 sm:py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Domestic Flights</span>
            <h2 className="font-display text-section-lg text-foreground font-semibold leading-tight mb-4">
              Explore India
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Domestic flight assistance for major cities and regional destinations across India. Let us help you find the right connections for your journey.
            </p>
            <a
              href={`https://wa.me/[WHATSAPP]?text=${encodeURIComponent('Hi Himalaya Travel Solutions, I need help with a domestic India flight. Please assist.')}`}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Request a Domestic Fare
            </a>
          </div>

          {/* Right: Route chips */}
          <div>
            <div className="flex flex-wrap gap-2.5">
              {domesticRoutes?.map((route, i) => {
                const waMsg = encodeURIComponent(
                  `Hi Himalaya Travel Solutions, I'm looking for a domestic flight from ${route?.from} to ${route?.to}. Please share the latest available fare.`
                );
                return (
                  <a
                    key={i}
                    href={`https://wa.me/[WHATSAPP]?text=${waMsg}`}
                    className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:border-primary hover:bg-primary/5 transition-all duration-200 text-sm font-medium text-foreground hover:text-primary"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/60 group-hover:text-primary">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                    {route?.from}→ {route?.to}
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-muted-foreground mt-5">
              Don&apos;t see your route? <a href="https://wa.me/[WHATSAPP]" className="text-primary font-medium hover:underline">Ask us on WhatsApp</a> — we assist with all domestic destinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
