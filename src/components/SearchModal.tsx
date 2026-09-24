import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.division.toLowerCase().includes(q) ||
        p.fabrication.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-6 lg:p-12 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div
        className="w-full max-w-3xl bg-surface border border-outline/70 shadow-2xl overflow-hidden mt-12 sm:mt-16 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-5 border-b border-outline/50 bg-surface">
          <Search className="w-5 h-5 text-on-surface-variant shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH ARCHIVE, GSM, SILHOUETTE, DYE..."
            className="flex-1 bg-transparent font-mono text-[13px] tracking-wider uppercase text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="text-on-surface hover:opacity-60 transition-opacity p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular / Quick Filter Suggestions */}
        <div className="px-6 py-3 bg-surface-subtle border-b border-outline/30 flex items-center gap-2 overflow-x-auto no-scrollbar font-mono text-[10px] tracking-wider uppercase">
          <span className="text-on-surface-variant shrink-0">QUICK INDEX:</span>
          {['480 GSM', 'POLO', 'RINGER', 'OUTERWEAR', 'MANSOURA', 'BURGUNDY'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 bg-surface border border-outline/50 hover:border-on-surface text-on-surface transition-colors shrink-0 cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-6">
          {query.trim() === '' ? (
            <div className="py-8 text-center font-mono text-[12px] text-on-surface-variant">
              TYPE A QUERY TO EXPLORE THE OTRO CATALOG
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center">
              <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-widest block mb-2">
                0 RESULTS
              </span>
              <p className="font-syne text-xl font-bold uppercase text-on-surface">
                NO PIECES MATCH "{query.toUpperCase()}"
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-variant mb-2">
                <span>INDEX MATCHES</span>
                <span>{filtered.length} FOUND</span>
              </div>
              {filtered.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center gap-4 p-3 bg-surface-card border border-outline/40 hover:border-on-surface transition-colors cursor-pointer group"
                >
                  <div className="w-14 aspect-[3/4] bg-surface-subtle overflow-hidden shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">
                      {product.division} // {product.categoryLabel}
                    </span>
                    <h4 className="font-grotesk font-semibold text-[14px] uppercase text-on-surface">
                      {product.name}
                    </h4>
                    <span className="font-mono text-[11px] text-on-surface-variant">
                      {product.fabrication}
                    </span>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="font-mono font-bold text-[13px] text-on-surface">
                      ${product.price.toFixed(2)}
                    </p>
                    <span className="font-mono text-[10px] text-on-surface-variant flex items-center justify-end gap-1 mt-1 group-hover:text-on-surface">
                      SPEC <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
