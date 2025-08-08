export type Currency = 'KRW' | 'USD';

export type Grade = 'EXPLORER' | 'PILOT' | 'COMMANDER';

export type GradePoint = {
  type: Grade;
  minPoint: number;
};

export type RecentProduct = {
  id: number;
  thumbnail: string;
  name: string;
  price: number;
};

export type CheeseProduct = {
  id: number;
  name: string;
  category: 'CHEESE';
  stock: number;
  price: number;
  description: string;
  detailDescription: string;
  images: string[];
  rating: number;
};

export type CrackerProduct = {
  id: number;
  name: string;
  category: 'CRACKER';
  stock: number;
  price: number;
  description: string;
  detailDescription: string;
  images: string[];
  rating: number;
  isGlutenFree: boolean;
};

export type TeaProduct = {
  id: number;
  name: string;
  category: 'TEA';
  stock: number;
  price: number;
  description: string;
  detailDescription: string;
  images: string[];
  rating: number;
  isCaffeineFree: boolean;
};

export type ProductCategory = 'CHEESE' | 'CRACKER' | 'TEA';

export type Product = CheeseProduct | CrackerProduct | TeaProduct;
