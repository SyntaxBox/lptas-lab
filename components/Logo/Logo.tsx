import { SITE_NAME, SITE_NAME_MIN } from "@/constants";
import Link from "next/link";
import React from "react";

function Logo({ minLogo }: { minLogo?: boolean }) {
  if (minLogo)
    return (
      <Link href="/" className="text-3xl font-bold">
        {SITE_NAME_MIN}
      </Link>
    );
  return (
    <Link href="/" className="text-3xl font-bold">
      <span className="hidden lg:block">{SITE_NAME}</span>
      <span className="block lg:hidden">{SITE_NAME_MIN}</span>
    </Link>
  );
}

export default Logo;
