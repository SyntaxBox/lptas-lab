import { LoadMorePosts } from "@/ui";
import React from "react";
import PostCard from "../PostCard/PostCard";
import { client } from "@/lib/sanity";
import { PostQuery } from "@/types";
import { groq } from "next-sanity";
import { Heading } from "@chakra-ui/react";
import Link from "next/link";
import { postsData } from "@/dummyData";

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

async function Posts(
  props: JSX.IntrinsicElements["div"] & { equipe?: string }
) {
  // to use real data uncomment the lines below and delete the dummy data lines
  // const posts = await getPosts(props.equipe);
  const posts = postsData.slice(0, 3); // dummy
  if (posts.length === 0)
    return (
      <>
        <Heading as={"h2"} className="text-2xl text-center my-10">
          Aucun Publication Trouve :(
        </Heading>
        <Link
          className="text-center block font-bold underline"
          href="/publications"
        >
          Voir Tout les Publications
        </Link>
      </>
    );
  return (
    <div
      {...props}
      className={`flex flex-col items-center justify-center gap-3 py-2 ${props.className}`}
    >
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          href={post.magLink ?? "/publications/" + post.slug}
          team={{ title: post.equipe.acronym, href: post.equipe.slug }}
          publishedAt={new Date(post.createdAt)}
          title={post.title}
          description={post.description}
          collaborators={post.collaborators}
        />
      ))}
      <LoadMorePosts equipe={props.equipe} />
    </div>
  );
}

export default Posts;
