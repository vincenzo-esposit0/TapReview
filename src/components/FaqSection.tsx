import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { Plus, MessageCircle } from 'lucide-react';
import { Reveal, SectionHeader } from './ui';
import { WHATSAPP_ENABLED, whatsappUrl } from '../config';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-y border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHeader
            align="left"
            eyebrow="Domande frequenti"
            title="Tutto quello che vuoi sapere."
            description="Non trovi la risposta? Scrivici: rispondiamo in pochi minuti, dal lunedì al sabato."
          />
          <Reveal className="mt-8">
            {WHATSAPP_ENABLED ? (
              <a
                href={whatsappUrl('Ciao! Vorrei informazioni sugli espositori NFC Google Reviews')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white font-bold text-sm hover:brightness-95 transition"
              >
                <MessageCircle className="w-4 h-4" />
                Chatta su WhatsApp
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-sand text-muted font-bold text-sm cursor-not-allowed select-none"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp · presto disponibile
              </span>
            )}
          </Reveal>
        </div>

        <div className="lg:col-span-8 divide-y divide-line border-y border-line">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="w-full py-6 text-left flex items-center justify-between gap-6"
                >
                  <span className="text-lg font-bold text-ink">{faq.question}</span>
                  <span
                    className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-ink border-ink text-white rotate-45' : 'border-line text-ink'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-14 text-[15px] text-ink-soft leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
