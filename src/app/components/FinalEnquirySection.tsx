'use client';

import React, { useState } from 'react';

export default function FinalEnquirySection() {
  const [form, setForm] = useState({
    name: '',
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: '1',
    phone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMsg = () => {
    const ret = form.returnDate ? `, returning ${form.returnDate}` : '';
    return encodeURIComponent(
      `Hi Northstar Travel Solutions, I'm looking for travel options from ${form.from || '[FROM]'} to ${form.to || '[TO]'}, departing ${form.departDate || '[DATE]'}${ret}, for ${form.passengers} passenger(s). My name is ${form.name || '[NAME]'} and you can reach me at ${form.phone || '[PHONE]'}.`
    );
  };

  return (
    <section className="py-16 sm:py-20 bg-ivory relative overflow-hidden">
      <div className="absolute inset-0 jaali-subtle opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Get Started</span>
          <h2 className="font-display text-section-xl text-foreground font-semibold leading-tight mb-4">
            Tell us where<br />
            <span className="italic font-light text-primary">you&apos;re going.</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto">
            Share your travel details and we&apos;ll help you find the latest available options.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-warm-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Phone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 (000) 000-0000"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">From</label>
              <input
                type="text"
                name="from"
                value={form.from}
                onChange={handleChange}
                placeholder="City or airport"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">To</label>
              <input
                type="text"
                name="to"
                value={form.to}
                onChange={handleChange}
                placeholder="City or airport"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Travel Date</label>
              <input
                type="date"
                name="departDate"
                value={form.departDate}
                onChange={handleChange}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors text-foreground cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Return Date</label>
              <input
                type="date"
                name="returnDate"
                value={form.returnDate}
                onChange={handleChange}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors text-foreground cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Number of Passengers</label>
              <select
                name="passengers"
                value={form.passengers}
                onChange={handleChange}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors text-foreground cursor-pointer"
              >
                {[1,2,3,4,5,6,7,8,9].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Passenger' : 'Passengers'}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-background outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              type="button"
              className="btn-primary flex-1 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              Get My Travel Options
            </button>
            <a
              href={`https://wa.me/919115652165?text=${buildWhatsAppMsg()}`}
              className="flex-1 sm:flex-none border border-border bg-background hover:border-primary hover:bg-primary/5 text-foreground py-4 px-6 rounded-xl text-base font-semibold flex items-center justify-center gap-2 transition-all duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-green-500">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Continue on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
