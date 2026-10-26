import React, { useState } from 'react';
import { FAQS } from '../data/products';
import { ChevronDown, HelpCircle, Search, MessageSquareText } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredFaqs = FAQS.filter(f =>
    f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    f.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-900/60 relative border-b border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>DOMANDE FREQUENTI (FAQ)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Hai ancora dei dubbi? Troviamo subito le risposte.
          </h2>
          <p className="text-slate-300 text-base">
            Tutto quello che c'è da sapere sulle nostre soluzioni NFC + QR Code per le recensioni della tua attività.
          </p>

          {/* Search Input */}
          <div className="relative max-w-md mx-auto pt-4">
            <input
              type="text"
              placeholder="Cerca una domanda (es. abbonamento, spedizione, NFC)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 pl-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-7" />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 pt-10">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-white hover:text-blue-400 transition-colors"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg bg-slate-900 border border-slate-800 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-blue-600/20 text-blue-400' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-slate-300 leading-relaxed border-t border-slate-900 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-slate-400 text-sm">
              Nessuna domanda trovata con questo termine. Contattaci su WhatsApp per una risposta immediata.
            </div>
          )}
        </div>

        {/* WhatsApp Fast Support Banner */}
        <div className="mt-12 bg-slate-950 border border-slate-800 rounded-2xl p-6 text-center space-y-3">
          <div className="w-10 h-10 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <MessageSquareText className="w-5 h-5" />
          </div>
          <h4 className="text-base font-bold text-white">Serve aiuto immediato o una consulenza personalizzata?</h4>
          <p className="text-xs text-slate-400">
            Il nostro team di supporto è attivo dal lunedì al sabato per rispondere a ogni tua domanda prima dell'acquisto.
          </p>
          <a
            href="https://wa.me/390000000000?text=Ciao!%20Vorrei%20informazioni%20sugli%20espositori%20NFC%20Google%20Reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-lg shadow-emerald-600/20"
          >
            <span>Chatta su WhatsApp con un Esperto</span>
          </a>
        </div>

      </div>
    </section>
  );
};
