import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import { Project, EquipeQuery } from "@/types";
import { IconPointFilled } from "@tabler/icons-react";

function EquipeProjects({
  projects,
  specialProjects,
}: Pick<EquipeQuery, "projects" | "specialProjects">) {
  if (!projects && !specialProjects) return null;
  projects = projects ?? [];
  specialProjects = specialProjects ?? [];
  const projectsNumber =
    projects.reduce((acc, curr) => acc + curr.number, 0) +
    specialProjects.reduce((acc, curr) => acc + curr.number, 0);
  return (
    <div>
      <Heading as="h3" fontSize="28px" className="capitalize py-4">
        Les projets de recherche en cours d&apos;exécution:
      </Heading>
      <div className="flex flex-col gap-3">
        <Projects title={""} projects={projects} />
        <Projects
          title={"Projet de recherche spécifique"}
          projects={specialProjects}
        />
      </div>
      <Text as="h4" fontSize="20px" className="capitalize py-4 font-bold">
        Le Nombre Totale est: {projectsNumber}
      </Text>
    </div>
  );
}

export default EquipeProjects;

function Projects({ projects, title }: { title: string; projects: Project[] }) {
  if (!projects.length) return null;
  return (
    <div>
      <Text fontSize="20px" className="capitalize font-bold">
        {title}
      </Text>
      <div>
        {projects.map(({ project, number }, index) => (
          <div className="flex items-center gap-2 py-1 text-xl" key={index}>
            <IconPointFilled />
            <p className="capitalize">{project}</p>
            <span className="font-bold text-xl">{number}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
