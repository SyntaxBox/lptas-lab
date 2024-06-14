import { cn } from "@/utils";
import Link, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

function NavLink({
  children,
  className,
  ...rest
}: LinkProps & { children: ReactNode; className?: string }) {
  return (
    <Link
      className={cn(
        "uppercase font-bold mx-3 py-4 underline-effect",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default NavLink;
