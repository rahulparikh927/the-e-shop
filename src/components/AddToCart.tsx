"use client";
import { getUpdatedCartProducts, MAX_QUANTITY_TO_ADD } from "@/lib/utils";
import { Product } from "@/types/product.type";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Input } from "./ui/input";
import { ChangeEvent, useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { useToast } from "./ui/use-toast";

type Props = {
  product: Product;
};

const AddToCart = ({ product }: Props) => {
  const [isAddToCart, setIsAddToCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { cart, updateCart } = useCartStore();
  const handleAddToCart = () => {
    setIsAddToCart(true);
    setQuantity(quantity + 1);
    updateCartQty(quantity + 1);
  };
  const { toast } = useToast();

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) return false;
    const qty = parseInt(e.target.value);
    if (qty > 5) {
      toast({
        title: "You can't add more than 5 products.",
      });
      return false;
    }
    if (qty === MAX_QUANTITY_TO_ADD + 1) {
      toast({
        title: "You can't add more than 5 products.",
      });
      return false;
    }
    updateCartQty(qty);
    setQuantity(qty);
    if (qty === 0) {
      setIsAddToCart(false);
    }
  };

  const handleRemoveQuantity = () => {
    if (quantity === 1) {
      setIsAddToCart(false);
    }
    setQuantity(quantity - 1);
    updateCartQty(quantity - 1);
  };

  const handleAddQuantity = () => {
    if (quantity === MAX_QUANTITY_TO_ADD) {
      toast({
        title: "You can't add more than 5 products.",
      });
      return false;
    }
    setQuantity(quantity + 1);
    updateCartQty(quantity + 1);
  };

  const updateCartQty = (updatedQty: number) => {
    const qty = updatedQty;
    const updatedProducts = getUpdatedCartProducts(cart.products, {
      ...product,
      qty,
    });

    const totalCount = Object.keys(updatedProducts).reduce(
      (acc, key: string) => {
        return acc + (updatedProducts[parseInt(key)]?.qty ?? 0);
      },
      0
    );

    updateCart({
      totalCount: totalCount,
      products: updatedProducts,
    });
  };

  return (
    <div>
      <div className="text-2xl font-bold mb-2">{`₹ ${product.price}`}</div>
      {isAddToCart ? (
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="w-8 h-8 p-0 flex items-center justify-center"
            onClick={handleRemoveQuantity}
          >
            <MinusIcon className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center"
          />
          <Button
            variant="outline"
            className="w-8 h-8 p-0 flex items-center justify-center"
            onClick={handleAddQuantity}
          >
            <PlusIcon className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      )}
    </div>
  );
};

export default AddToCart;
