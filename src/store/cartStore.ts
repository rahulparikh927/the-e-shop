import { Product } from "@/types/product.type";
import { create } from "zustand";

type CartType = {
  totalCount: number;
  products: Record<number, Product>;
};

export interface CartSoreType {
  cart: CartType;
  updateCart: (newCart: CartType) => void;
}

export const useCartStore = create<CartSoreType>((set) => ({
  cart: {
    totalCount: 0,
    products: [],
  },
  updateCart: (newCart: CartType) =>
    set((state) => ({
      cart: { ...state.cart, ...newCart },
    })),
}));
