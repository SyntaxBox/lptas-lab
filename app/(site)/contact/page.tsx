import { Heading } from "@chakra-ui/react";
import React from "react";
import { Container } from "@/ui";
import Contact from "@/components/Contact/Contact";
import ContactInfo from "@/components/ContactInfo/ContactInfo";
import Location from "@/components/Location/Location";
import { notFound } from "next/navigation";
import ContantEmailStatus from "@/components/ContantEmailStatus/ContantEmailStatus";

type Props = {
  params: unknown;
  searchParams: {
    sent?: string;
  };
};

function page({ searchParams }: Props) {
  const sent = searchParams.sent ? JSON.parse(searchParams.sent) : undefined;
  if (sent && typeof sent !== "boolean") notFound();
  return (
    <main>
      <Container>
        <Heading className="text-center my-5">Contactez-nous</Heading>
        {sent !== undefined && <ContantEmailStatus isSent={sent} />}
        <div className="flex flex-col lg:flex-row">
          <Contact />
          <ContactInfo />
          <Location />
        </div>
      </Container>
    </main>
  );
}

export default page;
