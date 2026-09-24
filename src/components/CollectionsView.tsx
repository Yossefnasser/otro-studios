import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, Grid, List, ArrowLeft } from 'lucide-react';

interface CollectionsViewProps {
  initialDivision?: string;
  onSelectProduct: (product: Product) => void;
  onQuickAdd: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (product: Product, e: React.MouseEvent) => void;
  wishlistIds: string[];
  onBackToHome: () => void;
}

export const CollectionsView: React.FC<CollectionsViewProps> = ({
  initialDivision = 'ALL',
  onSelectProduct,
  onQuickAdd,
  onToggleWishlist,
  wishlistIds,
  onBackToHome,
}) => {
  const [selectedDivision, setSelectedDivision] = useState<string>(initialDivision);
  const [gsmFilter, setGsmFilter] = useState<'ALL' | 'LIGHT' | 'HEAVY' | 'ARCHITECTURAL'>('ALL');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'matrix'>('grid');

  const divisions = ['ALL', 'T-SHIRTS', 'SHIRTS & POLOS', 'BOTTOMS', 'OUTERWEAR'];

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (selectedDivision !== 'ALL') {
      list = list.filter((p) => p.division === selectedDivision);
    }

    if (gsmFilter === 'LIGHT') {
      list = list.filter((p) => p.weightGsm < 350);
    } else if (gsmFilter === 'HEAVY') {
      list = list.filter((p) => p.weightGsm >= 350 && p.weightGsm < 450);
    } else if (gsmFilter === 'ARCHITECTURAL') {
      list = list.filter((p) => p.weightGsm >= 450);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    }

    return list;
  }, [selectedDivision, gsmFilter, sortBy]);

  return (
    <div className="max-w-[1560px] mx-auto w-full px-4 sm:px-8 xl:px-12 py-6 sm:py-10">
      {/* Breadcrumb & Navigation */}
      <div className="flex items-center justify-between mb-5 sm:mb-8 pb-3 border-b border-outline/40">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-on-surface hover:opacity-60 transition-opacity cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>RETURN TO ATELIER</span>
        </button>
        <span className="font-mono text-[10px] sm:text-[11px] text-on-surface-variant uppercase tracking-widest">
          {filteredProducts.length} STYLES
        </span>
      </div>

      {/* Screen Title */}
      <div className="mb-6 sm:mb-8">
        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.25em] uppercase text-on-surface-variant block mb-1">
          [FULL ARCHIVAL REPERTORY]
        </span>
        <h1 className="font-syne text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-on-surface">
          COLLECTIONS CATALOG
        </h1>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-outline/50">
        {/* Division Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar font-mono text-[11px]">
          {divisions.map((div) => (
            <button
              key={div}
              onClick={() => setSelectedDivision(div)}
              className={`px-4 py-2 uppercase font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedDivision === div
                  ? 'bg-on-surface text-surface'
                  : 'bg-surface-subtle text-on-surface hover:bg-surface-dim'
              }`}
            >
              {div}
            </button>
          ))}
        </div>

        {/* Secondary Controls: GSM & Sort & View */}
        <div className="flex flex-wrap items-center gap-4 font-mono text-[11px]">
          {/* GSM Filter */}
          <div className="flex items-center gap-1 bg-surface-subtle px-2 py-1 border border-outline/40">
            <span className="text-on-surface-variant uppercase text-[10px] pr-1">DENSITY:</span>
            <select
              value={gsmFilter}
              onChange={(e) => setGsmFilter(e.target.value as 'ALL' | 'LIGHT' | 'HEAVY' | 'ARCHITECTURAL')}
              className="bg-transparent font-bold uppercase text-on-surface focus:outline-none cursor-pointer"
            >
              <option value="ALL">ALL GSM</option>
              <option value="LIGHT">&lt; 350 GSM</option>
              <option value="HEAVY">350 - 450 GSM</option>
              <option value="ARCHITECTURAL">450+ GSM (ARMOR)</option>
            </select>
          </div>

          {/* Sort By */}
          <div className="flex items-center gap-1 bg-surface-subtle px-2 py-1 border border-outline/40">
            <span className="text-on-surface-variant uppercase text-[10px] pr-1">SORT:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'featured' | 'price-asc' | 'price-desc')}
              className="bg-transparent font-bold uppercase text-on-surface focus:outline-none cursor-pointer"
            >
              <option value="featured">FEATURED</option>
              <option value="price-asc">PRICE: LOW TO HIGH</option>
              <option value="price-desc">PRICE: HIGH TO LOW</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center border border-outline/50 bg-surface">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 transition-colors ${viewMode === 'grid' ? 'bg-on-surface text-surface' : 'text-on-surface'}`}
              title="Grid View"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`p-2 transition-colors ${viewMode === 'matrix' ? 'bg-on-surface text-surface' : 'text-on-surface'}`}
              title="Technical Matrix Table View"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Products Presentation */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-syne text-2xl font-bold uppercase text-on-surface mb-4">
            NO SILHOUETTES MATCH THIS SELECTION
          </p>
          <button
            onClick={() => {
              setSelectedDivision('ALL');
              setGsmFilter('ALL');
            }}
            className="px-6 py-3 bg-on-surface text-surface font-mono text-[11px] font-bold uppercase tracking-wider"
          >
            RESET ALL FILTERS
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {filteredProducts.map((product) => (
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
      ) : (
        /* Technical Matrix Table View */
        <div className="w-full overflow-x-auto bg-surface border border-outline/50">
          <table className="w-full text-left font-mono text-[12px]">
            <thead>
              <tr className="border-b border-outline/50 bg-surface-subtle text-on-surface-variant text-[11px] uppercase tracking-wider">
                <th className="py-3.5 px-4">PIECE SILHOUETTE</th>
                <th className="py-3.5 px-4">DIVISION</th>
                <th className="py-3.5 px-4">FABRIC DENSITY</th>
                <th className="py-3.5 px-4">CRAFT ATELIER</th>
                <th className="py-3.5 px-4">PRICE</th>
                <th className="py-3.5 px-4 text-right">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline/40">
              {filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  onClick={() => onSelectProduct(product)}
                  className="hover:bg-surface-subtle/50 transition-colors cursor-pointer group"
                >
                  <td className="py-4 px-4 flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 aspect-[3/4] object-cover bg-surface-subtle shrink-0"
                    />
                    <div>
                      <span className="font-grotesk font-semibold text-[14px] uppercase text-on-surface block">
                        {product.name}
                      </span>
                      <span className="text-[10px] text-on-surface-variant uppercase">
                        {product.categoryLabel}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 uppercase text-on-surface-variant">
                    {product.division}
                  </td>
                  <td className="py-4 px-4 font-bold text-on-surface">
                    {product.weightGsm} GSM
                  </td>
                  <td className="py-4 px-4 text-on-surface-variant">
                    {product.origin}
                  </td>
                  <td className="py-4 px-4 font-bold text-on-surface tabular-nums">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd(product, e);
                      }}
                      className="px-4 py-2 bg-on-surface text-surface text-[10px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity cursor-pointer"
                    >
                      QUICK ADD
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
