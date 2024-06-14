import React from "react";
import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import { Heading, Text } from "@chakra-ui/react";
import { Metadata } from "next";
import { Container } from "../ui";

export const metadata: Metadata = {
  title: SITE_NAME,
};

export default function NotFound() {
  return (
    <main className="h-screen">
      <Container className="relative">
        <span
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-black opacity-10"
          style={{ fontSize: "clamp(160px, 22vw, 300px)" }}
        >
          404
        </span>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center capitalize md:text-lg lg:text-xl w-full">
          <Heading className="font-bold uppercase text-3xl my-2 md:text-4xl lg:text-5xl">
            Oops! Page non trouvée
          </Heading>
          <Text>
            Nous sommes désolés, mais la page que vous recherchez est
            introuvable.
          </Text>
          <Text>
            Veuillez vérifier l&apos;URL ou revenir à la{" "}
            <Link href="/" className="underline font-bold text-blue-600">
              page d&apos;accueil
            </Link>
            .
          </Text>
        </div>
      </Container>
    </main>
  );
}
