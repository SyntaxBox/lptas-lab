import SeminairesList from "@/components/SeminairesList/SeminairesList";
import { Container } from "@/ui";
import { Heading } from "@chakra-ui/react";
import React from "react";

async function page() {
  return (
    <main className="my-4">
      <Container>
        <Heading>Les séminaires:</Heading>
        <SeminairesList />
      </Container>
    </main>
  );
}

export default page;
