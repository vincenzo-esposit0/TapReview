import React, { useState } from 'react';
import { Sparkles, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-all duration-200">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          
          {/* Zone 1: Single Brand Wordmark */}
          <a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-red-500 to-yellow-400 p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[6px] flex items-center justify-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-yellow-300 font-extrabold text-sm">G</span>
              </div>
            </div>
            <span className="font-display">TapReview<span className="text-blue-500 font-extrabold">.it</span></span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#prodotti" className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">I 3 Prodotti</a>
            <a href="#come-fatti" className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">Come Sono Fatti</a>
            <a href="#come-funziona" className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">Come Funziona</a>
            <a href="#faq" className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0">FAQ</a>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-blue-200" />
              <span>Richiedi Preventivo</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#prodotti"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            I 3 Prodotti Promossi
          </a>
          <a
            href="#come-fatti"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Come Sono Fatti (Materiali & Chip)
          </a>
          <a
            href="#come-funziona"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Come Funziona
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Domande Frequenti (FAQ)
          </a>
        </div>
      )}
    </header>
  );
};
