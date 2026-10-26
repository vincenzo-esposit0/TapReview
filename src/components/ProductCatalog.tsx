import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, ProductOption } from '../types';
import { Check, Star, Sparkles, FileText, ArrowRight } from 'lucide-react';

interface ProductCatalogProps {
  onOpenQuoteModalForProduct: (productTitle: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  onOpenQuoteModalForProduct
}) => {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, ProductOption>>({
    'espositore-banco-smart': PRODUCTS[0].options[0],
    'smart-review-card': PRODUCTS[1].options[0],
    'bundle-business-kit': PRODUCTS[2].options[0]
  });

  return (
    <section id="prodotti" className="py-16 sm:py-24 bg-slate-950 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <span>SHOWCASE VETRINA PRODOTTI 2026</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Le 3 Tipologie di Dispositivi Smart NFC Promosse
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Progettati per la massima visibilità sul tuo banco o nel tuo portafoglio. Scopri le finiture, le specifiche e la tecnologia di ciascun modello.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-12">
          {PRODUCTS.map((product) => {
            const currentOption = selectedOptions[product.id] || product.options[0];
            const currentImage = product.images[currentOption.id] || product.images.default;

            return (
              <div
                key={product.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 relative group"
              >
                {/* Badge */}
                {product.category === 'bundle' && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-500 to-amber-600 text-slate-950 font-black text-[11px] uppercase tracking-wider px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Soluzione Bestseller
                  </div>
                )}

                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden border-b border-slate-800">
                    <img
                      src={currentImage}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Body */}
                  <div className="p-6 space-y-5">
                    
                    {/* Category Title */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                          {product.category === 'espositore' ? '1. Display da Tavolo/Cassa' : product.category === 'card' ? '2. Formato Carta di Credito' : '3. Combo Pack Completo'}
                        </span>
                        <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold">
                          <Star className="w-3.5 h-3.5 fill-yellow-400" />
                          <span>{product.rating} Valutazione</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white font-display leading-tight">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-300">
                        {product.subtitle}
                      </p>
                    </div>

                    {/* Target Tags */}
                    <div className="space-y-1.5">
                      <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Ideale per:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.targetAudience.slice(0, 4).map((tag, i) => (
                          <span key={i} className="text-[11px] text-slate-300 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Color Options */}
                    <div className="space-y-2 pt-1">
                      <label className="text-xs font-semibold text-slate-300 block">
                        Variante / Finitura: <span className="text-blue-400">{currentOption.name}</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {product.options.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSelectedOptions({ ...selectedOptions, [product.id]: option })}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                              currentOption.id === option.id
                                ? 'bg-slate-800 border-blue-500 text-white ring-1 ring-blue-500'
                                : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                            }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-slate-600"
                              style={{ backgroundColor: option.colorHex || '#333' }}
                            />
                            <span>{option.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Key Technical Features list */}
                    <div className="space-y-2 pt-2 border-t border-slate-800">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Specifiche Hardware:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {product.features.slice(0, 4).map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-4 space-y-3">
                  
                  <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
                    <span className="font-mono">Zero Canoni Mensili</span>
                    <span className="text-emerald-400 font-semibold">Configurazione Gratis</span>
                  </div>

                  <button
                    onClick={() => onOpenQuoteModalForProduct(product.title)}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group text-xs sm:text-sm"
                  >
                    <FileText className="w-4 h-4 text-blue-200" />
                    <span>Richiedi Preventivo / Info per Questo Modello</span>
                  </button>

                </div>
              </div>
            );
          })}
        </div>

        {/* Section link to how it's made */}
        <div className="mt-12 text-center">
          <a
            href="#come-fatti"
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 underline uppercase tracking-wider"
          >
            <span>Scopri nel dettaglio la struttura e i materiali di ciascun dispositivo</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
