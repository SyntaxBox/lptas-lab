import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import React from "react";
import SmallPost from "../SmallPost/SmallPost";
import { Heading } from "@chakra-ui/react";
import { postsData, seminairesData } from "@/dummyData";

async function getLastPosts(max = 6) {
  const query = groq`*[_type == "post"][$start...$end] | order(_createdAt desc) {
      title,
      description,
      "slug": slug.current,
      "createdAt": _createdAt,
    }`;
  const data = await client.fetch<
    {
      title: string;
      description: string;
      slug: string;
      createdAt: string;
    }[]
  >(
    query,
    { start: 0, end: max },
    {
      next: {
        tags: ["post"],
      },
    }
  );
  return data;
}

async function getLastSeminaires(max = 6) {
  const query = groq`*[_type == "seminaire"][$start...$end] | order(_createdAt desc) {
      title,
      description,
      "slug": slug.current,
      "createdAt": _createdAt,
    }`;
  const data = await client.fetch<
    {
      title: string;
      description: string;
      slug: string;
      createdAt: string;
    }[]
  >(
    query,
    { start: 0, end: max },
    {
      next: {
        tags: ["seminaire"],
      },
    }
  );
  return data;
}

type Post = {
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  type: string;
};

export default async function Sidebar() {
  // to use real data uncomment the lines below and delete the dummy data lines
  // let posts = await getLastPosts();
  // let seminaires = await getLastSeminaires();
  let posts = [...postsData, ...postsData]; // dummy
  let seminaires = seminairesData; // dummy
  console.log(seminaires);
  posts = posts.map((obj) => ({ ...obj, type: "publications" }));
  seminaires = seminaires.map((obj) => ({ ...obj, type: "seminaires" }));

  const combined = [...posts, ...seminaires].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ) as Post[];
  return (
    <div className="flex flex-col p-2">
      <Heading as={"h2"} className="text-2xl font-bold mb-2">
        Derniers articles
      </Heading>
      <div className="flex flex-col gap-3">
        {combined.map(({ title, description, slug, createdAt, type }, i) => (
          <SmallPost
            title={title}
            description={description}
            date={new Date(createdAt)}
            href={`${type}/${slug}`}
            type={type}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
