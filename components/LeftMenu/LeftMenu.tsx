"use client";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import { IconMenu2 } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../Logo/Logo";
import { usePathname } from "next/navigation";
import NavLink from "@/ui/buttons/NavLink";
import MegaMenu from "../MegaMenu/MegaMenu";
import { client } from "@/lib/sanity";
import { EquipeQuery } from "@/types";
import { groq } from "next-sanity";
import { equipesData } from "@/dummyData";

function LeftMenu() {
  // return ;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const [teams, setTeams] = useState<Pick<EquipeQuery, "acronym" | "slug">[]>(
    []
  );
  const pathname = usePathname();
  useEffect(() => {
    onClose();
  }, [pathname]);

  async function getTeams() {
    const query = groq`*[_type == "team"] | order(_createdAt asc) {
      acronym,
      "slug": slug.current
    }`;
    const data = await client.fetch(
      query,
      {},
      {
        next: {
          tags: ["team", "equipes"],
        },
      }
    );
    setTeams(data);
  }

  useEffect(() => {
    // to use real data uncomment the lines below and delete the dummy data lines
    // getTeams();
    setTeams(equipesData); // dummy
  }, []);

  return (
    <>
      <button ref={btnRef} onClick={onOpen}>
        <IconMenu2 />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Logo minLogo />
          </DrawerHeader>

          <DrawerBody className="flex gap-4 flex-col hide-scrollbar">
            <Button as={"a"} href="/admin" className="w-full min-h-[40px]">
              Login
            </Button>
            <nav className="flex flex-col gap-2">
              <NavLink href="/">Laboratoire</NavLink>
              <MegaMenu
                href="/equipes"
                title="Equipes de recherche"
                subLinks={teams}
                mobile
              />
              <NavLink href="/publications">Publications</NavLink>
              <NavLink href="/seminaires">Seminaires</NavLink>
              <NavLink href="/formations">Formations</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </nav>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default LeftMenu;
