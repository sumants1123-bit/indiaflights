'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const WHATSAPP_NUMBER = '919115652165';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Ankit, I'd like to discuss my travel plans with you.");

export default function FounderPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ivory">
        {/* Hero band */}
        <div className="relative bg-foreground overflow-hidden">
          {/* Subtle jaali pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z M30 10L50 30L30 50L10 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary/80 mb-4 block">
              Northstar Travel Solutions
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              Meet Ankit Khullar
            </h1>
            <p className="text-white/60 text-lg mt-3 font-light">
              Founder &amp; Travel Specialist
            </p>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">

            {/* Left: Photo + contact card */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-warm-lg aspect-[3/4] bg-muted">
                <Image
                  src="/assets/images/Screenshot_2026-09-16_at_5.31.43_PM-1789594311861.png"
                  alt="Ankit Khullar — Founder of Northstar Travel Solutions, travel specialist with 10+ years of experience"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Subtle gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-display font-semibold text-lg leading-tight">Ankit Khullar</p>
                  <p className="text-white/75 text-sm">Founder, Northstar Travel Solutions</p>
                </div>
              </div>

              {/* Experience badge */}
              <div className="glass-warm rounded-xl border border-border p-5 shadow-warm-sm">
                <p className="font-display text-4xl font-semibold text-primary">10+</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1">
                  Years in the Travel Industry
                </p>
              </div>

              {/* Contact card */}
              <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  Reach Ankit Directly
                </p>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-5 py-3.5 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md group"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm">WhatsApp Ankit</span>
                    <span className="text-xs text-white/80 font-normal">+91 91156 52165</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:ankit@northstartravelsolutions.com"
                  className="flex items-center gap-3 w-full border border-border hover:border-primary text-foreground hover:text-primary font-semibold px-5 py-3.5 rounded-xl transition-all duration-200 group"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm">Send an Email</span>
                    <span className="text-xs text-muted-foreground font-normal group-hover:text-primary/70 transition-colors">ankit@northstartravelsolutions.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Bio */}
            <div className="lg:col-span-3 space-y-8">
              {/* Intro quote */}
              <div className="border-l-2 border-primary pl-6">
                <p className="font-display text-xl sm:text-2xl text-foreground font-light italic leading-relaxed">
                  "International travel should feel personal, trustworthy, and uncomplicated."
                </p>
              </div>

              {/* Bio paragraphs */}
              <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
                <p>
                  Ankit Khullar is a travel entrepreneur with over 10 years in the travel industry and a genuine love for exploring India and the world. He founded Northstar Travel Solutions around a simple idea: international travel should feel personal, trustworthy, and uncomplicated.
                </p>
                <p>
                  Whether you're flying from Canada or the U.S. to India, looking for a great fare, or simply need someone reliable who understands the journey — Ankit aims to be that trusted bridge between you and India.
                </p>
                <p>
                  And it doesn't always have to start with a booking. Ankit is always up for a good conversation about travel, India, or your next adventure. Feel free to reach out on WhatsApp or email — he'd love to hear from you.
                </p>
              </div>

              {/* What Ankit helps with */}
              <div className="bg-secondary rounded-2xl p-6 sm:p-8">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wider mb-5">
                  What Ankit Can Help With
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'USA → India flights',
                    'Canada → India flights',
                    'India → USA / Canada',
                    'Flexible date fare search',
                    'Family & group travel',
                    'Multi-city itineraries',
                    'Senior traveler assistance',
                    'Last-minute bookings',
                  ]?.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <Link href="/request-quote" className="btn-outline px-6 py-3 rounded-full text-sm font-semibold">
                  Request a Quote
                </Link>
                <Link href="/contact" className="btn-outline px-6 py-3 rounded-full text-sm font-semibold">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
