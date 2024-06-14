import Link from "next/link";
import React from "react";
import { Text } from "@chakra-ui/react";
import { DateUtils } from "@/utils";

export default function SmallPost({
  title,
  description,
  date,
  href,
  type,
}: {
  title: string;
  description: string;
  date: Date;
  href: string;
  type: string;
}) {
  return (
    <Link href={href} className="hover-title-color">
      <div className="bg-slate-200 rounded-md p-2">
        <Text opacity={0.6} textTransform="uppercase">
          {DateUtils.stringify(date)} | {type}
        </Text>
        <Text noOfLines={2} fontWeight="bold" as="h2" size="lg">
          {title}
        </Text>
        <Text opacity={0.6} noOfLines={2}>
          {description}
        </Text>
      </div>
    </Link>
  );
}
