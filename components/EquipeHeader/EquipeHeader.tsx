import { Description, HeadingText } from "@/ui";
import { EquipeQuery } from "@/types";
import { Heading } from "@chakra-ui/react";
import React from "react";
import PortableBlockRenderer from "../PortableBlockRenderer/PortableBlockRenderer";

function EquipeHeader({
  title,
  acronym,
  description,
  leader,
  teamNumber,
  domains,
}: Pick<
  EquipeQuery,
  "title" | "acronym" | "description" | "leader" | "domains"
> & { teamNumber: number }) {
  const Domains = (
    <ul className="ml-3 list-disc">
      {domains.map((domain, i) => (
        <li key={i}>{domain}</li>
      ))}
    </ul>
  );
  return (
    <div className="flex flex-col gap-4">
      <Heading className="capitalize underline">Equipe {teamNumber}</Heading>
      <div>
        <HeadingText heading="Intitulé de l'équipe:" text={title} />
        <HeadingText heading="Acronyme de l'équipe:" text={acronym} />
        <HeadingText
          heading="Chef d'équipe:"
          text={`${leader.name} ${leader.surname}`}
        />
        <HeadingText heading="Domaine(s):" text={Domains} />
      </div>
      <Description>
        <PortableBlockRenderer content={description} />
      </Description>
    </div>
  );
}

export default EquipeHeader;
