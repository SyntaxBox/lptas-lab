import { Heading } from "@chakra-ui/react";
import React from "react";
import EquipeProjects from "../EquipeProjects/EquipeProjects";
import { EquipeQuery } from "@/types";
import EquipeMembers from "../EquipeMembers/EquipeMembers";
import DocEquipeMembers from "../DocEquipeMembers/DocEquipeMembers";

function EquipeContent({
  projects,
  specialProjects,
  members,
  docMembers,
}: Pick<
  EquipeQuery,
  "projects" | "specialProjects" | "members" | "docMembers"
>) {
  return (
    <div className="flex flex-col gap-6">
      <EquipeProjects projects={projects} specialProjects={specialProjects} />
      <div>
        <Heading as="h3" fontSize="28px" className="capitalize py-4">
          Liste exhaustive des membres permanents de l&apos;équipe
        </Heading>
        <EquipeMembers members={members} />
      </div>
      <div>
        <Heading as="h3" fontSize="28px" className="capitalize py-4">
          Liste exhaustive des doctorants membres de l&apos;équipe
        </Heading>
        <DocEquipeMembers docMembers={docMembers} />
      </div>
    </div>
  );
}

export default EquipeContent;
