import React from "react";
import { SeminaireQuery } from "@/types";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import PostCard from "../PostCard/PostCard";
import { seminairesData } from "@/dummyData";

async function getData() {
  const query = groq`*[_type == "seminaire"][$start...$end] | order(_createdAt desc) {
      title,
      description,
      "slug": slug.current,
      "createdAt": _createdAt,
    }`;
  const data = await client.fetch<SeminaireQuery[]>(
    query,
    { start: 0, end: 999 },
    {
      next: {
        tags: ["seminaire"],
      },
    }
  );
  return data;
}

export default async function SeminairesList() {
  // to use real data uncomment the lines below and delete the dummy data lines
  // const list = await getData();
  const list = seminairesData; // dummy
  return (
    <div className="flex items-start flex-col gap-3 my-4">
      {list.map(({ title, description, slug, createdAt }, i) => {
        return (
          <PostCard
            key={i}
            title={title}
            description={description ?? ""}
            href={"/seminaires/" + slug}
            publishedAt={new Date(createdAt)}
          />
        );
      })}
    </div>
  );
}
