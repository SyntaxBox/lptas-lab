"use client";
import PostCard from "@/components/PostCard/PostCard";
import { postsData } from "@/dummyData";
import { client } from "@/lib/sanity";
import { PostQuery } from "@/types";
import { Button } from "@chakra-ui/react";
import { groq } from "next-sanity";
import React, { useState } from "react";

async function getPosts(equipeAcronym?: string, start = 0, end = 6) {
  let query;
  const params = equipeAcronym
    ? {
        equipeAcronym,
        start,
        end,
      }
    : {
        start,
        end,
      };
  if (equipeAcronym)
    query = groq`*[_type == "post" && equipe->slug.current == $equipeAcronym][$start...$end] | order(_createdAt desc) {
      title,
      description,
      "slug": slug.current,
      "createdAt": _createdAt,
      "equipe": equipe -> {
        acronym,
        "slug": slug.current
      },
      magLink,
      'collaborators': collaborators[]-> {
        "name": name,
        "surname": surname,
      },
    }`;
  else
    query = groq`*[_type == "post"][$start...$end] | order(_createdAt desc) {
      title,
      description,
      "slug": slug.current,
      "createdAt": _createdAt,
      "equipe": equipe -> {
        acronym,
        "slug": slug.current
      },
      magLink,
      'collaborators': collaborators[]-> {
        "name": name,
        "surname": surname,
      }
    }`;
  const data = await client.fetch<Omit<PostQuery, "content">[]>(query, params, {
    next: {
      tags: ["post"],
    },
  });
  return data;
}

export function LoadMorePosts({ equipe }: { equipe?: string }) {
  const [posts, setPosts] = useState<Omit<PostQuery, "content">[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const BEGIN = 3;
  const JUMP = 3;
  const [start, setStart] = useState(BEGIN);
  const [end, setEnd] = useState(BEGIN + JUMP);

  async function handleFetchMore() {
    // to use real data uncomment the lines below and delete the dummy data lines
    // const data = await getPosts(equipe, start, end);
    const data = postsData.slice(start, end);
    if (data.length === 0) {
      setHasMore(false);
      return;
    }
    setPosts([...posts, ...data]);
    setStart(start + JUMP);
    setEnd(end + JUMP);
  }

  return (
    <>
      {posts.map(({ title, description, slug, createdAt }, i) => {
        return (
          <PostCard
            key={i}
            title={title}
            description={description ?? ""}
            href={"/posts/" + slug}
            publishedAt={new Date(createdAt)}
          />
        );
      })}
      {hasMore && <Button onClick={handleFetchMore}>Charger plus</Button>}
    </>
  );
}
