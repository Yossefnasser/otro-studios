import React from 'react';
import { CHRONICLES, ChronicleLook } from '../data/products';
import { ArrowUpRight } from 'lucide-react';

interface LookbookSectionProps {
  onSelectChronicle: (chronicle: ChronicleLook) => void;
  onViewAllLookbook: () => void;
}

export const LookbookSection: React.FC<LookbookSectionProps> = ({
  onSelectChronicle,
  onViewAllLookbook,
}) => {
  return (
    <section className="max-w-[1560px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-8 sm:py-14 lg:py-16 border-b border-outline/50" id="lookbook">
      <div className="flex items-end justify-between mb-5 sm:mb-8 pb-3 border-b border-outline/40">
        <div>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-on-surface-variant block mb-0.5">
            [VISUAL CHRONICLE]
          </span>
          <h2 className="font-syne text-lg sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
            LOOKBOOK
          </h2>
        </div>
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <p className="font-serif italic text-sm text-on-surface-variant max-w-md hidden md:block">
            “Form shaped by discipline, movement rendered in heavy cottons.”
          </p>
          <button
            onClick={onViewAllLookbook}
            className="font-mono text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-on-surface hover:opacity-60 flex items-center gap-1 shrink-0 cursor-pointer py-1"
          >
            <span>VIEW ALL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Horizontal Editorial Masonry & Slide Track */}
      <div className="w-full overflow-x-auto no-scrollbar pb-6 -mx-4 px-4 sm:-mx-8 sm:px-8 xl:-mx-12 xl:px-12">
        <div className="flex gap-4 sm:gap-6 min-w-max">
          {CHRONICLES.map((chronicle) => (
            <div
              key={chronicle.id}
              onClick={() => onSelectChronicle(chronicle)}
              className="w-[260px] sm:w-[320px] lg:w-[380px] flex flex-col bg-surface-card border border-outline/50 group cursor-pointer hover:border-on-surface transition-colors"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-surface-subtle">
                <img
                  alt={chronicle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  src={chronicle.image}
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-surface/90 backdrop-blur-md px-3 py-1">
                  <span className="font-mono text-[10px] font-bold text-on-surface uppercase tracking-wider">
                    {chronicle.code}
                  </span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-1.5 bg-surface-card">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-[12px] uppercase text-on-surface tracking-wider line-clamp-1">
                    {chronicle.title}
                  </span>
                  <span className="font-mono text-[11px] text-on-surface-variant uppercase shrink-0">
                    {chronicle.fitTag}
                  </span>
                </div>
                <p className="font-grotesk text-[13px] text-on-surface-variant line-clamp-2">
                  {chronicle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
