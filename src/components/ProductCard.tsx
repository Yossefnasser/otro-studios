import React, { useState } from 'react';
import { Product } from '../data/products';
import { Heart, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  isWishlisted: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  isWishlisted,
}) => {
  const [justAdded, setJustAdded] = useState(false);

  const handleQuickAddClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onQuickAdd(product, e);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleWishlist(product, e);
  };

  return (
    <article
      onClick={() => onSelectProduct(product)}
      className="group flex flex-col bg-surface-card border border-outline/40 overflow-hidden hover:border-on-surface transition-colors duration-300 cursor-pointer"
    >
      <div className="relative w-full aspect-[3/4] bg-surface-subtle overflow-hidden">
        <img
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          src={product.image}
          loading="lazy"
        />

        {/* Top Left Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 font-mono text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest ${
              product.badge === 'FEW LEFT'
                ? 'bg-accent text-white'
                : 'bg-surface/90 backdrop-blur-sm text-on-surface'
            }`}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist Button Top Right for best sellers / hover */}
        <button
          onClick={handleWishlistClick}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          className="absolute top-3 right-3 bg-surface/85 backdrop-blur-sm p-2 hover:bg-surface text-on-surface transition-all z-10"
        >
          <Heart
            className={`w-[16px] h-[16px] transition-colors ${
              isWishlisted ? 'fill-accent text-accent' : 'text-on-surface'
            }`}
          />
        </button>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2 z-10">
          <button
            onClick={handleQuickAddClick}
            disabled={justAdded}
            className={`flex-1 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-1.5 ${
              justAdded
                ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                : 'bg-on-surface text-surface hover:opacity-90'
            }`}
          >
            {justAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>ADDED TO BAG</span>
              </>
            ) : (
              <span>QUICK ADD</span>
            )}
          </button>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
          <span>{product.categoryLabel}</span>

          {product.tag ? (
            <span className="text-accent uppercase font-bold">{product.tag}</span>
          ) : product.colors.length > 0 ? (
            <div className="flex items-center gap-1.5">
              {product.colors.map((c, i) => (
                <span
                  key={i}
                  style={{ backgroundColor: c }}
                  className="w-2.5 h-2.5 rounded-full border border-black/15 inline-block"
                  title={product.colorNames[i] || 'Color swatch'}
                />
              ))}
            </div>
          ) : null}
        </div>

        <h3 className="font-grotesk font-semibold text-[15px] uppercase tracking-wide text-on-surface line-clamp-1">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-0.5">
          <p className="font-mono font-bold text-[13px] text-on-surface tabular-nums">
            ${product.price.toFixed(2)}
          </p>
          {product.statusLabel && (
            <span
              className={`font-mono text-[10px] font-bold uppercase tracking-wider ${
                product.statusLabel === 'RESTOCKED' ? 'text-accent' : 'text-on-surface-variant'
              }`}
            >
              {product.statusLabel}
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
