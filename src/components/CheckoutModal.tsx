import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Building2, MapPin, Phone, Mail, FileText, ArrowLeft, Lock, Copy } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  appliedDiscountPercentage: number;
  onOrderSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  appliedDiscountPercentage,
  onOrderSuccess
}) => {
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details');

  // Form State
  const [fullName, setFullName] = useState('Marco Rossi');
  const [companyName, setCompanyName] = useState('Trattoria Bella Italia Srl');
  const [vatNumber, setVatNumber] = useState('IT01234567890');
  const [email, setEmail] = useState('m.rossi@bellaitalia.it');
  const [phone, setPhone] = useState('347 123 4567');
  const [address, setAddress] = useState('Via Roma 45');
  const [city, setCity] = useState('Milano');
  const [postalCode, setPostalCode] = useState('20121');

  // Business Google Link Details
  const [googleBusinessLink, setGoogleBusinessLink] = useState('https://g.page/r/trattoria-bella-italia');
  const [customNotes, setCustomNotes] = useState('Includere 1 espositore nero e 1 bianco se possibile.');

  // Payment
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'satispay' | 'cod'>('card');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('123');

  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const discountAmount = (subtotal * appliedDiscountPercentage) / 100;
  const shippingFee = subtotal >= 49 || cartItems.length === 0 ? 0 : 4.90;
  const codExtraFee = paymentMethod === 'cod' ? 3.90 : 0;
  const finalTotal = subtotal - discountAmount + shippingFee + codExtraFee;

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayAndComplete = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = 'TR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(generatedId);
    setStep('confirmation');
    onOrderSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-bold text-white font-display">
              {step === 'details' && 'Dati di Spedizione e Fatturazione'}
              {step === 'payment' && 'Pagamento Sicuro Cassa'}
              {step === 'confirmation' && 'Ordine Confermato con Successo! 🎉'}
            </h3>
          </div>
          {step !== 'confirmation' && (
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Step 1: Shipping & Business Info Form */}
        {step === 'details' && (
          <form onSubmit={handleSubmitDetails} className="p-6 space-y-6">
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building2 className="w-4 h-4" /> 1. Dati Azienda & Spedizione
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Nome e Cognome Referente *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Nome Attività / Ragione Sociale *</label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Partita IVA / Codice Fiscale (Per Fattura)</label>
                  <input
                    type="text"
                    value={vatNumber}
                    onChange={(e) => setVatNumber(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Telefono (Per il Corriere) *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Email aziendale (Per fattura e Tracking SDA/DHL) *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-slate-300 block mb-1">Indirizzo di Spedizione *</label>
                  <input
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-slate-300 block mb-1">Città & CAP *</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Città"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-2/3 bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                      type="text"
                      required
                      placeholder="CAP"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-1/3 bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Config Link Section */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="w-4 h-4" /> 2. Link Scheda Google Business per Programmazione NFC
              </h4>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Link o Nome Esatto del Tuo Locale su Google Maps:</label>
                <input
                  type="text"
                  value={googleBusinessLink}
                  onChange={(e) => setGoogleBusinessLink(e.target.value)}
                  placeholder="Es. https://g.page/r/trattoria-bella-italia o Trattoria Bella Italia Milano"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Note o Istruzioni Speciali per la Stampa:</label>
                <textarea
                  rows={2}
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  placeholder="Es. Vogliamo la scritta in italiano 'Lascia una recensione'..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Total Footer Action */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Totale da Pagare:</span>
                <span className="text-xl font-black text-white font-display">{finalTotal.toFixed(2)}€</span>
              </div>

              <button
                type="submit"
                className="py-3 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 text-sm flex items-center gap-2"
              >
                <span>Vai al Pagamento</span>
              </button>
            </div>

          </form>
        )}

        {/* Step 2: Payment Selector */}
        {step === 'payment' && (
          <form onSubmit={handlePayAndComplete} className="p-6 space-y-6">
            <button
              type="button"
              onClick={() => setStep('details')}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Modifica Dati Spedizione
            </button>

            <div className="space-y-4">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Scegli il Metodo di Pagamento
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold text-white">Carta di Credito / Debito</div>
                  <div className="text-[10px] text-slate-400">Visa, Mastercard, Amex</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    paymentMethod === 'paypal'
                      ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold text-white">PayPal / Apple Pay</div>
                  <div className="text-[10px] text-slate-400">Paga in 3 rate senza interessi</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('satispay')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    paymentMethod === 'satispay'
                      ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold text-white">Satispay</div>
                  <div className="text-[10px] text-slate-400">Istantaneo dallo smartphone</div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cod')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    paymentMethod === 'cod'
                      ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                      : 'bg-slate-950 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold text-white">Contrassegno (+3.90€)</div>
                  <div className="text-[10px] text-slate-400">Paga in contanti al corriere</div>
                </button>
              </div>

              {/* Card Inputs Simulation */}
              {paymentMethod === 'card' && (
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl space-y-3">
                  <div>
                    <label className="text-[11px] font-medium text-slate-300 block mb-1">Numero Carta</label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">Scadenza</label>
                      <input
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-slate-300 block mb-1">CVC / CVV</label>
                      <input
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-1.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Spedizione a:</span>
                <strong className="text-white">{fullName} - {companyName} ({city})</strong>
              </div>
              <div className="flex justify-between">
                <span>Totale finale con IVA:</span>
                <strong className="text-blue-400 text-base">{finalTotal.toFixed(2)}€</strong>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-xl shadow-blue-600/30 text-base flex items-center justify-center gap-2"
            >
              <Lock className="w-4 h-4" />
              <span>Conferma e Paga {finalTotal.toFixed(2)}€</span>
            </button>
          </form>
        )}

        {/* Step 3: Order Confirmation */}
        {step === 'confirmation' && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white font-display">Grazie per il tuo ordine, {fullName}!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Abbiamo preso in carico l'ordine per <strong>{companyName}</strong>. I nostri tecnici stanno già programmando i tuoi dispositivi NFC.
              </p>
            </div>

            {/* Order Info Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 max-w-sm mx-auto space-y-2 text-xs text-slate-300 text-left">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Numero Ordine:</span>
                <strong className="text-blue-400 font-mono font-bold">{orderId}</strong>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Consegna Stimata:</span>
                <strong className="text-emerald-400">24/48 ore lavorative (SDA)</strong>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Fattura inviata a:</span>
                <span className="text-white truncate">{email}</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="py-3 px-8 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
            >
              Torna alla Home
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
