import { equipesData } from "@/dummyData";
import { client } from "@/lib/sanity";
import { EquipeQuery } from "@/types";
import { Heading } from "@chakra-ui/react";
import { groq } from "next-sanity";
import Link from "next/link";
import React from "react";

async function getEquipesData() {
  const query = groq`*[_type == "team"][$start...$end] | order(_createdAt asc) {
      title,
      "slug": slug.current
    }`;
  const data = await client.fetch<Pick<EquipeQuery, "title" | "slug">[]>(
    query,
    { start: 0, end: 999 },
    {
      next: {
        tags: ["team"],
      },
    }
  );
  return data;
}

export default async function Equipes() {
  // to use real data uncomment the lines below and delete the dummy data lines
  // const equipes = await getEquipesData();
  const equipes = equipesData; // dummy

  return (
    <div>
      {equipes.map(({ slug, title }, i) => (
        <div className="pt-4 rounded-lg bg-white p-2" key={i}>
          <Link className="hover:underline" href={`/equipes/${slug}`}>
            <Heading
              id="equipe1"
              as="h3"
              size="md"
              className="capitalize font-semibold mb-2"
            >
              Équipe {i + 1}: {title}
            </Heading>
          </Link>
        </div>
      ))}
    </div>
  );
}
