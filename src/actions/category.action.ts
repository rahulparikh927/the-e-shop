"use server";

/**
 * The function `getCategories` makes an asynchronous request to fetch product categories from a store
 * API and returns a Promise containing an array of strings.
 * @returns The `getCategories` function returns a Promise that resolves to an array of strings
 * representing product categories fetched from the store API.
 */
export const getCategories: () => Promise<string[]> = async () => {
  const response = await fetch(process.env.STORE_API + "products/categories", {
    method: "GET",
  });
  return response.json();
};
