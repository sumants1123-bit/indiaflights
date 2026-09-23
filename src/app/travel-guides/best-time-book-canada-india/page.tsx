import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Time to Book Flights From Canada to India | IndiaFlights',
  description: 'Booking windows, seasonal demand patterns, and when to start looking for your Canada–India journey. Expert advice from India flight specialists.',
  openGraph: {
    title: 'Best Time to Book Flights From Canada to India',
    description: 'Booking windows, seasonal demand patterns, and when to start looking for your Canada–India journey.',
    type: 'article',
  },
};

const relatedArticles = [
  {
    title: 'Toronto to Delhi: Direct vs Connecting Flights',
    slug: 'toronto-delhi-direct-vs-connecting',
    category: 'Routes',
    readTime: '6 min read',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_13a041ea1-1773406689362.png',
    alt: 'Airport terminal interior with bright natural light, departure gates and travelers walking',
  },
  {
    title: 'How Flexible Travel Dates Help You Find Better Options',
    slug: 'flexible-dates-better-options',
    category: 'Planning',
    readTime: '4 min read',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_127abc45a-1778918128286.png',
    alt: 'Open calendar planner on desk with pen and travel documents, planning a trip',
  },
  {
    title: 'International Baggage Allowances Explained',
    slug: 'international-baggage-allowances',
    category: 'Travel Tips',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1559626188-1d4f8c0815a4',
    alt: 'Colorful luggage suitcases stacked at airport check-in area with bright overhead lighting',
  },
];

const tocItems = [
  { id: 'why-timing-matters', label: 'Why Timing Matters on This Route' },
  { id: 'booking-windows', label: 'Recommended Booking Windows' },
  { id: 'seasonal-demand', label: 'Seasonal Demand Patterns' },
  { id: 'peak-periods', label: 'Peak Travel Periods to Avoid' },
  { id: 'shoulder-season', label: 'Shoulder Season Advantages' },
  { id: 'flexible-dates', label: 'The Value of Flexible Dates' },
  { id: 'practical-tips', label: 'Practical Tips Before You Book' },
];

export default function BestTimeBookPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <AppImage
          src="https://images.unsplash.com/photo-1614390562902-51814b1322df"
          alt="Airplane flying above clouds at sunrise with warm golden light, aerial view from above"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/90 text-white tracking-wide">Planning</span>
            <span className="text-white/70 text-sm">5 min read</span>
            <span className="text-white/50 text-sm">·</span>
            <span className="text-white/70 text-sm">India Travel Journal</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Best Time to Book Flights<br className="hidden sm:block" />
            <span className="italic font-light text-gold-light"> From Canada to India</span>
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
              Canada–India is one of the longest international routes in the world. Getting the timing right on your booking — not just your travel dates — can make a meaningful difference to the options available to you.
            </p>

            {/* Section 1 */}
            <section id="why-timing-matters" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Why Timing Matters on This Route</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Flights between Canada and India — whether from Toronto, Vancouver, or Calgary — typically involve one or two connections through major hubs such as London, Frankfurt, Dubai, Doha, or Abu Dhabi. Because these routes pass through some of the world's busiest international airports, availability and routing options can shift considerably depending on when you begin looking.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Unlike short-haul domestic routes where last-minute options are common, long-haul international itineraries to India tend to fill up well in advance during high-demand periods. Starting your search early gives you more routing choices, more flexibility on layover durations, and a better chance of securing seats that work for your schedule.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This doesn't mean booking the very first option you see — it means beginning your research early enough that you're not making rushed decisions under pressure.
              </p>
            </section>

            {/* Section 2 */}
            <section id="booking-windows" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Recommended Booking Windows</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As a general guide, here is when it typically makes sense to start exploring your options for different travel periods:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { period: 'Peak Season (Dec–Jan, Summer)', window: '3–5 months ahead', note: 'Holiday and school-break travel fills quickly. Starting early gives you more routing options.' },
                  { period: 'Shoulder Season (Mar–May, Sep–Oct)', window: '6–10 weeks ahead', note: 'More flexibility exists, but popular routes still benefit from early planning.' },
                  { period: 'Low Season (Feb, Jun–Aug excl. school breaks)', window: '4–8 weeks ahead', note: 'Generally more availability, though summer can be busy for families.' },
                  { period: 'Festival Travel (Diwali, Holi, Eid)', window: '3–4 months ahead', note: 'Festival periods see strong demand from the diaspora community. Plan well in advance.' },
                ].map((item, i) => (
                  <div key={i} className="bg-secondary rounded-xl p-5 border border-border">
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{item.period}</div>
                    <div className="font-display text-lg font-semibold text-foreground mb-2">{item.window}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.note}</p>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm bg-muted/50 rounded-lg p-4 border border-border">
                <strong className="text-foreground">A note on these windows:</strong> These are general patterns, not guarantees. Availability on any specific route depends on many factors including airline schedules, connecting hub capacity, and current demand. Speaking with a travel specialist early in your planning process gives you a clearer picture of what's realistic for your specific dates.
              </p>
            </section>

            {/* Section 3 */}
            <section id="seasonal-demand" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Seasonal Demand Patterns</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Canada–India routes experience demand from several distinct traveler groups, each with their own seasonal patterns:
              </p>
              <div className="space-y-4 mb-6">
                {[
                  { group: 'Diaspora family visits', pattern: 'Strong demand around Diwali (Oct–Nov), Christmas/New Year, and Indian summer school holidays (May–June).' },
                  { group: 'Students', pattern: 'Outbound peaks in August–September (start of Indian academic year) and return peaks in December–January.' },
                  { group: 'Business travelers', pattern: 'Relatively consistent year-round, with some softening in late January and late June.' },
                  { group: 'Leisure travelers', pattern: 'Peak in December–February for India\'s cooler, drier season. Goa, Rajasthan, and Kerala see strong demand during this window.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground text-sm mb-1">{item.group}</div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.pattern}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4 */}
            <section id="peak-periods" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Peak Travel Periods to Be Aware Of</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Certain windows consistently see high demand on Canada–India routes. If your travel falls within these periods, starting your planning earlier than usual is advisable:
              </p>
              <ul className="space-y-3 mb-4">
                {[
                  'Mid-December through early January — the holiday travel window',
                  'Diwali week and the surrounding weekend (typically October or November)',
                  'Canadian school spring break (mid-March)',
                  'Victoria Day and Canada Day long weekends',
                  'Late May through June — families traveling before Indian monsoon season',
                  'Eid al-Fitr and Eid al-Adha (dates vary annually)',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                    <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 5 */}
            <section id="shoulder-season" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Shoulder Season Advantages</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Traveling in shoulder season — broadly February, late September, and October (outside Diwali) — often means more routing options and less competition for seats on popular itineraries. For travelers with some flexibility on exact dates, these windows can be worth exploring.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                India's climate also plays a role. February is an excellent time to visit most of India — the post-winter chill has lifted, the monsoon is months away, and major tourist sites are less crowded than in December. For travelers whose primary goal is the journey rather than a specific festival or family event, shoulder season travel can offer a more relaxed experience on both ends.
              </p>
            </section>

            {/* Section 6 */}
            <section id="flexible-dates" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">The Value of Flexible Dates</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If your travel dates have even a small amount of flexibility — a day or two in either direction — it's worth exploring what that opens up. On long-haul routes like Canada to India, a shift of even 24–48 hours can sometimes reveal meaningfully different routing options or availability on preferred carriers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When you speak with a travel specialist, mentioning that your dates have some flexibility is one of the most useful pieces of information you can share. It allows them to look across a wider window and present you with options you might not have found by searching fixed dates alone.
              </p>
            </section>

            {/* Section 7 */}
            <section id="practical-tips" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Practical Tips Before You Book</h2>
              <div className="space-y-4">
                {[
                  { tip: 'Know your passport and visa situation early', detail: 'Indian citizens traveling on Canadian passports may need an OCI card or visa. Non-Indian travelers need a valid Indian visa. Processing times vary — don\'t leave this until the last moment.' },
                  { tip: 'Understand your baggage needs upfront', detail: 'Canada–India routes often involve multiple carriers with different baggage policies. Knowing your checked baggage requirements before booking helps avoid surprises at the airport.' },
                  { tip: 'Consider your connection carefully', detail: 'A longer layover at a hub like Dubai or London can sometimes be preferable to a tight connection, especially if you\'re traveling with elderly family members or young children.' },
                  { tip: 'Ask about the full journey, not just the fare', detail: 'The cheapest-looking option isn\'t always the most practical. Total travel time, number of stops, layover airport quality, and seat availability all matter on a 20+ hour journey.' },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-xl p-5 border border-border">
                    <div className="font-semibold text-foreground mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0">{i + 1}</span>
                      {item.tip}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed pl-8">{item.detail}</p>
                  </div>
                ))}
              </div>
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
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Ready to Start Planning?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    Tell us your route, travel window, and any preferences — and a travel specialist will come back to you with suitable options. No obligation, no fabricated prices.
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
              {/* Table of Contents */}
              <div className="bg-card rounded-2xl border border-border p-6 shadow-warm-sm">
                <h3 className="font-display text-base font-semibold text-foreground mb-4">In This Guide</h3>
                <nav className="space-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1.5 pl-3 border-l-2 border-transparent hover:border-primary"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Quick CTA */}
              <div className="bg-foreground rounded-2xl p-6 text-white">
                <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Plan Your Trip</div>
                <p className="font-display text-lg font-semibold mb-3 leading-snug">Get personalised flight options for your Canada–India journey</p>
                <p className="text-white/60 text-xs mb-5 leading-relaxed">A real travel specialist will review your request and come back with suitable options.</p>
                <Link href="/request-quote" className="block w-full btn-primary text-sm font-semibold py-3 rounded-full text-center">
                  Request a Quote
                </Link>
              </div>

              {/* Article meta */}
              <div className="bg-secondary rounded-xl p-4 border border-border text-xs text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  5 min read
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                  Planning
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
            {relatedArticles.map((article, i) => (
              <Link
                key={i}
                href={`/travel-guides/${article.slug}`}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-warm-sm card-hover block"
              >
                <div className="relative h-44 overflow-hidden">
                  <AppImage
                    src={article.image}
                    alt={article.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
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
            ))}
          </div>
        </div>

        {/* Back to guides */}
        <div className="mt-10 text-center">
          <Link href="/#guides" className="btn-outline px-7 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to India Travel Journal
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
