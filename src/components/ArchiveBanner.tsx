import React, { useState } from 'react';
import { ArrowRight, Copy, Check } from 'lucide-react';

interface ArchiveBannerProps {
  onApplyPromo: (code: string) => void;
  onExploreArchive: () => void;
}

export const ArchiveBanner: React.FC<ArchiveBannerProps> = ({
  onApplyPromo,
  onExploreArchive,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard?.writeText('OTRO30');
    setCopied(true);
    onApplyPromo('OTRO30');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-[1560px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-8 sm:py-12" id="archive">
      <div className="bg-surface-subtle border border-outline/60 flex flex-col lg:flex-row items-stretch overflow-hidden">
        {/* Left Editorial Visual */}
        <div className="lg:w-1/2 relative min-h-[300px] sm:min-h-[440px] xl:min-h-[500px]">
          <img
            alt="Mid-Season Archive Silhouette"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC9Xah5SW9u5G7vhnsmGm0uSs5j77EbGcHGlrxbLsNDJAfB3KkSZsn_gJjWJRlvOPbf2MARMqFNXCU4YchJAUGcTUgAr2JMGFgVWeU4cq_Hg0Er7v3Qv6_B_OiNNx_rbjFAjjl2mBozeSL92KChWIqYqdI15EFtu6y6r2I8srde2Ak1bPOVBc3NKAJlvKdJ3taXeGLj8mBlnJ7vQujUKhuXYIzOQT24RQQt7415NAuYy41P-zD6caoz3LAYrbHkS_D"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:hidden"></div>
        </div>

        {/* Right Editorial Copy & Allocation */}
        <div className="lg:w-1/2 p-4 sm:p-8 lg:p-12 xl:p-14 flex flex-col justify-between bg-surface-subtle">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
                [ARCHIVE ACCESS]
              </span>
              <span className="text-on-surface-variant font-mono text-[9px] sm:text-[10px]">•</span>
              <span className="font-mono text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-wider">
                72 HOURS PREVIEW
              </span>
            </div>

            <h2 className="font-syne text-xl sm:text-2xl xl:text-3xl font-extrabold uppercase tracking-tight text-on-surface mb-2.5 sm:mb-3">
              MID-SEASON ARCHIVE
            </h2>

            <p className="font-grotesk text-[14px] sm:text-[15px] xl:text-[16px] text-on-surface-variant max-w-xl leading-relaxed mb-6 sm:mb-8">
              Acquire past season samples, experimental cuts, and archived silhouettes at preferential pricing before vaulting. Hand-selected loopback cottons and structured workwear coats.
            </p>

            {/* Interactive Promo Module */}
            <div
              onClick={handleCopyCode}
              className="bg-surface border border-outline/80 p-3.5 sm:p-4 max-w-md flex items-center justify-between mb-6 sm:mb-8 cursor-pointer hover:border-on-surface transition-colors group"
              title="Click to copy and apply discount"
            >
              <div>
                <span className="font-mono text-[9px] sm:text-[10px] text-on-surface-variant block uppercase tracking-wider">
                  EXCLUSIVE PROMO CODE
                </span>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="font-mono text-sm sm:text-base font-bold text-on-surface tracking-[0.2em]">
                    OTRO30
                  </span>
                  {copied ? (
                    <span className="font-mono text-[10px] text-emerald-600 flex items-center gap-1 font-bold">
                      <Check className="w-3 h-3" /> APPLIED
                    </span>
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-on-surface-variant group-hover:text-on-surface transition-colors" />
                  )}
                </div>
              </div>
              <span className="font-mono font-bold text-[11px] sm:text-[12px] bg-on-surface text-surface px-2.5 sm:px-3 py-1 sm:py-1.5 uppercase tracking-wider shrink-0">
                30% REDUCTION
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onExploreArchive}
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-on-surface text-surface font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>EXPLORE ARCHIVE VAULT</span>
              <ArrowRight className="w-[15px] h-[15px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
