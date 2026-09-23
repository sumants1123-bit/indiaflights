import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Flying From the USA to India: What to Know Before You Book | Himalaya Travel Solutions',
  description: 'Routing options, transit visa requirements, baggage rules, and tips for a smooth USA to India journey. Everything you need before booking your international flight.'
};

const toc = [
{ id: 'routing', label: 'Routing Options from the USA' },
{ id: 'transit-visas', label: 'Transit Visa Requirements' },
{ id: 'baggage', label: 'Baggage Rules to Know' },
{ id: 'airports', label: 'Which US Airport to Fly From' },
{ id: 'timing', label: 'Best Time to Book' },
{ id: 'tips', label: 'Tips for a Smooth Journey' }];


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
  title: 'International Baggage Allowances Explained',
  slug: 'international-baggage-allowances',
  category: 'Travel Tips',
  readTime: '4 min read',
  image: "https://images.unsplash.com/photo-1684631491517-6c94713c7159",
  alt: 'Colorful luggage suitcases stacked at airport check-in area'
},
{
  title: 'Best Airports for Connecting to India',
  slug: 'best-airports-connecting-india',
  category: 'Routes',
  readTime: '5 min read',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_164dd2388-1767775207570.png",
  alt: 'Modern international airport terminal with large windows and aircraft on tarmac'
}];


export default function USAToIndiaPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
          <AppImage
            src="https://images.unsplash.com/photo-1581553672347-95d9444c0d2c"
            alt="Passport and boarding pass on a wooden table with warm afternoon light, travel planning for USA to India flight"
            fill
            priority
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/80 text-white">Planning</span>
              <span className="text-xs text-white/70">8 min read</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-semibold text-white leading-tight">
              Flying From the USA to India:<br className="hidden sm:block" /> What to Know Before You Book
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
                  <a
                    key={item?.id}
                    href={`#${item?.id}`}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3">
                    
                      {item?.label}
                    </a>
                  )}
                </nav>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">Ready to plan your trip?</p>
                  <Link href="/request-quote" className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold text-center block">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-9 order-1 lg:order-2 prose-custom max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                A flight from the United States to India is one of the longest journeys in commercial aviation — typically 14 to 18 hours of flying time, often with a connection. Before you book, understanding your routing options, transit requirements, and baggage rules can save you time, money, and stress.
              </p>

              <section id="routing" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Routing Options from the USA</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most flights from the USA to India involve at least one connection. A small number of routes offer non-stop service, primarily from major gateway cities.
                </p>
                <h3 className="font-semibold text-foreground text-lg mb-3">Non-Stop Routes</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Non-stop flights between the USA and India are limited. Air India operates direct services from New York (JFK) and Chicago (ORD) to Delhi (DEL), and from San Francisco (SFO) to Delhi and Mumbai. These are the most convenient options if you can access these departure cities.
                </p>
                <h3 className="font-semibold text-foreground text-lg mb-3">One-Stop Connections</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The majority of USA–India itineraries involve a single connection through a hub in Europe or the Middle East. Common connection points include:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                  'Dubai (DXB) — Emirates, flydubai',
                  'Abu Dhabi (AUH) — Etihad Airways',
                  'Doha (DOH) — Qatar Airways',
                  'London Heathrow (LHR) — British Airways, Virgin Atlantic',
                  'Frankfurt (FRA) — Lufthansa',
                  'Amsterdam (AMS) — KLM',
                  'Paris (CDG) — Air France']?.
                  map((item) =>
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  )}
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  Middle Eastern hubs tend to offer the most competitive fares and frequent connections to a wide range of Indian cities. European hubs can be a good option if you prefer a longer layover or want to add a European stopover.
                </p>
              </section>

              <section id="transit-visas" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Transit Visa Requirements</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether you need a transit visa depends on your nationality, the country you are connecting through, and the duration of your layover.
                </p>
                <div className="bg-secondary rounded-xl border border-border p-5 mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Important Note</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Transit visa rules change frequently. Always verify current requirements with the relevant embassy or consulate before booking. This guide provides general information only and should not be relied upon as legal or immigration advice.
                  </p>
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-3">UK Connections</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  If you hold an Indian passport and are connecting through a UK airport, you may need a Direct Airside Transit Visa (DATV) even if you do not leave the international transit area. Check the UK government website for current requirements.
                </p>
                <h3 className="font-semibold text-foreground text-lg mb-3">Schengen Connections</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Connecting through Germany, France, the Netherlands, or other Schengen countries may require an airport transit visa depending on your nationality. Indian passport holders should verify requirements before booking.
                </p>
                <h3 className="font-semibold text-foreground text-lg mb-3">Middle East Connections</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Connections through Dubai, Abu Dhabi, and Doha generally do not require a transit visa for Indian passport holders, provided you remain in the international transit area. However, if you plan to leave the airport during a long layover, you may need a transit or visit visa.
                </p>
              </section>

              <section id="baggage" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Baggage Rules to Know</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Baggage allowances on USA–India routes vary significantly by airline, fare class, and whether your itinerary involves multiple carriers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {[
                  { label: 'Economy (most carriers)', value: '1–2 checked bags, 23 kg each' },
                  { label: 'Business Class', value: '2–3 checked bags, 32 kg each' },
                  { label: 'Carry-on', value: '7–10 kg, one personal item' },
                  { label: 'Excess baggage', value: 'Charged per kg or per piece' }]?.
                  map((item) =>
                  <div key={item?.label} className="bg-card border border-border rounded-xl p-4">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{item?.label}</p>
                      <p className="text-sm font-medium text-foreground">{item?.value}</p>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  When your itinerary involves two different airlines — for example, a US carrier to a European hub and then an Indian carrier onward — the baggage rules of each airline apply separately. Always confirm the allowance for every segment before packing.
                </p>
              </section>

              <section id="airports" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Which US Airport to Fly From</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Your choice of departure airport can significantly affect your total journey time, fare, and connection options.
                </p>
                <div className="space-y-4">
                  {[
                  { city: 'New York (JFK/EWR)', note: 'One of the best-connected US cities for India. Non-stop options available. Strong competition keeps fares competitive.' },
                  { city: 'Chicago (ORD)', note: 'Good hub with non-stop Air India service to Delhi. Also well-served by European and Middle Eastern carriers.' },
                  { city: 'San Francisco (SFO)', note: 'Non-stop service to Delhi and Mumbai available. Ideal for West Coast travelers.' },
                  { city: 'Los Angeles (LAX)', note: 'Strong connections via Middle Eastern hubs. Good option for Southern California travelers.' },
                  { city: 'Dallas (DFW)', note: 'American Airlines hub with good connections to European and Middle Eastern hubs.' },
                  { city: 'Houston (IAH)', note: 'United hub with connections to India via European and Middle Eastern carriers.' }]?.
                  map((item) =>
                  <div key={item?.city} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">{item?.city}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item?.note}</p>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section id="timing" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Best Time to Book</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  USA–India fares follow predictable seasonal patterns. Understanding these can help you plan your booking window.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  {[
                  { season: 'Peak Season', months: 'Nov–Jan, May–Jun', note: 'Diwali, Christmas, summer holidays. Book 3–5 months ahead.' },
                  { season: 'Shoulder Season', months: 'Feb–Mar, Sep–Oct', note: 'Good availability and moderate fares. Book 6–10 weeks ahead.' },
                  { season: 'Off-Peak', months: 'Jul–Aug', note: 'Monsoon season in India. Often the most affordable fares.' }]?.
                  map((item) =>
                  <div key={item?.season} className="bg-card border border-border rounded-xl p-4">
                      <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{item?.season}</p>
                      <p className="text-sm font-semibold text-foreground mb-2">{item?.months}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item?.note}</p>
                    </div>
                  )}
                </div>
              </section>

              <section id="tips" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Tips for a Smooth Journey</h2>
                <div className="space-y-3">
                  {[
                  { tip: 'Check your passport validity', detail: 'India requires your passport to be valid for at least six months beyond your intended stay.' },
                  { tip: 'Arrange your Indian visa early', detail: 'e-Visa is available for most nationalities but apply at least 4–7 days before travel. Processing times can vary.' },
                  { tip: 'Confirm your connection time', detail: 'Allow at least 2 hours for connections in busy hubs. Some airports require longer for international-to-international transfers.' },
                  { tip: 'Carry medications in hand luggage', detail: 'Keep essential medications in your carry-on with original packaging and a prescription if possible.' },
                  { tip: 'Notify your bank', detail: 'Inform your bank of your travel dates to avoid card blocks when using ATMs or making purchases in India.' },
                  { tip: 'Download airline apps', detail: 'Most airlines allow mobile check-in and boarding passes, which can save time at busy airports.' }]?.
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
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Planning a USA to India Trip?</h3>
                <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
                  Share your travel details and a Himalaya Travel Solutions specialist will help you find the best available routing and fare options.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/request-quote" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
                    Request a Quote
                  </Link>
                  <a href="https://wa.me/[WHATSAPP]?text=Hi%20Himalaya%20Travel%20Solutions%2C%20I%27m%20planning%20a%20flight%20from%20the%20USA%20to%20India." className="btn-outline px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
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