import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

function ContactInfo() {
  return (
    <div className="w-full h-fill bg-black text-white p-4 flex flex-col gap-4 items-center justify-between text-center">
      <div>
        <Heading size="md" className="uppercase mb-2 text-yellow-500" as="h3">
          Telephone
        </Heading>
        <Text>+213 133 44 55</Text>
        <Text>+213 133 44 55</Text>
      </div>
      <div>
        <Heading size="md" className="uppercase mb-2 text-yellow-500" as="h3">
          Emplacement
        </Heading>
        <Text>Cite du laboratoire, Constantine, Algerie</Text>
      </div>
      <div>
        <Heading size="md" className="uppercase mb-2 text-yellow-500" as="h3">
          Email
        </Heading>
        <Text>contact@example.com</Text>
      </div>
      <div>
        <Heading size="md" className="uppercase mb-2 text-yellow-500" as="h3">
          Site web
        </Heading>
        <Text>
          <Link href="https://lptas-labo.org">lptas-labo.org</Link>
        </Text>
      </div>
    </div>
  );
}

export default ContactInfo;
