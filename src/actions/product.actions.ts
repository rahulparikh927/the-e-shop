"use server";

import { Product } from "@/types/product.type";

/**
 * The function `getProducts` makes an asynchronous request to a store API to fetch a list of products.
 * @returns The `getProducts` function returns a Promise that resolves to an array of `Product`
 * objects.
 */
export const getProducts: () => Promise<Product[]> = async () => {
  const response = await fetch(process.env.STORE_API + "products", {
    method: "GET",
  });
  return response.json();
};

type ProductsByCategoryPayload = {
  category: string;
};
/**
 * This TypeScript function fetches products by category from a store API and returns a Promise of
 * Product array.
 * @param {ProductsByCategoryPayload}  - The `getProductsByCategory` function is designed to fetch
 * products based on a specified category. It takes a single parameter `prams` of type
 * `ProductsByCategoryPayload`, which should include the `category` property specifying the category of
 * products to retrieve.
 * @returns The function `getProductsByCategory` is returning a Promise that resolves to an array of
 * `Product` objects.
 */
export const getProductsByCategory: (
  prams: ProductsByCategoryPayload
) => Promise<Product[]> = async ({ category }: ProductsByCategoryPayload) => {
  const response = await fetch(
    process.env.STORE_API + "products/category/" + category,
    {
      method: "GET",
    }
  );
  return response.json();
};

type ProductByIdPayload = {
  id: string;
};
/**
 * This function fetches a product by its ID from a store API and returns the product data if the
 * response status is 200.
 * @param {ProductByIdPayload}  - The `getProductById` function is designed to fetch a product from a
 * store API based on the provided `id`. It takes a single parameter `params` of type
 * `ProductByIdPayload`, which contains the `id` property specifying the product ID to retrieve.
 * @returns If the response status is 200, the function will return the JSON data of the product
 * fetched from the API. Otherwise, if the response status is not 200, the function will return null.
 */
export const getProductById: (
  params: ProductByIdPayload
) => Promise<Product> = async ({ id }: ProductByIdPayload) => {
  const response = await fetch(process.env.STORE_API + "products/" + id, {
    method: "GET",
  });

  if (response.status === 200) {
    return response.json();
  } else {
    return null;
  }
};
