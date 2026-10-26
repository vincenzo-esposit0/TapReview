import React, { useEffect, useState } from 'react';
import { X, Check, Send, MessageCircle, ShieldCheck, Clock } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { WHATSAPP_ENABLED, whatsappUrl } from '../config';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProductTitle?: string;
  preselectedBusinessName?: string;
  preselectedQuantity?: string;
}

const MULTI_SITE = 'Fornitura per più sedi / franchising (10+ pezzi)';
const QUANTITIES = ['1 pezzo', '2-5 pezzi', '10+ pezzi'];

const toQuantityRange = (q?: string) => {
  if (!q) return QUANTITIES[0];
  const n = parseInt(q, 10);
  if (n >= 10) return QUANTITIES[2];
  if (n > 1) return QUANTITIES[1];
  return QUANTITIES[0];
};

const inputClass =
  'w-full bg-paper border border-line rounded-xl px-4 py-3 text-[15px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-ink focus:ring-2 focus:ring-ink/10';

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedProductTitle = PRODUCTS[0].title,
  preselectedBusinessName = '',
  preselectedQuantity
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [productType, setProductType] = useState<string>(preselectedProductTitle);
  const [quantityRange, setQuantityRange] = useState<string>(toQuantityRange(preselectedQuantity));
  const [fullName, setFullName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>(preselectedBusinessName);
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  // Sync preselection every time the modal is opened from a different CTA
  useEffect(() => {
    if (!isOpen) return;
    setProductType(preselectedProductTitle);
    setQuantityRange(toQuantityRange(preselectedQuantity));
    if (preselectedBusinessName) setCompanyName(preselectedBusinessName);
  }, [isOpen, preselectedProductTitle, preselectedQuantity, preselectedBusinessName]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappText = `Ciao! Vorrei ordinare: ${productType}.\nAttività: ${companyName || 'Non specificata'}\nQuantità: ${quantityRange}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-ink/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-title"
        className="relative w-full max-w-xl bg-white rounded-t-[28px] sm:rounded-[28px] shadow-2xl sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-5 right-5 p-2 rounded-full hover:bg-sand text-ink" aria-label="Chiudi">
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div className="pr-10">
              <h3 id="quote-title" className="text-2xl font-bold text-ink">Completa il tuo ordine</h3>
              <p className="mt-2 text-[15px] text-ink-soft">
                Lasciaci i tuoi dati: ti ricontattiamo entro 1 ora lavorativa per confermare l’ordine e la grafica. Nessun pagamento ora.
              </p>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="q-product" className="text-sm font-bold text-ink block">Prodotto</label>
              <select id="q-product" value={productType} onChange={(e) => setProductType(e.target.value)} className={inputClass}>
                {PRODUCTS.map((p) => (
                  <option key={p.id} value={p.title}>{p.title}</option>
                ))}
                <option value={MULTI_SITE}>{MULTI_SITE}</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <span className="text-sm font-bold text-ink block">Quantità</span>
              <div className="grid grid-cols-3 gap-2">
                {QUANTITIES.map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setQuantityRange(qty)}
                    className={`py-3 rounded-xl border text-sm font-bold transition-colors ${
                      quantityRange === qty ? 'bg-ink border-ink text-white' : 'bg-paper border-line text-ink hover:border-ink/40'
                    }`}
                  >
                    {qty}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input aria-label="Nome e cognome" type="text" required placeholder="Nome e cognome *" value={fullName} onChange={(e) => setFullName(e.target.value)} className={inputClass} />
              <input aria-label="Nome attività" type="text" required placeholder="Nome attività *" value={companyName} onChange={(e) => setCompanyName(e.target.value)} className={inputClass} />
              <input aria-label="Telefono o WhatsApp" type="tel" required placeholder="Telefono / WhatsApp *" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
              <input aria-label="Email" type="email" required placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} />
            </div>

            <textarea
              aria-label="Note"
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Note o link alla tua scheda Google (facoltativo)"
              className={inputClass}
            />

            <button
              type="submit"
              className="w-full py-4 rounded-full font-bold text-white bg-ink hover:bg-ink-soft transition-colors flex items-center justify-center gap-2 text-base"
            >
              <Send className="w-4 h-4" />
              Invia richiesta d’ordine
            </button>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted">
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Risposta entro 1 ora</span>
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Reso 30 giorni</span>
              {WHATSAPP_ENABLED ? (
                <a
                  href={whatsappUrl(whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-[#128C4A] hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Preferisci WhatsApp?
                </a>
              ) : (
                <span aria-disabled="true" className="flex items-center gap-1.5 font-semibold text-muted/70 cursor-not-allowed select-none">
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp presto disponibile
                </span>
              )}
            </div>
          </form>
        ) : (
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-16 h-16 mx-auto rounded-full bg-success/10 text-success flex items-center justify-center">
              <Check className="w-8 h-8" strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-bold text-ink">Richiesta inviata!</h3>
            <p className="text-[15px] text-ink-soft max-w-md mx-auto">
              Grazie {fullName}, ti contatteremo a breve all’indirizzo <strong className="text-ink">{email}</strong> per confermare
              l’ordine per <strong className="text-ink">{companyName}</strong>.
            </p>
            <button onClick={handleReset} className="py-3 px-8 rounded-full font-bold text-white bg-ink hover:bg-ink-soft transition-colors">
              Torna al sito
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
