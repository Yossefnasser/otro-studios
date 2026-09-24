import React from 'react';
import { ChronicleLook, Product } from '../data/products';
import { X, ArrowRight } from 'lucide-react';

interface LookbookModalProps {
  chronicle: ChronicleLook | null;
  onClose: () => void;
  onShopPiece: (productName: string) => void;
}

export const LookbookModal: React.FC<LookbookModalProps> = ({
  chronicle,
  onClose,
  onShopPiece,
}) => {
  if (!chronicle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-surface border border-outline/70 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline/40">
          <span className="font-mono text-[11px] font-bold text-accent uppercase tracking-[0.2em]">
            {chronicle.code}
          </span>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-on-surface hover:opacity-60 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8">
          <div className="md:col-span-6 relative aspect-[3/4] bg-surface-subtle overflow-hidden border border-outline/40">
            <img
              src={chronicle.image}
              alt={chronicle.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:col-span-6 flex flex-col justify-between py-2">
            <div>
              <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest block mb-1">
                FIT CLASSIFICATION // {chronicle.fitTag}
              </span>
              <h2 className="font-syne text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-on-surface mb-4">
                {chronicle.title}
              </h2>

              {chronicle.quote && (
                <p className="font-serif italic text-lg text-on-surface mb-6 border-l-2 border-on-surface pl-4">
                  {chronicle.quote}
                </p>
              )}

              <p className="font-grotesk text-[14px] text-on-surface-variant leading-relaxed mb-6">
                {chronicle.description}
              </p>

              <div className="bg-surface-subtle p-4 border border-outline/50 font-mono text-[11px] space-y-2 mb-6">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">MODEL SPECS:</span>
                  <span className="font-bold text-on-surface">{chronicle.details.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">LOOK ENSEMBLE:</span>
                  <span className="font-bold text-on-surface">{chronicle.details.wearing}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant">FABRIC DENSITY:</span>
                  <span className="font-bold text-on-surface">{chronicle.details.fabric}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onShopPiece(chronicle.title)}
              className="w-full py-4 bg-on-surface text-surface font-mono text-[12px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>SHOP THIS SILHOUETTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
