import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactContent from './components/ContactContent';

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen">
      <Header />
      <ContactContent />
      <Footer />
    </main>
  );
}