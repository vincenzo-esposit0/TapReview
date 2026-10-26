import React, { useState } from 'react';
import { Star, Zap, ShieldCheck, Truck, ArrowRight, Play, CheckCircle2, Sparkles } from 'lucide-react';
import { NfcSimulatorModal } from './NfcSimulatorModal';

interface HeroProps {
  onExploreProducts: () => void;
  onOrderNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onOrderNow }) => {
  const [simulatorOpen, setSimulatorOpen] = useState(false);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-slate-950 border-b border-slate-800/60">
      {/* Background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Kicker Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-semibold text-white">Tecnologia Smart NFC + QR Code 2026</span>
              <span className="text-slate-500">•</span>
              <span className="text-yellow-400 font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-yellow-400" /> 5.0 Google Reviews
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-display">
              Aumenta le tue <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500">Recensioni Google</span> in 1 Secondo con un Tap.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Dispositivi hardware intelligenti da banco e card tascabili per ristoranti, negozi fisici, hotel e liberi professionisti. <strong className="text-white">Nessun abbonamento mensile</strong>, paghi una volta sola e sono pronti all’uso.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-300 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Doppio sistema:</strong> NFC + QR Code</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Zero canoni:</strong> Acquisto una tantum</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Programmazione gratis:</strong> Pronto all'uso</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>+300% Recensioni:</strong> In meno di 30 giorni</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onOrderNow}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 flex items-center justify-center gap-3 group"
              >
                <span>Acquista Ora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => setSimulatorOpen(true)}
                className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all flex items-center justify-center gap-2.5 group"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-blue-400" />
                </div>
                <span>Prova Simulatore Tap</span>
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400 text-center lg:text-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span>Zero Abbonamenti</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Truck className="w-4 h-4 text-blue-400" />
                <span>Spedizione 24/48h</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Reso 30 Giorni</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span>Setup Incluso</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Hero Mockup Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 p-2 border border-slate-800 shadow-2xl shadow-blue-950/40">
              
              {/* Product Visual Container */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900">
                <img
                  src={`${import.meta.env.BASE_URL}images/hero_display_nfc_1793016159133.jpg`}
                  alt="Espositore Smart NFC Google Reviews"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />

                {/* Live Tap Overlay Banner */}
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-lg p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <Zap className="w-4 h-4 animate-pulse" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Tap your phone here</div>
                      <div className="text-[11px] text-slate-400">Apre direttamente Google Reviews</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSimulatorOpen(true)}
                    className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                  >
                    Testa Tap
                  </button>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="mt-3 p-3 bg-slate-900/90 rounded-xl border border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] font-bold text-white border border-slate-900">R</div>
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white border border-slate-900">M</div>
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center text-[10px] font-bold text-white border border-slate-900">L</div>
                  </div>
                  <span className="text-slate-300 font-medium">Oltre <strong>2.400+</strong> attività in Italia</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-yellow-400" />
                  <span>4.9 / 5</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* NFC Interactive Simulator Modal */}
      <NfcSimulatorModal
        isOpen={simulatorOpen}
        onClose={() => setSimulatorOpen(false)}
      />
    </section>
  );
};
