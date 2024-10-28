// src/context/CartContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

interface Doll {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface CartContextType {
  cart: Doll[];
  addToCart: (doll: Doll) => void;
  removeFromCart: (id: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Doll[]>([]);

  const addToCart = (doll: Doll) => {
    setCart((prevCart) => [...prevCart, doll]);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
