import React from "react";
import { CommandGroup } from "./ui/command";
import { getProducts } from "@/actions/product.actions";
import SearchItem from "./SearchItem";

const SearchProductSuggestion = async () => {
  const products = await getProducts();

  return (
    <CommandGroup heading="Products">
      {products.map((product) => {
        return (
          <SearchItem
            key={product.id}
            title={product.title}
            href={"/product/" + product.id}
          />
        );
      })}
    </CommandGroup>
  );
};

export default SearchProductSuggestion;
