import EquipeContent from "@/components/EquipeContent/EquipeContent";
import EquipeHeader from "@/components/EquipeHeader/EquipeHeader";
import { client } from "@/lib/sanity";
import { FeaturedContainer } from "@/ui";
import { EquipeQuery } from "@/types";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import React from "react";
import { equipesData } from "@/dummyData";

type Props = {
  params: { equipe: string };
  searchParams: unknown;
};

async function getEquipeData(slug: string) {
  const query = groq`*[_type == "team" && slug.current == $slug][0] {
  _id,
  title,
  acronym,
  "leader": {
    "name": leader->name,
    "surname": leader->surname
  },
  domains,
  description,
  "thumbnail": thumbnail.asset->url,
  "projects": projects[] {
    project,
    number,
  },
  "specialProjects": specialProjects[] {
    project,
    number,
  },
  'members': members[]-> {
      "marital": marital,
      "name": name,
      "surname": surname,
      "email": email,
      "lastDiploma": lastDiploma,
      "grade": grade,
      "domain": domain,
      "attachmentStructure": attachmentStructure
    },
  'docMembers': docMembers[] {
    encadreurs,
    "name": docteur->name,
    "surname": docteur->surname,
  },
  keywords
}`;
  return await client.fetch<EquipeQuery | null>(
    query,
    { slug },
    {
      next: {
        tags: ["member", "team", "equipes"],
      },
    }
  );
}

async function getTeamNumber(slug: string) {
  const query = groq`*[_type == "team"] | order(_createdAt asc) {
    "slug": slug.current
  }`;
  const data = await client.fetch<{ slug: string }[]>(
    query,
    {},
    {
      next: {
        tags: ["team"],
      },
    }
  );
  return data.findIndex((item) => item.slug === slug) + 1;
}

async function page({ params }: Props) {
  const { equipe } = params;
  // to use real data uncomment the lines below and delete the dummy data lines
  // const teamNumber = await getTeamNumber(equipe);
  // const data = await getEquipeData(equipe);
  const teamNumber = equipesData.findIndex((item) => item.slug === equipe) + 1;
  const data = equipesData[teamNumber - 1];
  if (data === null) notFound();
  if (teamNumber < 1) notFound();
  return (
    <main>
      <FeaturedContainer imgSrc={"/team.jpg"} imgAlt={"équipe"}>
        <EquipeHeader {...data} teamNumber={teamNumber} />
        <EquipeContent {...data} />
      </FeaturedContainer>
    </main>
  );
}

export default page;
