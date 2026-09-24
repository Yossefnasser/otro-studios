import React from 'react';
import { Product } from '../data/products';
import { X, Trash2, ShoppingBag } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProducts,
  onRemoveFromWishlist,
  onSelectProduct,
  onQuickAdd,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-xs">
      <div
        className="w-full max-w-md bg-surface h-full flex flex-col border-l border-outline/70 shadow-2xl animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-outline/50 bg-surface">
          <div className="flex items-center gap-3">
            <span className="font-syne text-xl font-bold uppercase tracking-wider text-on-surface">
              SAVED PIECES
            </span>
            <span className="font-mono text-[11px] bg-on-surface text-surface px-2 py-0.5 font-bold">
              {wishlistProducts.length}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Wishlist"
            className="w-8 h-8 flex items-center justify-center text-on-surface hover:opacity-60 transition-opacity cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {wishlistProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-16">
              <span className="font-mono text-[11px] uppercase tracking-widest text-on-surface-variant mb-2">
                EMPTY WISHLIST
              </span>
              <p className="font-syne text-xl font-bold uppercase text-on-surface mb-6">
                NO PIECES SAVED YET
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-on-surface text-surface font-mono text-[11px] font-bold uppercase tracking-widest hover:opacity-90"
              >
                BROWSE COLLECTION
              </button>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 p-3 bg-surface-card border border-outline/40 group"
              >
                <div
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="w-20 aspect-[3/4] bg-surface-subtle overflow-hidden shrink-0 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] text-on-surface-variant uppercase">
                        {product.categoryLabel}
                      </span>
                      <button
                        onClick={() => onRemoveFromWishlist(product.id)}
                        className="text-on-surface-variant hover:text-accent p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4
                      onClick={() => {
                        onSelectProduct(product);
                        onClose();
                      }}
                      className="font-grotesk font-semibold text-[14px] uppercase text-on-surface cursor-pointer hover:underline"
                    >
                      {product.name}
                    </h4>

                    <p className="font-mono font-bold text-[13px] text-on-surface mt-1">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onQuickAdd(product);
                      onRemoveFromWishlist(product.id);
                    }}
                    className="w-full mt-3 py-2 bg-on-surface text-surface font-mono text-[10px] font-bold uppercase tracking-wider hover:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-3 h-3" />
                    <span>MOVE TO BAG</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
