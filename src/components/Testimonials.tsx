import React from 'react';
import { TESTIMONIALS } from '../data/products';
import { ArrowRight, BadgeCheck } from 'lucide-react';
import { Reveal, SectionHeader, Stars } from './ui';

const stats = [
  { value: '2.400+', label: 'attività in Italia' },
  { value: '4,9/5', label: 'voto medio clienti' },
  { value: '2 sec', label: 'per lasciare una recensione' },
  { value: '30 gg', label: 'soddisfatti o rimborsati' }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="recensioni" className="py-20 sm:py-28 bg-sand/60 border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Risultati reali"
          title="Chi lo usa, non torna indietro."
          description="Ristoratori, saloni e professionisti che hanno moltiplicato le recensioni in poche settimane."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="rounded-3xl bg-white border border-line p-6 text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-ink">{s.value}</div>
              <div className="text-sm text-ink-soft mt-1">{s.label}</div>
            </Reveal>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08} className="h-full">
              <figure className="h-full flex flex-col rounded-3xl bg-white border border-line p-7">
                <Stars className="w-4 h-4" />
                <blockquote className="mt-5 text-[17px] leading-relaxed text-ink flex-1">“{t.text}”</blockquote>

                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-paper border border-line p-3.5 text-sm">
                  <span className="text-muted line-through decoration-1">{t.beforeStats}</span>
                  <ArrowRight className="w-4 h-4 text-success shrink-0" />
                  <span className="font-bold text-success">{t.afterStats}</span>
                </div>

                <figcaption className="mt-6 flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-11 h-11 rounded-full object-cover" loading="lazy" />
                  <div>
                    <div className="font-bold text-ink flex items-center gap-1.5">
                      {t.name}
                      <BadgeCheck className="w-4 h-4 text-brand" />
                    </div>
                    <div className="text-sm text-muted">
                      {t.company} · {t.city}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
