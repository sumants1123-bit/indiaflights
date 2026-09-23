import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function OtherServicesSection() {
  return (
    <section className="py-16 sm:py-20 bg-background">
      {/* Train Tickets */}
      <div id="trains" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_457cb1a87-1789543434324.png"
              alt="Indian train travelling through scenic countryside landscape at golden hour with mountains in background"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Rail Travel</span>
            <h2 className="font-display text-section-lg text-foreground font-semibold leading-tight mb-4">
              Train Tickets<br />
              <span className="italic font-light text-primary">Across India</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Travelling within India by rail? We can assist with train ticket enquiries across the country — from express trains to overnight sleepers.
            </p>
            <a
              href={`https://wa.me/[WHATSAPP]?text=${encodeURIComponent('Hi Himalaya Travel Solutions, I need help with train travel in India. Please assist.')}`}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
              
              Enquire About Train Travel
            </a>
          </div>
        </div>
      </div>

      {/* Hotels */}
      <div id="hotels" className="bg-secondary py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Accommodation</span>
              <h2 className="font-display text-section-lg text-foreground font-semibold leading-tight mb-4">
                Hotels in India<br />
                <span className="italic font-light text-primary">&amp; Worldwide</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6">
                From practical stays to premium and luxury hotels, let us help you find accommodation that suits your destination and travel style.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Budget', 'Premium', 'Luxury']?.map((cat) =>
                <span key={cat} className="px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground">
                    {cat}
                  </span>
                )}
              </div>
              <a
                href={`https://wa.me/[WHATSAPP]?text=${encodeURIComponent('Hi Himalaya Travel Solutions, I need help finding a hotel. Please assist.')}`}
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
                
                Find a Hotel
              </a>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden aspect-[4/3] relative">
              <AppImage
                src="https://images.unsplash.com/photo-1712853498963-84aab948c7d8"
                alt="Luxury hotel pool with elegant architecture and palm trees reflecting in calm water at sunset"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Bus Travel */}
      <div id="buses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] relative">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_14102dac2-1780577987113.png"
              alt="Modern luxury bus on a scenic mountain highway road in India during daytime"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
          </div>
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Road Travel</span>
            <h2 className="font-display text-section-lg text-foreground font-semibold leading-tight mb-4">
              Bus &amp; Luxury<br />
              <span className="italic font-light text-primary">Bus Travel</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Convenient bus travel across India including AC, Sleeper, Volvo and premium luxury services — for comfortable inter-city journeys.
            </p>
            <a
              href={`https://wa.me/[WHATSAPP]?text=${encodeURIComponent('Hi Himalaya Travel Solutions, I need help with bus travel in India. Please assist.')}`}
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold">
              
              Enquire About Bus Travel
            </a>
          </div>
        </div>
      </div>
    </section>);

}