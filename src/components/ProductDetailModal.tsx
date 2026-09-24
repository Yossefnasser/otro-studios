import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Heart, Check, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL', color: string) => void;
  onToggleWishlist: (product: Product) => void;
  isWishlisted: boolean;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onToggleWishlist,
  isWishlisted,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL'>('M');
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(product.image);
  const [justAdded, setJustAdded] = useState(false);

  const currentColor = product.colorNames[selectedColorIndex] || product.colors[selectedColorIndex] || 'Standard';

  const handleAdd = () => {
    onAddToCart(product, selectedSize, currentColor);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div
        className="relative w-full max-w-5xl bg-surface border border-outline/70 shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline/40 bg-surface">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] font-bold text-accent uppercase tracking-[0.2em]">
              [GARMENT SPECIFICATION]
            </span>
            <span className="font-mono text-[11px] text-on-surface-variant">
              ITEM ID // {product.id.toUpperCase()}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 flex items-center justify-center text-on-surface hover:opacity-60 transition-opacity"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Two-Column Architectural PDP */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 lg:p-10">
          {/* Left Column: Visual Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="relative aspect-[3/4] w-full bg-surface-subtle overflow-hidden border border-outline/40">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm font-mono text-[10px] font-bold px-3 py-1 uppercase tracking-widest text-on-surface">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnail switcher if secondary image exists */}
            {product.secondaryImage && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveImage(product.image)}
                  className={`w-20 aspect-[3/4] border overflow-hidden transition-all cursor-pointer ${
                    activeImage === product.image ? 'border-on-surface ring-1 ring-on-surface' : 'border-outline/50 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={product.image} alt="Front angle" className="w-full h-full object-cover" />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImage!)}
                  className={`w-20 aspect-[3/4] border overflow-hidden transition-all cursor-pointer ${
                    activeImage === product.secondaryImage ? 'border-on-surface ring-1 ring-on-surface' : 'border-outline/50 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={product.secondaryImage} alt="Alternate detail" className="w-full h-full object-cover" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Architectural Spec & Purchase Module */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-variant mb-2">
                <span>{product.division} // {product.categoryLabel}</span>
                <span className="font-bold text-accent">{product.statusLabel || 'LIMITED BATCH'}</span>
              </div>

              <h1 className="font-syne text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-on-surface mb-2">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-2xl font-bold text-on-surface tabular-nums">
                  ${product.price.toFixed(2)}
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant uppercase">
                  TAXES & IMPORT CHARGES INCLUDED
                </span>
              </div>

              <p className="font-grotesk text-[14px] text-on-surface-variant leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Color Selection */}
              {product.colors.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase mb-2.5">
                    <span className="text-on-surface-variant">COLOR MATRIX:</span>
                    <span className="font-bold text-on-surface">{currentColor}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColorIndex(idx)}
                        style={{ backgroundColor: color }}
                        className={`w-8 h-8 rounded-none border transition-all cursor-pointer ${
                          selectedColorIndex === idx
                            ? 'border-on-surface ring-2 ring-on-surface ring-offset-2 ring-offset-surface scale-110'
                            : 'border-black/20 opacity-80 hover:opacity-100'
                        }`}
                        title={product.colorNames[idx] || `Color ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection (Sharp 44px x 44px Boxes per Design System) */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-[11px] font-mono uppercase mb-2.5">
                  <span className="text-on-surface-variant">SIZE ARCHITECTURE:</span>
                  <span className="text-on-surface-variant underline cursor-pointer">
                    VIEW DIMENSIONS
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.measurements.map((m) => {
                    const isSelected = selectedSize === m.size;
                    return (
                      <button
                        key={m.size}
                        disabled={!m.inStock}
                        onClick={() => setSelectedSize(m.size)}
                        className={`w-[44px] h-[44px] border font-mono text-[12px] font-bold uppercase transition-all flex items-center justify-center cursor-pointer relative ${
                          !m.inStock
                            ? 'border-outline/40 text-on-surface-variant/40 bg-surface-subtle line-through cursor-not-allowed'
                            : isSelected
                            ? 'bg-on-surface text-surface border-on-surface'
                            : 'bg-surface text-on-surface border-outline/80 hover:border-on-surface'
                        }`}
                      >
                        {m.size}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Technical Spec Matrix Table */}
              <div className="bg-surface-subtle border border-outline/60 p-4 mb-6 text-[11px] font-mono">
                <div className="grid grid-cols-2 gap-3 pb-3 border-b border-outline/40">
                  <div>
                    <span className="text-on-surface-variant block uppercase text-[10px]">WEIGHT / DENSITY</span>
                    <span className="font-bold text-on-surface">{product.weightGsm} GSM</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block uppercase text-[10px]">HARDWARE</span>
                    <span className="font-bold text-on-surface">{product.hardware}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div>
                    <span className="text-on-surface-variant block uppercase text-[10px]">DYEING</span>
                    <span className="font-bold text-on-surface">{product.dyeing}</span>
                  </div>
                  <div>
                    <span className="text-on-surface-variant block uppercase text-[10px]">CRAFT ATELIER</span>
                    <span className="font-bold text-on-surface">{product.origin}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex items-center gap-3 pt-4 border-t border-outline/40">
              <button
                onClick={handleAdd}
                disabled={justAdded}
                className={`flex-1 py-4 font-mono text-[12px] font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  justAdded
                    ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                    : 'bg-on-surface text-surface hover:opacity-90'
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO BAG — [{selectedSize}]</span>
                  </>
                ) : (
                  <span>ADD TO BAG — [{selectedSize}]</span>
                )}
              </button>

              <button
                onClick={() => onToggleWishlist(product)}
                aria-label="Save to Wishlist"
                className={`w-[52px] h-[52px] border flex items-center justify-center transition-all cursor-pointer ${
                  isWishlisted
                    ? 'border-accent bg-accent text-white'
                    : 'border-outline/70 bg-surface text-on-surface hover:border-on-surface'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
