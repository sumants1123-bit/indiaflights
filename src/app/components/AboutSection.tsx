import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WHATSAPP_NUMBER = '919115652165';
const WHATSAPP_MESSAGE = encodeURIComponent("Hi Ankit, I'd like to discuss my travel plans with you.");

export default function AboutSection() {
  return (
    <>
      <section id="about" className="py-16 sm:py-20 bg-secondary jaali-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Image placeholder + stat */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden bg-muted aspect-[4/3] flex items-center justify-center border border-border">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center text-primary mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <p className="font-display text-lg font-semibold text-foreground">Ankit Khullar</p>
                  <p className="text-muted-foreground text-sm mt-1">Founder, Northstar Travel Solutions</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -bottom-5 -right-5 sm:right-0 glass-warm rounded-xl p-5 shadow-warm-lg border border-border max-w-[200px]">
                <p className="font-display text-3xl font-semibold text-primary">10+ yrs</p>
                <p className="text-xs font-semibold text-muted-foreground mt-1 uppercase tracking-wider">Travel Industry Experience</p>
              </div>
            </div>

            {/* Right: Content */}
            <div className="pt-6 sm:pt-0">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">About Us</span>
              <h2 className="font-display text-section-lg text-foreground font-semibold mb-6">
                Travel planning with a<br />
                <span className="italic font-light text-primary">human behind it.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Northstar Travel Solutions provides domestic and international travel assistance for flights, hotels, trains and buses. With several years of experience in the travel industry, we focus on helping travellers find practical options while providing responsive, personalized support throughout the booking process.
                </p>
                <p>
                  International travel — especially trips involving India, families, multiple cities, baggage requirements and long journeys — can be complicated. We exist to make that process simpler, with a real person available to help at every step.
                </p>
              </div>

              {/* Placeholder fields */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { label: 'Business Registration', value: '[REGISTRATION NUMBER]' },
                  { label: 'Accreditations', value: '[TO BE ADDED]' },
                  { label: 'Office Location', value: '[ADDRESS]' },
                  { label: 'Business Hours', value: '[HOURS]' },
                ]?.map((item) => (
                  <div key={item?.label} className="bg-card rounded-xl border border-border p-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{item?.label}</p>
                    <p className="text-sm text-foreground font-medium">{item?.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary px-6 py-3 rounded-full text-sm font-semibold">
                  Contact Us
                </Link>
                <Link href="/request-quote" className="btn-outline px-6 py-3 rounded-full text-sm font-semibold">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder Profile Section ── */}
      <section id="founder" className="py-16 sm:py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section label */}
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">The Person Behind the Agency</span>
            <h2 className="font-display text-section-lg text-foreground font-semibold">
              Meet Ankit Khullar
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
            {/* Photo column */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div className="relative rounded-2xl overflow-hidden shadow-warm-lg aspect-[3/4] bg-muted">
                <Image
                  src="/assets/images/Screenshot_2026-09-16_at_5.31.43_PM-1789594311861.png"
                  alt="Ankit Khullar — Founder of Northstar Travel Solutions, travel specialist with 10+ years of experience in international travel"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-foreground/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-display font-semibold text-base leading-tight">Ankit Khullar</p>
                  <p className="text-white/75 text-xs">Founder, Northstar Travel Solutions</p>
                </div>
              </div>

              {/* Direct contact card */}
              <div className="bg-card rounded-2xl border border-border p-5 space-y-3">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Reach Ankit Directly</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-4 py-3 rounded-xl transition-all duration-200 text-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span>WhatsApp Ankit</span>
                    <span className="text-xs text-white/80 font-normal">+91 91156 52165</span>
                  </div>
                </a>
                <a
                  href="mailto:ankit@northstartravelsolutions.com"
                  className="flex items-center gap-3 w-full border border-border hover:border-primary text-foreground hover:text-primary font-semibold px-4 py-3 rounded-xl transition-all duration-200 text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="flex-shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  Send an Email
                </a>
              </div>
            </div>

            {/* Bio column */}
            <div className="lg:col-span-3 space-y-6">
              {/* Pull quote */}
              <div className="border-l-2 border-primary pl-5">
                <p className="font-display text-xl sm:text-2xl text-foreground font-light italic leading-relaxed">
                  "International travel should feel personal, trustworthy, and uncomplicated."
                </p>
              </div>

              <div className="space-y-4 text-muted-foreground text-base leading-relaxed">
                <p>
                  Ankit Khullar is a travel entrepreneur with 10+ years in the travel industry and a genuine love for exploring India and the world. He founded Northstar Travel Solutions around a simple idea: international travel should feel personal, trustworthy, and uncomplicated.
                </p>
                <p>
                  Whether you're flying from Canada or the U.S. to India, looking for a great fare, or simply need someone reliable who understands the journey — Ankit aims to be that trusted bridge between you and India.
                </p>
                <p>
                  And it doesn't always have to start with a booking. Ankit is always up for a good conversation about travel, India, or your next adventure. Feel free to reach out on WhatsApp or email — he'd love to hear from you.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
                <Link href="/founder" className="btn-outline px-6 py-3 rounded-full text-sm font-semibold">
                  Full Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}