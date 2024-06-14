import { Container } from "@/ui";
import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import MemberCard from "../MemberCard/MemberCard";
import FlippingCard from "../FlippingCard/FlippingCard";
import { professors } from "@/constants";

function About() {
  return (
    <section>
      <Container className="p-4 py-8 md:px-8 md:pt-10 md:pb-8 rounded-lg bg-[#fafafa]">
        <Heading className="mb-4" textDecoration="underline">
          Laboratoire de Physique Théorique et Applications Subatomiques
        </Heading>
        <div className="flex flex-col gap-3">
          <Heading as="h3" size="md">
            Introduction
          </Heading>
          <Text className="mb-4">
            Le Laboratoire de Physique Théorique et Applications Subatomiques,
            fondé le 15 Septembre 2002 au sein de l&apos;Université de Boréalie,
            est l&apos;un des laboratoires de physique théorique les plus
            réputés dans la région. Initialement formé par un groupe restreint
            d&apos;enseignants-chercheurs, dont J. Dupont, M. Lefevre, C.
            Durand, A. Martin, L. Petit, H. Blanc, D. Moreau, et R. Rousseau, le
            laboratoire compte actuellement 85 enseignants-chercheurs et
            doctorants.
          </Text>
          <Heading as="h3" size="md">
            Domaines de Recherche
          </Heading>
          <Text className="mb-4">
            Les membres du laboratoire se consacrent à des domaines de recherche
            de haut niveau international, tels que la Physique Théorique, la
            Physique des Particules, l&apos;Informatique Quantique, la
            Cosmologie, et bien d&apos;autres. <br />
            Leurs travaux de recherche ont un impact significatif sur des
            projets scientifiques aussi bien nationaux (PNRU)
            qu&apos;internationaux (HORIZON).
          </Text>
          <Heading as="h3" size="md">
            Évolution de la Direction
          </Heading>
          <Text className="mb-4">
            Depuis sa création, le Laboratoire a connu une succession de
            directeurs engagés. <br />
            Voici une liste des personnalités ayant assuré la gouvernance du
            laboratoire:
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center items-center my-4">
            {professors.map(({ name, img, specialty }, i) => (
              <FlippingCard
                className="md:px-1"
                key={i}
                frontComponent={
                  <MemberCard avatar={img} name={name} specialty={specialty} />
                }
                backComponent={<MemberCard />}
              />
            ))}
          </div>

          <Heading as="h3" size="md">
            Objectif Principal
          </Heading>
          <Text className="mb-4">
            Le Laboratoire vise principalement à former les étudiants de Master
            (théorique et médicale) ainsi que les Doctorants, les préparant à
            s&apos;intégrer aussi bien dans le monde de la recherche que de
            l&apos;industrie. <br />
            Cette mission contribue à renforcer les compétences des futurs
            acteurs du domaine scientifique.
          </Text>
        </div>
      </Container>
    </section>
  );
}

export default About;
