import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'International Baggage Allowances Explained | IndiaFlights',
  description: 'Cabin baggage, checked allowances, and what changes when you travel through multiple carriers on your journey to India. Clear guidance from India flight specialists.',
  openGraph: {
    title: 'International Baggage Allowances Explained',
    description: 'Cabin baggage, checked allowances, and what changes when you travel through multiple carriers on your journey to India.',
    type: 'article',
  },
};

const relatedArticles = [
  {
    title: 'Best Time to Book Flights From Canada to India',
    slug: 'best-time-book-canada-india',
    category: 'Planning',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1614390562902-51814b1322df',
    alt: 'Airplane flying above clouds at sunrise with warm golden light, aerial view from above',
  },
  {
    title: 'What to Check Before an International Flight to India',
    slug: 'what-to-check-before-international-flight',
    category: 'Travel Tips',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1581553672347-95d9444c0d2c',
    alt: 'Passport and boarding pass on a wooden table with warm afternoon light, travel planning',
  },
  {
    title: 'Traveling to India With Elderly Parents: A Practical Guide',
    slug: 'traveling-india-elderly-parents',
    category: 'Family Travel',
    readTime: '7 min read',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1e29031bd-1772086641960.png',
    alt: 'Elderly couple at airport sitting comfortably in departure lounge with warm natural light',
  },
];

const tocItems = [
  { id: 'why-it-matters', label: 'Why Baggage Rules Matter on India Routes' },
  { id: 'cabin-baggage', label: 'Cabin Baggage Allowances' },
  { id: 'checked-baggage', label: 'Checked Baggage Allowances' },
  { id: 'piece-vs-weight', label: 'Piece Concept vs Weight Concept' },
  { id: 'multiple-carriers', label: 'Traveling on Multiple Carriers' },
  { id: 'excess-baggage', label: 'Excess Baggage Fees' },
  { id: 'special-items', label: 'Special Items and Restrictions' },
  { id: 'practical-tips', label: 'Practical Tips for India Travel' },
];

export default function BaggageAllowancesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <AppImage
          src="https://images.unsplash.com/photo-1559626188-1d4f8c0815a4"
          alt="Colorful luggage suitcases stacked at airport check-in area with bright overhead lighting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-foreground/70 text-white tracking-wide">Travel Tips</span>
            <span className="text-white/70 text-sm">4 min read</span>
            <span className="text-white/50 text-sm">·</span>
            <span className="text-white/70 text-sm">India Travel Journal</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            International Baggage<br className="hidden sm:block" />
            <span className="italic font-light text-gold-light"> Allowances Explained</span>
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
              Baggage rules on international flights to India can be genuinely confusing — especially when your journey involves multiple carriers, different cabin classes, or a mix of international and domestic legs. This guide explains the key concepts clearly.
            </p>

            {/* Section 1 */}
            <section id="why-it-matters" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Why Baggage Rules Matter on India Routes</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Travelers between North America and India often carry more luggage than on short-haul trips — gifts for family, medicines, electronics, and the general reality of a long stay. Understanding your allowance before you pack avoids unpleasant surprises at the check-in counter.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The situation becomes more complex when your itinerary involves two or more airlines. A codeshare or interline agreement may mean your baggage is checked through to your final destination, but the allowance that applies may not be what you expect.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The single most important thing to know: <strong className="text-foreground">always check the baggage policy of every carrier on your itinerary before you pack</strong>, not just the airline you booked with.
              </p>
            </section>

            {/* Section 2 */}
            <section id="cabin-baggage" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Cabin Baggage Allowances</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most international carriers allow one carry-on bag and one personal item (laptop bag, handbag, or small backpack) in economy class. The standard carry-on size is typically 55 × 40 × 20 cm (22 × 16 × 8 inches), though this varies by airline.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="text-left p-3 border border-border font-semibold text-foreground">Carrier Type</th>
                      <th className="text-left p-3 border border-border font-semibold text-foreground">Typical Carry-On</th>
                      <th className="text-left p-3 border border-border font-semibold text-foreground">Personal Item</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { type: 'Full-service (Air India, Emirates, etc.)', carryOn: '7–10 kg, 1 bag', personal: '1 item (laptop bag, handbag)' },
                      { type: 'North American carriers (Air Canada, etc.)', carryOn: '10 kg, 1 bag', personal: '1 item' },
                      { type: 'Budget/LCC carriers', carryOn: 'Often 7 kg or less', personal: 'May not be permitted' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-card' : 'bg-secondary/50'}>
                        <td className="p-3 border border-border text-muted-foreground">{row.type}</td>
                        <td className="p-3 border border-border text-muted-foreground">{row.carryOn}</td>
                        <td className="p-3 border border-border text-muted-foreground">{row.personal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Business and premium economy class typically allow more carry-on weight (12–15 kg) and sometimes an additional garment bag.
              </p>
            </section>

            {/* Section 3 */}
            <section id="checked-baggage" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Checked Baggage Allowances</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Checked baggage allowances on international routes to India vary significantly by airline and cabin class. Here is a general overview:
              </p>
              <div className="space-y-3 mb-6">
                {[
                  { cabin: 'Economy Class', allowance: 'Typically 1–2 bags, 23 kg each (some carriers allow 30 kg per bag on India routes)' },
                  { cabin: 'Premium Economy', allowance: 'Typically 2 bags, 23–32 kg each' },
                  { cabin: 'Business Class', allowance: 'Typically 2–3 bags, 32 kg each' },
                  { cabin: 'First Class', allowance: 'Typically 3 bags, 32 kg each' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-foreground text-sm mb-1">{item.cabin}</div>
                      <p className="text-muted-foreground text-sm">{item.allowance}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm p-4 bg-muted/50 rounded-lg border border-border">
                <strong className="text-foreground">Note:</strong> Some airlines — particularly those with strong India routes — offer enhanced baggage allowances specifically for flights to the subcontinent. Always verify the exact allowance for your specific booking, as it can differ from the airline's general policy.
              </p>
            </section>

            {/* Section 4 */}
            <section id="piece-vs-weight" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Piece Concept vs Weight Concept</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                International baggage allowances operate under one of two systems:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="bg-secondary rounded-xl p-5 border border-border">
                  <div className="font-semibold text-foreground mb-2">Piece Concept</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">Common on transatlantic and transpacific routes. You are allowed a specific number of bags (e.g., 2 bags), each up to a maximum weight (e.g., 23 kg). The total weight across bags doesn't pool — each bag must be under the individual limit.</p>
                </div>
                <div className="bg-secondary rounded-xl p-5 border border-border">
                  <div className="font-semibold text-foreground mb-2">Weight Concept</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">Common on some European and Asian carriers. You are given a total weight allowance (e.g., 30 kg) that you can distribute across bags as you choose, subject to individual bag weight limits.</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most North America–India routes use the piece concept, but this can change when your itinerary involves carriers from different regions. If you're unsure which system applies to your booking, ask before you pack.
              </p>
            </section>

            {/* Section 5 */}
            <section id="multiple-carriers" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Traveling on Multiple Carriers</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When your itinerary involves two or more airlines — for example, Air Canada from Toronto to London, then British Airways to Delhi — the baggage allowance that applies to your entire journey can be complex.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If the airlines are partners (in the same alliance or with an interline agreement), the most permissive allowance may apply to the entire journey. However, this is not guaranteed — the allowance of the operating carrier on each segment may apply independently.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The safest approach: check the baggage policy for each individual segment of your journey, not just the first carrier. If you booked through a travel agent, they can clarify which allowance applies to your specific ticket.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="font-semibold text-amber-800 text-sm mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  Watch out for separate tickets
                </div>
                <p className="text-amber-700 text-sm leading-relaxed">
                  If you have booked two separate tickets (e.g., one for the international leg and one for a domestic India connection), the baggage allowances are completely independent. You will need to collect and re-check your bags at the connection point, and each ticket's allowance applies separately.
                </p>
              </div>
            </section>

            {/* Section 6 */}
            <section id="excess-baggage" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Excess Baggage Fees</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Excess baggage fees on international routes can be substantial — often significantly more per kilogram than the cost of pre-purchasing additional allowance before travel. If you know you'll need more than your standard allowance, it's almost always cheaper to purchase extra baggage in advance through the airline's website or through your travel agent.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Some carriers allow you to pre-purchase additional baggage at a fixed rate per bag; others charge by the kilogram. The rates and policies vary considerably, so check before you travel rather than at the airport.
              </p>
            </section>

            {/* Section 7 */}
            <section id="special-items" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Special Items and Restrictions</h2>
              <div className="space-y-4">
                {[
                  { item: 'Liquids in carry-on', rule: 'The 100ml rule applies at most international airports. Liquids must be in containers of 100ml or less, placed in a single clear resealable bag of no more than 1 litre.' },
                  { item: 'Medicines and medical equipment', rule: 'Prescription medicines should be carried in original packaging with documentation. Inform the airline in advance about medical equipment such as CPAP machines or insulin cooling devices.' },
                  { item: 'Electronics and lithium batteries', rule: 'Lithium batteries above a certain capacity must be carried in cabin baggage, not checked. Spare batteries cannot be checked. Check current IATA regulations for your specific devices.' },
                  { item: 'Food items', rule: 'Customs restrictions apply on arrival in India. Certain food items, particularly fresh produce, meat, and dairy, may be restricted. Check current Indian customs regulations before packing food.' },
                  { item: 'Gifts and personal items for family', rule: 'India has customs duty-free limits for goods brought in. Exceeding these limits may result in duty charges at Indian customs. The limits vary by item category.' },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-xl border border-border p-5">
                    <div className="font-semibold text-foreground text-sm mb-2">{item.item}</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.rule}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8 */}
            <section id="practical-tips" className="mb-10 scroll-mt-24">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Practical Tips for India Travel</h2>
              <ul className="space-y-3">
                {[
                  'Weigh your bags at home before you leave — airport scales are accurate and excess fees are expensive.',
                  'Use luggage tags with your contact information on every bag, including carry-on.',
                  'Take a photo of your checked bags before check-in — useful if a bag is delayed or lost.',
                  'If traveling with family, distribute essential items across multiple bags in case one is delayed.',
                  'Confirm your baggage allowance on your booking confirmation, not just the airline\'s general website.',
                  'If you\'re connecting through a Middle Eastern hub, check whether your bags are checked through to your final destination or need to be collected and re-checked.',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm list-none">
                    <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {tip}
                  </li>
                ))}
              </ul>
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
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Have a Baggage Question?</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    Baggage rules on multi-carrier India itineraries can be genuinely complex. A travel specialist can clarify what applies to your specific booking and help you avoid surprises at the airport.
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

              <div className="bg-foreground rounded-2xl p-6 text-white">
                <div className="text-xs font-semibold tracking-widest uppercase text-primary mb-3">Travel Help</div>
                <p className="font-display text-lg font-semibold mb-3 leading-snug">Questions about your specific itinerary?</p>
                <p className="text-white/60 text-xs mb-5 leading-relaxed">A travel specialist can clarify baggage rules for your exact booking and routing.</p>
                <Link href="/contact" className="block w-full btn-primary text-sm font-semibold py-3 rounded-full text-center">
                  Ask a Specialist
                </Link>
              </div>

              <div className="bg-secondary rounded-xl p-4 border border-border text-xs text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  4 min read
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                  Travel Tips
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
