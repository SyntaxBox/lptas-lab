import { IconCalendarTime } from "@tabler/icons-react";
import { defineType } from "sanity";
export const seminaireSchema = defineType({
  name: "seminaire",
  title: "Séminaires",
  type: "document",
  icon: IconCalendarTime,
  fields: [
    {
      name: "title",
      title: "Titre",
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
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "img",
      title: "Séminaire",
      type: "image",
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
  ],
});
