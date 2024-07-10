"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/product.type";
import { capitalizeFirstLetter } from "@/lib/utils";
import ProductImage from "./ProductImage";
import Link from "next/link";
import AddToCart from "./AddToCart";

type props = {
  product: Product;
};

const ProductCard = ({ product }: props) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden rounded-lg shadow-lg">
      <Link href={"/product/" + product.id}>
        <div className="relative">
          <ProductImage
            src={product.image}
            alt={`${product.title} Image`}
            width={400}
            height={400}
            style={{
              objectFit: "contain",
            }}
            className="h-64 w-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 bg-primary px-3 py-1 text-xs text-primary-foreground rounded-full">
            Featured
          </div>
        </div>
      </Link>
      <CardContent className="p-6 space-y-4 flex flex-col h-max justify-between">
        <Link href={"/product/" + product.id}>
          <h3
            className="text-lg font-semibold lg:line-clamp-1 sm:line-clamp-2 md:line-clamp-2 sm:h-14 lg:h-8"
            title={product.title}
          >
            {product.title}
          </h3>
        </Link>
        <div>
          <span className="text-sm text-muted-foreground">Category: </span>
          <Link href={`/category/${product.category}`}>
            <span className="text-sm font-medium">
              {capitalizeFirstLetter(product.category)}
            </span>
          </Link>
        </div>
        <AddToCart product={product} />
      </CardContent>
    </Card>
  );
};

export default ProductCard;
