import React from 'react';

export const TopBanner: React.FC = () => {
  return (
    <aside className="w-full bg-on-surface text-surface py-2 overflow-hidden z-50 border-b border-black/10 select-none">
      <div className="animate-marquee whitespace-nowrap font-mono text-[11px] tracking-[0.25em] uppercase font-bold flex items-center gap-6">
        <span className="flex items-center gap-8 shrink-0 pr-8">
          <span>20% OFF ON YOUR FIRST ORDER</span>
          <span>•</span>
          <span>20% OFF ON YOUR FIRST ORDER</span>
          <span>•</span>
          <span>20% OFF ON YOUR FIRST ORDER</span>
          <span>•</span>
          <span>20% OFF ON YOUR FIRST ORDER</span>
          <span>•</span>
        </span>
        <span className="flex items-center gap-8 shrink-0 pr-8">
          <span>20% OFF ON YOUR FIRST ORDER</span>
          <span>•</span>
          <span>20% OFF ON YOUR FIRST ORDER</span>
          <span>•</span>
          <span>20% OFF ON YOUR FIRST ORDER</span>
          <span>•</span>
          <span>20% OFF ON YOUR FIRST ORDER</span>
          <span>•</span>
        </span>
      </div>
    </aside>
  );
};
