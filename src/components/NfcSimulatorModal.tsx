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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white rounded-[28px] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-line">
          <div className="flex items-center gap-2">
            <Radio className="w-5 h-5 text-ink" />
            <h3 className="text-lg font-bold text-ink">Simulatore Tap NFC Google</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-ink rounded-full hover:bg-sand transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {step === 'idle' && (
            <div className="text-center space-y-6 py-4">
              <div className="relative mx-auto w-32 h-32 rounded-full bg-star-soft border-2 border-dashed border-star flex items-center justify-center group cursor-pointer hover:scale-105 transition-transform" onClick={handleSimulateTap}>
                <div className="absolute inset-0 rounded-full bg-star/20 animate-ping" />
                <Smartphone className="w-14 h-14 text-ink" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-bold text-ink">Prova la magia del "Tap" in tempo reale</h4>
                <p className="text-sm text-ink-soft max-w-sm mx-auto">
                  Clicca sul pulsante in basso per simulare l'avvicinamento di uno smartphone all'espositore NFC per <strong className="text-ink">{businessName}</strong>.
                </p>
              </div>

              <button
                onClick={handleSimulateTap}
                className="w-full py-3.5 px-6 rounded-full font-bold text-white bg-ink hover:bg-ink-soft transition-colors flex items-center justify-center gap-3 text-base"
              >
                <Sparkles className="w-5 h-5 text-star" />
                <span>Simula "Tap iPhone / Android"</span>
              </button>
            </div>
          )}

          {step === 'tapping' && (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-star-soft flex items-center justify-center animate-spin">
                <Radio className="w-8 h-8 text-ink" />
              </div>
              <h4 className="text-lg font-bold text-ink">Lettura Chip NFC in corso...</h4>
              <p className="text-xs text-muted font-mono">Sensore NFC rilevato (NTAG215) → Apertura link Google Reviews</p>
            </div>
          )}

          {step === 'popup' && (
            <div className="space-y-5">
              {/* Google Review Box Mockup */}
              <div className="bg-paper border border-line rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-line">
                  <div className="w-10 h-10 rounded-full bg-white border border-line flex items-center justify-center font-bold text-ink text-xl">
                    G
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-ink leading-tight">{businessName}</h5>
                    <p className="text-xs text-muted">Google Business Profile · Valuta la tua esperienza</p>
                  </div>
                </div>

                <div className="space-y-2 text-center pt-1">
                  <span className="text-xs text-muted uppercase tracking-wider font-medium">Seleziona le stelle</span>
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
                              ? 'text-star fill-star'
                              : 'text-line'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-ink-soft">Scrivi un breve commento:</label>
                  <textarea
                    rows={3}
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="w-full bg-white border border-line rounded-lg p-2.5 text-sm text-ink focus:ring-2 focus:ring-ink/10 focus:outline-none"
                    placeholder="Condividi i dettagli della tua esperienza..."
                  />
                </div>

                <form onSubmit={handleSubmitReview} className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-full text-sm font-bold text-white bg-brand hover:brightness-110 transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Pubblica Recensione su Google</span>
                  </button>
                </form>
              </div>
            </div>
          )}

          {step === 'submitted' && (
            <div className="text-center space-y-5 py-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-success" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-ink">Recensione Pubblicata! 🎉</h4>
                <p className="text-sm text-ink-soft">
                  Ecco come i tuoi clienti lasceranno recensioni a 5 stelle a raffica, senza stress o dimenticanze.
                </p>
              </div>
              <div className="p-3 bg-success/5 rounded-xl text-xs text-success font-mono">
                ⚡ Tempo impiegato stimato: <strong>4.2 secondi</strong>
              </div>
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 text-xs text-muted hover:text-ink underline pt-2"
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
