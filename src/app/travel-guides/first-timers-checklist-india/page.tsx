import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "A First-Timer\'s Checklist for Traveling to India | Himalaya Travel Solutions",
  description: 'A comprehensive pre-departure checklist for first-time travelers to India — documents, health, packing, money, and arrival tips.'
};

const toc = [
{ id: 'documents', label: 'Documents & Visas' },
{ id: 'health', label: 'Health Preparation' },
{ id: 'packing', label: 'Packing Essentials' },
{ id: 'money', label: 'Money & Payments' },
{ id: 'connectivity', label: 'Connectivity' },
{ id: 'arrival', label: 'Arrival Tips' }];


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
  title: 'Traveling to India With Elderly Parents: A Practical Guide',
  slug: 'traveling-india-elderly-parents',
  category: 'Family Travel',
  readTime: '7 min read',
  image: "https://images.unsplash.com/photo-1697736511277-dc2b9e5bb4a2",
  alt: 'Elderly couple sitting comfortably in airport departure lounge'
},
{
  title: 'International Baggage Allowances Explained',
  slug: 'international-baggage-allowances',
  category: 'Travel Tips',
  readTime: '4 min read',
  image: "https://images.unsplash.com/photo-1684631491517-6c94713c7159",
  alt: 'Colorful luggage suitcases stacked at airport check-in area'
}];


interface ChecklistItem {
  item: string;
  detail: string;
  done?: boolean;
}

function ChecklistSection({ title, items }: {title: string;items: ChecklistItem[];}) {
  return (
    <div className="space-y-2">
      {items.map((item, i) =>
      <div key={i} className="flex gap-3 p-4 bg-card border border-border rounded-xl">
          <div className="w-5 h-5 rounded border-2 border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
            <div className="w-2.5 h-2.5 rounded-sm bg-primary/20" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm mb-0.5">{item.item}</p>
            <p className="text-muted-foreground text-xs leading-relaxed">{item.detail}</p>
          </div>
        </div>
      )}
    </div>);

}

export default function FirstTimersChecklistPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_18a5c6ff4-1764748951127.png"
            alt="Colorful street scene in India with vibrant architecture, flowers and warm golden light, welcoming first-time visitors"
            fill
            priority
            className="object-cover"
            sizes="100vw" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/80 text-white">Travel Tips</span>
              <span className="text-xs text-white/70">6 min read</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-semibold text-white leading-tight">
              A First-Timer&apos;s Checklist for<br className="hidden sm:block" /> Traveling to India
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
                  {toc.map((item) =>
                  <a key={item.id} href={`#${item.id}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3">
                      {item.label}
                    </a>
                  )}
                </nav>
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-3">Planning your first India trip?</p>
                  <Link href="/request-quote" className="btn-primary w-full py-2.5 rounded-xl text-sm font-semibold text-center block">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </aside>

            {/* Article body */}
            <article className="lg:col-span-9 order-1 lg:order-2 max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
                Traveling to India for the first time is an exciting experience. It is also a journey that rewards preparation. This checklist covers the essentials — from documents and health to packing and arrival — so you can focus on the experience rather than the logistics.
              </p>

              <section id="documents" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Documents & Visas</h2>
                <ChecklistSection title="Documents" items={[
                { item: 'Valid passport', detail: 'Your passport must be valid for at least 6 months beyond your intended stay in India.' },
                { item: 'Indian visa', detail: 'Most nationalities require a visa. Apply for an e-Visa online at least 4–7 days before travel. Processing times can vary.' },
                { item: 'Return flight confirmation', detail: 'Carry a printed or digital copy of your complete itinerary including all flight segments.' },
                { item: 'Accommodation details', detail: 'Have your first night\'s accommodation address written down clearly — you will need it on the arrival card.' },
                { item: 'Travel insurance documents', detail: 'Carry your insurance policy number and the emergency contact number for your insurer.' },
                { item: 'Copies of all documents', detail: 'Keep digital copies in email or cloud storage and physical copies separate from originals.' }]
                } />
              </section>

              <section id="health" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Health Preparation</h2>
                <div className="bg-secondary rounded-xl border border-border p-5 mb-5">
                  <p className="text-sm font-semibold text-foreground mb-2">Consult Your Doctor</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Visit your doctor or a travel health clinic 4–6 weeks before departure. Recommendations vary by destination within India and individual health circumstances.
                  </p>
                </div>
                <ChecklistSection title="Health" items={[
                { item: 'Vaccinations', detail: 'Discuss recommended vaccinations with your doctor. Common ones for India include Hepatitis A, Typhoid, and Tetanus. Some areas may require additional vaccines.' },
                { item: 'Malaria prevention', detail: 'Malaria risk varies by region and season. Consult your doctor about whether prophylaxis is recommended for your specific itinerary.' },
                { item: 'Travel health insurance', detail: 'Ensure your insurance covers medical treatment and emergency evacuation in India.' },
                { item: 'Basic medical kit', detail: 'Pack oral rehydration salts, antidiarrheal medication, antiseptic, plasters, and any prescription medications.' },
                { item: 'Prescription medications', detail: 'Carry enough for your entire trip plus extra. Keep in original packaging with prescription documentation.' }]
                } />
              </section>

              <section id="packing" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Packing Essentials</h2>
                <ChecklistSection title="Packing" items={[
                { item: 'Appropriate clothing', detail: 'India\'s climate varies enormously. Research your specific destinations. Modest clothing is respectful and practical for temple visits.' },
                { item: 'Comfortable walking shoes', detail: 'You will walk more than you expect. Comfortable, closed-toe shoes are essential.' },
                { item: 'Power adapter', detail: 'India uses Type C, D, and M plugs. A universal travel adapter is recommended.' },
                { item: 'Portable charger', detail: 'Power cuts can occur in some areas. A portable battery pack is useful.' },
                { item: 'Hand sanitizer and wet wipes', detail: 'Useful in situations where handwashing facilities are not immediately available.' },
                { item: 'Sunscreen and insect repellent', detail: 'Both are available in India but may be more expensive or harder to find in smaller towns.' },
                { item: 'Reusable water bottle with filter', detail: 'Tap water is not safe to drink in most of India. A filtered bottle reduces plastic waste and cost.' }]
                } />
              </section>

              <section id="money" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Money & Payments</h2>
                <ChecklistSection title="Money" items={[
                { item: 'Notify your bank', detail: 'Inform your bank of your travel dates to prevent card blocks when using ATMs or making purchases in India.' },
                { item: 'Carry some cash (INR)', detail: 'While digital payments are widely accepted in cities, cash is still useful in smaller towns, markets, and for tips.' },
                { item: 'Know your ATM options', detail: 'International ATMs are available in major cities and airports. Fees vary. Withdraw larger amounts to minimize transaction fees.' },
                { item: 'Understand UPI payments', detail: 'India\'s UPI payment system is widely used. Some international cards can now be linked to UPI apps for convenient payments.' }]
                } />
              </section>

              <section id="connectivity" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Connectivity</h2>
                <ChecklistSection title="Connectivity" items={[
                { item: 'Local SIM card', detail: 'A local Indian SIM card provides affordable data and calls. Available at airports and mobile stores. Requires passport and visa for registration.' },
                { item: 'Download offline maps', detail: 'Download Google Maps or Maps.me for your destinations before you arrive. Invaluable when connectivity is poor.' },
                { item: 'Download translation apps', detail: 'Google Translate with Hindi and regional languages downloaded offline is useful outside major tourist areas.' },
                { item: 'Ride-hailing apps', detail: 'Download Ola and Uber before you travel. Both work in most Indian cities and are safer than hailing taxis on the street.' }]
                } />
              </section>

              <section id="arrival" className="mb-10">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Arrival Tips</h2>
                <ChecklistSection title="Arrival" items={[
                { item: 'Complete arrival card on the plane', detail: 'Fill in the arrival card during the flight. You will need your accommodation address and passport details.' },
                { item: 'Use e-Visa counter if applicable', detail: 'If you have an e-Visa, use the dedicated e-Visa immigration counter to avoid longer queues.' },
                { item: 'Pre-arrange airport pickup', detail: 'A pre-arranged pickup is much less stressful than finding transport on arrival, especially late at night.' },
                { item: 'Keep valuables secure', detail: 'Be aware of your surroundings in busy arrival halls. Keep your bag in front of you and valuables secure.' },
                { item: 'Exchange currency at the airport if needed', detail: 'Airport exchange rates are not always the best, but having some local currency immediately on arrival is convenient.' }]
                } />
              </section>

              {/* CTA */}
              <div className="bg-primary/8 border border-primary/20 rounded-2xl p-6 sm:p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Ready to Plan Your First India Trip?</h3>
                <p className="text-muted-foreground text-sm mb-5 max-w-md mx-auto">
                  Share your travel details and a Himalaya Travel Solutions specialist will help you find the best available flight options for your journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/request-quote" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
                    Request a Quote
                  </Link>
                  <a href="https://wa.me/[WHATSAPP]?text=Hi%20Himalaya%20Travel%20Solutions%2C%20I%27m%20planning%20my%20first%20trip%20to%20India%20and%20would%20like%20help%20with%20flights." className="btn-outline px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
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
              {relatedGuides.map((guide) =>
              <Link key={guide.slug} href={`/travel-guides/${guide.slug}`} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-warm-sm card-hover block">
                  <div className="relative h-36 overflow-hidden">
                    <AppImage src={guide.image} alt={guide.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary">{guide.category}</span>
                      <span className="text-xs text-muted-foreground">{guide.readTime}</span>
                    </div>
                    <h4 className="font-display text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">{guide.title}</h4>
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