import { Container } from "@/ui";
import React from "react";
import HeroFeatured from "../HeroFeatured/HeroFeatured";
import Trends from "../Trends/Trends";
import SmallCard from "../SmallCard/SmallCard";
import { client } from "@/lib/sanity";
import { groq } from "next-sanity";
import { PostQuery } from "@/types";
import { postsData } from "@/dummyData";

async function getPosts(start = 0, end = 8) {
  const query = groq`*[_type == "post"][$start...$end] | order(_createdAt desc) {
      title,
      description,
      "slug": slug.current,
      "thumbnail": thumbnail.asset->url,
      "createdAt": _createdAt,
      "equipe": equipe -> {
        acronym
      }
    }`;
  const data = await client.fetch<Omit<PostQuery, "content">[]>(
    query,
    { start, end },
    {
      next: {
        tags: ["post"],
      },
    }
  );
  return data;
}

async function Hero() {
  // const data = await getPosts();
  // dummy data delete this and uncomment the line above
  const data = postsData; // dummy
  const lastPost = data[0];
  const nextTwoPosts = data.slice(1, 3);
  const rest = data.length > 7 ? data.slice(3) : data.slice(-5);
  return (
    <section className="w-full">
      <Container>
        <div className="flex gap-8 lg:gap-3 flex-col lg:flex-row">
          <div className="w-full aspect-video lg:aspect-auto">
            <HeroFeatured
              href={lastPost.slug}
              image={{
                src: lastPost.thumbnail ?? "/download.jpg",
                alt: lastPost.title + "thumbnail",
              }}
              title={lastPost.title}
              team={lastPost.equipe.acronym}
              date={new Date(lastPost.createdAt)}
              description={lastPost.description}
            />
          </div>
          <div className="flex gap-6 flex-col md:flex-row w-full lg:w-[560px]">
            <div className="lg:w-[300px] flex flex-col gap-8 lg:gap-3 justify-between">
              <SmallCard
                href={nextTwoPosts[0].slug}
                image={{
                  src: nextTwoPosts[0].thumbnail ?? "/download.jpg",
                  alt: nextTwoPosts[0].title + "thumbnail",
                }}
                title={nextTwoPosts[0].title}
                team={nextTwoPosts[0].equipe.acronym}
                date={new Date(nextTwoPosts[0].createdAt)}
                description={nextTwoPosts[0].description}
              />
              <SmallCard
                href={nextTwoPosts[1].slug}
                image={{
                  src: nextTwoPosts[1].thumbnail ?? "/download.jpg",
                  alt: nextTwoPosts[1].title + "thumbnail",
                }}
                title={nextTwoPosts[1].title}
                team={nextTwoPosts[1].equipe.acronym}
                date={new Date(nextTwoPosts[1].createdAt)}
                description={nextTwoPosts[1].description}
              />
            </div>
            <div className="w-full md:w-[460px] lg:w-[260px]">
              <Trends
                trends={rest.map((post) => ({
                  title: post.title,
                  date: new Date(post.createdAt),
                  href: post.slug,
                }))}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
