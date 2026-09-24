import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const SpecsAndDispatch: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="max-w-[1560px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-8 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
      {/* Tech Specs Box */}
      <div className="lg:col-span-6 bg-surface-subtle border border-outline/70 p-4 sm:p-8 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4 sm:mb-6 pb-2.5 sm:pb-3 border-b border-outline/50">
            <span className="font-mono text-[9px] sm:text-[10px] font-bold text-on-surface uppercase tracking-[0.2em]">
              [GARMENT ARCHITECTURE]
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-on-surface-variant uppercase">
              ATELIER SPEC SHEET
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
            <div>
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                FABRICATION DENSITY
              </span>
              <p className="font-mono font-bold text-[13px] text-on-surface">
                480 GSM COMBED LOOPBACK
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                HARDWARE DETAIL
              </span>
              <p className="font-mono font-bold text-[13px] text-on-surface">
                BRUSHED GUNMETAL RIVETS
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                DYEING TREATMENT
              </span>
              <p className="font-mono font-bold text-[13px] text-on-surface">
                ACID MINERAL PIGMENT WASH
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block mb-1">
                CRAFT ORIGIN
              </span>
              <p className="font-mono font-bold text-[13px] text-on-surface">
                MANSOURA DESIGN LAB
              </p>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-6 border-t border-outline/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-on-surface-variant font-mono text-[11px]">
          <span>ALL PATTERNS DEVELOPED IN-HOUSE</span>
          <span className="text-on-surface font-bold">100% ETHICAL TEXTILES</span>
        </div>
      </div>

      {/* Atelier Dispatch Newsletter */}
      <div className="lg:col-span-6 bg-on-surface text-surface p-4 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping"></span>
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-surface/80">
              PRIVATE ATELIER DISPATCH
            </span>
          </div>
          <h2 className="font-syne text-xl sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-surface mb-2 sm:mb-3">
            JOIN THE ATELIER
          </h2>
          <p className="font-grotesk text-[14px] text-surface/75 leading-relaxed max-w-lg mb-6">
            Gain direct allocation priority for unreleased physical capsules, invitations to private showroom fittings, and archival drop passwords.
          </p>
        </div>

        {submitted ? (
          <div className="p-4 bg-surface/10 border border-surface/20 flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5" />
            </div>
            <div>
              <p className="font-mono text-[12px] font-bold text-surface uppercase tracking-wider">
                ALLOCATION CONFIRMED
              </p>
              <p className="font-grotesk text-[12px] text-surface/70">
                You have been added to the Mansoura & Cairo private allocation manifest.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ENTER YOUR EMAIL ADDRESS"
              required
              className="flex-1 bg-surface/10 border border-surface/20 px-5 py-3.5 font-mono text-[12px] uppercase text-surface placeholder:text-surface/40 focus:outline-none focus:border-surface"
            />
            <button
              type="submit"
              className="py-3.5 px-8 bg-surface text-on-surface font-mono text-[12px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all shrink-0 cursor-pointer"
            >
              REQUEST ACCESS
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
