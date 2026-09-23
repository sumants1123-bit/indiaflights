import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Toronto to Mumbai Travel Guide | Himalaya Travel Solutions',
  description: 'Everything you need to know about flying from Toronto to Mumbai — routing options, flight times, best connections, and tips for arriving in India\'s financial capital.'
};

const toc = [
{ id: 'overview', label: 'Route Overview' },
{ id: 'connections', label: 'Connection Options' },
{ id: 'flight-time', label: 'Flight Times' },
{ id: 'mumbai-arrival', label: 'Arriving in Mumbai' },
{ id: 'best-time', label: 'Best Time to Travel' },
{ id: 'tips', label: 'Practical Tips' }];


const relatedGuides = [
{
  title: 'Toronto to Delhi: Direct vs Connecting Flights',
  slug: 'toronto-delhi-direct-vs-connecting',
  category: 'Routes',
  readTime: '6 min read',
  image: "https://images.unsplash.com/photo-1622868556687-a57ac5c1f467",
  alt: 'Airport terminal interior with bright natural light and departure gates'
},
{
  title: 'Best Time to Book Flights From Canada to India',
  slug: 'best-time-book-canada-india',
  category: 'Planning',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1614390562902-51814b1322df',
  alt: 'Airplane flying above clouds at sunrise with warm golden light'
},
{
  title: 'International Baggage Allowances Explained',
  slug: 'international-baggage-allowances',
  category: 'Travel Tips',
  readTime: '4 min read',
  image: "https://images.unsplash.com/photo-1684631491517-6c94713c7159",
  alt: 'Colorful luggage suitcases stacked at airport check-in area'
}];


export default function TorontoMumbaiPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
          <AppImage
            src="https://images.unsplash.com/photo-1600333662335-2aed0ba1aabb"
            alt="Mumbai skyline at dusk with city lights reflecting on the water, Bandra-Worli Sea Link bridge visible in the background"
            fill
            priority
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/80 text-white">Routes</span>
              <span className="text-xs text-white/70">6 min read</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-semibold text-white leading-tight">
              Toronto to Mumbai Travel Guide
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
                  <p className="text-xs text-muted-foreground mb-3">Flying Toronto to Mumbai?</p>
                  <Link href="/request-quote" className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold text-center block">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-9 order-1 lg:order-2 max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                Toronto to Mumbai is one of the most traveled Canada–India routes, connecting Canada's largest city with India's financial and entertainment capital. Here is a practical guide to the journey.
              </p>

              <section id="overview" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Route Overview</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                  { label: 'Departure', value: 'Toronto Pearson (YYZ)' },
                  { label: 'Arrival', value: 'Chhatrapati Shivaji Maharaj (BOM)' },
                  { label: 'Total Distance', value: 'Approx. 11,800 km' },
                  { label: 'Time Difference', value: 'Mumbai is 9.5 hrs ahead of Toronto (EST)' }]?.
                  map((item) =>
                  <div key={item?.label} className="bg-card border border-border rounded-xl p-4 text-center">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{item?.label}</p>
                      <p className="text-sm font-medium text-foreground leading-snug">{item?.value}</p>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  There are currently no non-stop flights between Toronto and Mumbai. All itineraries involve at least one connection, most commonly through a Middle Eastern or European hub.
                </p>
              </section>

              <section id="connections" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Connection Options</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  The most common routing options for Toronto–Mumbai are via Middle Eastern hubs, which offer the most frequent connections and competitive fares.
                </p>
                <div className="space-y-4">
                  {[
                  {
                    hub: 'Via Dubai (DXB)',
                    airlines: 'Emirates',
                    note: 'One of the most popular options. Emirates operates multiple daily flights from Toronto to Dubai, with onward connections to Mumbai. Excellent in-flight product.'
                  },
                  {
                    hub: 'Via Doha (DOH)',
                    airlines: 'Qatar Airways',
                    note: 'Qatar Airways flies Toronto–Doha–Mumbai. Hamad International Airport is consistently rated among the world\'s best for transit experience.'
                  },
                  {
                    hub: 'Via Abu Dhabi (AUH)',
                    airlines: 'Etihad Airways',
                    note: 'Etihad connects Toronto to Mumbai via Abu Dhabi. US pre-clearance is available at Abu Dhabi for US-bound return journeys.'
                  },
                  {
                    hub: 'Via London (LHR)',
                    airlines: 'British Airways, Air India',
                    note: 'A European routing option. Air India operates London–Mumbai. Note that Indian passport holders may need a UK transit visa.'
                  },
                  {
                    hub: 'Via Frankfurt (FRA)',
                    airlines: 'Lufthansa',
                    note: 'Lufthansa connects Toronto to Mumbai via Frankfurt. Good option for those who prefer a European carrier.'
                  }]?.
                  map((item) =>
                  <div key={item?.hub} className="bg-card border border-border rounded-xl p-5">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <p className="font-semibold text-foreground">{item?.hub}</p>
                        <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full flex-shrink-0">{item?.airlines}</span>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item?.note}</p>
                    </div>
                  )}
                </div>
              </section>

              <section id="flight-time" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Flight Times</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Total journey time from Toronto to Mumbai depends on your connection hub and layover duration.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                  { route: 'Toronto → Dubai', time: 'Approx. 13–14 hours' },
                  { route: 'Dubai → Mumbai', time: 'Approx. 3 hours' },
                  { route: 'Toronto → Doha', time: 'Approx. 13–14 hours' },
                  { route: 'Doha → Mumbai', time: 'Approx. 3 hours' }]?.
                  map((item) =>
                  <div key={item?.route} className="flex items-center justify-between p-4 bg-card border border-border rounded-xl">
                      <p className="text-sm font-medium text-foreground">{item?.route}</p>
                      <span className="text-sm text-primary font-semibold">{item?.time}</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                  Total door-to-door journey time including connection is typically 20–26 hours depending on layover length.
                </p>
              </section>

              <section id="mumbai-arrival" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Arriving in Mumbai</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Chhatrapati Shivaji Maharaj International Airport (BOM) is one of India's busiest airports. Terminal 2 handles all international arrivals.
                </p>
                <div className="space-y-3">
                  {[
                  { item: 'Immigration', detail: 'International arrivals clear immigration at Terminal 2. Queues can be long during peak hours. e-Visa holders use the dedicated e-Visa counter.' },
                  { item: 'Baggage claim', detail: 'Baggage carousels are in the arrivals hall after immigration. Allow 30–60 minutes for baggage to appear.' },
                  { item: 'Transport from airport', detail: 'Pre-paid taxis, app-based cabs (Ola, Uber), and the Mumbai Metro are all available. Pre-booking a pickup is recommended, especially late at night.' },
                  { item: 'SIM card', detail: 'International SIM cards and local SIM card counters are available in the arrivals hall. A local SIM is useful for navigation and communication.' }]?.
                  map((item) =>
                  <div key={item?.item} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">{item?.item}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item?.detail}</p>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section id="best-time" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Best Time to Travel</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                  { period: 'November–February', rating: 'Best', note: 'Cool, dry weather in Mumbai. Pleasant for sightseeing. Peak demand — book early.' },
                  { period: 'March–May', rating: 'Good', note: 'Warm and dry. Pre-monsoon. Shoulder season with reasonable availability.' },
                  { period: 'June–September', rating: 'Monsoon', note: 'Heavy rainfall in Mumbai. Lower demand, but weather can be disruptive.' }]?.
                  map((item) =>
                  <div key={item?.period} className="bg-card border border-border rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold text-foreground">{item?.period}</p>
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item?.rating === 'Best' ? 'bg-green-100 text-green-700' : item?.rating === 'Good' ? 'bg-primary/10 text-primary' : 'bg-secondary text-muted-foreground'}`}>{item?.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item?.note}</p>
                    </div>
                  )}
                </div>
              </section>

              <section id="tips" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Practical Tips</h2>
                <div className="space-y-3">
                  {[
                  { tip: 'Check your Indian visa', detail: 'Canadian passport holders can apply for an Indian e-Visa online. Apply at least 4–7 days before travel.' },
                  { tip: 'Confirm baggage allowance', detail: 'Baggage rules vary by airline and fare class. Confirm your allowance for each segment of the journey.' },
                  { tip: 'Arrive at Pearson early', detail: 'Toronto Pearson can be busy. Allow at least 3 hours before international departure.' },
                  { tip: 'Stay hydrated on the flight', detail: 'The journey is long. Drink water regularly and avoid excessive alcohol, which increases dehydration.' }]?.
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

              {/* CTA */}
              <div className="bg-primary/8 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Planning a Toronto to Mumbai Trip?</h3>
                <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
                  A Himalaya Travel Solutions specialist can help you find the best available routing and fare for your travel dates.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/request-quote" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
                    Request a Quote
                  </Link>
                  <a href="https://wa.me/[WHATSAPP]?text=Hi%20Himalaya%20Travel%20Solutions%2C%20I%27m%20looking%20for%20flights%20from%20Toronto%20to%20Mumbai." className="btn-outline px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
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