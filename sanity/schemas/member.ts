import { domains, institutions } from "@/data";
import { IconUserFilled } from "@tabler/icons-react";
import { defineType } from "sanity";

export const memberSchema = defineType({
  name: "member",
  title: "Members",
  type: "document",
  icon: IconUserFilled,
  preview: {
    select: {
      title: "name", // Combine name and surname for the document title
      subtitle: "surname", // Optionally, use surname as subtitle
      // Other fields to include in the preview
      // ...
    },
  },
  fields: [
    {
      name: "marital",
      title: "M. / Mme",
      type: "string",
      initialValue: "Mr",
      options: {
        list: [
          { title: "Mr", value: "Mr" },
          { title: "Mme", value: "Mme" },
          { title: "Melle", value: "Melle" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "surname",
      title: "Prénom",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "birthday",
      title: "Date de Nais",
      type: "date",
    },
    {
      name: "lastDiploma",
      title: "Dernier Diplôme",
      type: "string",
      initialValue: "Doc. D'état",
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: "Doc. D'état", value: "Doc. D'état" },
          { title: "Doctorat", value: "Doctorat" },
          { title: "DESM", value: "DESM" },
          { title: "Magister", value: "Magister" },
          { title: "DEMS", value: "DEMS" },
          { title: "Master", value: "Master" },
        ],
      },
    },
    {
      name: "grade",
      title: "Grade",
      type: "string",
      initialValue: "Pr",
      options: {
        list: [
          { title: "Pr", value: "Pr" },
          { title: "Doc", value: "Doc" },
          { title: "MAB, Doc.", value: "MAB, Doc." },
          { title: "MAA, Doc.", value: "MAA, Doc." },
          { title: "MAB", value: "MAB" },
          { title: "MAA", value: "MAA" },
          { title: "MCB", value: "MCB" },
          { title: "MCA", value: "MCA" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "domain",
      title: "Domaine",
      type: "string",
      initialValue: "Physique et Astronomie",
      options: {
        list: domains
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "attachmentStructure",
      title: "Structure de rattachement",
      type: "string",
      initialValue: "U. Constantine-1-",
      options: {
        list: institutions
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email(),
    },
  ],
});
