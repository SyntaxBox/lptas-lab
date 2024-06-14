import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import { cn } from "@/utils";

export function FeaturedContainer({
  imgSrc,
  imgAlt,
  children,
  className,
  ...rest
}: {
  imgSrc: string;
  imgAlt: string;
} & JSX.IntrinsicElements["div"]) {
  return (
    <section>
      <div className="w-full h-96 relative">
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="object-cover object-top -z-10"
          fill
        />
      </div>
      <div className="sm:px-4 py-2.5 z-1 h-full w-full">
        <div
          {...rest}
          className={cn(
            "h-full w-full container mx-auto p-4 py-8 md:px-8 md:pt-10 md:pb-8 -mt-20 rounded-lg bg-slate-50 shadow-lg shadow-slate-300/70 max-w-6xl",
            className
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
