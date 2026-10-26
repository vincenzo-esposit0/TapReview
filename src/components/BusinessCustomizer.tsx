import React, { useState } from 'react';
import { Sparkles, Eye, CheckCircle2, Radio, Star, Link, Search, FileText } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface BusinessCustomizerProps {
  onRequestQuoteCustom: (productTitle: string, businessName: string) => void;
}

export const BusinessCustomizer: React.FC<BusinessCustomizerProps> = ({ onRequestQuoteCustom }) => {
  const [businessName, setBusinessName] = useState<string>('Ristorante Pizzeria La Bella Italia');
  const [googleLink, setGoogleLink] = useState<string>('https://g.page/r/bella-italia-milano/review');
  const [selectedFormat, setSelectedFormat] = useState<'espositore' | 'card'>('espositore');
  const [selectedColor, setSelectedColor] = useState<'bianco' | 'nero'>('nero');

  const selectedProductTitle = selectedFormat === 'espositore'
    ? 'Espositore da Banco Smart NFC + QR Code'
    : 'Smart Review Card Tascabile NFC';

  const handleCustomQuote = () => {
    onRequestQuoteCustom(selectedProductTitle, businessName);
  };

  return (
    <section id="personalizza" className="py-16 sm:py-24 bg-slate-900/80 relative border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span>SIMULATORE DI STAMPA GRAFICA VETRINA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Personalizza il tuo Espositore o Card in Tempo Reale
          </h2>
          <p className="text-slate-300 text-base">
            Digita il nome della tua attività commerciale e guarda l'anteprima di come verrà inciso il dispositivo hardware pronto per essere esposto.
          </p>
        </div>

        {/* Customizer Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-12">
          
          {/* Form Control Column */}
          <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-2xl">
            
            {/* Step 1: Format Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                1. Scegli la Tipologia di Prodotto:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedFormat('espositore')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedFormat === 'espositore'
                      ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-bold text-white">1. Espositore da Banco</div>
                  <div className="text-xs text-slate-400">Display rigido per cassa e tavoli</div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedFormat('card')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    selectedFormat === 'card'
                      ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="text-sm font-bold text-white">2. Smart Review Card</div>
                  <div className="text-xs text-slate-400">Formato carta di credito tascabile</div>
                </button>
              </div>
            </div>

            {/* Step 2: Color Finish */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                2. Colore Telaio / Finitura:
              </label>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedColor('nero')}
                  className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    selectedColor === 'nero'
                      ? 'bg-slate-900 border-blue-500 text-white ring-1 ring-blue-500'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-slate-950 border border-slate-600" />
                  <span>Nero Opaco Stealth</span>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedColor('bianco')}
                  className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    selectedColor === 'bianco'
                      ? 'bg-slate-900 border-blue-500 text-white ring-1 ring-blue-500'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400'
                  }`}
                >
                  <span className="w-3.5 h-3.5 rounded-full bg-white" />
                  <span>Bianco Candido Glossy</span>
                </button>
              </div>
            </div>

            {/* Step 3: Business Details Inputs */}
            <div className="space-y-4 pt-2 border-t border-slate-800">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 block">
                  3. Nome dell'Attività Commerciale:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Es. Ristorante Pizzeria Bella Italia"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  />
                  <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-300 flex items-center justify-between">
                  <span>Link Scheda Google Business / Maps:</span>
                  <span className="text-[10px] text-slate-500 font-normal">(Opzionale)</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={googleLink}
                    onChange={(e) => setGoogleLink(e.target.value)}
                    placeholder="https://g.page/r/..."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
                  />
                  <Link className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                </div>
                <p className="text-[11px] text-slate-400">
                  💡 Se non conosci il link esatto, penseremo noi a individuare la tua scheda Google Business ufficiale prima della programmazione del chip NFC.
                </p>
              </div>
            </div>

            {/* Custom Quote Request Action */}
            <div className="pt-2">
              <button
                onClick={handleCustomQuote}
                className="w-full py-4 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2.5 text-sm"
              >
                <FileText className="w-5 h-5" />
                <span>Richiedi Preventivo con questa Grafica Personalizzata</span>
              </button>
            </div>

          </div>

          {/* Live Graphic Preview Render */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-sm sm:max-w-md bg-slate-950 border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-blue-400" /> SIMULATORE GRAFICO UV
                </span>
                <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                  ● Chip NTAG215 attivo
                </span>
              </div>

              {/* Physical Device Mockup Surface */}
              <div
                className={`relative rounded-2xl p-6 border transition-all duration-300 shadow-2xl flex flex-col items-center justify-between text-center space-y-6 ${
                  selectedColor === 'nero'
                    ? 'bg-slate-900 border-slate-700 text-white shadow-black/80'
                    : 'bg-slate-100 border-slate-300 text-slate-900 shadow-slate-400/20'
                } ${selectedFormat === 'espositore' ? 'aspect-[3/4] min-h-[360px]' : 'aspect-[1.58/1] min-h-[220px]'}`}
              >
                {/* Top Google Logo & Rating */}
                <div className="space-y-2">
                  <div className="w-12 h-12 mx-auto rounded-full bg-white flex items-center justify-center shadow-lg font-bold text-slate-900 text-2xl border border-slate-200">
                    G
                  </div>
                  
                  <div className="space-y-0.5">
                    <h4 className="text-base font-extrabold tracking-tight">
                      RECENSISCI SU GOOGLE
                    </h4>
                    <div className="flex items-center justify-center gap-1 text-yellow-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Custom Business Name Label */}
                <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 max-w-full w-full">
                  <span className="text-xs uppercase tracking-wider opacity-60 block font-mono">PROFILO ATTIVITÀ</span>
                  <p className="text-sm font-extrabold truncate font-display">
                    {businessName || 'Nome Tua Attività'}
                  </p>
                </div>

                {/* QR Code & NFC Icon Graphic */}
                <div className="space-y-2">
                  <div className="w-20 h-20 mx-auto bg-white p-1.5 rounded-lg border border-slate-300 shadow flex items-center justify-center">
                    <div className="w-full h-full border-2 border-slate-900 p-1 flex flex-col justify-between">
                      <div className="flex justify-between">
                        <div className="w-3 h-3 bg-slate-900" />
                        <div className="w-3 h-3 bg-slate-900" />
                      </div>
                      <div className="text-[7px] font-black tracking-tighter text-slate-900">TAP & SCAN</div>
                      <div className="flex justify-between">
                        <div className="w-3 h-3 bg-slate-900" />
                        <div className="w-2 h-2 bg-slate-900" />
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] font-bold tracking-tight opacity-80 flex items-center justify-center gap-1">
                    <Radio className="w-3 h-3 text-blue-500 animate-pulse" />
                    <span>AVVICINA IL TELEFONO (NFC) O SCANSIONA</span>
                  </div>
                </div>

              </div>

              {/* Bottom Spec Footer */}
              <div className="text-[11px] text-slate-400 text-center pt-2 font-mono">
                ✓ Chip NTAG215 13.56 MHz incorporato · Resistente al lavaggio
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
