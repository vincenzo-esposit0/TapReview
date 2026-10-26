import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Play, Check, Smartphone, TrendingUp } from 'lucide-react';
import { NfcSimulatorModal } from './NfcSimulatorModal';
import { Stars, formatEuro } from './ui';
import { STARTING_PRICE } from '../data/products';

interface HeroProps {
  onExploreProducts: () => void;
  onOrderNow: () => void;
}

const sectors = [
  'Ristoranti',
  'Pizzerie',
  'Bar & Caffetterie',
  'Hotel & B&B',
  'Parrucchieri',
  'Centri estetici',
  'Studi medici',
  'Agenzie immobiliari',
  'Negozi',
  'Palestre',
  'Artigiani',
  'Liberi professionisti'
];

export const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  const [simulatorOpen, setSimulatorOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <motion.div
            className="lg:col-span-6 space-y-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 rounded-full bg-white border border-line shadow-sm text-sm">
              <span className="px-2 py-0.5 rounded-full bg-star-soft text-ink font-bold text-xs">4,9/5</span>
              <Stars className="w-3.5 h-3.5" />
              <span className="text-ink-soft font-medium">da oltre 2.400 attività</span>
            </div>

            <h1 className="text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.25rem] font-bold text-ink">
              Più recensioni a{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">5 stelle</span>
                <svg
                  className="absolute left-0 -bottom-1 w-full h-4 text-star z-0"
                  viewBox="0 0 200 16"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 11 C 50 3, 120 3, 198 9" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              .<br />
              Con un solo tocco.
            </h1>

            <p className="text-lg sm:text-xl text-ink-soft leading-relaxed max-w-xl">
              Il cliente avvicina il telefono, si apre la tua pagina Google, lascia la recensione.
              <strong className="text-ink font-semibold"> Due secondi, nessuna app, nessun abbonamento.</strong>
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-[15px] text-ink max-w-lg">
              {['NFC + QR Code: funziona con ogni telefono', 'Arriva già programmato col tuo link', 'Paghi una volta, tuo per sempre', 'Spedizione in 24/48h'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-success/10 text-success flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-1">
              <button
                onClick={onExploreProducts}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-ink text-white text-base font-bold hover:bg-ink-soft transition-colors shadow-[0_10px_30px_-10px_rgba(18,21,26,0.6)]"
              >
                Scegli il tuo dispositivo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => setSimulatorOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-white border border-line text-ink text-base font-semibold hover:border-ink/30 transition-colors"
              >
                <span className="w-7 h-7 rounded-full bg-star flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-ink text-ink ml-0.5" />
                </span>
                Prova la demo
              </button>
            </div>

            <p className="text-sm text-muted">
              A partire da <strong className="text-ink text-base">{formatEuro(STARTING_PRICE)}</strong> · IVA inclusa · Reso gratuito entro 30 giorni
            </p>
          </motion.div>

          {/* Visual */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-6 sm:-inset-10 bg-[radial-gradient(closest-side,rgba(245,180,0,0.25),transparent)] pointer-events-none" />
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(18,21,26,0.45)] aspect-[4/3.6] sm:aspect-[4/3.3]">
              <img
                src={`${import.meta.env.BASE_URL}images/nfc_tap_smartphone_1793016159958.jpg`}
                alt="Cliente che avvicina lo smartphone all'espositore NFC TapReview alla cassa"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>

            {/* Floating: new review notification */}
            <div className="absolute -left-2 sm:-left-8 top-6 sm:top-10 animate-float">
              <div className="bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(18,21,26,0.35)] border border-line p-3.5 pr-5 flex items-center gap-3 max-w-[260px]">
                <div className="w-10 h-10 rounded-full bg-[conic-gradient(#4285F4_0_25%,#EA4335_0_50%,#FBBC05_0_75%,#34A853_0)] p-[3px] shrink-0">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-sm font-bold text-ink">G</div>
                </div>
                <div className="min-w-0">
                  <div className="text-[11px] text-muted font-medium">Nuova recensione · ora</div>
                  <Stars className="w-3.5 h-3.5" />
                  <div className="text-xs font-semibold text-ink truncate">“Servizio top, torneremo!”</div>
                </div>
              </div>
            </div>

            {/* Floating: stat */}
            <div className="absolute -right-2 sm:-right-6 bottom-8 sm:bottom-12 animate-float [animation-delay:1.5s]">
              <div className="bg-ink text-white rounded-2xl shadow-2xl p-4 pr-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-star/15 text-star flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold leading-none">+300%</div>
                  <div className="text-[11px] text-white/60 mt-1">recensioni in 30 giorni*</div>
                </div>
              </div>
            </div>

            {/* Floating: tap hint */}
            <div className="hidden sm:flex absolute left-6 bottom-6 items-center gap-2 bg-white/90 backdrop-blur rounded-full px-3.5 py-2 text-xs font-semibold text-ink shadow-lg">
              <Smartphone className="w-4 h-4" /> Tap &amp; review in 2 secondi
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sector marquee */}
      <div className="border-y border-line bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center gap-6">
          <span className="hidden md:block shrink-0 text-xs font-bold uppercase tracking-[0.18em] text-muted">Scelto da</span>
          <div className="relative overflow-hidden flex-1 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
            <div className="flex w-max animate-marquee">
              {[...sectors, ...sectors].map((s, i) => (
                <span key={i} className="flex items-center gap-6 pr-6 font-display text-lg font-semibold text-ink/70 whitespace-nowrap">
                  {s}
                  <span className="w-1.5 h-1.5 rounded-full bg-star" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <NfcSimulatorModal isOpen={simulatorOpen} onClose={() => setSimulatorOpen(false)} />
    </section>
  );
};
