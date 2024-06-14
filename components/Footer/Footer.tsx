import { Divider, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { SITE_NAME } from "@/constants";
import { Container } from "@/ui";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <Container className="flex flex-col md:flex-row flex-wrap gap-3 justify-between py-8">
        {/* Section 1 */}
        <div className="max-w-md">
          <Heading as="h2" size="lg" className="font-semibold mb-4">
            À propos de nous
          </Heading>
          <Text>
            Le Laboratoire de Physique Mathématique et Physique Subatomique,
            créé en 2000 à l&apos;Université de Constantine, est un important
            centre de recherche en physique théorique en Algérie avec 99
            enseignants-chercheurs et doctorants.
          </Text>
        </div>

        {/* Section 2 */}
        <div>
          <Heading as="h2" size="lg" className="text-lg font-semibold mb-4">
            Services
          </Heading>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Conception Web
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Développement d&apos;applications
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-sm hover:text-gray-400">
                Optimisation SEO
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <Heading as="h2" size="lg" className="text-lg font-semibold mb-4">
            Contact
          </Heading>
          <Text>Email : info@example.com</Text>
          <Text>Téléphone : (+213) 1234-5678</Text>
        </div>

        {/* Section 4 */}
        <div>
          <Heading as="h2" size="lg" className="text-lg font-semibold mb-4">
            Suivez-nous
          </Heading>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-gray-400">
              Facebook
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Twitter
            </a>
            <a href="#" className="text-sm hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
      </Container>

      {/* Developed by
      <div className="mt-8 text-center">
        <Text>Développé par Votre Nom / Votre Entreprise</Text>
      </div> */}
      <Divider />

      {/* Copyright */}
      <div className="py-4 text-center">
        <Text>&copy; 2023 {SITE_NAME}. Tous droits réservés.</Text>
      </div>
    </footer>
  );
}

export default Footer;
