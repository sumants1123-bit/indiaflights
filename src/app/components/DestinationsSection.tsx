'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const destinations = [
{
  city: 'Delhi',
  state: 'NCR',
  description: 'India\'s capital — a living tapestry of Mughal monuments, colonial boulevards, and vibrant bazaars.',
  bestTime: 'Oct – Mar',
  connections: 'Toronto, New York, Chicago, DC',
  image: "https://images.unsplash.com/photo-1694927368697-b578357b89ee",
  alt: 'India Gate monument in New Delhi at dusk with warm amber and blue twilight sky, clean empty plaza',
  rowSpan: true
},
{
  city: 'Mumbai',
  state: 'Maharashtra',
  description: 'India\'s financial heart — where Art Deco architecture meets the Arabian Sea.',
  bestTime: 'Nov – Feb',
  connections: 'Toronto, New York, Los Angeles',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d053633a-1786262967410.png",
  alt: 'Mumbai Marine Drive seafront promenade at twilight with curved necklace of city lights and calm ocean',
  rowSpan: false
},
{
  city: 'Amritsar',
  state: 'Punjab',
  description: 'Home to the Golden Temple — one of the most spiritually significant sites in the world.',
  bestTime: 'Oct – Mar',
  connections: 'Toronto, Vancouver, New York',
  image: "https://images.unsplash.com/photo-1645775250171-da71531405c1",
  alt: 'Golden Temple Amritsar reflected in sacred pool at golden hour with warm amber light on gilded domes',
  rowSpan: false
},
{
  city: 'Hyderabad',
  state: 'Telangana',
  description: 'The City of Pearls — where Nizami heritage meets India\'s booming tech industry.',
  bestTime: 'Nov – Feb',
  connections: 'Dallas, New York, Chicago',
  image: "https://images.unsplash.com/photo-1657981630164-769503f3a9a8",
  alt: 'Charminar monument in Hyderabad at dusk with warm golden lights illuminating the four minarets',
  rowSpan: false
},
{
  city: 'Ahmedabad',
  state: 'Gujarat',
  description: 'A UNESCO World Heritage City — remarkable for its step-wells, pol houses, and culinary traditions.',
  bestTime: 'Oct – Mar',
  connections: 'New York, Toronto via Delhi',
  image: "https://images.unsplash.com/photo-1688636588460-9b20331e45af",
  alt: 'Adalaj stepwell in Ahmedabad with ornate carved stone corridors and geometric patterns in warm afternoon light',
  rowSpan: false
},
{
  city: 'Bengaluru',
  state: 'Karnataka',
  description: 'India\'s Garden City and Silicon Valley — a cosmopolitan hub of innovation and green boulevards.',
  bestTime: 'Sep – Feb',
  connections: 'Toronto, New York, San Francisco',
  image: "https://images.unsplash.com/photo-1710127596257-f2990ee8cb01",
  alt: 'Bangalore city skyline with lush green trees and modern glass office buildings under clear blue sky',
  rowSpan: false
},
{
  city: 'Chennai',
  state: 'Tamil Nadu',
  description: 'The cultural capital of South India — classical music, Dravidian temples, and golden beaches.',
  bestTime: 'Nov – Feb',
  connections: 'New York, Toronto via Mumbai',
  image: "https://images.unsplash.com/photo-1662004456053-5b4eb00cc009",
  alt: 'Marina Beach Chennai at sunrise with calm waves and soft pink sky with silhouettes of morning walkers',
  rowSpan: false
},
{
  city: 'Kochi',
  state: 'Kerala',
  description: 'Where spice trade history meets backwater serenity — Chinese fishing nets and colonial heritage.',
  bestTime: 'Oct – Feb',
  connections: 'New York, Toronto via Mumbai/Bengaluru',
  image: "https://images.unsplash.com/photo-1714931862306-7abe321b6b5f",
  alt: 'Chinese fishing nets in Fort Kochi Kerala silhouetted against golden sunset over calm backwaters',
  rowSpan: false
},
{
  city: 'Goa',
  state: 'Goa',
  description: 'India\'s coastal gem — Portuguese heritage, white sand beaches, and a uniquely laid-back spirit.',
  bestTime: 'Nov – Mar',
  connections: 'Major cities via Mumbai or Delhi',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1767a9e38-1781603521761.png",
  alt: 'Goa beach at sunset with warm orange sky, palm trees swaying, and gentle waves on golden sand',
  rowSpan: false
}];


export default function DestinationsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.dest-card');
            cards.forEach((card, i) => {
              setTimeout(() => card.classList.add('revealed'), i * 90);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="destinations" ref={sectionRef} className="py-16 sm:py-20 bg-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Explore India</span>
          <h2 className="font-display text-section-xl text-white font-semibold mb-4">
            Where Will India<br />
            <span className="italic font-light text-primary">Take You?</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            From the Himalayan foothills to Kerala&apos;s backwaters — every destination has a story. We help you get there.
          </p>
        </div>

        {/* Bento grid audit:
           9 cards: Delhi(rs-2), Mumbai, Amritsar, Hyderabad, Ahmedabad, Bengaluru, Chennai, Kochi, Goa
           Desktop grid-cols-3:
           Row 1: [col-1: Delhi rs-2 cs-1] [col-2: Mumbai cs-1] [col-3: Amritsar cs-1]
           Row 2: [col-1: Delhi(occupied)] [col-2: Hyderabad cs-1] [col-3: Ahmedabad cs-1]
           Row 3: [col-1: Bengaluru cs-1] [col-2: Chennai cs-1] [col-3: Kochi cs-1]
           Row 4: [col-1: Goa cs-3]
           Placed 9/9 ✓
          */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Delhi — row-span-2 */}
          {/* BENTO: col-1, row 1-2, cs-1 rs-2 */}
          <div className="dest-card destination-card scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer lg:row-span-2 min-h-[320px] lg:min-h-[500px] group">
            <AppImage
              src={destinations?.[0]?.image}
              alt={destinations?.[0]?.alt}
              fill
              className="destination-card-img object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw" />
            
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent" />
            <div className="destination-overlay absolute inset-0 bg-foreground/50" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
              <div className="destination-overlay mb-3">
                <p className="text-white/70 text-xs font-medium mb-1">Best time: {destinations?.[0]?.bestTime}</p>
                <p className="text-white/70 text-xs">Connects from: {destinations?.[0]?.connections}</p>
                <p className="text-white/80 text-sm leading-relaxed mt-2">{destinations?.[0]?.description}</p>
              </div>
              <div>
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white">{destinations?.[0]?.city}</h3>
                <p className="text-primary text-sm font-medium">{destinations?.[0]?.state}</p>
              </div>
              <div className="destination-overlay mt-4">
                <Link href="/request-quote" className="inline-flex items-center gap-1.5 text-sm font-semibold text-white border border-white/40 px-4 py-2 rounded-full hover:bg-white hover:text-foreground transition-all">
                  Explore Flights
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Mumbai — col-2, row 1 */}
          {/* BENTO: col-2, row 1, cs-1 rs-1 */}
          <div className="dest-card destination-card scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer min-h-[220px] group">
            <AppImage src={destinations?.[1]?.image} alt={destinations?.[1]?.alt} fill className="destination-card-img object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="destination-overlay absolute inset-0 bg-foreground/40" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
              <div className="destination-overlay mb-2">
                <p className="text-white/70 text-xs">Best time: {destinations?.[1]?.bestTime}</p>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{destinations?.[1]?.city}</h3>
              <p className="text-primary text-xs font-medium">{destinations?.[1]?.state}</p>
            </div>
          </div>

          {/* Amritsar — col-3, row 1 */}
          {/* BENTO: col-3, row 1, cs-1 rs-1 */}
          <div className="dest-card destination-card scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer min-h-[220px] group">
            <AppImage src={destinations?.[2]?.image} alt={destinations?.[2]?.alt} fill className="destination-card-img object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="destination-overlay absolute inset-0 bg-foreground/40" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
              <div className="destination-overlay mb-2">
                <p className="text-white/70 text-xs">Best time: {destinations?.[2]?.bestTime}</p>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{destinations?.[2]?.city}</h3>
              <p className="text-primary text-xs font-medium">{destinations?.[2]?.state}</p>
            </div>
          </div>

          {/* Hyderabad — col-2, row 2 */}
          {/* BENTO: col-2, row 2, cs-1 rs-1 */}
          <div className="dest-card destination-card scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer min-h-[220px] group">
            <AppImage src={destinations?.[3]?.image} alt={destinations?.[3]?.alt} fill className="destination-card-img object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="destination-overlay absolute inset-0 bg-foreground/40" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
              <div className="destination-overlay mb-2">
                <p className="text-white/70 text-xs">Best time: {destinations?.[3]?.bestTime}</p>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{destinations?.[3]?.city}</h3>
              <p className="text-primary text-xs font-medium">{destinations?.[3]?.state}</p>
            </div>
          </div>

          {/* Ahmedabad — col-3, row 2 */}
          {/* BENTO: col-3, row 2, cs-1 rs-1 */}
          <div className="dest-card destination-card scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer min-h-[220px] group">
            <AppImage src={destinations?.[4]?.image} alt={destinations?.[4]?.alt} fill className="destination-card-img object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="destination-overlay absolute inset-0 bg-foreground/40" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
              <div className="destination-overlay mb-2">
                <p className="text-white/70 text-xs">Best time: {destinations?.[4]?.bestTime}</p>
              </div>
              <h3 className="font-display text-xl font-semibold text-white">{destinations?.[4]?.city}</h3>
              <p className="text-primary text-xs font-medium">{destinations?.[4]?.state}</p>
            </div>
          </div>

          {/* Bengaluru — col-1, row 3 */}
          {/* BENTO: col-1, row 3, cs-1 rs-1 */}
          <div className="dest-card destination-card scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer min-h-[200px] group">
            <AppImage src={destinations?.[5]?.image} alt={destinations?.[5]?.alt} fill className="destination-card-img object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="destination-overlay absolute inset-0 bg-foreground/40" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
              <h3 className="font-display text-xl font-semibold text-white">{destinations?.[5]?.city}</h3>
              <p className="text-primary text-xs font-medium">{destinations?.[5]?.state}</p>
            </div>
          </div>

          {/* Chennai — col-2, row 3 */}
          {/* BENTO: col-2, row 3, cs-1 rs-1 */}
          <div className="dest-card destination-card scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer min-h-[200px] group">
            <AppImage src={destinations?.[6]?.image} alt={destinations?.[6]?.alt} fill className="destination-card-img object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="destination-overlay absolute inset-0 bg-foreground/40" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
              <h3 className="font-display text-xl font-semibold text-white">{destinations?.[6]?.city}</h3>
              <p className="text-primary text-xs font-medium">{destinations?.[6]?.state}</p>
            </div>
          </div>

          {/* Kochi — col-3, row 3 */}
          {/* BENTO: col-3, row 3, cs-1 rs-1 */}
          <div className="dest-card destination-card scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer min-h-[200px] group">
            <AppImage src={destinations?.[7]?.image} alt={destinations?.[7]?.alt} fill className="destination-card-img object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="destination-overlay absolute inset-0 bg-foreground/40" />
            <div className="absolute inset-0 p-5 flex flex-col justify-end z-10">
              <h3 className="font-display text-xl font-semibold text-white">{destinations?.[7]?.city}</h3>
              <p className="text-primary text-xs font-medium">{destinations?.[7]?.state}</p>
            </div>
          </div>

          {/* Goa — col-span-3 (fills last row) */}
          {/* BENTO: col-1 to col-3, row 4, cs-3 rs-1 */}
          <div className="dest-card destination-card scroll-reveal relative overflow-hidden rounded-2xl cursor-pointer min-h-[200px] lg:col-span-3 group">
            <AppImage src={destinations?.[8]?.image} alt={destinations?.[8]?.alt} fill className="destination-card-img object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/30 to-transparent" />
            <div className="destination-overlay absolute inset-0 bg-foreground/30" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end lg:justify-center z-10">
              <div className="max-w-md">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-1">{destinations?.[8]?.city}</h3>
                <p className="text-primary text-sm font-medium mb-2">{destinations?.[8]?.state}</p>
                <p className="text-white/75 text-sm leading-relaxed destination-overlay">{destinations?.[8]?.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/request-quote" className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/40 px-7 py-3 rounded-full hover:bg-primary hover:text-white transition-all">
            Request Flights to Any Indian City
          </Link>
        </div>
      </div>
    </section>);

}