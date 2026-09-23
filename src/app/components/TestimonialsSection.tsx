import React from 'react';

export default function TestimonialsSection() {
  return (
    <section className="py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-dashed border-primary/30 bg-secondary/60 p-10 sm:p-14 text-center">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-3">
            Customer Stories
          </h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed mb-6">
            We believe in authentic feedback. Customer reviews will appear here once we have collected verified testimonials from real travelers.
          </p>
          <p className="text-xs text-muted-foreground/70 italic">
            — We do not publish fabricated or placeholder reviews. Genuine customer stories only.
          </p>
        </div>
      </div>
    </section>
  );
}