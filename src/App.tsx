import React, { useCallback, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BenefitsSection } from './components/BenefitsSection';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductAnatomy } from './components/ProductAnatomy';
import { HowItWorks } from './components/HowItWorks';
import { RoiCalculator } from './components/RoiCalculator';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Guarantee, FinalCta } from './components/FinalCta';
import { QuoteModal } from './components/QuoteModal';
import { StickyMobileCta } from './components/StickyMobileCta';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/products';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [selectedProductTitle, setSelectedProductTitle] = useState<string>(PRODUCTS[0].title);
  const [selectedQuantity, setSelectedQuantity] = useState<string | undefined>(undefined);

  const handleOpenQuoteModal = (productTitle?: string, quantity?: string) => {
    if (productTitle) setSelectedProductTitle(productTitle);
    setSelectedQuantity(quantity);
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = useCallback(() => setIsQuoteModalOpen(false), []);

  const scrollToProducts = () => {
    document.getElementById('prodotti')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      <main className="flex-1">
        {/* 1. Promise + proof above the fold */}
        <Hero onExploreProducts={scrollToProducts} onOrderNow={() => handleOpenQuoteModal()} />

        {/* 2. Problem / solution */}
        <BenefitsSection />

        {/* 3. How it works */}
        <HowItWorks />

        {/* 4. Offer with visible prices */}
        <ProductCatalog onOpenQuoteModalForProduct={handleOpenQuoteModal} />

        {/* 5. Value calculator */}
        <RoiCalculator onExploreProducts={scrollToProducts} />

        {/* 6. Social proof */}
        <Testimonials />

        {/* 7. Build quality */}
        <ProductAnatomy />

        {/* 8. Risk reversal */}
        <Guarantee />

        {/* 9. Objections */}
        <FaqSection />

        <div className="pt-20 sm:pt-28">
          <FinalCta onExploreProducts={scrollToProducts} onOpenQuoteModal={() => handleOpenQuoteModal()} />
        </div>
      </main>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
        preselectedProductTitle={selectedProductTitle}
        preselectedQuantity={selectedQuantity}
      />

      <StickyMobileCta onExploreProducts={scrollToProducts} />

      <Footer />
    </div>
  );
}
