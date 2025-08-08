import type { Product } from '@/types';
import { createContext, use, useState } from 'react';

type CartContextType = {
  carts: Product[];
  addCart: (product: Product) => void;
  removeCart: (product: Product) => void;
  clearCart: () => void;
  isInCart: (product: Product) => boolean;
  getCartCount: (product: Product) => number;
};

const CartContext = createContext<CartContextType>({
  carts: [],
  addCart: () => {},
  removeCart: () => {},
  clearCart: () => {},
  isInCart: () => false,
  getCartCount: () => 0,
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<Product[]>([]);

  const addCart = (product: Product) => {
    setCarts([...carts, product]);
  };

  const removeCart = (product: Product) => {
    const currentProduct = carts.findIndex(cart => cart.id === product.id);
    if (currentProduct === -1) return;

    setCarts(carts.filter((_, index) => index !== currentProduct));
  };

  const clearCart = () => {
    setCarts([]);
  };

  const isInCart = (product: Product) => {
    return carts.some(cart => cart.id === product.id);
  };

  const getCartCount = (product: Product) => {
    return carts.filter(cart => cart.id === product.id).length;
  };

  return (
    <CartContext.Provider value={{ carts, addCart, removeCart, clearCart, isInCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return use(CartContext);
};

export { CartProvider, useCart };
