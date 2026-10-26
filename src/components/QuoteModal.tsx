import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, MessageSquareText, Building2, Phone, Mail, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProductTitle?: string;
  preselectedBusinessName?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProductTitle = 'Espositore da Banco Smart NFC + QR Code',
  preselectedBusinessName = ''
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [productType, setProductType] = useState<string>(preselectedProductTitle);
  const [quantityRange, setQuantityRange] = useState<string>('3-5 pezzi (Sconto consigliato)');
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>(preselectedBusinessName);
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappText = encodeURIComponent(
    `Ciao! Vorrei richiedere informazioni e un preventivo per: ${productType}.\nAttività: ${companyName || 'Non specificata'}\nQuantità stimate: ${quantityRange}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-bold text-white font-display">Richiedi Informazioni o Preventivo Gratuito</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            <p className="text-xs text-slate-300">
              Compila il modulo in 30 secondi: ti risponderemo entro 1 ora lavorativa con il preventivo personalizzato e una simulatore grafica gratuita con il tuo logo!
            </p>

            {/* Product Interest Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">
                Prodotto di Interesse:
              </label>
              <select
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2.5 text-xs text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="Espositore da Banco Smart NFC + QR Code">1. Espositore da Banco Smart NFC + QR Code (Display Cassa/Tavolo)</option>
                <option value="Smart Review Card Tascabile NFC">2. Smart Review Card Tascabile NFC (Formato Carta di Credito)</option>
                <option value="Kit Completo Smart Business (Bundle)">3. Kit Completo Smart Business (1 Espositore + 2 Card)</option>
                <option value="Fornitura Multipla / Franchising">Fornitura Personalizzata Catena / Franchising (10+ pezzi)</option>
              </select>
            </div>

            {/* Quantity Range */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-300 block">
                Quantità indicativa desiderata:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['1 pezzo', '3-5 pezzi', '10+ pezzi'].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setQuantityRange(qty)}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      quantityRange === qty
                        ? 'bg-blue-600/20 border-blue-500 text-white ring-1 ring-blue-500'
                        : 'bg-slate-950 border-slate-800 text-slate-400'
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Details Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Nome e Cognome *</label>
                <input
                  type="text"
                  required
                  placeholder="Es. Mario Rossi"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Nome Attività / Locale *</label>
                <input
                  type="text"
                  required
                  placeholder="Es. Pizzeria Bella Italia"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Telefono / WhatsApp *</label>
                <input
                  type="tel"
                  required
                  placeholder="347 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="mario@attivita.it"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1">Messaggio o Richiesta Personalizzazione (Opzionale):</label>
              <textarea
                rows={2}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Vorrei un preventivo personalizzato per 3 punti vendita a Milano..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-white focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Actions */}
            <div className="pt-2 space-y-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 text-sm"
              >
                <Send className="w-4 h-4" />
                <span>Invia Richiesta Preventivo Gratuito</span>
              </button>

              <div className="text-center">
                <span className="text-[11px] text-slate-500 block mb-2">Oppure richiedi informazioni repentine:</span>
                <a
                  href={`https://wa.me/390000000000?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 font-semibold text-xs hover:bg-emerald-600/30 transition-colors"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Contattaci Subito su WhatsApp</span>
                </a>
              </div>
            </div>

          </form>
        ) : (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-extrabold text-white font-display">Richiesta Inviata con Successo!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Grazie {fullName}, un nostro consulente ti ricontatterà al più presto all'indirizzo <strong>{email}</strong> con l'anteprima e la quotazione personalizzata per <strong>{companyName}</strong>.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="py-3 px-8 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 text-xs"
            >
              Torna al Sito Vetrina
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
