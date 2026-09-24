import React from 'react';
import { ActiveScreen } from '../types/cart';

interface FooterProps {
  onNavigate: (screen: ActiveScreen) => void;
  onOpenConcierge: () => void;
  onOpenSizeGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConcierge,
  onOpenSizeGuide,
}) => {
  return (
    <footer className="w-full bg-surface-subtle border-t border-outline/70 pt-16 pb-12 mt-12 text-on-surface">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-8 xl:px-12">
        {/* Footer Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-outline/60">
          {/* Brand Philosophy Column */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex flex-col mb-4">
                <span className="font-syne font-black text-2xl tracking-[0.35em] text-on-surface uppercase">
                  OTRO
                </span>
                <span className="font-mono text-[9px] font-bold tracking-[0.6em] text-on-surface-variant uppercase">
                  STUDIOS
                </span>
              </div>
              <p className="font-grotesk text-[14px] text-on-surface-variant max-w-sm leading-relaxed mb-6">
                Independent streetwear atelier investigating contemporary proportions, functional silhouettes, and refined heavy textiles.
              </p>
            </div>
            <div className="font-mono text-[11px] text-on-surface-variant">
              <span>DISCIPLINE OVER TRENDS</span>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {/* Col 1: Explore */}
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface mb-4">
                EXPLORE
              </h4>
              <ul className="space-y-2.5 font-mono text-[12px] text-on-surface-variant">
                <li>
                  <button
                    onClick={() => onNavigate('collections')}
                    className="hover:text-on-surface transition-colors cursor-pointer text-left"
                  >
                    ALL COLLECTIONS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('home');
                      document.getElementById('new-arrivals')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-on-surface transition-colors cursor-pointer text-left"
                  >
                    NEW ARRIVALS
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onNavigate('lookbook')}
                    className="hover:text-on-surface transition-colors cursor-pointer text-left"
                  >
                    LOOKBOOK
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      onNavigate('home');
                      document.getElementById('archive')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-on-surface transition-colors cursor-pointer text-left"
                  >
                    ARCHIVE VAULT
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 2: Spaces */}
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface mb-4">
                PHYSICAL SPACES
              </h4>
              <ul className="space-y-3 font-mono text-[12px]">
                <li>
                  <span className="block text-on-surface font-bold">CAIRO ATELIER</span>
                  <span className="text-[11px] text-on-surface-variant">ZAMALEK DISTRICT</span>
                </li>
                <li>
                  <span className="block text-on-surface font-bold">MANSOURA LAB</span>
                  <span className="text-[11px] text-on-surface-variant">FLAGSHIP DESIGN HUB</span>
                </li>
              </ul>
            </div>

            {/* Col 3: Client Care */}
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface mb-4">
                CLIENT CARE
              </h4>
              <ul className="space-y-2.5 font-mono text-[12px] text-on-surface-variant">
                <li>
                  <button onClick={onOpenConcierge} className="hover:text-on-surface transition-colors text-left">
                    SHIPPING & CUSTOMS
                  </button>
                </li>
                <li>
                  <button onClick={onOpenConcierge} className="hover:text-on-surface transition-colors text-left">
                    EXCHANGE PROTOCOL
                  </button>
                </li>
                <li>
                  <button onClick={onOpenSizeGuide} className="hover:text-on-surface transition-colors text-left">
                    SIZE ARCHITECTURE
                  </button>
                </li>
                <li>
                  <button onClick={onOpenConcierge} className="hover:text-on-surface transition-colors text-left">
                    CONTACT CONCIERGE
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 4: Community */}
            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-on-surface mb-4">
                COMMUNITY
              </h4>
              <ul className="space-y-2.5 font-mono text-[12px] text-on-surface-variant">
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-on-surface transition-colors flex items-center justify-between"
                  >
                    INSTAGRAM <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://telegram.org"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-on-surface transition-colors flex items-center justify-between"
                  >
                    TELEGRAM <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-on-surface transition-colors flex items-center justify-between"
                  >
                    TIKTOK <span>↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-on-surface transition-colors flex items-center justify-between"
                  >
                    SPOTIFY <span>↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-on-surface-variant">
          <div>
            <span>OTRO STUDIOS © 2025. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onOpenConcierge} className="hover:text-on-surface transition-colors cursor-pointer">
              TERMS OF SALE
            </button>
            <span>/</span>
            <button onClick={onOpenConcierge} className="hover:text-on-surface transition-colors cursor-pointer">
              PRIVACY POLICY
            </button>
            <span>/</span>
            <span className="font-bold text-on-surface">ENGLISH (US)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
