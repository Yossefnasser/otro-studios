import React, { useState } from 'react';
import { CartItem } from '../types/cart';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Check } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  promoCode: string;
  onApplyPromo: (code: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  promoCode,
  onApplyPromo,
  onProceedToCheckout,
}) => {
  const [promoInput, setPromoInput] = useState(promoCode || '');
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isDiscountApplied = promoCode.toUpperCase() === 'OTRO30';
  const discountAmount = isDiscountApplied ? subtotal * 0.3 : 0;
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 25;
  const finalTotal = Math.max(0, subtotal - discountAmount + shipping);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === 'OTRO30') {
      onApplyPromo('OTRO30');
      setPromoError('');
    } else {
      setPromoError('INVALID ARCHIVE CODE (TRY "OTRO30")');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs">
      <div
        className="w-full max-w-md md:max-w-lg bg-surface h-full flex flex-col border-l border-outline/70 shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-outline/50 bg-surface">
          <div className="flex items-center gap-3">
            <span className="font-syne text-xl font-bold uppercase tracking-wider text-on-surface">
              SHOPPING BAG
            </span>
            <span className="font-mono text-[11px] bg-on-surface text-surface px-2 py-0.5 font-bold">
              {items.reduce((acc, i) => acc + i.quantity, 0)} ITEMS
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Bag"
            className="w-8 h-8 flex items-center justify-center text-on-surface hover:opacity-60 transition-opacity cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Banner */}
        <div className="bg-surface-subtle px-6 py-2.5 border-b border-outline/40 font-mono text-[11px] flex items-center justify-between">
          <span className="text-on-surface-variant">
            {subtotal >= 150 ? 'COMPLIMENTARY ARCHIVE DISPATCH' : `ADD $${(150 - subtotal).toFixed(2)} FOR FREE GLOBAL SHIPPING`}
          </span>
          <span className="font-bold text-on-surface">{subtotal >= 150 ? 'QUALIFIED' : 'TIER 01'}</span>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-2">
                BAG IS EMPTY
              </span>
              <p className="font-syne text-2xl font-extrabold uppercase text-on-surface mb-6">
                NO PIECES ALLOCATED
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-on-surface text-surface font-mono text-[11px] font-bold uppercase tracking-widest hover:opacity-90"
              >
                EXPLORE CATALOG
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-surface-card border border-outline/40 relative group"
              >
                <div className="w-20 sm:w-24 aspect-[3/4] bg-surface-subtle overflow-hidden shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                        {item.product.categoryLabel}
                      </span>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-on-surface-variant hover:text-accent p-1 transition-colors"
                        title="Remove piece"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="font-grotesk font-semibold text-[14px] uppercase text-on-surface">
                      {item.product.name}
                    </h4>

                    <div className="flex items-center gap-2 mt-1 text-[11px] font-mono text-on-surface-variant">
                      <span>SIZE: {item.selectedSize}</span>
                      <span>•</span>
                      <span>{item.selectedColor}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-outline/30 mt-3">
                    <div className="flex items-center border border-outline/70">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-surface-subtle text-on-surface"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-8 text-center font-mono text-[11px] font-bold tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 flex items-center justify-center hover:bg-surface-subtle text-on-surface"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <span className="font-mono font-bold text-[13px] text-on-surface tabular-nums">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer / Totals & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-outline/60 bg-surface space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApply} className="flex gap-2">
              <input
                type="text"
                value={promoInput}
                onChange={(e) => {
                  setPromoInput(e.target.value.toUpperCase());
                  setPromoError('');
                }}
                placeholder="PROMO CODE (OTRO30)"
                className="flex-1 bg-surface-subtle border border-outline/70 px-3.5 py-2 font-mono text-[11px] tracking-wider uppercase text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-on-surface"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-on-surface text-surface font-mono text-[11px] font-bold uppercase tracking-wider hover:opacity-90 shrink-0 cursor-pointer"
              >
                APPLY
              </button>
            </form>

            {promoError && (
              <p className="font-mono text-[10px] text-accent font-bold">{promoError}</p>
            )}

            {isDiscountApplied && (
              <div className="flex items-center justify-between text-[11px] font-mono text-emerald-600 font-bold">
                <span className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" /> ARCHIVE REDUCTION (30%)
                </span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 pt-2 border-t border-outline/40 font-mono text-[12px]">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span>SUBTOTAL</span>
                <span className="text-on-surface font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant">
                <span>DISPATCH / FREIGHT</span>
                <span className="text-on-surface font-medium">
                  {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex items-center justify-between text-on-surface font-bold text-[15px] pt-2 border-t border-outline/40">
                <span>TOTAL ESTIMATE</span>
                <span className="tabular-nums">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={onProceedToCheckout}
              className="w-full py-4 bg-on-surface text-surface font-mono text-[12px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>SECURE CHECKOUT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
