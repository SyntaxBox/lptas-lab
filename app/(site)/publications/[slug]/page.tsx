import PortableBlockRenderer from "@/components/PortableBlockRenderer/PortableBlockRenderer";
import { client } from "@/lib/sanity";
import { Container, Description } from "@/ui";
import { PostQuery } from "@/types";
import { DateUtils } from "@/utils";
import { Heading, Text } from "@chakra-ui/react";
import { IconClock } from "@tabler/icons-react";
import { groq } from "next-sanity";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { postsData } from "@/dummyData";

type Props = {
  params: {
    slug: string;
  };
  searchParams: unknown;
};

async function getPostData(s: string) {
  const query = groq`*[_type == "post" && slug.current == $s][0] {
      title,
      description,
      "createdAt": _createdAt,
      "equipe": equipe -> {
        acronym,
        "slug": slug.current
      },
      'collaborators': collaborators[]-> {
      "name": name,
      "surname": surname,
    },
      "slug": slug.current,
      content,
    }`;
  return await client.fetch<PostQuery | null>(
    query,
    { s },
    {
      next: {
        tags: ["post"],
      },
    }
  );
}

async function page(props: Props) {
  const { slug } = props.params;
  // to use real data uncomment the lines below and delete the dummy data lines
  // const data = await getPostData(slug);
  const data = postsData.filter((p) => p.slug === slug)[0]; // dummy
  if (!data) notFound();
  data.collaborators = data.collaborators || [];
  return (
    <main>
      <Container
        className="flex flex-col gap-5 items-center justify-center w-fit"
        style={{ maxWidth: "896px" }}
      >
        <div className="w-full">
          <Heading>{data.title}</Heading>
          <p className="bg-sky-500/30 capitalize w-fit py-2 px-4 rounded-full flex gap-3 text-sm  my-4">
            <Link
              href={`/equipes/${data.equipe.slug}`}
              className="font-bold text-sky-700 hover:underline"
            >
              {data.equipe.acronym}
            </Link>
            <span className="uppercase flex items-center gap-1">
              <IconClock size={16} />
              {DateUtils.stringify(new Date(data.createdAt))}
            </span>
          </p>
          <Description>{data.description}</Description>
          {data.collaborators.length > 0 && (
            <Text fontSize={20}>
              <b>Collaborateurs</b>:
              {data.collaborators.map(
                (collaborator, i) =>
                  `${i !== 0 ? ", " : ""}${collaborator.name} ${
                    collaborator.surname
                  }`
              )}
              .
            </Text>
          )}
        </div>
        <PortableBlockRenderer content={data.content} />
      </Container>
    </main>
  );
}

export default page;
