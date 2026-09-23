import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Traveling to India With Elderly Parents: A Practical Guide | Himalaya Travel Solutions',
  description: 'Wheelchair assistance, layover considerations, meal requests, and how to make the long-haul journey to India comfortable for senior travelers.'
};

const toc = [
{ id: 'booking', label: 'Booking Considerations' },
{ id: 'wheelchair', label: 'Wheelchair & Mobility Assistance' },
{ id: 'layovers', label: 'Managing Layovers' },
{ id: 'meals', label: 'Meal & Dietary Requests' },
{ id: 'health', label: 'Health & Medication' },
{ id: 'arrival', label: 'Arrival in India' }];


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
  title: 'International Baggage Allowances Explained',
  slug: 'international-baggage-allowances',
  category: 'Travel Tips',
  readTime: '4 min read',
  image: "https://images.unsplash.com/photo-1684631491517-6c94713c7159",
  alt: 'Colorful luggage suitcases stacked at airport check-in area'
},
{
  title: 'How Flexible Travel Dates Help You Find Better Options',
  slug: 'flexible-dates-better-options',
  category: 'Planning',
  readTime: '4 min read',
  image: "https://images.unsplash.com/photo-1556765011-bf962eb8d0a2",
  alt: 'Open calendar planner on desk with pen and travel documents'
}];


export default function ElderlyParentsPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1e29031bd-1772086641960.png"
            alt="Elderly couple sitting comfortably in airport departure lounge with warm natural light, waiting for their flight to India"
            fill
            priority
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/80 text-white">Family Travel</span>
              <span className="text-xs text-white/70">7 min read</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-semibold text-white leading-tight">
              Traveling to India With Elderly Parents:<br className="hidden sm:block" /> A Practical Guide
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
                  <p className="text-xs text-muted-foreground mb-3">Traveling with family?</p>
                  <Link href="/request-quote" className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold text-center block">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-9 order-1 lg:order-2 max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                Traveling from North America to India with elderly parents requires more planning than a standard trip. The journey is long, connections can be demanding, and airports can be overwhelming. With the right preparation, however, it can be a smooth and comfortable experience for everyone.
              </p>

              <section id="booking" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Booking Considerations</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When booking for elderly travelers, a few decisions at the booking stage can make a significant difference to the overall experience.
                </p>
                <div className="space-y-4">
                  {[
                  {
                    title: 'Fewer connections is better',
                    detail: 'A non-stop or single-connection itinerary is strongly preferable for elderly travelers. Multiple connections increase fatigue, the risk of missed flights, and the amount of walking required.'
                  },
                  {
                    title: 'Choose longer layovers',
                    detail: 'A 2.5–3 hour connection is more comfortable than a tight 1.5-hour transfer. Elderly travelers may move more slowly and benefit from the extra time.'
                  },
                  {
                    title: 'Consider seat selection carefully',
                    detail: 'Aisle seats make it easier to get up and move around. Bulkhead seats offer more legroom. Avoid seats near the rear galley, which can be noisy.'
                  },
                  {
                    title: 'Book early for better seat availability',
                    detail: 'Preferred seats fill up quickly. Booking well in advance gives you more choice.'
                  }]?.
                  map((item, i) =>
                  <div key={i} className="flex gap-4 p-4 bg-card border border-border rounded-xl">
                      <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                      <div>
                        <p className="font-semibold text-foreground text-sm mb-1">{item?.title}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item?.detail}</p>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <section id="wheelchair" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Wheelchair & Mobility Assistance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Airlines provide wheelchair assistance at no additional charge. This is one of the most valuable services available for elderly travelers and is worth requesting even if your parent can walk short distances.
                </p>
                <div className="bg-secondary rounded-xl border border-border p-5 mb-5">
                  <p className="text-sm font-semibold text-foreground mb-2">How to Request Assistance</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Request wheelchair assistance at the time of booking or by contacting the airline directly at least 48 hours before departure. Confirm the request again when checking in online and at the airport check-in desk.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wheelchair assistance typically includes:
                </p>
                <ul className="space-y-2 mb-4">
                  {[
                  'Assistance from the check-in desk to the gate',
                  'Priority boarding',
                  'Transfer between gates during connections',
                  'Assistance from the aircraft to the arrivals hall']?.
                  map((item) =>
                  <li key={item} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  )}
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  There are different levels of assistance available — from full wheelchair service to assistance for those who can walk but need help with distances. Be specific when requesting so the airline can provide the right level of support.
                </p>
              </section>

              <section id="layovers" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Managing Layovers</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Long layovers can be tiring for elderly travelers. Here is how to make them more manageable.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                  { title: 'Use airport lounges', detail: 'Many airlines provide lounge access for business class passengers. Some credit cards also offer lounge access. A quiet, comfortable lounge is far better than a busy departure gate.' },
                  { title: 'Request a rest room', detail: 'Some airports have dedicated rest areas or day rooms. At Dubai, for example, transit hotels are available for longer layovers.' },
                  { title: 'Stay hydrated', detail: 'Long flights and airport environments are dehydrating. Encourage regular water intake throughout the journey.' },
                  { title: 'Encourage gentle movement', detail: 'Short walks during layovers help circulation and reduce the risk of deep vein thrombosis on long flights.' }]?.
                  map((item) =>
                  <div key={item?.title} className="bg-card border border-border rounded-xl p-4">
                      <p className="font-semibold text-foreground text-sm mb-2">{item?.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item?.detail}</p>
                    </div>
                  )}
                </div>
              </section>

              <section id="meals" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Meal & Dietary Requests</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Most airlines offer a range of special meals that can be requested in advance. For elderly travelers with dietary requirements, this is worth arranging before the flight.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                  { code: 'VJML', label: 'Vegetarian Jain Meal' },
                  { code: 'VGML', label: 'Vegan Meal' },
                  { code: 'HNML', label: 'Hindu Non-Vegetarian Meal' },
                  { code: 'DBML', label: 'Diabetic Meal' },
                  { code: 'LCML', label: 'Low Calorie Meal' },
                  { code: 'BLML', label: 'Bland Meal (for sensitive digestion)' }]?.
                  map((item) =>
                  <div key={item?.code} className="flex items-center gap-3 p-3 bg-card border border-border rounded-xl">
                      <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">{item?.code}</span>
                      <span className="text-sm text-foreground">{item?.label}</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
                  Request special meals at least 24–48 hours before departure. Confirm the request when checking in online.
                </p>
              </section>

              <section id="health" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Health & Medication</h2>
                <div className="space-y-3">
                  {[
                  { tip: 'Carry all medications in hand luggage', detail: 'Never pack essential medications in checked baggage. Carry enough for the entire trip plus extra in case of delays.' },
                  { tip: 'Bring a medication list', detail: 'A written list of all medications, dosages, and the conditions they treat is helpful in case of a medical situation during travel.' },
                  { tip: 'Consult a doctor before travel', detail: 'For elderly travelers with existing health conditions, a pre-travel consultation is advisable. Some conditions may require a fitness-to-fly certificate.' },
                  { tip: 'Consider travel insurance', detail: 'Comprehensive travel insurance that covers medical emergencies and evacuation is strongly recommended for elderly travelers.' },
                  { tip: 'Compression socks for long flights', detail: 'Compression socks help reduce the risk of deep vein thrombosis on long-haul flights. They are widely available and inexpensive.' }]?.
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

              <section id="arrival" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Arrival in India</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Indian airports have improved significantly in recent years, but arrival procedures can still be time-consuming. Planning ahead helps.
                </p>
                <div className="space-y-3">
                  {[
                  { tip: 'Arrange airport pickup in advance', detail: 'Pre-arranged airport pickup is much less stressful than finding transport on arrival, particularly late at night.' },
                  { tip: 'Request wheelchair assistance at Indian airports', detail: 'Wheelchair assistance is available at all major Indian airports. Request it through your airline for the arrival leg as well.' },
                  { tip: 'Allow extra time for immigration', detail: 'Indian immigration queues can be long. Senior citizens are sometimes given priority — check with the airport.' },
                  { tip: 'Have the Indian address ready', detail: 'Immigration forms require a local address. Have this written down clearly before arrival.' }]?.
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
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Traveling With Family to India?</h3>
                <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
                  We can help you find itineraries with suitable connections, request special assistance, and ensure the journey is as comfortable as possible for your family.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/request-quote" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
                    Request a Quote
                  </Link>
                  <a href="https://wa.me/[WHATSAPP]?text=Hi%20Himalaya%20Travel%20Solutions%2C%20I%27m%20planning%20a%20trip%20to%20India%20with%20elderly%20parents%20and%20need%20assistance." className="btn-outline px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
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