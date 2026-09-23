import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toronto to Delhi: Direct vs Connecting Flights | IndiaFlights',
  description: 'What to weigh when choosing between a non-stop and a one-stop itinerary on the Toronto–Delhi route. Practical guidance from India flight specialists.',
  openGraph: {
    title: 'Toronto to Delhi: Direct vs Connecting Flights',
    description: 'What to weigh when choosing between a non-stop and a one-stop itinerary on the Toronto–Delhi route.',
    type: 'article'
  }
};

const relatedArticles = [
{
  title: 'Best Time to Book Flights From Canada to India',
  slug: 'best-time-book-canada-india',
  category: 'Planning',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1614390562902-51814b1322df',
  alt: 'Airplane flying above clouds at sunrise with warm golden light, aerial view from above'
},
{
  title: 'International Baggage Allowances Explained',
  slug: 'international-baggage-allowances',
  category: 'Travel Tips',
  readTime: '4 min read',
  image: 'https://images.unsplash.com/photo-1559626188-1d4f8c0815a4',
  alt: 'Colorful luggage suitcases stacked at airport check-in area with bright overhead lighting'
},
{
  title: 'Best Airports for Connecting to India',
  slug: 'best-airports-connecting-india',
  category: 'Routes',
  readTime: '5 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_164dd2388-1767775207570.png",
  alt: 'Modern international airport terminal with large windows and aircraft visible outside'
}];


const tocItems = [
{ id: 'the-route', label: 'The Toronto–Delhi Route' },
{ id: 'direct-flights', label: 'Direct (Non-Stop) Flights' },
{ id: 'connecting-flights', label: 'Connecting Flights' },
{ id: 'comparing-hubs', label: 'Comparing Connection Hubs' },
{ id: 'who-should-choose', label: 'Who Should Choose Which?' },
{ id: 'layover-tips', label: 'Making the Most of a Layover' },
{ id: 'booking-advice', label: 'Booking Advice' }];


export default function TorontoDelhiPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_13a041ea1-1773406689362.png"
          alt="Airport terminal interior with bright natural light, departure gates and travelers walking"
          fill
          className="object-cover"
          priority
          sizes="100vw" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/90 text-white tracking-wide">Routes</span>
            <span className="text-white/70 text-sm">6 min read</span>
            <span className="text-white/50 text-sm">·</span>
            <span className="text-white/70 text-sm">India Travel Journal</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Toronto to Delhi:<br className="hidden sm:block" />
            <span className="italic font-light text-gold-light"> Direct vs Connecting Flights</span>
          </h1>
        </div>
      </section>

      {/* Article body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 xl:gap-16">

          {/* Main content */}
          <article className="min-w-0">

            {/* Intro */}
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-4 border-primary pl-5 font-medium">
              Toronto to Delhi is one of the most traveled international routes in the Canadian diaspora. The choice between a direct flight and a connecting itinerary involves more than just travel time — it touches on comfort, baggage, cost, and the practicalities of a very long journey.
            </p>

            {/* Section 1 */}
            <section id="the-route" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">The Toronto–Delhi Route</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Toronto Pearson (YYZ) to Indira Gandhi International Airport (DEL) is a journey of roughly 11,000 kilometres. The great-circle route passes over Greenland, Northern Europe, and Central Asia — one of the longer international routes operated from Canada.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A non-stop flight covers this distance in approximately 14–15 hours. A connecting itinerary, depending on the hub and layover duration, typically adds 3–8 hours to the total journey time — but opens up a wider range of carriers, schedules, and routing options.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Neither option is universally better. The right choice depends on your priorities, travel party, and specific circumstances.
              </p>
            </section>

            {/* Section 2 */}
            <section id="direct-flights" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Direct (Non-Stop) Flights</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Non-stop service between Toronto and Delhi is operated by Air India and Air Canada, with Air India typically offering the most frequent schedule. These flights depart from Terminal 1 at Pearson and arrive at Terminal 3 in Delhi.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="font-semibold text-green-800 text-sm mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Advantages
                  </div>
                  <ul className="space-y-2 text-sm text-green-700">
                    {['No connection stress or missed-flight risk', 'Shorter total journey time', 'Single baggage check-in process', 'Better for elderly travelers and families with young children', 'Fewer disruption points'].map((item, i) =>
                    <li key={i} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-green-500 flex-shrink-0" />{item}</li>
                    )}
                  </ul>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                  <div className="font-semibold text-amber-800 text-sm mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    Considerations
                  </div>
                  <ul className="space-y-2 text-sm text-amber-700">
                    {['Fewer schedule options (typically 1–2 daily departures)', 'Less carrier choice', 'Can be harder to find availability during peak periods', 'Premium cabin options may be limited'].map((item, i) =>
                    <li key={i} className="flex items-start gap-2"><span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 flex-shrink-0" />{item}</li>
                    )}
                  </ul>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm">
                For many travelers — particularly those with elderly family members, young children, or a strong preference for simplicity — the non-stop option is worth prioritizing even if it requires more flexibility on dates or cabin class.
              </p>
            </section>

            {/* Section 3 */}
            <section id="connecting-flights" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Connecting Flights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A connecting itinerary routes you through an intermediate hub — most commonly in the Middle East (Dubai, Doha, Abu Dhabi), Europe (London, Frankfurt, Amsterdam, Paris), or South Asia (Colombo, Kathmandu). Each hub has its own characteristics.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Connecting flights typically offer more schedule flexibility — more departure time options, more carrier choices, and sometimes more availability during busy periods. They also allow you to choose your preferred hub airport, which can matter if you have a strong preference for a particular airline's lounge or transit experience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The key variables to evaluate on a connecting itinerary are: the layover duration, the quality of the connecting airport, whether your baggage transfers automatically, and whether you need a transit visa at the hub.
              </p>
            </section>

            {/* Section 4 */}
            <section id="comparing-hubs" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Comparing Connection Hubs</h2>
              <div className="space-y-4">
                {[
                { hub: 'Dubai (DXB)', airline: 'Emirates', notes: 'Excellent airport facilities, strong frequency from Toronto. Layovers of 2–4 hours are generally comfortable. No transit visa required for most Canadian passport holders.' },
                { hub: 'Doha (DOH)', airline: 'Qatar Airways', notes: 'Hamad International Airport is consistently rated among the world\'s best. Good lounge access in premium cabins. No transit visa required for most Canadian passport holders.' },
                { hub: 'Abu Dhabi (AUH)', airline: 'Etihad Airways', notes: 'Quieter than Dubai, with a more relaxed transit experience. US pre-clearance available for US-bound connections. No transit visa required for most Canadian passport holders.' },
                { hub: 'London (LHR)', airline: 'British Airways / Air India', notes: 'Heathrow is a large, busy airport. Connections can require terminal changes. Canadian citizens do not require a UK transit visa in most cases, but verify before travel.' },
                { hub: 'Frankfurt (FRA)', airline: 'Lufthansa', notes: 'Efficient German hub with good onward connections. Generally straightforward for Canadian passport holders. Schengen transit rules apply.' }].
                map((item, i) =>
                <div key={i} className="bg-card rounded-xl border border-border p-5">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div className="font-semibold text-foreground">{item.hub}</div>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full flex-shrink-0">{item.airline}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.notes}</p>
                  </div>
                )}
              </div>
              <p className="text-muted-foreground text-sm mt-4 p-4 bg-muted/50 rounded-lg border border-border">
                <strong className="text-foreground">Important:</strong> Transit visa requirements can change. Always verify current requirements for your specific passport and nationality before booking. A travel specialist can help clarify this for your situation.
              </p>
            </section>

            {/* Section 5 */}
            <section id="who-should-choose" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Who Should Choose Which?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-secondary rounded-xl p-6 border border-border">
                  <div className="font-display text-lg font-semibold text-foreground mb-4">Consider non-stop if you are:</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                    'Traveling with elderly parents or grandparents',
                    'Flying with infants or toddlers',
                    'On a tight schedule with limited time in India',
                    'Anxious about connections or tight layovers',
                    'Traveling with significant checked baggage',
                    'Prioritizing simplicity over schedule flexibility'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                        {item}
                      </li>
                    )}
                  </ul>
                </div>
                <div className="bg-secondary rounded-xl p-6 border border-border">
                  <div className="font-display text-lg font-semibold text-foreground mb-4">Consider connecting if you are:</div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                    'Flexible on departure times and dates',
                    'Interested in exploring a specific hub city',
                    'Traveling in a group with varied schedules',
                    'Looking for a wider range of cabin class options',
                    'Comfortable with airports and connections',
                    'Traveling to a secondary Indian city beyond Delhi'].
                    map((item, i) =>
                    <li key={i} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" /></svg>
                        {item}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="layover-tips" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Making the Most of a Layover</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you're connecting through a Middle Eastern hub, a layover of 3–5 hours is generally comfortable without feeling rushed. Shorter than 2 hours can feel tight on a busy day; longer than 6 hours may feel tedious unless you have lounge access or plan to rest.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Some travelers deliberately choose a longer layover — 8–12 hours — to rest in an airport hotel, particularly on the outbound journey when arriving in Delhi well-rested can make a real difference to the first day of travel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                If you're traveling in business or premium economy, most major hub airports offer excellent lounge facilities that make longer layovers considerably more comfortable.
              </p>
            </section>

            {/* Section 7 */}
            <section id="booking-advice" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Booking Advice</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you request a quote for the Toronto–Delhi route, it helps to share your preferences upfront: whether you have a strong preference for non-stop, which hubs you'd prefer to avoid, your baggage requirements, and whether you're traveling with anyone who has specific needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A travel specialist familiar with this route can present you with options across both non-stop and connecting itineraries, explain the trade-offs for your specific situation, and help you make a decision that fits your journey — not just the cheapest available fare.
              </p>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-8 border border-primary/20 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Planning a Toronto–Delhi Journey?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    Share your travel details and preferences — direct or connecting, dates, cabin class, travel party — and a specialist will come back with suitable options for your specific situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/request-quote" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold text-center">
                      Request a Flight Quote
                    </Link>
                    <Link href="/contact" className="btn-outline px-6 py-3 rounded-full text-sm font-semibold text-center">
                      Ask a Question
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              <div className="bg-card rounded-2xl border border-border p-6 shadow-warm-sm">
                <h3 className="font-display text-base font-semibold text-foreground mb-4">In This Guide</h3>
                <nav className="space-y-1">
                  {tocItems.map((item) =>
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 pl-3 border-l-2 border-transparent hover:border-primary">
                    
                      {item.label}
                    </a>
                  )}
                </nav>
              </div>

              <div className="bg-foreground rounded-2xl p-6 text-white">
                <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Toronto → Delhi</div>
                <p className="font-display text-lg font-semibold mb-3 leading-snug">Get options for your Toronto–Delhi journey</p>
                <p className="text-white/60 text-xs mb-5 leading-relaxed">Direct or connecting — tell us your preferences and we'll find what works for you.</p>
                <Link href="/request-quote" className="block w-full btn-primary text-sm font-semibold py-3 rounded-full text-center">
                  Request a Quote
                </Link>
              </div>

              <div className="bg-secondary rounded-xl p-4 border border-border text-xs text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  6 min read
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                  Routes
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  India Travel Journal
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-8">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedArticles.map((article, i) =>
            <Link
              key={i}
              href={`/travel-guides/${article.slug}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-warm-sm card-hover block">
              
                <div className="relative h-44 overflow-hidden">
                  <AppImage
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw" />
                
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{article.category}</span>
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/#guides" className="btn-outline px-7 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to India Travel Journal
          </Link>
        </div>
      </div>

      <Footer />
    </div>);

}