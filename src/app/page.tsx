import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesStrip from './components/ServicesStrip';
import TrustStrip from './components/TrustStrip';
import InternationalRoutesSection from './components/InternationalRoutesSection';
import DomesticFlightsSection from './components/DomesticFlightsSection';
import OtherServicesSection from './components/OtherServicesSection';
import WhyHimalayaSection from './components/WhyHimalayaSection';
import WhyBookSection from './components/WhyBookSection';
import HowItWorksSection from './components/HowItWorksSection';
import DestinationsSection from './components/DestinationsSection';
import TravelJournalSection from './components/TravelJournalSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import FinalEnquirySection from './components/FinalEnquirySection';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <ServicesStrip />
      <TrustStrip />
      <InternationalRoutesSection />
      <DomesticFlightsSection />
      <OtherServicesSection />
      <WhyHimalayaSection />
      <WhyBookSection />
      <HowItWorksSection />
      <DestinationsSection />
      <TravelJournalSection />
      <TestimonialsSection />
      <AboutSection />
      <FinalEnquirySection />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}