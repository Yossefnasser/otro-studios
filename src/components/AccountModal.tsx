import React, { useState } from 'react';
import { X, User, Package, Shield, Mail, Check } from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  completedOrders: string[];
}

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  completedOrders,
}) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'concierge'>('profile');
  const [conciergeMsg, setConciergeMsg] = useState('');
  const [msgSent, setMsgSent] = useState(false);

  if (!isOpen) return null;

  const handleSendConcierge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!conciergeMsg) return;
    setMsgSent(true);
    setTimeout(() => {
      setConciergeMsg('');
      setMsgSent(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="w-full max-w-2xl bg-surface border border-outline/70 shadow-2xl p-6 sm:p-8 my-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-outline/40">
          <div>
            <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-[0.2em] block mb-1">
              [ATELIER CLIENTELLE]
            </span>
            <h2 className="font-syne text-2xl font-extrabold uppercase text-on-surface">
              CLIENT CONCIERGE & ALLOCATIONS
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface hover:opacity-60 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 border-b border-outline/40 my-4">
          <button
            onClick={() => setActiveTab('profile')}
            className={`font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 px-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'profile'
                ? 'border-on-surface text-on-surface'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            MEMBER PROFILE
          </button>
          <button
            onClick={() => setActiveTab('orders')}
            className={`font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 px-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'orders'
                ? 'border-on-surface text-on-surface'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            ALLOCATIONS ({completedOrders.length + 1})
          </button>
          <button
            onClick={() => setActiveTab('concierge')}
            className={`font-mono text-[11px] font-bold uppercase tracking-wider py-2.5 px-3 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'concierge'
                ? 'border-on-surface text-on-surface'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            CONTACT CONCIERGE
          </button>
        </div>

        {/* Tab Content */}
        <div className="py-2">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <div className="bg-surface-subtle p-5 border border-outline/50 space-y-3 font-mono text-[12px]">
                <div className="flex justify-between items-center pb-2 border-b border-outline/30">
                  <span className="text-on-surface-variant">CLIENT IDENTIFIER:</span>
                  <span className="font-bold text-on-surface">OTRO-VIP-8194</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-outline/30">
                  <span className="text-on-surface-variant">ALLOCATION STATUS:</span>
                  <span className="bg-on-surface text-surface px-2 py-0.5 text-[10px] font-bold uppercase">
                    TIER 01 // ARCHIVE PRIORITY
                  </span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-outline/30">
                  <span className="text-on-surface-variant">ATELIER REGION:</span>
                  <span className="text-on-surface">CAIRO / ZAMALEK</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-on-surface-variant">NEXT DROP PASSWORD:</span>
                  <span className="font-bold text-accent">PERMANENT ACCESS</span>
                </div>
              </div>

              <div className="p-4 border border-outline/40 flex items-start gap-3">
                <Shield className="w-5 h-5 text-on-surface shrink-0 mt-0.5" />
                <div className="text-[13px] font-grotesk text-on-surface-variant">
                  <span className="font-bold text-on-surface block font-mono text-[11px]">
                    ETHICAL PRODUCTION PLEDGE
                  </span>
                  All purchases are logged on the physical ledger at our Mansoura Design Lab, guaranteeing lifetime repair and fabric preservation.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="space-y-3 max-h-[340px] overflow-y-auto">
              <div className="bg-surface-subtle p-4 border border-outline/50 font-mono text-[11px] space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-on-surface">ORDER // OTRO-810492</span>
                  <span className="text-emerald-600 font-bold">PREPARING DISPATCH</span>
                </div>
                <p className="text-on-surface-variant">Barden State Polo (M) + Madrid Ringer Tee (L)</p>
                <div className="flex justify-between text-on-surface-variant pt-2 border-t border-outline/30">
                  <span>DISPATCH: CAIRO HUB</span>
                  <span className="font-bold text-on-surface">$210.00</span>
                </div>
              </div>

              {completedOrders.map((ord, idx) => (
                <div key={idx} className="bg-surface-card p-4 border border-outline/50 font-mono text-[11px] space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-on-surface">ORDER // {ord}</span>
                    <span className="text-on-surface-variant font-bold">RECENTLY SUBMITTED</span>
                  </div>
                  <p className="text-on-surface-variant">Standard Atelier Allocation</p>
                  <div className="flex justify-between text-on-surface-variant pt-2 border-t border-outline/30">
                    <span>COURIER ASSIGNED</span>
                    <span className="font-bold text-on-surface">VERIFIED</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'concierge' && (
            <form onSubmit={handleSendConcierge} className="space-y-4 font-mono text-[11px]">
              <div>
                <label className="block uppercase text-on-surface-variant mb-1 font-bold">
                  DIRECT CONCIERGE INQUIRY (CUSTOM SIZING / BESPOKE REQUESTS)
                </label>
                <textarea
                  rows={4}
                  required
                  value={conciergeMsg}
                  onChange={(e) => setConciergeMsg(e.target.value)}
                  placeholder="Describe desired measurements, archived piece acquisition, or physical fitting booking at Cairo/Mansoura..."
                  className="w-full bg-surface-subtle border border-outline/70 p-3 text-on-surface focus:outline-none focus:border-on-surface uppercase"
                />
              </div>

              {msgSent ? (
                <div className="p-3 bg-emerald-50 text-emerald-800 border border-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span>TRANSMISSION RECEIVED. ATELIER MANAGER WILL REPLY SHORTLY.</span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3.5 bg-on-surface text-surface font-mono text-[11px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer"
                >
                  DISPATCH CONCIERGE TICKET
                </button>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
