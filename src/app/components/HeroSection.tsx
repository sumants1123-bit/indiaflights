'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const tabs = ['Round Trip', 'One Way'];
const cabinClasses = ['Economy', 'Premium Economy', 'Business', 'First Class'];

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [cabin, setCabin] = useState('Economy');
  const [travelers, setTravelers] = useState(1);

  return (
    <section id="flights" className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1641803186443-59645cd6727c"
          alt="Golden hour view of historic Indian palace architecture with warm amber light illuminating carved stone facades and arched corridors"
          fill
          priority
          className="object-cover"
          sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-foreground/20" />
      </div>

      {/* Decorative jaali overlay */}
      <div className="absolute inset-0 z-[1] jaali-subtle opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pb-12 pt-32">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left: Headline */}
          <div className="lg:col-span-5 order-1">
            <span className="inline-flex items-center gap-2 text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-3">
              <span className="w-5 h-[1.5px] bg-primary" />
              Northstar Travel Solutions
            </span>
            <p className="text-white/55 text-sm font-light tracking-wide mb-5 italic">
              Your star for every journey.
            </p>
            <h1 className="font-display text-hero-xl text-white font-semibold mb-5 leading-[1.02]">
              Your Journey<br />to India,<br />
              <span className="italic font-light text-gold-light">Made Simple.</span>
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-lg mb-8 font-light">
              Personalized domestic and international travel assistance for flights, hotels, trains and buses — with an experienced travel specialist helping you every step of the way.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                href="/request-quote"
                className="btn-primary px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                Find My Best Flight Options
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <a
                href="https://wa.me/919115652165"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right: Search widget */}
          <div className="lg:col-span-7 order-2">
            <div className="glass-warm rounded-2xl overflow-hidden shadow-warm-xl">
              {/* Tabs */}
              <div className="flex border-b border-border/60">
                {tabs?.map((tab, i) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(i)}
                    className={`flex-1 py-3.5 text-sm font-semibold transition-all duration-200 ${
                      activeTab === i
                        ? 'text-primary border-b-2 border-primary bg-primary/5' :'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-5 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* From */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">From</label>
                    <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-3 bg-background focus-within:border-primary transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-primary flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Toronto, New York, Dubai..."
                        className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground w-full" />
                    </div>
                  </div>

                  {/* To */}
                  <div className="relative">
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">To</label>
                    <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-3 bg-background focus-within:border-primary transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-primary flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Delhi, Mumbai, Amritsar..."
                        className="bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground w-full" />
                    </div>
                  </div>

                  {/* Departure */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Departure</label>
                    <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-3 bg-background focus-within:border-primary transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-primary flex-shrink-0">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <input type="date" className="bg-transparent outline-none text-sm text-foreground w-full cursor-pointer" />
                    </div>
                  </div>

                  {/* Return */}
                  {activeTab === 0 && (
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Return</label>
                      <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-3 bg-background focus-within:border-primary transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-primary flex-shrink-0">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <input type="date" className="bg-transparent outline-none text-sm text-foreground w-full cursor-pointer" />
                      </div>
                    </div>
                  )}

                  {/* Travelers */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Travellers</label>
                    <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-3 bg-background">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-primary flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                      <div className="flex items-center gap-3 w-full">
                        <button onClick={() => setTravelers(Math.max(1, travelers - 1))} className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors text-lg leading-none">−</button>
                        <span className="text-sm font-semibold text-foreground min-w-[1.5rem] text-center">{travelers}</span>
                        <button onClick={() => setTravelers(Math.min(9, travelers + 1))} className="w-6 h-6 rounded-full border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors text-lg leading-none">+</button>
                        <span className="text-sm text-muted-foreground">{travelers === 1 ? 'Traveller' : 'Travellers'}</span>
                      </div>
                    </div>
                  </div>

                  {/* Cabin class */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Cabin Class</label>
                    <div className="flex items-center gap-2 border border-border rounded-xl px-3 py-3 bg-background focus-within:border-primary transition-colors">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-primary flex-shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                      <select
                        value={cabin}
                        onChange={(e) => setCabin(e?.target?.value)}
                        className="bg-transparent outline-none text-sm text-foreground w-full cursor-pointer">
                        {cabinClasses?.map((c) => (
                          <option key={c} value={c}>{c}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <Link
                  href="/request-quote"
                  className="btn-primary w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 mt-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                  Find My Best Flight Options
                </Link>
                <p className="text-center text-xs text-muted-foreground mt-3">
                  No booking required — send us your itinerary and we&apos;ll help you find the latest available options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-60">
        <span className="text-white text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-white/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-white" style={{ animation: 'slideDown 1.5s ease-in-out infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}