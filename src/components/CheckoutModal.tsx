import React, { useState } from 'react';
import { CartItem } from '../types/cart';
import { X, Check, ShieldCheck, Truck } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  promoCode: string;
  onOrderComplete: (orderNumber: string) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  promoCode,
  onOrderComplete,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: 'Joun Aaser',
    email: 'jounaaser@gmail.com',
    address: '14 Hassan Sabry St, Zamalek',
    city: 'Cairo',
    country: 'Egypt',
    postalCode: '11211',
    paymentMethod: 'card',
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<string | null>(null);

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const isDiscountApplied = promoCode.toUpperCase() === 'OTRO30';
  const discount = isDiscountApplied ? subtotal * 0.3 : 0;
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 25;
  const total = Math.max(0, subtotal - discount + shipping);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      const orderId = `OTRO-${Math.floor(100000 + Math.random() * 900000)}`;
      setIsProcessing(false);
      setCompletedOrder(orderId);
      onOrderComplete(orderId);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-surface border border-outline/70 shadow-2xl p-6 sm:p-10 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface hover:opacity-60 transition-opacity"
        >
          <X className="w-5 h-5" />
        </button>

        {completedOrder ? (
          <div className="text-center py-8 space-y-6">
            <div className="w-16 h-16 bg-on-surface text-surface rounded-none mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <span className="font-mono text-[11px] font-bold text-accent tracking-[0.25em] uppercase block mb-1">
                DISPATCH PROTOCOL AUTHORIZED
              </span>
              <h2 className="font-syne text-3xl font-extrabold uppercase text-on-surface">
                ORDER CONFIRMED
              </h2>
              <p className="font-mono text-sm text-on-surface mt-2 font-bold tracking-widest">
                REFERENCE: {completedOrder}
              </p>
            </div>

            <div className="bg-surface-subtle p-6 border border-outline/60 text-left font-mono text-[12px] space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-on-surface-variant">
                <span>DESTINATION:</span>
                <span className="text-on-surface">{formData.city}, {formData.country}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>RECIPIENT:</span>
                <span className="text-on-surface">{formData.fullName}</span>
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span>ESTIMATED DELIVERY:</span>
                <span className="text-on-surface font-bold">2-4 BUSINESS DAYS</span>
              </div>
              <div className="flex justify-between text-on-surface font-bold pt-2 border-t border-outline/40">
                <span>TOTAL SETTLED:</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            <p className="font-grotesk text-[13px] text-on-surface-variant max-w-sm mx-auto">
              A detailed packaging dispatch notification with cryptographic tracking was sent to {formData.email}.
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3.5 bg-on-surface text-surface font-mono text-[12px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
            >
              RETURN TO ATELIER
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6 pb-4 border-b border-outline/40">
              <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-[0.25em] block mb-1">
                [SECURE CHECKOUT CONDUIT]
              </span>
              <h2 className="font-syne text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
                ATELIER DISPATCH MANIFEST
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-[11px]">
                <div className="sm:col-span-2">
                  <label className="block uppercase text-on-surface-variant mb-1 font-bold">FULL NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-surface-subtle border border-outline/70 px-4 py-2.5 uppercase text-on-surface focus:outline-none focus:border-on-surface"
                  />
                </div>

                <div>
                  <label className="block uppercase text-on-surface-variant mb-1 font-bold">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-surface-subtle border border-outline/70 px-4 py-2.5 uppercase text-on-surface focus:outline-none focus:border-on-surface"
                  />
                </div>

                <div>
                  <label className="block uppercase text-on-surface-variant mb-1 font-bold">POSTAL CODE</label>
                  <input
                    type="text"
                    required
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full bg-surface-subtle border border-outline/70 px-4 py-2.5 uppercase text-on-surface focus:outline-none focus:border-on-surface"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block uppercase text-on-surface-variant mb-1 font-bold">STREET ADDRESS</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-surface-subtle border border-outline/70 px-4 py-2.5 uppercase text-on-surface focus:outline-none focus:border-on-surface"
                  />
                </div>

                <div>
                  <label className="block uppercase text-on-surface-variant mb-1 font-bold">CITY / DISTRICT</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-surface-subtle border border-outline/70 px-4 py-2.5 uppercase text-on-surface focus:outline-none focus:border-on-surface"
                  />
                </div>

                <div>
                  <label className="block uppercase text-on-surface-variant mb-1 font-bold">COUNTRY</label>
                  <input
                    type="text"
                    required
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full bg-surface-subtle border border-outline/70 px-4 py-2.5 uppercase text-on-surface focus:outline-none focus:border-on-surface"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block font-mono text-[11px] uppercase text-on-surface-variant mb-2 font-bold">
                  PAYMENT SETTLEMENT
                </label>
                <div className="grid grid-cols-2 gap-3 font-mono text-[11px]">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3 border text-left cursor-pointer transition-colors ${
                      formData.paymentMethod === 'card'
                        ? 'border-on-surface bg-surface-subtle font-bold'
                        : 'border-outline/50'
                    }`}
                  >
                    <span className="block font-bold">CREDIT / DEBIT</span>
                    <span className="text-[10px] text-on-surface-variant">Instant 256-bit Encrypted</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className={`p-3 border text-left cursor-pointer transition-colors ${
                      formData.paymentMethod === 'cod'
                        ? 'border-on-surface bg-surface-subtle font-bold'
                        : 'border-outline/50'
                    }`}
                  >
                    <span className="block font-bold">PAY ON DISPATCH</span>
                    <span className="text-[10px] text-on-surface-variant">Cairo & Mansoura Direct</span>
                  </button>
                </div>
              </div>

              {/* Order total recap */}
              <div className="bg-surface-subtle p-4 border border-outline/50 font-mono text-[11px] flex justify-between items-center">
                <span>TOTAL PAYABLE ({items.reduce((a, b) => a + b.quantity, 0)} ITEMS)</span>
                <span className="font-bold text-base text-on-surface tabular-nums">${total.toFixed(2)}</span>
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 bg-on-surface text-surface font-mono text-[12px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity cursor-pointer flex items-center justify-center gap-2"
              >
                {isProcessing ? 'AUTHORIZING DISPATCH...' : `AUTHORIZE SETTLEMENT ($${total.toFixed(2)})`}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
