import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Truck, Sparkles } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartId: string, newQty: number) => void;
  onRemoveItem: (cartId: string) => void;
  onProceedToCheckout: (appliedDiscount: number, discountCode: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const freeShippingThreshold = 49;
  const shippingFee = subtotal >= freeShippingThreshold || cartItems.length === 0 ? 0 : 4.90;
  const finalTotal = subtotal - discountAmount + shippingFee;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'WELCOME10') {
      setAppliedDiscount(10);
      setCouponMessage('✓ Codice WELCOME10 applicato! (-10% di sconto)');
    } else {
      setCouponMessage('❌ Codice sconto non valido. Prova WELCOME10');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity animate-in fade-in"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col justify-between text-slate-100">
          
          {/* Header */}
          <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-950">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-blue-400" />
              <h3 className="text-lg font-bold text-white font-display">Il Tuo Carrello ({cartItems.length})</h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Bar */}
          <div className="bg-slate-950 border-b border-slate-800/80 px-6 py-2.5 text-xs text-slate-300">
            {subtotal >= freeShippingThreshold ? (
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Truck className="w-4 h-4" />
                <span>Complimenti! Hai diritto alla <strong>Spedizione Gratuita 24/48h</strong>.</span>
              </div>
            ) : (
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span>Aggiungi ancora <strong>{(freeShippingThreshold - subtotal).toFixed(2)}€</strong> per la spedizione gratis</span>
                  <span>49.00€</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-white">Il carrello è vuoto</h4>
                  <p className="text-xs text-slate-400">Scegli un espositore o una card NFC dal nostro catalogo.</p>
                </div>
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500"
                >
                  Sfoglia il Catalogo
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.cartId}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3 relative group"
                >
                  <div className="flex gap-3">
                    <img
                      src={item.product.images[item.selectedOption.id] || item.product.images.default}
                      alt={item.product.title}
                      className="w-16 h-16 rounded-lg object-cover border border-slate-800 shrink-0"
                    />
                    <div className="flex-1 min-w-0 space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-xs font-bold text-white truncate">{item.product.title}</h4>
                        <button
                          onClick={() => onRemoveItem(item.cartId)}
                          className="text-slate-500 hover:text-red-400 p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-slate-400">
                        Opzione: <strong className="text-slate-200">{item.selectedOption.name}</strong>
                      </div>

                      {item.businessName && item.businessName !== 'Nessun nome specificato (richiedi dopo)' && (
                        <div className="text-[10px] text-blue-400 font-mono truncate">
                          Attività: {item.businessName}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-bold text-white font-mono">
                          {item.totalPrice.toFixed(2)}€
                        </span>
                        <span className="text-[11px] text-slate-400">
                          {item.quantityTier.quantity}x pz ({item.unitPrice.toFixed(2)}€/cad)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-slate-800 bg-slate-950 space-y-4">
              
              {/* Promo Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="space-y-1">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Codice Sconto (es. WELCOME10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 pl-8 text-xs text-white uppercase focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <Tag className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-2.5" />
                  </div>
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200"
                  >
                    Applica
                  </button>
                </div>
                {couponMessage && (
                  <p className={`text-[10px] ${couponMessage.startsWith('✓') ? 'text-emerald-400' : 'text-red-400'}`}>
                    {couponMessage}
                  </p>
                )}
              </form>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Subtotale Prodotti</span>
                  <span>{subtotal.toFixed(2)}€</span>
                </div>

                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Sconto Promo ({appliedDiscount}%)</span>
                    <span>-{discountAmount.toFixed(2)}€</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span className="text-slate-400">Spedizione Espressa 24/48h</span>
                  <span>{shippingFee === 0 ? <strong className="text-emerald-400">GRATIS</strong> : `${shippingFee.toFixed(2)}€`}</span>
                </div>

                <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-slate-800 font-display">
                  <span>Totale Ordine</span>
                  <span className="text-blue-400">{finalTotal.toFixed(2)}€</span>
                </div>
              </div>

              {/* Proceed to Checkout CTA */}
              <button
                onClick={() => onProceedToCheckout(appliedDiscount, couponCode)}
                className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 text-sm"
              >
                <span>Procedi alla Cassa</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-[10px] text-slate-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Pagamento Sicuro SSL · Spedizione SDA / DHL · Reso 30 Giorni</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
