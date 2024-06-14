import { DateUtils } from "@/utils";
import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HeroFeatured({
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
      style={{ overflow: "hidden" }}
      className="relative w-full h-fill rounded-lg hover-zoom-img"
    >
      <div className="absolute w-full h-full overflow-hidden rounded-lg">
        <Image
          className="absolute rounded-lg w-full h-full object-cover -z-10"
          src={image.src}
          alt={image.alt}
          fill
        />
      </div>
      <div className="w-full rounded-lg h-full bg-gradient-to-t from-[#00000061] flex flex-col items-start justify-end gap-2 p-4">
        <div>
          <Text fontSize="sm" color="#fffffff0" textTransform="uppercase">
            {team} | {DateUtils.stringify(date, { fullMonth: true })}
          </Text>
        </div>
        <Heading as="h2" size="lg" color="white" textTransform="capitalize">
          {title}
        </Heading>
        <Text
          noOfLines={2}
          color="white"
          fontSize="md"
          textTransform="capitalize"
        >
          {description}
        </Text>
      </div>
    </Link>
  );
}

export default HeroFeatured;
