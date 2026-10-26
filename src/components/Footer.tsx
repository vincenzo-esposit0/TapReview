import React, { useState } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';
import { Logo } from './Navbar';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'guarantee' | null>(null);

  return (
    <footer className="bg-ink text-white/60 text-sm pt-16 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-4">
            <Logo light />
            <p className="max-w-sm leading-relaxed">
              Espositori e card NFC + QR Code per aiutare ristoranti, negozi e professionisti a raccogliere più recensioni Google.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.14em]">Prodotti</h4>
            <ul className="space-y-2">
              <li><a href="#prodotti" className="hover:text-white transition-colors">Prezzi</a></li>
              <li><a href="#come-funziona" className="hover:text-white transition-colors">Come funziona</a></li>
              <li><a href="#come-fatti" className="hover:text-white transition-colors">Materiali</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.14em]">Contatti</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-star" /> info@tapreview.it</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-star" /> +39 02 87654321 · Lun–Sab 9–18</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-star" /> Via Copernico 38, 20125 Milano</li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-[0.14em]">Legale</h4>
            <div className="space-y-2">
              <button onClick={() => setActiveModal('privacy')} className="block hover:text-white text-left">Privacy & Cookie</button>
              <button onClick={() => setActiveModal('terms')} className="block hover:text-white text-left">Termini di vendita</button>
              <button onClick={() => setActiveModal('guarantee')} className="block hover:text-white text-left">Garanzia 30 giorni</button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <span>© {new Date().getFullYear()} TapReview Italia S.r.l. · Tutti i diritti riservati.</span>
          <span>*Risultati indicativi basati sull’esperienza media dei clienti.</span>
        </div>
      </div>

      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div className="bg-white text-ink rounded-3xl p-7 max-w-lg w-full space-y-4 max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">
                {activeModal === 'privacy' && 'Informativa sulla Privacy (GDPR)'}
                {activeModal === 'terms' && 'Termini e Condizioni di Vendita'}
                {activeModal === 'guarantee' && 'Garanzia 30 Giorni'}
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1.5 rounded-full hover:bg-sand" aria-label="Chiudi">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-[15px] text-ink-soft leading-relaxed">
              {activeModal === 'privacy' && (
                <p>I tuoi dati personali vengono trattati in conformità al Regolamento UE 2016/679 (GDPR). Vengono utilizzati esclusivamente per la gestione delle richieste di preventivo o informazioni.</p>
              )}
              {activeModal === 'terms' && (
                <p>I dispositivi hardware vengono forniti pre-programmati a titolo gratuito con il link Google Business comunicato dall'acquirente.</p>
              )}
              {activeModal === 'guarantee' && (
                <p>Se entro 30 giorni dall'acquisto il dispositivo non dovesse soddisfare le tue aspettative, puoi restituirlo integro nell'imballo originale ed ottenere il rimborso completo dell'importo speso.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
