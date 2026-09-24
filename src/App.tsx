import React, { useState, useEffect } from 'react';
import { PRODUCTS, Product, CHRONICLES, ChronicleLook } from './data/products';
import { CartItem, ActiveScreen } from './types/cart';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TickerStrip } from './components/TickerStrip';
import { NewArrivals } from './components/NewArrivals';
import { ArchiveBanner } from './components/ArchiveBanner';
import { DisciplinesSection } from './components/DisciplinesSection';
import { BestSellers } from './components/BestSellers';
import { LookbookSection } from './components/LookbookSection';
import { SpecsAndDispatch } from './components/SpecsAndDispatch';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { AccountModal } from './components/AccountModal';
import { CheckoutModal } from './components/CheckoutModal';
import { LookbookModal } from './components/LookbookModal';
import { SizeGuideModal } from './components/SizeGuideModal';
import { CollectionsView } from './components/CollectionsView';
import { LookbookView } from './components/LookbookView';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ActiveScreen>('home');
  const [selectedDivisionForCollections, setSelectedDivisionForCollections] = useState<string>('ALL');

  // Initial cart populated with 2 items to match "BAG 02" in the design reference
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'cart-init-1',
      product: PRODUCTS[0], // Barden State Polo ($125)
      selectedSize: 'M',
      selectedColor: 'Earthy Umber',
      quantity: 1,
    },
    {
      id: 'cart-init-2',
      product: PRODUCTS[3], // Madrid Ringer Tee ($85)
      selectedSize: 'L',
      selectedColor: 'Chalk Ecru',
      quantity: 1,
    },
  ]);

  const [wishlistIds, setWishlistIds] = useState<string[]>(['amalfi-heritage-tee']);
  const [promoCode, setPromoCode] = useState<string>('');

  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedChronicle, setSelectedChronicle] = useState<ChronicleLook | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [completedOrders, setCompletedOrders] = useState<string[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Cart operations
  const handleQuickAdd = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const existingIndex = cartItems.findIndex(
      (item) => item.product.id === product.id && item.selectedSize === 'M'
    );

    if (existingIndex > -1) {
      setCartItems((prev) =>
        prev.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random()}`,
        product,
        selectedSize: 'M',
        selectedColor: product.colorNames[0] || 'Standard',
        quantity: 1,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
  };

  const handleDetailedAdd = (
    product: Product,
    size: 'S' | 'M' | 'L' | 'XL',
    color: string
  ) => {
    const existingIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.selectedSize === size &&
        item.selectedColor === color
    );

    if (existingIndex > -1) {
      setCartItems((prev) =>
        prev.map((item, idx) =>
          idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const newItem: CartItem = {
        id: `cart-${Date.now()}-${Math.random()}`,
        product,
        selectedSize: size,
        selectedColor: color,
        quantity: 1,
      };
      setCartItems((prev) => [...prev, newItem]);
    }
    setSelectedProduct(null);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist toggle
  const handleToggleWishlist = (product: Product, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlistIds((prev) =>
      prev.includes(product.id)
        ? prev.filter((id) => id !== product.id)
        : [...prev, product.id]
    );
  };

  // Navigation helpers
  const handleSelectCategory = (division: 'T-SHIRTS' | 'SHIRTS & POLOS' | 'BOTTOMS' | 'OUTERWEAR') => {
    setSelectedDivisionForCollections(division);
    setActiveScreen('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShopLook = (lookTitle: string) => {
    setSelectedChronicle(null);
    setActiveScreen('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderComplete = (orderNumber: string) => {
    setCompletedOrders((prev) => [orderNumber, ...prev]);
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  // Products for the New Arrivals section (first 4)
  const newArrivalsList = PRODUCTS.slice(0, 4);

  // Products for the Best Sellers rack (items 4 to 8)
  const bestSellersList = PRODUCTS.slice(4, 8);

  return (
    <div className="bg-surface font-grotesk antialiased selection:bg-on-surface selection:text-surface flex flex-col min-h-screen transition-colors duration-300">
      {/* Top Banner Announcement */}
      <TopBanner />

      {/* Sticky Top Navigation Bar */}
      <Navbar
        activeScreen={activeScreen}
        setActiveScreen={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Primary Dynamic Screen Flow */}
      <main className="flex-1 flex flex-col w-full">
        {activeScreen === 'home' && (
          <>
            {/* Desktop Editorial Hero */}
            <HeroSection
              onExploreDrop={() => {
                const target = document.getElementById('new-arrivals');
                target?.scrollIntoView({ behavior: 'smooth' });
              }}
              onViewLookbook={() => {
                setActiveScreen('lookbook');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Ticker Technical Strip */}
            <TickerStrip />

            {/* Curated Selection: New Arrivals */}
            <NewArrivals
              products={newArrivalsList}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickAdd={handleQuickAdd}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
              onViewAll={() => {
                setActiveScreen('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Visual Chronicle: Lookbook Horizontal Strip */}
            <LookbookSection
              onSelectChronicle={(chronicle) => setSelectedChronicle(chronicle)}
              onViewAllLookbook={() => {
                setActiveScreen('lookbook');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Categories / Disciplines 4-Col Grid */}
            <DisciplinesSection onSelectCategory={handleSelectCategory} />

            {/* Community Favourites: Best Sellers Carousel */}
            <BestSellers
              products={bestSellersList}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickAdd={handleQuickAdd}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
            />

            {/* Mid-Season Archive Promo Banner */}
            <ArchiveBanner
              onApplyPromo={(code) => {
                setPromoCode(code);
                setIsCartOpen(true);
              }}
              onExploreArchive={() => {
                setSelectedDivisionForCollections('ALL');
                setActiveScreen('collections');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Technical Specification Matrix & Atelier Dispatch Newsletter */}
            <SpecsAndDispatch />
          </>
        )}

        {activeScreen === 'collections' && (
          <CollectionsView
            initialDivision={selectedDivisionForCollections}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onQuickAdd={handleQuickAdd}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onBackToHome={() => {
              setActiveScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeScreen === 'lookbook' && (
          <LookbookView
            onBackToHome={() => {
              setActiveScreen('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectChronicle={(chronicle) => setSelectedChronicle(chronicle)}
            onShopLook={handleShopLook}
          />
        )}
      </main>

      {/* Refined Architectural Footer */}
      <Footer
        onNavigate={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenConcierge={() => setIsAccountOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Product Detail Modal (PDP) */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleDetailedAdd}
        onToggleWishlist={(p) => handleToggleWishlist(p)}
        isWishlisted={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
      />

      {/* Shopping Bag Drawer (Slide-Over) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        promoCode={promoCode}
        onApplyPromo={(code) => setPromoCode(code)}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Saved Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={(id) =>
          setWishlistIds((prev) => prev.filter((pId) => pId !== id))
        }
        onSelectProduct={(p) => setSelectedProduct(p)}
        onQuickAdd={(p) => handleQuickAdd(p)}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Atelier Account / Concierge Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        completedOrders={completedOrders}
      />

      {/* Secure Checkout Conduit */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        promoCode={promoCode}
        onOrderComplete={handleOrderComplete}
      />

      {/* Lookbook Chronicle Fullscreen Modal */}
      <LookbookModal
        chronicle={selectedChronicle}
        onClose={() => setSelectedChronicle(null)}
        onShopPiece={handleShopLook}
      />

      {/* Size Architecture Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />
    </div>
  );
}
