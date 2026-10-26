import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Stars, formatEuro } from './ui';
import { STARTING_PRICE } from '../data/products';

interface StickyMobileCtaProps {
  onExploreProducts: () => void;
}

// Bottom purchase bar on small screens, shown after the hero scrolls out of view
export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onExploreProducts }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const products = document.getElementById('prodotti');
      const pastHero = window.scrollY > 700;
      const inProducts = products
        ? products.getBoundingClientRect().top < window.innerHeight && products.getBoundingClientRect().bottom > 0
        : false;
      setVisible(pastHero && !inProducts);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-30 p-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
    >
      <div className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur border border-line shadow-[0_-10px_40px_-15px_rgba(18,21,26,0.35)] p-2.5 pl-4">
        <div className="flex-1 min-w-0">
          <Stars className="w-3 h-3" />
          <div className="text-sm text-ink mt-0.5">
            Da <strong>{formatEuro(STARTING_PRICE)}</strong> <span className="text-muted">· zero canoni</span>
          </div>
        </div>
        <button
          onClick={onExploreProducts}
          tabIndex={visible ? 0 : -1}
          className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-ink text-white text-sm font-bold"
        >
          Ordina ora <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
