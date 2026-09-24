import React from 'react';

export const TickerStrip: React.FC = () => {
  return (
    <div className="w-full bg-surface-subtle border-y border-outline/60 py-3.5 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap select-none font-mono text-[11px] tracking-[0.25em] uppercase text-on-surface-variant font-medium">
        <span className="flex items-center gap-10 shrink-0 pr-10">
          <span>HEAVYWEIGHT LOOPBACK COTTON 480 GSM</span>
          <span className="text-on-surface font-bold">✦</span>
          <span>CUSTOM BRANDED BRUSHED HARDWARE</span>
          <span className="text-on-surface font-bold">✦</span>
          <span>OVERSIZED ARCHITECTURAL TAILORING</span>
          <span className="text-on-surface font-bold">✦</span>
          <span>ACID PIGMENT GARMENT-DYED</span>
          <span className="text-on-surface font-bold">✦</span>
          <span>LIMITED ARCHIVE NUMERATION</span>
          <span className="text-on-surface font-bold">✦</span>
        </span>
        <span className="flex items-center gap-10 shrink-0 pr-10">
          <span>HEAVYWEIGHT LOOPBACK COTTON 480 GSM</span>
          <span className="text-on-surface font-bold">✦</span>
          <span>CUSTOM BRANDED BRUSHED HARDWARE</span>
          <span className="text-on-surface font-bold">✦</span>
          <span>OVERSIZED ARCHITECTURAL TAILORING</span>
          <span className="text-on-surface font-bold">✦</span>
          <span>ACID PIGMENT GARMENT-DYED</span>
          <span className="text-on-surface font-bold">✦</span>
          <span>LIMITED ARCHIVE NUMERATION</span>
          <span className="text-on-surface font-bold">✦</span>
        </span>
      </div>
    </div>
  );
};
