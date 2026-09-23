import React from 'react';
import Link from 'next/link';

const footerLinks = [
  { group: 'Flights', links: [
    { label: 'USA to India', href: '#flights' },
    { label: 'Canada to India', href: '#flights' },
    { label: 'UAE & Gulf to India', href: '#flights' },
    { label: 'Domestic India', href: '#domestic' },
  ]},
  { group: 'Services', links: [
    { label: 'Hotels', href: '#hotels' },
    { label: 'Train Tickets', href: '#trains' },
    { label: 'Bus Travel', href: '#buses' },
    { label: 'International Travel', href: '#flights' },
  ]},
  { group: 'Travel Guides', links: [
    { label: 'India Travel Journal', href: '/travel-guides' },
    { label: 'Baggage Guide', href: '/travel-guides/international-baggage-allowances' },
    { label: 'Best Time to Book', href: '/travel-guides/best-time-book-canada-india' },
    { label: 'Toronto to Delhi Guide', href: '/travel-guides/toronto-delhi-direct-vs-connecting' },
  ]},
  { group: 'Company', links: [
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Request Quote', href: '/request-quote' },
    { label: 'Privacy Policy', href: '#' },
  ]},
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-14 pb-8 relative overflow-hidden">
      {/* Subtle jaali pattern */}
      <div className="absolute inset-0 jaali-subtle opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-10 border-b border-white/10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary">
                  <polygon points="12,2 15,9 22,9 16.5,14 18.5,21 12,17 5.5,21 7.5,14 2,9 9,9" fill="currentColor" opacity="0.9"/>
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-semibold text-white text-base">Northstar</span>
                <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-primary/80">Travel Solutions</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Domestic and international travel assistance for flights, hotels, trains and buses — with personalized, responsive support.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a href="tel:[PHONE]" aria-label="Call us" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-colors">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0 11.21 9.154 20.364 20.364 20.364h3.273c.896 0 1.636-.74 1.636-1.636v-4.364a1.636 1.636 0 00-1.636-1.636h-3.273a1.636 1.636 0 00-1.636 1.636v.818a14.546 14.546 0 01-9.818-9.818h.818A1.636 1.636 0 0013.614 10V6.338a1.636 1.636 0 00-1.636-1.636H7.714a1.636 1.636 0 00-1.636 1.636z" /></svg>
              </a>
              <a href="https://wa.me/919115652165" aria-label="WhatsApp" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-primary hover:border-primary transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>
              </a>
            </div>
          </div>

          {/* Link groups */}
          {footerLinks?.map((group) => (
            <div key={group?.group}>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">{group?.group}</p>
              <ul className="space-y-2.5">
                {group?.links?.map((link) => (
                  <li key={link?.label}>
                    {link?.href?.startsWith('/') ? (
                      <Link href={link?.href} className="text-sm text-white/60 hover:text-white transition-colors font-medium">
                        {link?.label}
                      </Link>
                    ) : (
                      <a href={link?.href} className="text-sm text-white/60 hover:text-white transition-colors font-medium">
                        {link?.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="text-white/35 text-sm">© 2026 Northstar Travel Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/35 hover:text-white/70 text-sm transition-colors font-medium">Privacy</a>
            <a href="#" className="text-white/35 hover:text-white/70 text-sm transition-colors font-medium">Terms</a>
            <a href="#" className="text-white/35 hover:text-white/70 text-sm transition-colors font-medium">Cancellation Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}