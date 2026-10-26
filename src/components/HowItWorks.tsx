import React from 'react';
import { Smartphone, MousePointerClick, Star } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';

const steps = [
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Avvicina il telefono',
    description: 'Il cliente appoggia lo smartphone sull’espositore o sulla card. In alternativa inquadra il QR Code.'
  },
  {
    icon: <MousePointerClick className="w-6 h-6" />,
    title: 'Si apre la tua scheda Google',
    description: 'Niente ricerche su Maps: si apre direttamente il modulo recensione della tua attività.'
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: '5 stelle, pubblicato',
    description: 'Sceglie le stelle, scrive due parole e pubblica. La tua reputazione cresce, il tuo ranking pure.'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="come-funziona" className="py-20 sm:py-28 bg-white border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Come funziona"
          title="Tre passaggi. Meno di cinque secondi."
          description="Nessuna app per te, nessuna app per i tuoi clienti. Funziona da subito, appena tolto dalla scatola."
        />

        <div className="relative grid md:grid-cols-3 gap-10 md:gap-6 mt-16">
          <div className="hidden md:block absolute top-8 left-[16%] right-[16%] border-t-2 border-dashed border-line" />
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative text-center px-4">
              <div className="relative mx-auto w-16 h-16 rounded-2xl bg-ink text-white flex items-center justify-center shadow-[0_12px_30px_-12px_rgba(18,21,26,0.7)]">
                {step.icon}
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-star text-ink text-xs font-extrabold flex items-center justify-center ring-4 ring-white">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-[15px] text-ink-soft leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
