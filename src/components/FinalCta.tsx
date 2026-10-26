import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Reveal, Stars } from './ui';

interface FinalCtaProps {
  onExploreProducts: () => void;
  onOpenQuoteModal: () => void;
}

export const Guarantee: React.FC = () => (
  <section className="pb-20 sm:pb-28">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="rounded-[28px] border-2 border-dashed border-star/60 bg-star-soft/50 p-7 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-center sm:text-left">
        <div className="relative w-28 h-28 shrink-0 rounded-full bg-ink text-white flex flex-col items-center justify-center shadow-xl">
          <ShieldCheck className="w-7 h-7 text-star" />
          <span className="font-display text-2xl font-bold leading-none mt-1">30</span>
          <span className="text-[10px] uppercase tracking-widest text-white/70">giorni</span>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-ink">Provalo senza rischi. Se non ti convince, ti rimborsiamo.</h3>
          <p className="mt-3 text-ink-soft leading-relaxed">
            Hai 30 giorni per vedere le recensioni crescere. Se non sei soddisfatto per qualsiasi motivo, restituisci il dispositivo e
            ricevi il rimborso completo. Nessuna domanda.
          </p>
        </div>
      </Reveal>
    </div>
  </section>
);

export const FinalCta: React.FC<FinalCtaProps> = ({ onExploreProducts, onOpenQuoteModal }) => (
  <section className="pb-20 sm:pb-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-[32px] bg-ink text-white">
        <img
          src={`${import.meta.env.BASE_URL}images/hero_display_nfc_1793016159133.jpg`}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="relative px-6 py-14 sm:px-14 sm:py-20 max-w-2xl">
          <Stars className="w-5 h-5" />
          <h2 className="mt-5 text-4xl sm:text-5xl font-bold leading-[1.05]">
            La tua prossima recensione a 5 stelle è a un tocco di distanza.
          </h2>
          <p className="mt-5 text-lg text-white/75">
            Ordina oggi, ricevilo in 24/48 ore già programmato e inizia a raccogliere recensioni dal primo cliente.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onExploreProducts}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full whitespace-nowrap bg-star text-ink font-bold hover:bg-white transition-colors"
            >
              Scegli il tuo dispositivo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center px-7 py-4 rounded-full whitespace-nowrap border border-white/25 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Preventivo per più sedi
            </button>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
