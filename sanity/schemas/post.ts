import { IconFileFilled } from "@tabler/icons-react";
import { defineType } from "sanity";

export const postSchema = defineType({
  name: "post",
  title: "Publications",
  type: "document",
  icon: IconFileFilled,
  fields: [
    {
      name: "title",
      title: "Titre de la publication",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "magLink",
      title: "Lien du publication",
      type: "url",
    },
    {
      name: "description",
      title: "Description de la thématique de recherche de l'équipe",
      type: "text",
      rows: 4,
    },
    {
      name: "equipe",
      title: "L'équipe",
      type: "reference",
      to: [{ type: "team" }],
    },
    {
      name: "collaborators",
      title: "Collaborateurs",
      type: "array",
      of: [{ type: "reference", to: [{ type: "member" }] }],
    },
    {
      name: "content",
      title: "Contenu",
      type: "array",
      of: [
        {
          type: "block",
          marks: {
            annotations: [
              {
                title: "URL",
                name: "link",
                type: "object",
                fields: [
                  {
                    title: "URL",
                    name: "href",
                    type: "url",
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      name: "keywords",
      title: "Mots clés",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
});
