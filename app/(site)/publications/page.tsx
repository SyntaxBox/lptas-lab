import React from "react";
import Hero from "@/components/Hero/Hero";
import Posts from "@/components/Posts/Posts";
import { Container } from "@/ui";
import EquipesMenu from "@/components/EquipesMenu/EquipesMenu";

type params = {
  searchParams: {
    equipe?: string;
  };
};

function page({ searchParams }: params) {
  const { equipe } = searchParams;
  return (
    <main>
      <Hero />
      <Container>
        <EquipesMenu buttonTitle={equipe ?? "Tout"} />
        <Posts equipe={equipe} />
      </Container>
    </main>
  );
}

export default page;
