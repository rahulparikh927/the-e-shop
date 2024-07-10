"use client";
import { useCartStore } from "@/store/cartStore";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { useMemo } from "react";

const Cart = () => {
  const { cart } = useCartStore();
  const totalPrice = useMemo(
    () =>
      Object.keys(cart.products).reduce((price, key) => {
        return (
          price +
          (cart.products[parseInt(key)]?.qty ?? 0) *
            cart.products[parseInt(key)].price
        );
      }, 0),
    [cart]
  );
  return (
    <Popover>
      <PopoverTrigger className="relative">
        <ShoppingCartIcon className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
          {cart.totalCount}
        </div>
      </PopoverTrigger>
      <PopoverContent className="h-60 overflow-y-auto">
        {Object.keys(cart.products).map((key: string) => {
          return (
            <p key={key} className="border-b-2 mb-2">
              {`Product: `}
              <Link href={"/product/" + cart.products[parseInt(key)].id}>
                {cart.products[parseInt(key)].title}
              </Link>
              {` | Quantity: ${cart.products[parseInt(key)].qty}`}
            </p>
          );
        })}
        <p>Total: {totalPrice.toFixed(2)}</p>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
