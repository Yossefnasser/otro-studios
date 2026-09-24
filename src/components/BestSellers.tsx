import React, { useState } from 'react';
import { Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  wishlistIds: string[];
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? Math.max(0, products.length - itemsPerPage) : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + itemsPerPage >= products.length ? 0 : prev + 1));
  };

  const visibleProducts = products.slice(startIndex, startIndex + itemsPerPage);
  // In case visibleProducts is shorter than 4, wrap around
  const displayList =
    visibleProducts.length < itemsPerPage
      ? [...visibleProducts, ...products.slice(0, itemsPerPage - visibleProducts.length)]
      : visibleProducts;

  return (
    <section className="max-w-[1560px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-8 sm:py-14 lg:py-16 border-b border-outline/50" id="shop">
      <div className="flex items-end justify-between mb-5 sm:mb-8 pb-3 border-b border-outline/40">
        <div>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-on-surface-variant block mb-0.5">
            [COMMUNITY FAVOURITES]
          </span>
          <h2 className="font-syne text-lg sm:text-2xl lg:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
            BEST SELLERS
          </h2>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous Products"
            className="w-7 h-7 sm:w-9 sm:h-9 border border-outline/70 bg-surface flex items-center justify-center hover:bg-surface-subtle transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Products"
            className="w-7 h-7 sm:w-9 sm:h-9 border border-outline/70 bg-surface flex items-center justify-center hover:bg-surface-subtle transition-colors cursor-pointer"
          >
            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
        {displayList.map((product) => (
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
