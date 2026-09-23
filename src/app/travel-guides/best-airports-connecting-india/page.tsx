import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Best Airports for Connecting to India | Himalaya Travel Solutions',
  description: 'A practical guide to the best international hub airports for connecting flights to India — Dubai, Doha, London, Frankfurt and more.'
};

const toc = [
{ id: 'middle-east', label: 'Middle East Hubs' },
{ id: 'europe', label: 'European Hubs' },
{ id: 'southeast-asia', label: 'Southeast Asian Hubs' },
{ id: 'layover-tips', label: 'Making the Most of a Layover' },
{ id: 'choosing', label: 'How to Choose Your Hub' }];


const relatedGuides = [
{
  title: 'Flying From the USA to India: What to Know Before You Book',
  slug: 'usa-to-india-what-to-know',
  category: 'Planning',
  readTime: '8 min read',
  image: 'https://images.unsplash.com/photo-1581553672347-95d9444c0d2c',
  alt: 'Passport and boarding pass on a wooden table with warm afternoon light'
},
{
  title: 'Toronto to Delhi: Direct vs Connecting Flights',
  slug: 'toronto-delhi-direct-vs-connecting',
  category: 'Routes',
  readTime: '6 min read',
  image: "https://images.unsplash.com/photo-1622868556687-a57ac5c1f467",
  alt: 'Airport terminal interior with bright natural light and departure gates'
},
{
  title: 'International Baggage Allowances Explained',
  slug: 'international-baggage-allowances',
  category: 'Travel Tips',
  readTime: '4 min read',
  image: "https://images.unsplash.com/photo-1684631491517-6c94713c7159",
  alt: 'Colorful luggage suitcases stacked at airport check-in area'
}];


export default function BestAirportsPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
          <AppImage
            src="https://images.unsplash.com/photo-1725859313485-bc19c4c79c13"
            alt="Modern international airport terminal with large windows, aircraft on tarmac and travelers walking through departure hall"
            fill
            priority
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/80 text-white">Routes</span>
              <span className="text-xs text-white/70">5 min read</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-semibold text-white leading-tight">
              Best Airports for Connecting to India
            </h1>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar TOC */}
            <aside className="lg:col-span-3 order-2 lg:order-1">
              <div className="sticky top-24 bg-card border border-border rounded-2xl p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">In This Guide</p>
                <nav className="space-y-2">
                  {toc?.map((item) =>
                  <a key={item?.id} href={`#${item?.id}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3">
                      {item?.label}
                    </a>
                  )}
                </nav>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">Planning a trip to India?</p>
                  <Link href="/request-quote" className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold text-center block">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-9 order-1 lg:order-2 max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                Most flights from North America to India involve at least one connection. The hub airport you transit through can affect your total travel time, comfort, fare, and even your baggage allowance. Here is a practical look at the most common connection points.
              </p>

              <section id="middle-east" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Middle East Hubs</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Gulf carriers — Emirates, Etihad, and Qatar Airways — have built their networks specifically around connecting long-haul routes. For North America to India, they offer some of the most competitive fares and the widest choice of Indian destinations.
                </p>
                <div className="space-y-4">
                  {[
                  {
                    airport: 'Dubai International (DXB)',
                    airline: 'Emirates',
                    pros: 'Enormous terminal, excellent lounges, wide range of Indian city connections, frequent departures. One of the busiest airports in the world.',
                    cons: 'Can be very busy. Allow at least 2 hours for connections.'
                  },
                  {
                    airport: 'Hamad International, Doha (DOH)',
                    airline: 'Qatar Airways',
                    pros: 'Consistently rated among the world\'s best airports. Excellent facilities, smooth connections, strong India network.',
                    cons: 'Slightly fewer Indian destinations than Dubai.'
                  },
                  {
                    airport: 'Abu Dhabi International (AUH)',
                    airline: 'Etihad Airways',
                    pros: 'Less congested than Dubai. US pre-clearance available (US passport holders clear US customs in Abu Dhabi). Good India connections.',
                    cons: 'Fewer frequencies than Dubai or Doha.'
                  }]?.
                  map((item) =>
                  <div key={item?.airport} className="bg-card border border-border rounded-xl p-5">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <p className="font-semibold text-foreground">{item?.airport}</p>
                          <p className="text-xs text-primary font-medium mt-0.5">{item?.airline}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Strengths</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item?.pros}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Consider</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item?.cons}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section id="europe" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">European Hubs</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  European connections are a popular choice, particularly for travelers who want to add a European stopover or prefer European carriers.
                </p>
                <div className="space-y-4">
                  {[
                  {
                    airport: 'London Heathrow (LHR)',
                    airline: 'British Airways, Virgin Atlantic, Air India',
                    pros: 'Strong India connections, particularly to Delhi and Mumbai. Good for UK-based travelers or those wanting a London stopover.',
                    cons: 'Indian passport holders may need a UK transit visa. Heathrow can be congested.'
                  },
                  {
                    airport: 'Frankfurt (FRA)',
                    airline: 'Lufthansa',
                    pros: 'Efficient German airport, good connections to major Indian cities. Lufthansa\'s India network is solid.',
                    cons: 'Fewer Indian destinations than Gulf hubs.'
                  },
                  {
                    airport: 'Amsterdam Schiphol (AMS)',
                    airline: 'KLM',
                    pros: 'Compact and easy to navigate. KLM serves several Indian cities. Good for travelers from eastern Canada.',
                    cons: 'Fewer Indian city options than Gulf carriers.'
                  }]?.
                  map((item) =>
                  <div key={item?.airport} className="bg-card border border-border rounded-xl p-5">
                      <p className="font-semibold text-foreground mb-1">{item?.airport}</p>
                      <p className="text-xs text-primary font-medium mb-3">{item?.airline}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Strengths</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item?.pros}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Consider</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item?.cons}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section id="southeast-asia" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Southeast Asian Hubs</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Some itineraries route through Southeast Asian hubs, particularly for travelers heading to South or East India.
                </p>
                <div className="space-y-4">
                  {[
                  {
                    airport: 'Singapore Changi (SIN)',
                    airline: 'Singapore Airlines, IndiGo, Air India',
                    pros: 'Consistently rated the world\'s best airport. Excellent facilities, efficient connections, strong South India network.',
                    cons: 'Longer total journey time from North America compared to Middle East routing.'
                  },
                  {
                    airport: 'Kuala Lumpur (KUL)',
                    airline: 'Malaysia Airlines, AirAsia',
                    pros: 'Budget-friendly option. Good connections to South Indian cities.',
                    cons: 'Longer journey time. Budget carriers may have stricter baggage rules.'
                  }]?.
                  map((item) =>
                  <div key={item?.airport} className="bg-card border border-border rounded-xl p-5">
                      <p className="font-semibold text-foreground mb-1">{item?.airport}</p>
                      <p className="text-xs text-primary font-medium mb-3">{item?.airline}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <p className="text-xs font-semibold text-green-600 uppercase tracking-wider mb-1">Strengths</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item?.pros}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Consider</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item?.cons}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section id="layover-tips" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Making the Most of a Layover</h2>
                <div className="space-y-3">
                  {[
                  { tip: 'Allow adequate connection time', detail: 'For international-to-international connections, allow at least 2 hours. At very busy airports like Dubai or Heathrow, 2.5–3 hours is safer.' },
                  { tip: 'Check if you need a transit visa', detail: 'Some nationalities require a transit visa even if they do not leave the airport. Verify before booking.' },
                  { tip: 'Use airport lounges', detail: 'Many credit cards and airline status programs provide lounge access. A long layover is much more comfortable with lounge facilities.' },
                  { tip: 'Consider a deliberate long layover', detail: 'If you have 8+ hours, some airports (Dubai, Singapore, Doha) offer free or low-cost city tours for transit passengers.' }]?.
                  map((item, i) =>
                  <div key={i} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">{item?.tip}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item?.detail}</p>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section id="choosing" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">How to Choose Your Hub</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The best connection hub depends on several factors:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                  { factor: 'Your destination in India', detail: 'Gulf hubs serve the widest range of Indian cities. For South India, Singapore can be competitive.' },
                  { factor: 'Your departure city', detail: 'From eastern Canada and the US East Coast, European hubs can be geographically convenient.' },
                  { factor: 'Fare', detail: 'Gulf carriers are often most competitive on price. Compare across hubs for your specific dates.' },
                  { factor: 'Visa requirements', detail: 'If you hold an Indian passport, check transit visa requirements for European hubs before booking.' }]?.
                  map((item) =>
                  <div key={item?.factor} className="bg-secondary border border-border rounded-xl p-4">
                      <p className="font-semibold text-foreground text-sm mb-1">{item?.factor}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item?.detail}</p>
                    </div>
                  )}
                </div>
              </section>

              {/* CTA */}
              <div className="bg-primary/8 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Not Sure Which Route Is Best for You?</h3>
                <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
                  A Himalaya Travel Solutions specialist can help you compare routing options and find the best available fare for your journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/request-quote" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
                    Request a Quote
                  </Link>
                  <a href="https://wa.me/[WHATSAPP]?text=Hi%20Himalaya%20Travel%20Solutions%2C%20I%27d%20like%20help%20choosing%20the%20best%20connection%20for%20my%20India%20trip." className="btn-outline px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z" />
                    </svg>
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </article>
          </div>

          {/* Related guides */}
          <div className="mt-16 pt-10 border-t border-border">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Related Guides</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {relatedGuides?.map((guide) =>
              <Link key={guide?.slug} href={`/travel-guides/${guide?.slug}`} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-warm-sm card-hover block">
                  <div className="relative h-36 overflow-hidden">
                    <AppImage src={guide?.image} alt={guide?.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{guide?.category}</span>
                      <span className="text-xs text-muted-foreground">{guide?.readTime}</span>
                    </div>
                    <h4 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{guide?.title}</h4>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>);

}