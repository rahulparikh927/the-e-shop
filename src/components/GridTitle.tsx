import { cn } from "@/lib/utils";
import React from "react";

type props = {
  title: string;
  className?: string;
};

const GridTitle = ({ title, className }: props) => {
  return <h3 className={cn("text-2xl mb-4", className)}>{title}</h3>;
};

export default GridTitle;
