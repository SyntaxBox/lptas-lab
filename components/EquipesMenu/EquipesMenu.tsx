import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { client } from "@/lib/sanity";
import { EquipeQuery } from "@/types";
import NextLink from "next/link";
import { groq } from "next-sanity";
import { equipesData } from "@/dummyData";
async function getEquipesSlug() {
  const query = groq`*[_type == "team"] | order(_createdAt asc) {
      "slug": slug.current
    }`;
  const data = await client.fetch<Pick<EquipeQuery, "slug">[]>(
    query,
    {},
    {
      next: {
        tags: ["equipes"],
      },
    }
  );
  return data;
}

export default async function EquipesMenu({
  buttonTitle,
}: {
  buttonTitle: string;
}) {
  // to use real data uncomment the lines below and delete the dummy data lines
  // const equipes = await getEquipesSlug();
  const equipes = equipesData.map((item) => ({ slug: item.slug })); // dummy
  return (
    <Menu>
      <MenuButton className="uppercase" as={Button}>
        {buttonTitle}
      </MenuButton>
      <MenuList>
        <MenuItem as={NextLink} href={`/publications`}>
          Tout
        </MenuItem>
        {equipes.map(({ slug }) => (
          <MenuItem
            className="uppercase"
            key={slug}
            as={NextLink}
            href={`/publications/?equipe=${slug}`}
          >
            {slug}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
