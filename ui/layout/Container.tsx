import { cn } from "@/utils";
import React from "react";

type props = JSX.IntrinsicElements["div"];

export function Container({ children, className, ...rest }: props) {
  return (
    <div className="px-4 sm:px-4 py-2.5 z-1 h-full w-full">
      <div
        {...rest}
        className={cn("h-full w-full container mx-auto max-w-7xl", className)}
      >
        {children}
      </div>
    </div>
  );
}
