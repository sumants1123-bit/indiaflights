import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'How Flexible Travel Dates Help You Find Better Flight Options | Himalaya Travel Solutions',
  description: 'A shift of even one or two days can open up meaningfully different routing and availability possibilities on long-haul flights to India.'
};

const toc = [
{ id: 'why-dates-matter', label: 'Why Dates Matter So Much' },
{ id: 'how-much-flex', label: 'How Much Flexibility Helps' },
{ id: 'peak-periods', label: 'Peak Periods to Avoid' },
{ id: 'shoulder-windows', label: 'Shoulder Windows to Target' },
{ id: 'practical-tips', label: 'Practical Tips' }];


const relatedGuides = [
{
  title: 'Best Time to Book Flights From Canada to India',
  slug: 'best-time-book-canada-india',
  category: 'Planning',
  readTime: '5 min read',
  image: 'https://images.unsplash.com/photo-1614390562902-51814b1322df',
  alt: 'Airplane flying above clouds at sunrise with warm golden light'
},
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
}];


export default function FlexibleDatesPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
          <AppImage
            src="https://images.unsplash.com/photo-1681583714402-ae3ddb94e27b"
            alt="Open calendar planner on desk with pen and travel documents, planning a flexible trip to India"
            fill
            priority
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/80 text-white">Planning</span>
              <span className="text-xs text-white/70">4 min read</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-semibold text-white leading-tight">
              How Flexible Travel Dates Help You<br className="hidden sm:block" /> Find Better Flight Options
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
                  <p className="text-xs text-muted-foreground mb-3">Have flexible dates?</p>
                  <Link href="/request-quote" className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold text-center block">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-9 order-1 lg:order-2 max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                International airfare is not a fixed commodity. The same seat on the same route can vary significantly depending on the day of the week, the time of year, and how far in advance you book. If your travel dates have any flexibility at all, that flexibility has real value.
              </p>

              <section id="why-dates-matter" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Why Dates Matter So Much</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Airlines use dynamic pricing systems that adjust fares based on demand, remaining seat inventory, and competitive factors. On popular routes like Toronto–Delhi or New York–Mumbai, demand fluctuates significantly across the calendar year.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  During peak travel periods — Diwali, Christmas, summer school holidays — demand is high, availability is limited, and fares reflect that. During quieter periods, the same airlines on the same routes may have considerably more availability at different price points.
                </p>
                <div className="bg-secondary rounded-xl border border-border p-5">
                  <p className="text-sm font-semibold text-foreground mb-2">The Key Insight</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    You do not need to shift your travel by weeks to see a difference. Even moving by two or three days — departing on a Tuesday instead of a Friday, for example — can open up meaningfully different options on long-haul routes.
                  </p>
                </div>
              </section>

              <section id="how-much-flex" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">How Much Flexibility Helps</h2>
                <div className="space-y-4">
                  {[
                  {
                    range: '±1–2 days',
                    benefit: 'Can make a meaningful difference, particularly around weekends. Midweek departures (Tuesday, Wednesday) are often less in demand than Friday or Sunday.'
                  },
                  {
                    range: '±3–5 days',
                    benefit: 'Opens up more routing possibilities. A specialist can check adjacent date windows to identify better availability.'
                  },
                  {
                    range: '±1–2 weeks',
                    benefit: 'Significant flexibility. Can allow you to move around peak demand periods entirely, particularly around major holidays.'
                  },
                  {
                    range: 'Very flexible (month or more)',
                    benefit: 'Maximum options. Allows targeting shoulder season windows with the best combination of availability and conditions.'
                  }]?.
                  map((item) =>
                  <div key={item?.range} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="flex-shrink-0">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1.5 rounded-lg block text-center whitespace-nowrap">{item?.range}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item?.benefit}</p>
                    </div>
                  )}
                </div>
              </section>

              <section id="peak-periods" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Peak Periods to Be Aware Of</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  These are the periods when demand on North America–India routes is typically highest. If your travel falls within these windows, booking early is especially important.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                  { period: 'October–November', reason: 'Diwali and festive season travel' },
                  { period: 'December–January', reason: 'Christmas, New Year, winter school holidays' },
                  { period: 'March–April', reason: 'Spring break, Holi, wedding season' },
                  { period: 'May–June', reason: 'Summer school holidays, family visits' },
                  { period: 'Long weekends', reason: 'Thanksgiving, Labour Day, Victoria Day (Canada)' }]?.
                  map((item) =>
                  <div key={item?.period} className="flex items-start gap-3 p-3 bg-card border border-border rounded-xl">
                      <span className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-foreground">{item?.period}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item?.reason}</p>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section id="shoulder-windows" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Shoulder Windows to Target</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Shoulder periods — the weeks just before or after peak demand — often offer a good balance of availability and reasonable conditions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                  { window: 'February–March', note: 'Post-winter, pre-spring break. Good weather in North India.' },
                  { window: 'September–October', note: 'Post-monsoon, pre-Diwali. Pleasant weather across India.' },
                  { window: 'Late January', note: 'After the holiday rush. Quieter period with good availability.' }]?.
                  map((item) =>
                  <div key={item?.window} className="bg-card border border-border rounded-xl p-4">
                      <p className="text-sm font-semibold text-primary mb-2">{item?.window}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item?.note}</p>
                    </div>
                  )}
                </div>
              </section>

              <section id="practical-tips" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Practical Tips</h2>
                <div className="space-y-3">
                  {[
                  { tip: 'Tell us your flexibility upfront', detail: 'When you request a quote, let us know if your dates have any flexibility. Even ±2 days can help us identify better options.' },
                  { tip: 'Consider midweek departures', detail: 'Tuesday and Wednesday departures are often less in demand than weekend travel on long-haul routes.' },
                  { tip: 'Book the return with flexibility too', detail: 'If your return date is flexible, that can open up additional options. A slightly longer or shorter trip may work in your favour.' },
                  { tip: 'Don\'t wait too long on peak dates', detail: 'If your dates are fixed and fall in a peak period, booking early is more important than waiting for a better fare that may not come.' }]?.
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
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Have Flexible Dates?</h3>
                <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
                  Tell us your approximate travel window and we will help you identify the best available options for your route.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/request-quote" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
                    Request a Quote
                  </Link>
                  <a href="https://wa.me/[WHATSAPP]?text=Hi%20Himalaya%20Travel%20Solutions%2C%20I%20have%20flexible%20travel%20dates%20and%20would%20like%20help%20finding%20the%20best%20options." className="btn-outline px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
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