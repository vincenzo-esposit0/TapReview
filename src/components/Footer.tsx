import React, { useState } from 'react';
import { ShieldCheck, Truck, Phone, Mail, MapPin, MessageSquareText, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'guarantee' | null>(null);

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top 4 Value Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-300">
          <div className="flex items-center gap-3">
            <Truck className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-xs">Spedizione Gratuita &gt; 49€</div>
              <div className="text-[10px] text-slate-400">Consegna SDA/DHL in 24/48h</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-xs">Garanzia 30 Giorni</div>
              <div className="text-[10px] text-slate-400">Soddisfatti o Rimborsati 100%</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Lock className="w-5 h-5 text-yellow-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-xs">Zero Abbonamenti</div>
              <div className="text-[10px] text-slate-400">Nessun costo mensile ricorrente</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MessageSquareText className="w-5 h-5 text-indigo-400 shrink-0" />
            <div>
              <div className="font-bold text-white text-xs">Assistenza WhatsApp</div>
              <div className="text-[10px] text-slate-400">Supporto tecnico dedicato in italiano</div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand story */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-lg font-bold text-white font-display">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 via-red-500 to-yellow-400 p-0.5">
                <div className="w-full h-full bg-slate-950 rounded-[5px] flex items-center justify-center font-extrabold text-xs text-blue-400">
                  G
                </div>
              </div>
              <span>TapReview<span className="text-blue-500">.it</span></span>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Sito vetrina ufficiale per le soluzioni hardware intelligenti NFC e QR Code per aiutare ristoranti, negozi fisici e professionisti ad aumentare le recensioni Google.
            </p>

            <div className="text-[11px] text-slate-500 font-mono">
              © {new Date().getFullYear()} TapReview Italia S.r.l. · Tutti i diritti riservati.
            </div>
          </div>

          {/* Col 2: Fast Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Prodotti & Soluzioni</h4>
            <ul className="space-y-2">
              <li><a href="#prodotti" className="hover:text-white transition-colors">I 3 Prodotti Promossi</a></li>
              <li><a href="#come-fatti" className="hover:text-white transition-colors">Come Sono Fatti (Materiali)</a></li>
              <li><a href="#come-funziona" className="hover:text-white transition-colors">Come Funziona il Tap NFC</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Domande Frequenti (FAQ)</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Assistenza Clienti</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>info@tapreview.it</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+39 02 87654321 (Lun-Sab 9-18)</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Via Copernico 38, 20125 Milano (MI)</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Payment Methods */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Note Legali & Informazioni</h4>
            <div className="space-y-2">
              <button onClick={() => setActiveModal('privacy')} className="block hover:text-white text-left">
                Informativa sulla Privacy & Cookie
              </button>
              <button onClick={() => setActiveModal('terms')} className="block hover:text-white text-left">
                Termini e Condizioni di Vendita
              </button>
              <button onClick={() => setActiveModal('guarantee')} className="block hover:text-white text-left">
                Garanzia "100% Soddisfatti o Rimborsati"
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Policy Modal Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 max-w-lg w-full space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white">
                {activeModal === 'privacy' && 'Informativa sulla Privacy (GDPR)'}
                {activeModal === 'terms' && 'Termini e Condizioni di Vendita'}
                {activeModal === 'guarantee' && 'Garanzia 30 Giorni Soddisfatti o Rimborsati'}
              </h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-white">✕</button>
            </div>
            <div className="text-xs text-slate-300 leading-relaxed space-y-2">
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
