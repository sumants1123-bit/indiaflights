import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuoteFlow from './components/QuoteFlow';

export default function RequestQuotePage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <QuoteFlow />
      <Footer />
    </main>
  );
}