import React, { useState } from 'react';
import { ActiveScreen } from '../types/cart';
import { Search, User, Heart, ShoppingBag, Moon, Sun, X, ArrowRight, Menu } from 'lucide-react';

interface NavbarProps {
  activeScreen: ActiveScreen;
  setActiveScreen: (screen: ActiveScreen) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenWishlist: () => void;
  onOpenSearch: () => void;
  onOpenAccount: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeScreen,
  setActiveScreen,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenAccount,
  isDarkMode,
  onToggleDarkMode,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNav = (screen: ActiveScreen) => {
    setActiveScreen(screen);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 w-full z-40 bg-surface/95 backdrop-blur-md border-b border-outline/50 transition-colors duration-300">
        <div className="relative max-w-[1560px] mx-auto px-4 sm:px-8 xl:px-12 h-14 sm:h-16 md:h-20 flex items-center justify-between">
          {/* Mobile Left: Hamburger Menu Toggle */}
          <div className="flex md:hidden items-center z-20">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu and tools"
              className="p-2 -ml-2 text-on-surface hover:opacity-60 transition-opacity flex items-center justify-center cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" strokeWidth={2} />
              )}
            </button>
          </div>

          {/* Desktop Left: Primary Navigation */}
          <nav className="hidden md:flex items-center gap-6 md:gap-8 xl:gap-10 z-10">
            <button
              onClick={() => setActiveScreen('home')}
              className={`font-mono text-[12px] font-bold tracking-[0.18em] uppercase transition-all duration-200 relative py-1 ${
                activeScreen === 'home'
                  ? 'text-on-surface after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-on-surface'
                  : 'text-on-surface/70 hover:text-on-surface'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => setActiveScreen('collections')}
              className={`font-mono text-[12px] font-bold tracking-[0.18em] uppercase transition-all duration-200 relative py-1 ${
                activeScreen === 'collections'
                  ? 'text-on-surface after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-on-surface'
                  : 'text-on-surface/70 hover:text-on-surface'
              }`}
            >
              COLLECTIONS
            </button>
            <button
              onClick={() => setActiveScreen('lookbook')}
              className={`font-mono text-[12px] font-bold tracking-[0.18em] uppercase transition-all duration-200 relative py-1 ${
                activeScreen === 'lookbook'
                  ? 'text-on-surface after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-on-surface'
                  : 'text-on-surface/70 hover:text-on-surface'
              }`}
            >
              LOOKBOOK
            </button>
          </nav>

          {/* Center Logo (Always mathematically centered across all devices) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10 pointer-events-auto">
            <button
              onClick={() => handleMobileNav('home')}
              className="flex flex-col items-center group cursor-pointer text-center"
              aria-label="OTRO STUDIOS Home"
            >
              <span className="font-syne font-black text-lg sm:text-2xl xl:text-3xl tracking-[0.25em] sm:tracking-[0.35em] text-on-surface uppercase group-hover:scale-[0.98] transition-transform">
                OTRO
              </span>
              <span className="font-mono text-[7px] sm:text-[9px] font-bold tracking-[0.45em] sm:tracking-[0.55em] text-on-surface-variant uppercase -mt-0.5 sm:mt-0.5">
                STUDIOS
              </span>
            </button>
          </div>

          {/* Right Utility Actions */}
          <div className="flex items-center gap-1.5 sm:gap-6 xl:gap-8 z-20">
            {/* Desktop Only: Search (Moved inside 3-dots menu on phone) */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Catalog"
              className="hidden md:flex p-1.5 sm:p-0 items-center gap-2 text-on-surface hover:opacity-60 transition-opacity cursor-pointer"
            >
              <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase hidden md:inline">
                SEARCH
              </span>
            </button>

            {/* Desktop Only: Account */}
            <button
              onClick={onOpenAccount}
              aria-label="User Account"
              className="hidden md:flex items-center gap-2 text-on-surface hover:opacity-60 transition-opacity cursor-pointer"
            >
              <User className="w-[18px] h-[18px]" strokeWidth={2} />
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase">
                ACCOUNT
              </span>
            </button>

            {/* Desktop Only: Wishlist (Moved inside 3-dots menu on phone) */}
            <button
              onClick={onOpenWishlist}
              aria-label="Wishlist"
              className="hidden md:flex relative p-1.5 sm:p-0 items-center text-on-surface hover:opacity-60 transition-opacity cursor-pointer"
            >
              <Heart className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={2} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 sm:-top-1 sm:-right-1 bg-accent text-white font-mono text-[8px] sm:text-[9px] font-bold px-1 rounded-xs">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Desktop Only: Theme Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              aria-label="Toggle Theme"
              className="hidden md:flex items-center text-on-surface hover:opacity-60 transition-opacity p-1 cursor-pointer"
              title={isDarkMode ? 'Switch to Raw Bone' : 'Switch to Obsidian Dark'}
            >
              {isDarkMode ? (
                <Sun className="w-[18px] h-[18px]" strokeWidth={2} />
              ) : (
                <Moon className="w-[18px] h-[18px]" strokeWidth={2} />
              )}
            </button>

            {/* Cart Bag Button (Kept crisp and clean on phone header) */}
            <button
              onClick={onOpenCart}
              aria-label="Shopping Bag"
              className="relative flex items-center gap-1.5 sm:gap-2 bg-on-surface text-surface px-2.5 sm:px-4 py-1.5 sm:py-2 hover:opacity-90 transition-opacity cursor-pointer"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-[16px] sm:h-[16px]" strokeWidth={2} />
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.14em] uppercase hidden sm:inline">
                BAG
              </span>
              <span className="font-mono text-[10px] bg-surface text-on-surface px-1.5 py-0.5 font-bold">
                {cartCount < 10 ? `0${cartCount}` : cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu & Tools Slide-down Drawer (Three Dots Bar) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-14 sm:top-16 z-30 bg-black/60 backdrop-blur-sm md:hidden animate-in fade-in duration-200">
          <div className="bg-surface border-b border-outline/60 p-5 shadow-2xl flex flex-col gap-5">
            {/* Quick Search inside 3-dots bar */}
            <button
              onClick={() => {
                onOpenSearch();
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-3 bg-surface-subtle border border-outline/60 text-on-surface hover:border-on-surface transition-colors font-mono text-[11px] tracking-wider uppercase cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <Search className="w-4 h-4 text-on-surface-variant" />
                <span>SEARCH REPERTORY & SILHOUETTES</span>
              </div>
              <span className="text-[10px] text-on-surface-variant font-mono">LOOKUP</span>
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col space-y-3">
              <button
                onClick={() => handleMobileNav('home')}
                className={`flex items-center justify-between font-mono text-[12px] font-bold uppercase tracking-[0.2em] py-2 border-b border-outline/30 text-left cursor-pointer ${
                  activeScreen === 'home' ? 'text-accent' : 'text-on-surface'
                }`}
              >
                <span>01 // HOME ATELIER</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-50" />
              </button>

              <button
                onClick={() => handleMobileNav('collections')}
                className={`flex items-center justify-between font-mono text-[12px] font-bold uppercase tracking-[0.2em] py-2 border-b border-outline/30 text-left cursor-pointer ${
                  activeScreen === 'collections' ? 'text-accent' : 'text-on-surface'
                }`}
              >
                <span>02 // COLLECTIONS CATALOG</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-50" />
              </button>

              <button
                onClick={() => handleMobileNav('lookbook')}
                className={`flex items-center justify-between font-mono text-[12px] font-bold uppercase tracking-[0.2em] py-2 border-b border-outline/30 text-left cursor-pointer ${
                  activeScreen === 'lookbook' ? 'text-accent' : 'text-on-surface'
                }`}
              >
                <span>03 // VISUAL CHRONICLE</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-50" />
              </button>
            </nav>

            {/* Mobile Utility Actions (Liked / Wishlist, Account, Theme) */}
            <div className="grid grid-cols-2 gap-2.5 pt-1 font-mono text-[11px]">
              {/* Liked / Wishlist in 3-dots bar */}
              <button
                onClick={() => {
                  onOpenWishlist();
                  setIsMobileMenuOpen(false);
                }}
                className="p-3 bg-surface-subtle border border-outline/50 text-on-surface font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-accent text-accent' : ''}`} />
                  <span>LIKED ({wishlistCount})</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-40" />
              </button>

              {/* Account in 3-dots bar */}
              <button
                onClick={() => {
                  onOpenAccount();
                  setIsMobileMenuOpen(false);
                }}
                className="p-3 bg-surface-subtle border border-outline/50 text-on-surface font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>ACCOUNT</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 opacity-40" />
              </button>

              {/* Theme switch in 3-dots bar */}
              <button
                onClick={onToggleDarkMode}
                className="col-span-2 p-3 bg-surface-subtle border border-outline/50 text-on-surface font-bold uppercase tracking-wider flex items-center justify-between cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span>THEME: {isDarkMode ? 'RAW CHALK' : 'OBSIDIAN DARK'}</span>
                </div>
                <span className="text-[10px] text-on-surface-variant font-mono">TOGGLE</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
