"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import NavLink from "@/ui/buttons/NavLink";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import { IconSquareChevronDownFilled } from "@tabler/icons-react";
import { usePathname } from "next/navigation";

function MegaMenu({
  href,
  title,
  subLinks,
  mobile,
}: {
  href: string;
  title: string;
  subLinks: {
    acronym: string;
    slug: string;
  }[];
  mobile?: boolean;
}) {
  if (mobile)
    return <MobileMegaMenu href={href} title={title} subLinks={subLinks} />;
  return <DefaultMegaMenu href={href} title={title} subLinks={subLinks} />;
}

export default MegaMenu;

const DefaultMegaMenu = ({
  href,
  title,
  subLinks,
}: {
  href: string;
  title: string;
  subLinks: {
    acronym: string;
    slug: string;
  }[];
}) => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    show && setShow(false);
  }, [pathname]);
  return (
    <div className="transition-all duration-300 relative">
      <div className="flex items-center justify-between">
        <NavLink href={href}>{title}</NavLink>
        <IconSquareChevronDownFilled
          className={`${
            show ? "rotate-180" : "rotate-0"
          } transition-all cursor-pointer duration-300`}
          onClick={() => setShow(!show)}
        />
      </div>
      <UnorderedList
        style={{
          transform: `scale(${show ? "1,1" : "1,0"})`,
        }}
        className=" w-full p-2 rounded-b-lg flex flex-col mt-2 transition-all origin-top duration-300 absolute top-[48px] bg-white -left-2"
        listStyleType="none"
      >
        {subLinks.map(({ acronym }, i) => (
          <ListItem key={i} className="flex">
            <Link
              className="underline-effect py-2 mx-2 capitalize font-bold w-full"
              href={`${href}/${subLinks[i].slug}`}
            >
              {acronym}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  );
};

const MobileMegaMenu = ({
  href,
  title,
  subLinks,
}: {
  href: string;
  title: string;
  subLinks: {
    acronym: string;
    slug: string;
  }[];
}) => {
  const [show, setShow] = useState(false);
  return (
    <div className="transition-all origin-top duration-300 ">
      <div className="flex items-center justify-between">
        <NavLink href={href}>{title}</NavLink>
        <IconSquareChevronDownFilled
          className={`${
            show ? "rotate-180" : "rotate-0"
          } transition-all cursor-pointer duration-300`}
          onClick={() => setShow(!show)}
        />
      </div>
      <UnorderedList
        style={{
          height: show ? "100%" : 0,
          transform: `scale(${show ? "1,1" : "1,0"})`,
        }}
        className=" flex flex-col gap-2 mt-2 transition-all origin-top duration-300 "
        listStyleType="none"
      >
        {subLinks.map(({ acronym }, i) => (
          <ListItem key={i}>
            <Link
              className="underline-effect py-2 mx-2 capitalize font-bold"
              href={`${href}/${subLinks[i].slug}`}
            >
              {acronym}
            </Link>
          </ListItem>
        ))}
      </UnorderedList>
    </div>
  );
};
