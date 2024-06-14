import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FeaturedContainer } from "@/ui";
import Equipes from "@/components/Equipes/Equipes";

async function Page() {
  return (
    <main>
      <FeaturedContainer imgSrc={"/team.jpg"} imgAlt={"équipe"}>
        <div className="flex flex-col gap-3">
          <Heading as="h2" className="text-2xl underline font-semibold mb-4">
            Nos Équipes
          </Heading>
          <Equipes />
        </div>
      </FeaturedContainer>
    </main>
  );
}

export default Page;
