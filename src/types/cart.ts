import { Product } from '../data/products';

export interface CartItem {
  id: string; // unique item instance id
  product: Product;
  selectedSize: 'S' | 'M' | 'L' | 'XL';
  selectedColor: string;
  quantity: number;
}

export type ActiveScreen = 'home' | 'collections' | 'lookbook';

export interface FilterState {
  division: 'ALL' | 'T-SHIRTS' | 'SHIRTS & POLOS' | 'BOTTOMS' | 'OUTERWEAR';
  minGsm: number;
  maxGsm: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'newest';
  searchQuery: string;
}
