import React, { useEffect, useState } from 'react';
import { Menu, X, Truck, ShieldCheck, Wrench } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

const links = [
  { href: '#come-funziona', label: 'Come funziona' },
  { href: '#prodotti', label: 'Prodotti e prezzi' },
  { href: '#recensioni', label: 'Clienti' },
  { href: '#faq', label: 'FAQ' }
];

export const Logo: React.FC<{ light?: boolean }> = ({ light = false }) => (
  <a href="#" className={`flex items-center gap-2 font-display text-xl font-bold ${light ? 'text-white' : 'text-ink'}`}>
    <span className={`relative w-8 h-8 rounded-[10px] flex items-center justify-center ${light ? 'bg-white text-ink' : 'bg-ink text-white'}`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
        <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
      </svg>
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-star ring-2 ring-paper" />
    </span>
    TapReview
  </a>
);

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-ink text-white text-[13px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-center gap-6 overflow-hidden">
          <span className="flex items-center gap-2 whitespace-nowrap">
            <Truck className="w-4 h-4 text-star" /> Spedizione gratuita sopra 49€
          </span>
          <span className="hidden sm:flex items-center gap-2 whitespace-nowrap">
            <Wrench className="w-4 h-4 text-star" /> Programmazione inclusa
          </span>
          <span className="hidden md:flex items-center gap-2 whitespace-nowrap">
            <ShieldCheck className="w-4 h-4 text-star" /> Soddisfatti o rimborsati 30 giorni
          </span>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? 'bg-paper/85 backdrop-blur-lg border-b border-line shadow-[0_1px_0_rgba(0,0,0,0.02)]' : 'bg-paper border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-16">
            <Logo />

            <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-ink-soft">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#prodotti"
                className="hidden sm:inline-flex px-5 py-2.5 text-sm font-bold text-white bg-ink hover:bg-ink-soft rounded-full transition-colors"
              >
                Ordina ora
              </a>
              <button
                onClick={onOpenQuoteModal}
                className="hidden lg:inline-flex px-4 py-2.5 text-sm font-semibold text-ink hover:bg-sand rounded-full transition-colors"
              >
                Preventivo
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-ink rounded-lg hover:bg-sand"
                aria-label="Apri menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-paper border-t border-line px-4 pt-2 pb-5 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-xl text-base font-semibold text-ink hover:bg-sand"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full mt-2 px-5 py-3.5 text-base font-bold text-white bg-ink rounded-full"
            >
              Richiedi preventivo gratuito
            </button>
          </div>
        )}
      </header>
    </>
  );
};
