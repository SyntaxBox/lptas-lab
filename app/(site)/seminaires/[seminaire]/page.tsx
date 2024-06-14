import DownloadImagePDF from "@/components/DownloadImagePDF/DownloadImagePDF";
import PortableBlockRenderer from "@/components/PortableBlockRenderer/PortableBlockRenderer";
import { client } from "@/lib/sanity";
import { Container } from "@/ui";
import { SeminaireQuery } from "@/types";
import { Heading, Text } from "@chakra-ui/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { seminairesData } from "@/dummyData";
type Props = {
  params: {
    seminaire: string;
  };
  searchParams: unknown;
};

async function getSeminaireData(s: string) {
  const query = groq`*[_type == "seminaire" && slug.current == $s][0] {
      title,
      description,
      content,
      "img": img.asset->url,
    }`;
  return await client.fetch<SeminaireQuery | null>(
    query,
    { s },
    {
      next: {
        tags: ["seminaire"],
      },
    }
  );
}

async function page(props: Props) {
  const { seminaire } = props.params;
  // to use real data uncomment the lines below and delete the dummy data lines
  // const data = await getSeminaireData(seminaire);
  const data = seminairesData.filter((s) => s.slug === seminaire)[0]; // dummy
  if (!data) notFound();
  return (
    <main>
      <Container className="flex flex-col gap-5 items-center justify-center w-fit">
        <div className="w-full">
          <Heading>{data.title}</Heading>
          {data.description ? (
            <Text color="GrayText">{data.description}</Text>
          ) : null}
          {data.img && <DownloadImagePDF src={data.img} title={seminaire} />}
        </div>
        {data.img && (
          <Image
            width={1080}
            height={1920}
            className="w-full object-contain max-h-[1024px]"
            alt="seminaire"
            src={data.img}
          />
        )}
        {data.content && <PortableBlockRenderer content={data.content} />}
      </Container>
    </main>
  );
}

export default page;
