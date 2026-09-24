import React from 'react';
import { CHRONICLES, ChronicleLook } from '../data/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface LookbookViewProps {
  onBackToHome: () => void;
  onSelectChronicle: (chronicle: ChronicleLook) => void;
  onShopLook: (lookTitle: string) => void;
}

export const LookbookView: React.FC<LookbookViewProps> = ({
  onBackToHome,
  onSelectChronicle,
  onShopLook,
}) => {
  return (
    <div className="max-w-[1560px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-6 sm:py-10">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-5 sm:mb-8 pb-3 border-b border-outline/40">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-on-surface hover:opacity-60 transition-opacity cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO ATELIER</span>
        </button>
        <span className="font-mono text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-widest">
          SEASON 04 // ARCHIVE
        </span>
      </div>

      {/* Screen Title & Manifesto */}
      <div className="max-w-3xl mb-8 sm:mb-14">
        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-on-surface-variant block mb-1.5">
          [VISUAL CHRONICLE COMPENDIUM]
        </span>
        <h1 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-on-surface mb-3 sm:mb-5">
          DISCIPLINE OVER TRENDS
        </h1>
        <p className="font-serif italic text-sm sm:text-lg text-on-surface-variant leading-relaxed">
          “Form shaped by discipline, movement rendered in heavy textured cottons. We document garments as spatial volumes that reject ephemeral trend cycles in favor of permanent architectural weight.”
        </p>
      </div>

      {/* Editorial Chapter Stream (Alternating Asymmetric Layouts) */}
      <div className="space-y-12 sm:space-y-20">
        {CHRONICLES.map((chronicle, index) => {
          const isEven = index % 2 === 0;
          return (
            <article
              key={chronicle.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center border-b border-outline/40 pb-20 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                <div
                  onClick={() => onSelectChronicle(chronicle)}
                  className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[16/11] bg-surface-subtle overflow-hidden border border-outline/60 group cursor-pointer"
                >
                  <img
                    src={chronicle.image}
                    alt={chronicle.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 font-mono text-[11px] font-bold text-on-surface">
                    {chronicle.code}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-5 flex flex-col justify-between ${isEven ? '' : 'lg:order-1'}`}>
                <div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-accent uppercase font-bold tracking-wider mb-2">
                    <span>{chronicle.fitTag}</span>
                    <span>•</span>
                    <span className="text-on-surface-variant">ARCHIVAL RECORD</span>
                  </div>

                  <h2 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-on-surface mb-4">
                    {chronicle.title}
                  </h2>

                  {chronicle.quote && (
                    <blockquote className="font-serif italic text-lg text-on-surface mb-6 border-l-2 border-on-surface pl-4">
                      {chronicle.quote}
                    </blockquote>
                  )}

                  <p className="font-grotesk text-[15px] text-on-surface-variant leading-relaxed mb-8">
                    {chronicle.description}
                  </p>

                  <div className="bg-surface-subtle p-5 border border-outline/50 font-mono text-[11px] space-y-2 mb-8">
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">MODEL HEIGHT:</span>
                      <span className="font-bold text-on-surface">{chronicle.details.model}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">ENSEMBLE:</span>
                      <span className="font-bold text-on-surface">{chronicle.details.wearing}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-on-surface-variant">FABRICATION:</span>
                      <span className="font-bold text-on-surface">{chronicle.details.fabric}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={() => onShopLook(chronicle.title)}
                    className="px-8 py-4 bg-on-surface text-surface font-mono text-[12px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity flex items-center gap-3 cursor-pointer"
                  >
                    <span>ACQUIRE SILHOUETTE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onSelectChronicle(chronicle)}
                    className="px-6 py-4 border border-outline/80 hover:border-on-surface font-mono text-[12px] uppercase tracking-wider text-on-surface cursor-pointer"
                  >
                    EXPAND
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};
