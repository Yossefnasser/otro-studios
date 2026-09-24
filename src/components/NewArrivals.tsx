import React from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { ArrowUpRight } from 'lucide-react';

interface NewArrivalsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  wishlistIds: string[];
  onViewAll: () => void;
}

export const NewArrivals: React.FC<NewArrivalsProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds,
  onViewAll,
}) => {
  return (
    <section className="max-w-[1560px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-8 sm:py-14 lg:py-16 border-b border-outline/50" id="new-arrivals">
      <div className="flex items-end justify-between mb-5 sm:mb-8 pb-3 border-b border-outline/40">
        <div>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-on-surface-variant block mb-0.5">
            [CURATED SELECTION]
          </span>
          <h2 className="font-syne text-lg sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
            NEW ARRIVALS
          </h2>
        </div>
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <span className="font-mono text-[10px] text-on-surface-variant tracking-wider hidden sm:inline">
            04 STYLES SHOWN
          </span>
          <button
            onClick={onViewAll}
            className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-on-surface hover:opacity-60 flex items-center gap-1 transition-opacity cursor-pointer py-1"
          >
            <span>VIEW ALL</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4 Columns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelectProduct={onSelectProduct}
            onQuickAdd={onQuickAdd}
            onToggleWishlist={onToggleWishlist}
            isWishlisted={wishlistIds.includes(product.id)}
          />
        ))}
      </div>
    </section>
  );
};
