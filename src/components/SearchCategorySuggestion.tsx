import { getCategories } from "@/actions/category.action";
import React from "react";
import { CommandGroup } from "./ui/command";
import SearchItem from "./SearchItem";

const SearchCategorySuggestion = async () => {
  const categories = await getCategories();

  return (
    <CommandGroup heading="Categories">
      {categories.map((category) => {
        return (
          <SearchItem
            key={category}
            title={category}
            href={"/category/" + category}
          />
        );
      })}
    </CommandGroup>
  );
};

export default SearchCategorySuggestion;
