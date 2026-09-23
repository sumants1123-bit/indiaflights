'use client';

import React, { useState } from 'react';
import Link from 'next/link';

type TripType = 'roundtrip' | 'oneway' | 'multicity';
type CabinClass = 'Economy' | 'Premium Economy' | 'Business' | 'First Class';

interface TripDetails {
  tripType: TripType;
  from: string;
  to: string;
  departure: string;
  returnDate: string;
  travelers: number;
  cabin: CabinClass;
}

interface ContactDetails {
  name: string;
  phone: string;
  email: string;
}

const steps = [
  { number: 1, label: 'Your Trip' },
  { number: 2, label: 'Contact' },
  { number: 3, label: 'Submitted' },
];

const popularRoutes = [
  'Toronto → Delhi', 'Toronto → Mumbai', 'Vancouver → Delhi',
  'New York → Delhi', 'New York → Mumbai', 'Chicago → Delhi',
  'San Francisco → Delhi', 'Dallas → Hyderabad', 'Washington → Delhi',
  'Los Angeles → Mumbai', 'Other / Custom Route',
];

export default function QuoteFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [tripDetails, setTripDetails] = useState<TripDetails>({
    tripType: 'roundtrip',
    from: '',
    to: '',
    departure: '',
    returnDate: '',
    travelers: 1,
    cabin: 'Economy',
  });
  const [contactDetails, setContactDetails] = useState<ContactDetails>({
    name: '',
    phone: '',
    email: '',
  });

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Backend integration point — submit quote request to CRM/email
    setCurrentStep(3);
  };

  return (
    <section className="min-h-screen pt-24 pb-16 bg-background jaali-subtle">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3 block">Free Quote Request</span>
          <h1 className="font-display text-section-lg text-foreground font-semibold mb-3">
            Tell Us About Your Trip
          </h1>
          <p className="text-muted-foreground text-base">
            A travel specialist will review your request and contact you with personalized options — usually within one business day.
          </p>
        </div>

        {/* Progress indicator */}
        {currentStep < 3 && (
          <div className="flex items-center justify-center mb-10">
            {steps.slice(0, 2).map((step, i) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={`w-9 h-9 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      currentStep === step.number
                        ? 'progress-step-active'
                        : currentStep > step.number
                        ? 'progress-step-completed'
                        : 'progress-step-inactive'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className={`text-xs font-medium hidden sm:block ${currentStep >= step.number ? 'text-primary' : 'text-muted-foreground'}`}>
                    {step.label}
                  </span>
                </div>
                {i < 1 && (
                  <div className={`flex-1 h-0.5 mx-2 transition-all duration-500 ${currentStep > step.number ? 'bg-primary' : 'bg-border'}`} />
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        {/* Step 1: Trip Details */}
        {currentStep === 1 && (
          <div className="bg-card rounded-2xl border border-border shadow-warm-md p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-6">Step 1 — Your Trip</h2>

            {/* Trip type */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Trip Type</label>
              <div className="flex gap-2 flex-wrap">
                {(['roundtrip', 'oneway', 'multicity'] as TripType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setTripDetails((d) => ({ ...d, tripType: type }))}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all ${
                      tripDetails.tripType === type
                        ? 'bg-primary text-white border-primary' : 'border-border text-muted-foreground hover:border-primary hover:text-primary'
                    }`}
                  >
                    {type === 'roundtrip' ? 'Round Trip' : type === 'oneway' ? 'One Way' : 'Multi-City'}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular route selector */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Popular Routes</label>
              <select
                value={tripDetails.from && tripDetails.to ? `${tripDetails.from} → ${tripDetails.to}` : ''}
                onChange={(e) => {
                  const parts = e.target.value.split(' → ');
                  if (parts.length === 2) {
                    setTripDetails((d) => ({ ...d, from: parts[0], to: parts[1] }));
                  }
                }}
                className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors"
              >
                <option value="">— Select a popular route —</option>
                {popularRoutes.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">From (City / Airport)</label>
                <input
                  type="text"
                  value={tripDetails.from}
                  onChange={(e) => setTripDetails((d) => ({ ...d, from: e.target.value }))}
                  placeholder="e.g. Toronto, New York"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">To (City / Airport)</label>
                <input
                  type="text"
                  value={tripDetails.to}
                  onChange={(e) => setTripDetails((d) => ({ ...d, to: e.target.value }))}
                  placeholder="e.g. Delhi, Mumbai"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Departure Date</label>
                <input
                  type="date"
                  value={tripDetails.departure}
                  onChange={(e) => setTripDetails((d) => ({ ...d, departure: e.target.value }))}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors cursor-pointer"
                />
              </div>
              {tripDetails.tripType === 'roundtrip' && (
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Return Date</label>
                  <input
                    type="date"
                    value={tripDetails.returnDate}
                    onChange={(e) => setTripDetails((d) => ({ ...d, returnDate: e.target.value }))}
                    className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors cursor-pointer"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Number of Travelers</label>
                <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 bg-background">
                  <button
                    onClick={() => setTripDetails((d) => ({ ...d, travelers: Math.max(1, d.travelers - 1) }))}
                    className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-lg leading-none"
                  >−</button>
                  <span className="text-sm font-semibold text-foreground min-w-[2rem] text-center">{tripDetails.travelers}</span>
                  <button
                    onClick={() => setTripDetails((d) => ({ ...d, travelers: Math.min(9, d.travelers + 1) }))}
                    className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-lg leading-none"
                  >+</button>
                  <span className="text-sm text-muted-foreground">{tripDetails.travelers === 1 ? 'Traveler' : 'Travelers'}</span>
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Cabin Class</label>
                <select
                  value={tripDetails.cabin}
                  onChange={(e) => setTripDetails((d) => ({ ...d, cabin: e.target.value as CabinClass }))}
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors cursor-pointer"
                >
                  <option>Economy</option>
                  <option>Premium Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
            </div>

            <button
              onClick={goNext}
              className="btn-primary w-full py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 mt-2"
            >
              Continue
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}

        {/* Step 2: Contact Details — Name, Phone, Email only */}
        {currentStep === 2 && (
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border shadow-warm-md p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-foreground mb-2">Step 2 — Your Contact Details</h2>
            <p className="text-muted-foreground text-sm mb-6">
              That&apos;s all we need. A travel specialist will reach out with options for your trip.
            </p>

            <div className="space-y-5 mb-6">
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Your Name *</label>
                <input
                  type="text"
                  required
                  value={contactDetails.name}
                  onChange={(e) => setContactDetails((c) => ({ ...c, name: e.target.value }))}
                  placeholder="e.g. Priya Sharma"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  value={contactDetails.phone}
                  onChange={(e) => setContactDetails((c) => ({ ...c, phone: e.target.value }))}
                  placeholder="+1 (416) 555-0100"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  value={contactDetails.email}
                  onChange={(e) => setContactDetails((c) => ({ ...c, email: e.target.value }))}
                  placeholder="priya@email.com"
                  className="w-full border border-border rounded-xl px-4 py-3 text-sm text-foreground bg-background focus:border-primary outline-none transition-colors placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
              By submitting this form, you agree to being contacted by a Northstar Travel Solutions specialist. We do not share your information with third parties.
            </p>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={goBack}
                className="btn-outline flex-1 py-4 rounded-xl text-base font-semibold"
              >
                Back
              </button>
              <button
                type="submit"
                className="btn-primary flex-[2] py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
              >
                Send My Request
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <div className="bg-card rounded-2xl border border-border shadow-warm-md p-8 sm:p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center text-primary mx-auto mb-6">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-3">
              Your Request Is On Its Way
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto mb-8">
              A travel specialist will review your itinerary and contact you with suitable options — usually within one business day.
            </p>

            <div className="bg-secondary rounded-xl border border-border p-5 text-left mb-8 max-w-sm mx-auto">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">What happens next</p>
              <ul className="space-y-2.5">
                {[
                  'We review your route and travel preferences',
                  'A specialist researches suitable itinerary options',
                  'We contact you via email or WhatsApp with options',
                  'You choose what works — no obligation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/" className="btn-outline px-6 py-3 rounded-full text-sm font-semibold">
                Return Home
              </Link>
              <a
                href="https://wa.me/919115652165"
                className="btn-primary px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.535 5.857L0 24l6.335-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.213-3.728.884.884-3.635-.235-.374A9.818 9.818 0 1112 21.818z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Trust note */}
        {currentStep < 3 && (
          <p className="text-center text-xs text-muted-foreground mt-6 flex items-center justify-center gap-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="text-primary">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            Your information is secure and never shared with third parties.
          </p>
        )}
      </div>
    </section>
  );
}