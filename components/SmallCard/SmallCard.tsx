import React from "react";
import Image from "next/image";
import { DateUtils } from "@/utils";
import { Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
function SmallCard({
  image,
  title,
  team,
  date,
  description,
  href,
}: {
  image: { src: string; alt: string };
  title: string;
  team: string;
  date: Date;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={"publications/" + href}
      className="flex flex-col hover-title-color"
    >
      <div className="relative w-full aspect-[18/9]">
        <Image
          className="rounded-lg w-full h-full object-cover"
          src={image.src}
          alt={image.alt}
          fill
        />
      </div>
      <div className="w-full flex flex-col items-start justify-end gap-1 pt-2">
        <div>
          <Text fontSize="sm" color="GrayText" textTransform="uppercase">
            <span className="text-sky-600">{team}</span> |{" "}
            {DateUtils.stringify(date)}
          </Text>
        </div>
        <Heading
          as="h2"
          size="md"
          color="black"
          textTransform="capitalize"
          noOfLines={2}
        >
          {title}
        </Heading>
        <Text
          noOfLines={2}
          color="GrayText"
          fontSize="sm"
          textTransform="capitalize"
        >
          {description}
        </Text>
      </div>
    </Link>
  );
}

export default SmallCard;
