import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { PricingTier, ProductOption } from '../types';
import { Check, ArrowRight, Truck, ShieldCheck, Wrench, Lock } from 'lucide-react';
import { Reveal, SectionHeader, Stars, formatEuro } from './ui';

interface ProductCatalogProps {
  onOpenQuoteModalForProduct: (productTitle: string, quantity?: string) => void;
}

// Kit in the middle as the highlighted choice
const DISPLAY_ORDER = ['espositore-banco-smart', 'bundle-business-kit', 'smart-review-card'];

const SHORT_NAMES: Record<string, { name: string; tagline: string }> = {
  'espositore-banco-smart': { name: 'Espositore da banco', tagline: 'Per cassa, reception e tavoli' },
  'smart-review-card': { name: 'Smart Review Card', tagline: 'In tasca, per chi lavora in mobilità' },
  'bundle-business-kit': { name: 'Kit Business', tagline: '1 espositore + 2 card: copri tutto' }
};

const pieces = (q: number, isKit = false) =>
  isKit ? `${q} kit` : `${q} ${q === 1 ? 'pezzo' : 'pezzi'}`;

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onOpenQuoteModalForProduct }) => {
  const products = DISPLAY_ORDER.map((id) => PRODUCTS.find((p) => p.id === id)!);

  const [selectedOptions, setSelectedOptions] = useState<Record<string, ProductOption>>(
    Object.fromEntries(PRODUCTS.map((p) => [p.id, p.options[0]]))
  );
  const [selectedTiers, setSelectedTiers] = useState<Record<string, PricingTier>>(
    Object.fromEntries(PRODUCTS.map((p) => [p.id, p.pricingTiers[0]]))
  );

  return (
    <section id="prodotti" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Prodotti e prezzi"
          title="Scegli il tuo dispositivo. Paghi una volta sola."
          description="Tutti i modelli arrivano programmati con il link della tua scheda Google, pronti all’uso. Più ne prendi, più risparmi."
        />

        <div className="grid lg:grid-cols-3 gap-6 mt-14 items-stretch">
          {products.map((product, idx) => {
            const featured = product.category === 'bundle';
            const option = selectedOptions[product.id];
            const tier = selectedTiers[product.id];
            const image = product.images[option.id] || product.images.default;
            const listPrice = product.originalPrice * tier.quantity;
            const saving = Math.round((1 - tier.totalPrice / listPrice) * 100);
            const meta = SHORT_NAMES[product.id];

            return (
              <Reveal key={product.id} delay={idx * 0.08} className="h-full">
                <div
                  className={`h-full flex flex-col rounded-[28px] overflow-hidden transition-shadow ${
                    featured
                      ? 'bg-ink text-white ring-2 ring-star shadow-[0_40px_80px_-30px_rgba(18,21,26,0.6)] lg:-translate-y-3'
                      : 'bg-white border border-line hover:shadow-[0_30px_60px_-30px_rgba(18,21,26,0.3)]'
                  }`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img src={image} alt={product.title} className="w-full h-full object-cover" loading="lazy" />
                    {featured && (
                      <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-star text-ink text-xs font-extrabold uppercase tracking-wider">
                        Il più scelto
                      </span>
                    )}
                    {saving > 0 && (
                      <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white text-ink text-xs font-extrabold shadow">
                        -{saving}%
                      </span>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-sm">
                      <Stars className="w-3.5 h-3.5" />
                      <span className={featured ? 'text-white/70' : 'text-muted'}>
                        {product.rating.toLocaleString('it-IT')} · {product.reviewsCount} recensioni
                      </span>
                    </div>

                    <h3 className={`mt-3 text-2xl font-bold ${featured ? 'text-white' : 'text-ink'}`}>{meta.name}</h3>
                    <p className={`mt-1 text-[15px] ${featured ? 'text-white/70' : 'text-ink-soft'}`}>{meta.tagline}</p>

                    {/* Price */}
                    <div className="mt-5 flex items-end gap-3">
                      <span className="font-display text-[2.6rem] leading-none font-bold">{formatEuro(tier.totalPrice)}</span>
                      {listPrice > tier.totalPrice && (
                        <span className={`pb-1 text-lg line-through ${featured ? 'text-white/40' : 'text-muted'}`}>
                          {formatEuro(listPrice)}
                        </span>
                      )}
                    </div>
                    <div className={`mt-1.5 text-sm ${featured ? 'text-white/60' : 'text-muted'}`}>
                      {tier.quantity > 1 ? `${formatEuro(tier.pricePerUnit)} cad. · ` : ''}pagamento unico, IVA inclusa
                    </div>

                    {/* Quantity tiers */}
                    <div className="mt-5">
                      <div className={`text-xs font-bold uppercase tracking-[0.12em] mb-2 ${featured ? 'text-white/50' : 'text-muted'}`}>
                        Quantità
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-2" role="radiogroup">
                        {product.pricingTiers.map((t) => {
                          const active = t.quantity === tier.quantity;
                          return (
                            <button
                              key={t.quantity}
                              role="radio"
                              aria-checked={active}
                              onClick={() => setSelectedTiers({ ...selectedTiers, [product.id]: t })}
                              className={`relative px-2 py-2.5 rounded-xl text-sm font-bold border transition-colors ${
                                active
                                  ? featured
                                    ? 'bg-star text-ink border-star'
                                    : 'bg-ink text-white border-ink'
                                  : featured
                                    ? 'border-white/15 text-white/80 hover:border-white/40'
                                    : 'border-line text-ink hover:border-ink/40'
                              }`}
                            >
                              {pieces(t.quantity, featured)}
                              {t.isPopular && (
                                <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 rounded bg-success text-white text-[9px] uppercase tracking-wide whitespace-nowrap">
                                  Top
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Finish */}
                    <div className="mt-5">
                      <div className={`text-xs font-bold uppercase tracking-[0.12em] mb-2 ${featured ? 'text-white/50' : 'text-muted'}`}>
                        Finitura: <span className={featured ? 'text-white normal-case tracking-normal' : 'text-ink normal-case tracking-normal'}>{option.name}</span>
                      </div>
                      <div className="flex gap-2">
                        {product.options.map((o) => (
                          <button
                            key={o.id}
                            onClick={() => setSelectedOptions({ ...selectedOptions, [product.id]: o })}
                            aria-label={o.name}
                            title={o.name}
                            className={`w-9 h-9 rounded-full p-1 border-2 transition-colors ${
                              o.id === option.id ? (featured ? 'border-star' : 'border-ink') : 'border-transparent'
                            }`}
                          >
                            <span
                              className="block w-full h-full rounded-full border border-black/15"
                              style={{ backgroundColor: o.colorHex || '#333' }}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <ul className={`mt-6 pt-6 space-y-2.5 text-[15px] border-t ${featured ? 'border-white/10' : 'border-line'}`}>
                      {product.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <Check className={`w-4 h-4 mt-1 shrink-0 ${featured ? 'text-star' : 'text-success'}`} strokeWidth={3} />
                          <span className={featured ? 'text-white/85' : 'text-ink-soft'}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex-1" />

                    <button
                      onClick={() => onOpenQuoteModalForProduct(product.title, pieces(tier.quantity, featured))}
                      className={`group mt-7 w-full inline-flex items-center justify-center gap-2 py-4 rounded-full text-base font-bold transition-colors ${
                        featured ? 'bg-star text-ink hover:bg-white' : 'bg-ink text-white hover:bg-ink-soft'
                      }`}
                    >
                      Ordina ora
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className={`mt-3 text-center text-xs ${featured ? 'text-white/50' : 'text-muted'}`}>
                      {tier.totalPrice >= 49 ? 'Spedizione gratuita inclusa' : 'Spedizione 4,90€ · gratis sopra 49€'}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Reassurance row */}
        <Reveal className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl bg-white border border-line p-5 sm:p-6">
          {[
            { icon: <Wrench className="w-5 h-5" />, title: 'Programmazione gratuita', sub: 'Arriva pronto all’uso' },
            { icon: <Truck className="w-5 h-5" />, title: 'Consegna 24/48h', sub: 'Corriere espresso tracciato' },
            { icon: <ShieldCheck className="w-5 h-5" />, title: 'Reso 30 giorni', sub: 'Soddisfatti o rimborsati' },
            { icon: <Lock className="w-5 h-5" />, title: 'Zero abbonamenti', sub: 'Nessun costo ricorrente' }
          ].map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sand text-ink flex items-center justify-center shrink-0">{item.icon}</div>
              <div>
                <div className="text-sm font-bold text-ink">{item.title}</div>
                <div className="text-xs text-muted">{item.sub}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};
