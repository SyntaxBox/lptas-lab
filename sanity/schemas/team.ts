import { domains } from "@/data";
import { IconUsersGroup } from "@tabler/icons-react";
import { defineType } from "sanity";

export const equipeSchema = defineType({
  name: "team",
  title: "Equipes",
  type: "document",
  icon: IconUsersGroup,
  fields: [
    {
      name: "title",
      title: "Intitulé de l'équipe",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "acronym",
      title: "Acronyme de l'équipe",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "acronym",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "leader",
      title: "Chef d'équipe",
      type: "reference",
      to: [{ type: "member" }],
    },
    {
      name: "domains",
      title: "Domaine(s)",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: domains
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description de la thématique de recherche de l’équipe",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnail",
      title: "Photo de l'equipe",
      type: "image",
    },
    {
      name: "projects",
      title: "Les projets de recherche en cours d'exécution",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Project",
              name: "project",
              type: "string",
              options: {
                list: [
                  { title: "Projet de recherche international multilatéral.", value: "Projet de recherche international multilatéral." },
                  { title: "Projet de recherche international bilatéral.", value: "Projet de recherche international bilatéral." },
                  { title: "Projet de recherche intersectoriel.", value: "Projet de recherche intersectoriel." },
                  { title: "Projet de recherche sectoriel.", value: "Projet de recherche sectoriel." },
                ],
              },
            },
            {
              title: "Nombre",
              name: "number",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            },
          ],
        },
      ],
    },
    {
      name: "specialProjects",
      title: "Projet de recherche spécifique",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Project",
              name: "project",
              type: "string",
              options: {
                list: [
                  { title: "le rayonnement de l'établissement.", value: "le rayonnement de l'établissement." },
                  { title: "la recherche appliquée et recherche développement,", value: "la recherche appliquée et recherche développement," },
                  { title: "la formation doctorale.", value: "la formation doctorale." },
                ],
              },
            },
            {
              title: "Nombre",
              name: "number",
              type: "number",
              validation: (Rule) => Rule.required().min(1),
            },
          ],
        },
      ],
    },
    {
      name: "members",
      title: "Liste exhaustive des membres permanents de l'équipe",
      type: "array",
      of: [{ type: "reference", to: [{ type: "member" }] }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "docMembers",
      title: "  Liste exhaustive des doctorants membres de l'équipe",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Member",
              name: "docteur",
              type: "reference",
              to: [{ type: "member" }],
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Nom et Prénom du ou des encadreurs",
              name: "encadreurs",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: "keywords",
      title: "Mots clés",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
});
