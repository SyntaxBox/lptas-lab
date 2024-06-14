import { DateUtils } from "@/utils";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function Trends({
  trends,
}: {
  trends: { title: string; date: Date; href: string }[];
}) {
  return (
    <aside className="flex flex-col gap-6 w-full">
      <ul className="w-full flex flex-col gap-3">
        {trends.map(({ title, date, href }, i) => (
          <li
            className="bg-slate-100 w-full rounded-sm overflow-hidden p-2"
            key={i}
          >
            <Link href={"publications/" + href} className="hover-title-color">
              <Text color="GrayText" textTransform="uppercase">
                {DateUtils.stringify(date)}
              </Text>
              <Text noOfLines={2} fontWeight="bold" as="h2" size="lg">
                {title}
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Trends;
