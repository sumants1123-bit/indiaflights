import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const articles = [
{
  title: 'Best Time to Book Flights From Canada to India',
  excerpt: 'Booking windows, seasonal demand patterns, and when to start looking for your Canada–India journey.',
  readTime: '5 min read',
  category: 'Planning',
  image: "https://images.unsplash.com/photo-1614390562902-51814b1322df",
  alt: 'Airplane flying above clouds at sunrise with warm golden light, aerial view from above',
  slug: 'best-time-book-canada-india',
  featured: true
},
{
  title: 'Toronto to Delhi: Direct vs Connecting Flights',
  excerpt: 'What to weigh when choosing between a non-stop and a one-stop itinerary on this popular route.',
  readTime: '6 min read',
  category: 'Routes',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13a041ea1-1773406689362.png",
  alt: 'Airport terminal interior with bright natural light, departure gates and travelers walking',
  slug: 'toronto-delhi-direct-vs-connecting',
  featured: false
},
{
  title: 'Flying From the USA to India: What to Know Before You Book',
  excerpt: 'Routing options, transit visa requirements, baggage rules, and tips for a smooth transatlantic journey.',
  readTime: '8 min read',
  category: 'Planning',
  image: "https://images.unsplash.com/photo-1581553672347-95d9444c0d2c",
  alt: 'Passport and boarding pass on a wooden table with warm afternoon light, travel planning',
  slug: 'usa-to-india-what-to-know',
  featured: false
},
{
  title: 'International Baggage Allowances Explained',
  excerpt: 'Cabin baggage, checked allowances, and what changes when you travel through multiple carriers.',
  readTime: '4 min read',
  category: 'Travel Tips',
  image: "https://images.unsplash.com/photo-1559626188-1d4f8c0815a4",
  alt: 'Colorful luggage suitcases stacked at airport check-in area with bright overhead lighting',
  slug: 'international-baggage-allowances',
  featured: false
},
{
  title: 'Traveling to India With Elderly Parents: A Practical Guide',
  excerpt: 'Wheelchair assistance, layover considerations, meal requests, and how to make the journey comfortable.',
  readTime: '7 min read',
  category: 'Family Travel',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e29031bd-1772086641960.png",
  alt: 'Elderly couple at airport sitting comfortably in departure lounge with warm natural light',
  slug: 'traveling-india-elderly-parents',
  featured: false
},
{
  title: 'How Flexible Travel Dates Help You Find Better Options',
  excerpt: 'A shift of even one or two days can open up meaningfully different routing and availability possibilities.',
  readTime: '4 min read',
  category: 'Planning',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_127abc45a-1778918128286.png",
  alt: 'Open calendar planner on desk with pen and travel documents, planning a trip',
  slug: 'flexible-dates-better-options',
  featured: false
}];


const categoryColors: Record<string, string> = {
  Planning: 'bg-primary/10 text-primary',
  Routes: 'bg-accent/10 text-accent',
  'Travel Tips': 'bg-foreground/10 text-foreground',
  'Family Travel': 'bg-secondary text-muted-foreground border border-border'
};

export default function TravelJournalSection() {
  return (
    <section id="guides" className="py-16 sm:py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Editorial</span>
            <h2 className="font-display text-section-xl text-foreground font-semibold">
              India Travel<br />
              <span className="italic font-light text-primary">Journal</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed sm:text-right">
            Practical guides and honest advice for traveling between North America and India.
          </p>
        </div>

        {/* Featured article + grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Featured — spans 2 cols */}
          <Link
            href={`/travel-guides/${articles[0].slug}`}
            className="lg:col-span-2 group bg-card rounded-2xl overflow-hidden border border-border shadow-warm-sm card-hover block">
            
            <div className="relative h-56 sm:h-72 overflow-hidden">
              <AppImage
                src={articles[0].image}
                alt={articles[0].alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 66vw" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[articles[0].category]}`}>
                  {articles[0].category}
                </span>
                <span className="text-xs text-muted-foreground">{articles[0].readTime}</span>
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {articles[0].title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{articles[0].excerpt}</p>
            </div>
          </Link>

          {/* Articles 2–3 stacked */}
          <div className="flex flex-col gap-5">
            {articles.slice(1, 3).map((article, i) =>
            <Link
              key={i}
              href={`/travel-guides/${article.slug}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border shadow-warm-sm card-hover flex flex-col flex-1">
              
                <div className="relative h-36 overflow-hidden">
                  <AppImage
                  src={article.image}
                  alt={article.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw" />
                
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[article.category]}`}>
                      {article.category}
                    </span>
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

        {/* Bottom row — articles 4–6 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
          {articles.slice(3, 6).map((article, i) =>
          <Link
            key={i}
            href={`/travel-guides/${article.slug}`}
            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-warm-sm card-hover block">
            
              <div className="relative h-40 overflow-hidden">
                <AppImage
                src={article.image}
                alt={article.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw" />
              
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-xs mt-1.5 leading-relaxed line-clamp-2">{article.excerpt}</p>
              </div>
            </Link>
          )}
        </div>

        <div className="text-center mt-10">
          <Link href="/travel-guides" className="btn-outline px-7 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            View All Travel Guides
          </Link>
        </div>
      </div>
    </section>);

}