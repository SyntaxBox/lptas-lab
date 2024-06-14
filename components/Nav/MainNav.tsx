import NavLink from "@/ui/buttons/NavLink";
import React from "react";
import ShowOn from "../ShowOn/ShowOn";
import LeftMenu from "../LeftMenu/LeftMenu";
import MegaMenu from "../MegaMenu/MegaMenu";
import { groq } from "next-sanity";
import { client } from "@/lib/sanity";
import { EquipeQuery } from "@/types";
import { equipesData } from "@/dummyData";

async function getTeams() {
  const query = groq`*[_type == "team"][$start...$end] | order(_createdAt asc) {
      acronym,
      "slug": slug.current
    }`;
  const data = await client.fetch<Pick<EquipeQuery, "acronym" | "slug">[]>(
    query,
    { start: 0, end: 999 },
    {
      next: {
        tags: ["team", "equipes"],
      },
    }
  );
  return data;
}

async function MainNav() {
  // to use real data uncomment the lines below and delete the dummy data lines
  // const teams = await getTeams();
  const teams = equipesData; // dummy
  return (
    <nav className="px-4 sm:px-4 z-1 h-full hidden border-y lg:block  bg-white z-[1000] sticky w-full top-0">
      <div className="h-full container mx-auto max-w-7xl flex justify-between items-center w-full">
        <ShowOn on={36}>{<LeftMenu />}</ShowOn>
        <div className="flex flex-wrap items-center w-full justify-center">
          <NavLink href="/">Laboratoire</NavLink>
          <MegaMenu
            href="/equipes"
            title="Equipes de recherche"
            subLinks={teams}
          />

          <NavLink href="/publications">Publications</NavLink>
          <NavLink href="/seminaires">Seminaires</NavLink>
          <NavLink href="/formations">Formations</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
