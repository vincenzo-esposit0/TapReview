import React, { useState } from 'react';
import { X, Star, Smartphone, CheckCircle, Sparkles, RefreshCw, Send, Radio } from 'lucide-react';

interface NfcSimulatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessName?: string;
}

export const NfcSimulatorModal: React.FC<NfcSimulatorModalProps> = ({
  isOpen,
  onClose,
  businessName = 'Ristorante Pizzeria Bella Italia'
}) => {
  const [step, setStep] = useState<'idle' | 'tapping' | 'popup' | 'submitted'>('idle');
  const [selectedRating, setSelectedRating] = useState<number>(5);
  const [reviewComment, setReviewComment] = useState<string>('Esperienza fantastica, servizio impeccabile e cibo ottimo! Consigliatissimo.');

  if (!isOpen) return null;

  const handleSimulateTap = () => {
    setStep('tapping');
    setTimeout(() => {
      setStep('popup');
    }, 1200);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('submitted');
  };

  const handleReset = () => {
    setStep('idle');
    setSelectedRating(5);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/50">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-blue-400 animate-pulse" />
            <h3 className="text-lg font-bold text-white font-display">Simulatore Tap NFC Google</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {step === 'idle' && (
            <div className="text-center space-y-6 py-4">
              <div className="relative mx-auto w-32 h-32 rounded-full bg-blue-600/10 border-2 border-dashed border-blue-500/40 flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform" onClick={handleSimulateTap}>
                <div className="absolute inset-0 rounded-full bg-blue-500/10 animate-ping" />
                <Smartphone className="w-14 h-14 text-blue-400" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-white">Prova la magia del "Tap" in tempo reale</h4>
                <p className="text-sm text-slate-400 max-w-sm mx-auto">
                  Clicca sul pulsante in basso per simulare l'avvicinamento di uno smartphone all'espositore NFC per <strong className="text-slate-200">{businessName}</strong>.
                </p>
              </div>

              <button
                onClick={handleSimulateTap}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-3 text-base"
              >
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span>Simula "Tap iPhone / Android"</span>
              </button>
            </div>
          )}

          {step === 'tapping' && (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-600/20 border border-blue-500/50 flex items-center justify-center animate-spin">
                <Radio className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white">Lettura Chip NFC in corso...</h4>
              <p className="text-xs text-blue-400 font-mono">Sensore NFC rilevato (NTAG215) → Apertura link Google Reviews</p>
            </div>
          )}

          {step === 'popup' && (
            <div className="space-y-5 animate-in zoom-in-95 duration-200">
              {/* Google Review Box Mockup */}
              <div className="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4 shadow-inner">
                <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-slate-900 text-xl shadow">
                    G
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white leading-tight">{businessName}</h5>
                    <p className="text-xs text-slate-400">Google Business Profile · Valuta la tua esperienza</p>
                  </div>
                </div>

                <div className="space-y-2 text-center pt-1">
                  <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Seleziona le stelle</span>
                  <div className="flex items-center justify-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setSelectedRating(star)}
                        className="p-1 hover:scale-125 transition-transform"
                      >
                        <Star
                          className={`w-8 h-8 ${
                            star <= selectedRating
                              ? 'text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                              : 'text-slate-700'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Scrivi un breve commento:</label>
                  <textarea
                    rows={3}
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-slate-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Condividi i dettagli della tua esperienza..."
                  />
                </div>

                <form onSubmit={handleSubmitReview} className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center justify-center gap-2 shadow-md shadow-blue-600/30"
                  >
                    <Send className="w-4 h-4" />
                    <span>Pubblica Recensione su Google</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {step === 'submitted' && (
            <div className="text-center space-y-5 py-6 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">Recensione Pubblicata! 🎉</h4>
                <p className="text-sm text-slate-300">
                  Ecco come i tuoi clienti lasceranno recensioni a 5 stelle a raffica, senza stress o dimenticanze.
                </p>
              </div>
              <div className="p-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-xs text-emerald-300 font-mono">
                ⚡ Tempo impiegato stimato: <strong>4.2 secondi</strong>
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white underline pt-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Riprova la simulazione</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
