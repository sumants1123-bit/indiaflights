'use client';

import React, { useState, useEffect, createContext, useContext } from 'react';
import Link from 'next/link';

// Language context so child components can consume it if needed
export const LangContext = createContext<'EN' | 'HI'>('EN');

const translations = {
  EN: {
    flights: 'Flights',
    hotels: 'Hotels',
    trains: 'Trains',
    buses: 'Buses',
    travelGuides: 'Travel Guides',
    about: 'About',
    contact: 'Contact',
    whatsapp: 'WhatsApp Us',
    getQuote: 'Get a Quote',
    tagline: 'Travel Solutions',
    slogan: 'Your star for every journey.',
    founder: 'Meet the Founder',
  },
  HI: {
    flights: 'उड़ानें',
    hotels: 'होटल',
    trains: 'ट्रेनें',
    buses: 'बसें',
    travelGuides: 'यात्रा गाइड',
    about: 'हमारे बारे में',
    contact: 'संपर्क करें',
    whatsapp: 'व्हाट्सएप करें',
    getQuote: 'कोटेशन लें',
    tagline: 'ट्रैवल सॉल्यूशंस',
    slogan: 'हर यात्रा का आपका सितारा।',
    founder: 'संस्थापक से मिलें',
  },
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'HI'>('EN');

  const t = translations?.[lang];

  const navLinks = [
    { label: t?.flights, href: '#flights' },
    { label: t?.hotels, href: '#hotels' },
    { label: t?.trains, href: '#trains' },
    { label: t?.buses, href: '#buses' },
    { label: t?.travelGuides, href: '/travel-guides' },
    { label: t?.about, href: '#about' },
    { label: t?.founder, href: '/founder' },
    { label: t?.contact, href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <LangContext.Provider value={lang}>
      <>
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            scrolled
              ? 'bg-ivory/95 backdrop-blur-md shadow-warm-sm border-b border-border'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${scrolled ? 'bg-primary/10' : 'bg-white/15'}`}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={scrolled ? 'text-primary' : 'text-white'}>
                    <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" fill="currentColor" opacity="0.9"/>
                    <path d="M12 6 L19 19 L12 15 L5 19 Z" fill="currentColor" opacity="0.3"/>
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <span className={`font-display font-semibold text-base tracking-tight transition-colors duration-300 ${scrolled ? 'text-foreground' : 'text-white'}`}>
                    Northstar
                  </span>
                  <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white/70'}`}>
                    {t?.tagline}
                  </span>
                </div>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex items-center gap-6">
                {navLinks?.map((link) => (
                  link?.href?.startsWith('#') ? (
                    <a
                      key={link?.label}
                      href={link?.href}
                      className={`nav-link-underline text-sm font-medium transition-colors duration-200 ${
                        scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link?.label}
                    </a>
                  ) : (
                    <Link
                      key={link?.label}
                      href={link?.href}
                      className={`nav-link-underline text-sm font-medium transition-colors duration-200 ${
                        scrolled ? 'text-foreground hover:text-primary' : 'text-white/90 hover:text-white'
                      }`}
                    >
                      {link?.label}
                    </Link>
                  )
                ))}
              </nav>

              {/* Desktop CTAs + Language */}
              <div className="hidden lg:flex items-center gap-3">
                {/* Language switcher */}
                <div className={`flex items-center text-xs font-semibold rounded-full border overflow-hidden transition-colors ${scrolled ? 'border-border' : 'border-white/30'}`}>
                  <button
                    onClick={() => setLang('EN')}
                    className={`px-3 py-1.5 transition-colors ${lang === 'EN' ? 'bg-primary text-white' : scrolled ? 'text-foreground hover:text-primary' : 'text-white/80 hover:text-white'}`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang('HI')}
                    className={`px-3 py-1.5 transition-colors ${lang === 'HI' ? 'bg-primary text-white' : scrolled ? 'text-foreground hover:text-primary' : 'text-white/80 hover:text-white'}`}
                  >
                    हिंदी
                  </button>
                </div>
                <a
                  href="https://wa.me/919115652165"
                  className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 flex items-center gap-1.5 ${
                    scrolled
                      ? 'border-border text-foreground hover:border-primary hover:text-primary'
                      : 'border-white/40 text-white hover:border-white'
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  {t?.whatsapp}
                </a>
                <Link
                  href="/request-quote"
                  className="btn-primary text-sm font-semibold px-5 py-2.5 rounded-full"
                >
                  {t?.getQuote}
                </Link>
              </div>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open navigation menu"
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 5h16M3 11h16M3 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile menu overlay */}
        {menuOpen && (
          <div className="fixed inset-0 z-[100] flex">
            <div
              className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <div className="relative ml-auto w-[85vw] max-w-sm h-full bg-ivory flex flex-col p-6 shadow-warm-xl overflow-y-auto">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary">
                      <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" fill="currentColor" opacity="0.9"/>
                    </svg>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="font-display font-semibold text-foreground text-sm">Northstar</span>
                    <span className="text-[8px] font-semibold tracking-[0.18em] uppercase text-primary">{t?.tagline}</span>
                  </div>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-2 text-foreground"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Language switcher mobile */}
              <div className="flex items-center gap-2 mb-6">
                <span className="text-xs text-muted-foreground font-medium">Language:</span>
                <div className="flex items-center text-xs font-semibold rounded-full border border-border overflow-hidden">
                  <button onClick={() => setLang('EN')} className={`px-3 py-1.5 transition-colors ${lang === 'EN' ? 'bg-primary text-white' : 'text-foreground'}`}>EN</button>
                  <button onClick={() => setLang('HI')} className={`px-3 py-1.5 transition-colors ${lang === 'HI' ? 'bg-primary text-white' : 'text-foreground'}`}>हिंदी</button>
                </div>
              </div>

              <nav className="flex flex-col gap-1 flex-1">
                {navLinks?.map((link) => (
                  link?.href?.startsWith('#') ? (
                    <a
                      key={link?.label}
                      href={link?.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-foreground font-medium text-lg py-3 px-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      {link?.label}
                    </a>
                  ) : (
                    <Link
                      key={link?.label}
                      href={link?.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-foreground font-medium text-lg py-3 px-3 rounded-lg hover:bg-secondary transition-colors"
                    >
                      {link?.label}
                    </Link>
                  )
                ))}
              </nav>
              <div className="flex flex-col gap-3 pt-6 border-t border-border">
                <a
                  href="https://wa.me/919115652165"
                  className="btn-outline text-base font-semibold py-3 rounded-full text-center flex items-center justify-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
                  </svg>
                  {t?.whatsapp}
                </a>
                <Link
                  href="/request-quote"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary text-base font-semibold py-3 rounded-full text-center block"
                >
                  {t?.getQuote}
                </Link>
              </div>
            </div>
          </div>
        )}
      </>
    </LangContext.Provider>
  );
}