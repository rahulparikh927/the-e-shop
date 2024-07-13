"use client";

import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  label: string;
  children: React.ReactNode;
};

const NavItem = ({ href, label, children }: Props) => {
  const pathName = usePathname();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href={href}>
          <span
            className={cn({
              "border-black border-b-2": decodeURI(pathName) === href,
            })}
          >
            {children}
          </span>
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="bottom">{label}</TooltipContent>
    </Tooltip>
  );
};

export default NavItem;
