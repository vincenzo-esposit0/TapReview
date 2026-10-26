import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal, SectionHeader, formatEuro } from './ui';
import { PRODUCTS, STARTING_PRICE } from '../data/products';

const DISPLAY_PRICE = PRODUCTS.find((p) => p.id === 'espositore-banco-smart')!.basePrice;

interface RoiCalculatorProps {
  onExploreProducts: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onExploreProducts }) => {
  const [dailyClients, setDailyClients] = useState<number>(40);
  const [tapRatePercentage, setTapRatePercentage] = useState<number>(8);

  // 26 working days per month on average
  const monthlyReviews = Math.round(dailyClients * 26 * (tapRatePercentage / 100));
  const yearlyReviews = monthlyReviews * 12;
  const costPerReview = monthlyReviews > 0 ? DISPLAY_PRICE / yearlyReviews : 0;

  const sliderClass =
    'w-full h-2 rounded-full appearance-none cursor-pointer bg-white/15 accent-[#f5b400]';

  return (
    <section id="calcolatore" className="py-20 sm:py-28 bg-ink text-white relative overflow-hidden">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-star/15 blur-[120px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              dark
              align="left"
              eyebrow="Fai due conti"
              title="Quante recensioni ti stai perdendo ogni mese?"
              description="Sposta i cursori in base alla tua attività. Bastano pochi clienti su cento per trasformare la tua scheda Google."
            />

            <div className="mt-10 space-y-8">
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="roi-clients" className="text-[15px] text-white/80">Clienti al giorno</label>
                  <span className="font-display text-2xl font-bold">{dailyClients}</span>
                </div>
                <input
                  id="roi-clients"
                  type="range"
                  min={10}
                  max={250}
                  step={5}
                  value={dailyClients}
                  onChange={(e) => setDailyClients(Number(e.target.value))}
                  className={sliderClass}
                />
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-3">
                  <label htmlFor="roi-rate" className="text-[15px] text-white/80">Clienti che toccano l’espositore</label>
                  <span className="font-display text-2xl font-bold">{tapRatePercentage}%</span>
                </div>
                <input
                  id="roi-rate"
                  type="range"
                  min={2}
                  max={25}
                  step={1}
                  value={tapRatePercentage}
                  onChange={(e) => setTapRatePercentage(Number(e.target.value))}
                  className={sliderClass}
                />
              </div>
            </div>
          </div>

          <Reveal className="rounded-[28px] bg-white text-ink p-8 sm:p-10 shadow-2xl">
            <div className="text-sm font-bold uppercase tracking-[0.14em] text-muted">Recensioni in più stimate</div>
            <div className="mt-3 flex items-end gap-3">
              <span className="font-display text-7xl sm:text-8xl font-bold leading-none">{monthlyReviews}</span>
              <span className="pb-2 text-lg text-ink-soft">al mese</span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-sand p-5">
                <div className="font-display text-3xl font-bold">{yearlyReviews.toLocaleString('it-IT')}</div>
                <div className="text-sm text-ink-soft mt-1">in un anno</div>
              </div>
              <div className="rounded-2xl bg-star-soft p-5">
                <div className="font-display text-3xl font-bold">
                  {costPerReview.toLocaleString('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 2 })}
                </div>
                <div className="text-sm text-ink-soft mt-1">costo per recensione*</div>
              </div>
            </div>
            <button
              onClick={onExploreProducts}
              className="group mt-8 w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-ink text-white font-bold hover:bg-ink-soft transition-colors"
            >
              Inizia da {formatEuro(STARTING_PRICE)}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-4 text-xs text-muted">
              *Calcolato su un espositore da {formatEuro(DISPLAY_PRICE)} nel primo anno, 26 giorni lavorativi al mese. Stima indicativa.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
