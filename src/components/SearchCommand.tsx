"use client";

import { ReactNode } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "./ui/command";
import { Button } from "./ui/button";
import { useRouter, useSearchParams } from "next/navigation";

const SearchCommand = ({ children }: { children: ReactNode }) => {
  const searchParams = useSearchParams();
  const open = searchParams.get("open");
  const router = useRouter();
  const setOpen = (value: boolean) => {
    router.push("?open=" + value);
  };

  return (
    <>
      <Button
        variant="outline"
        className="sm:w-full mr-4 justify-start max-w-[50%] overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search Product...</span>
        <span className="inline-flex lg:hidden">Search...</span>
      </Button>
      <CommandDialog open={open === "true"} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {children}
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default SearchCommand;
