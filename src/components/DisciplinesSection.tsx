import React from 'react';
import { CATEGORIES } from '../data/products';

interface DisciplinesSectionProps {
  onSelectCategory: (division: 'T-SHIRTS' | 'SHIRTS & POLOS' | 'BOTTOMS' | 'OUTERWEAR') => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section className="max-w-[1560px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-8 sm:py-14 border-b border-outline/50" id="collections">
      <div className="flex items-end justify-between mb-5 sm:mb-8 pb-3 border-b border-outline/40">
        <div>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-on-surface-variant block mb-0.5">
            [CATEGORIES]
          </span>
          <h2 className="font-syne text-lg sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
            DISCIPLINES
          </h2>
        </div>
        <span className="font-mono text-[9px] sm:text-[10px] text-on-surface-variant uppercase tracking-widest">
          [04 CORE DIVISIONS]
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.division as 'T-SHIRTS' | 'SHIRTS & POLOS' | 'BOTTOMS' | 'OUTERWEAR')}
            className="group relative aspect-[3/4] bg-surface-subtle overflow-hidden flex flex-col justify-end p-6 border border-outline/40 hover:border-on-surface transition-colors text-left cursor-pointer"
          >
            <img
              alt={cat.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              src={cat.image}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
            <div className="relative z-10">
              <span className="font-mono text-[10px] text-white/80 uppercase tracking-widest block mb-1">
                {cat.code}
              </span>
              <h3 className="font-syne text-2xl font-bold uppercase text-white group-hover:translate-x-1 transition-transform">
                {cat.title}
              </h3>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};
