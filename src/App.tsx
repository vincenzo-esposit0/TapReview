import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BenefitsSection } from './components/BenefitsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductAnatomy } from './components/ProductAnatomy';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedProductTitle, setSelectedProductTitle] = useState<string>('Espositore da Banco Smart NFC + QR Code');
  const [selectedBusinessName, setSelectedBusinessName] = useState<string>('');

  const handleOpenQuoteModal = (productTitle?: string, businessName?: string) => {
    if (productTitle) setSelectedProductTitle(productTitle);
    if (businessName) setSelectedBusinessName(businessName);
    setIsQuoteModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* Top Bar Navigation */}
      <Navbar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('prodotti')}
          onOrderNow={() => handleOpenQuoteModal()}
        />

        {/* Benefits Section */}
        <BenefitsSection />

        {/* 3 Promoted Product Types Showcase */}
        <ProductCatalog
          onOpenQuoteModalForProduct={(title) => handleOpenQuoteModal(title)}
        />

        {/* Come Sono Fatti (Product Anatomy & Fabrication Details) */}
        <ProductAnatomy />

        {/* How it Works */}
        <HowItWorks />

        {/* Social Proof & Testimonials */}
        <Testimonials />

        {/* FAQ Section */}
        <FaqSection />

      </main>

      {/* Quote / Info Request Modal (Vetrina Lead Capture) */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedProductTitle={selectedProductTitle}
        preselectedBusinessName={selectedBusinessName}
      />

      {/* Footer */}
      <Footer />

    </div>
  );
}
