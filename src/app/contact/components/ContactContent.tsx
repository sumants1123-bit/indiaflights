'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const enquiryCategories = [
  { value: 'new-flight', label: 'New Flight Enquiry' },
  { value: 'existing', label: 'Existing Booking' },
  { value: 'change', label: 'Change / Cancellation' },
  { value: 'baggage', label: 'Baggage Question' },
  { value: 'group', label: 'Group Travel' },
  { value: 'other', label: 'Other' },
];

export default function ContactContent() {
  const [category, setCategory] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point — submit contact form to CRM/email
    setSubmitted(true);
  };

  return (
    <>
      <section className="pt-24 pb-12 bg-foreground relative overflow-hidden">
        {/* Jaali overlay */}
        <div className="absolute inset-0 jaali-subtle opacity-20 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 block">Get in Touch</span>
            <h1 className="font-display text-hero-xl text-white font-semibold mb-5 leading-tight">
              Planning a trip?<br />
              <span className="italic font-light text-primary">Talk to a real person.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              No chatbots. No automated responses. A travel specialist will read your message and respond personally.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left: Contact methods */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">Contact Methods</h2>

              <div className="space-y-5 mb-10">
                {/* Phone */}
                <a
                  href="tel:[PHONE]"
                  className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl shadow-warm-sm card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Call Us</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">[PHONE]</p>
                    <p className="text-xs text-muted-foreground">Business hours: [HOURS]</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919115652165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl shadow-warm-sm card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">WhatsApp</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-green-600 transition-colors">+91 91156 52165</p>
                    <p className="text-xs text-muted-foreground">Message us any time</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground group-hover:text-green-600 transition-colors flex-shrink-0">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:[EMAIL]"
                  className="flex items-center gap-4 p-5 bg-card border border-border rounded-2xl shadow-warm-sm card-hover group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-0.5">Email</p>
                    <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">[EMAIL]</p>
                    <p className="text-xs text-muted-foreground">We respond within one business day</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              {/* Office info */}
              <div className="bg-secondary rounded-2xl border border-border p-5">
                <h3 className="font-display text-base font-semibold text-foreground mb-4">Office Information</h3>
                <div className="space-y-3">
                  {[
                    { icon: '📍', label: 'Address', value: '[ADDRESS]' },
                    { icon: '🕐', label: 'Business Hours', value: '[BUSINESS HOURS]' },
                    { icon: '🏢', label: 'Registration', value: '[REGISTRATION NUMBER]' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <span className="text-base mt-0.5">{item.icon}</span>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                        <p className="text-sm text-foreground font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-5 bg-primary/5 border border-primary/20 rounded-2xl">
                <p className="text-sm text-foreground font-medium mb-1">Need a flight quote instead?</p>
                <p className="text-xs text-muted-foreground mb-3">Use our structured quote form for faster, more detailed assistance.</p>
                <Link href="/request-quote" className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-1.5">
                  Get a Quote
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right: Contact form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-8">Send a Message</h2>

              {submitted ? (
                <div className="bg-card rounded-2xl border border-border p-8 text-center shadow-warm-md">
                  <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center text-primary mx-auto mb-4">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Message Received</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Thank you for getting in touch. A travel specialist will respond to you personally within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-warm-md p-6 sm:p-8">
                  {/* Enquiry category */}
                  <div className="mb-5">
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Enquiry Type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {enquiryCategories.map((cat) => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => setCategory(cat.value)}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all text-left ${
                            category === cat.value
                              ? 'bg-primary text-white border-primary' :'border-border text-muted-foreground hover:border-primary hover:text-primary'
                          }`}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="Arjun Mehta"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="arjun@email.com"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        placeholder="+1 (647) 555-0200"
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors placeholder:text-muted-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Message *</label>
                      <textarea
                        required
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                        rows={5}
                        placeholder="Tell us about your travel plans, questions, or how we can help..."
                        className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors resize-none placeholder:text-muted-foreground"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 mt-5"
                  >
                    Send Message
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <p className="text-center text-xs text-muted-foreground mt-3">
                    We respond personally within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 safe-area-pb">
        <div className="flex gap-2 max-w-sm mx-auto">
          <a
            href="tel:[PHONE]"
            className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl bg-secondary text-foreground text-xs font-semibold min-h-[44px] justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call
          </a>
          <a
            href="https://wa.me/[WHATSAPP]"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl bg-green-50 text-green-700 text-xs font-semibold min-h-[44px] justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
            </svg>
            WhatsApp
          </a>
          <Link
            href="/request-quote"
            className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl btn-primary text-xs font-semibold min-h-[44px] justify-center"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
            Get Quote
          </Link>
        </div>
      </div>
    </>
  );
}