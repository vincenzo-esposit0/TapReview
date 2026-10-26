import React from 'react';
import { X, Check, Layers, Wallet, Sparkles, ShieldCheck } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

const before = [
  '“Ci lasci una recensione?” e il cliente se ne dimentica',
  'Deve cercare il locale su Google Maps da solo',
  'Biglietti di carta che finiscono nel cestino',
  'Solo i clienti scontenti si prendono la briga di scrivere'
];

const after = [
  'Il cliente tocca l’espositore mentre paga',
  'Si apre subito il modulo recensione della tua scheda',
  'Due secondi, nessuna app da scaricare',
  'I clienti soddisfatti finalmente lasciano le loro 5 stelle'
];

const pillars = [
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'NFC + QR Code',
    description: 'Funziona con il 100% degli smartphone iPhone e Android. Se l’NFC è spento, basta inquadrare il QR.'
  },
  {
    icon: <Wallet className="w-5 h-5" />,
    title: 'Zero abbonamenti',
    description: 'Paghi l’hardware una sola volta. Nessun canone, nessun costo nascosto, utilizzi illimitati.'
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Pronto all’uso',
    description: 'Ci dici il nome della tua attività, noi programmiamo chip e QR. Lo apri ed è già funzionante.'
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Fatto per durare',
    description: 'Plexiglass rigido e PVC impermeabile, igienizzabili con alcol. Oltre 100.000 letture garantite.'
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Il problema"
          title={<>I clienti soddisfatti non recensiscono. Non perché non vogliano: è scomodo.</>}
          description="TapReview elimina ogni passaggio tra “mi è piaciuto” e “5 stelle pubblicate”."
        />

        <div className="grid md:grid-cols-2 gap-5 mt-14">
          <Reveal className="rounded-3xl bg-white border border-line p-7 sm:p-9">
            <div className="text-sm font-bold uppercase tracking-[0.14em] text-muted mb-6">Senza TapReview</div>
            <ul className="space-y-4">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-3 text-ink-soft">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl bg-ink text-white p-7 sm:p-9 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-star/20 blur-3xl" />
            <div className="relative text-sm font-bold uppercase tracking-[0.14em] text-star mb-6">Con TapReview</div>
            <ul className="relative space-y-4">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-star text-ink flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} className="rounded-3xl bg-sand/70 p-6">
              <div className="w-11 h-11 rounded-2xl bg-white text-ink flex items-center justify-center shadow-sm mb-5">{p.icon}</div>
              <h3 className="text-lg font-bold text-ink mb-2">{p.title}</h3>
              <p className="text-[15px] text-ink-soft leading-relaxed">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
