"use client";
import React from "react";
import { CommandItem } from "./ui/command";
import { useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "@/lib/utils";
import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

const SearchItem = ({ title, href }: Props) => {
  const router = useRouter();
  const handleOnSelect = () => {
    router.push(href);
  };
  return (
    <Link href={href}>
      <CommandItem onClick={handleOnSelect} onSelect={handleOnSelect}>
        {capitalizeFirstLetter(title)}
      </CommandItem>
    </Link>
  );
};

export default SearchItem;
