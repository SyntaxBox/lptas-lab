import { Heading, Text } from "@chakra-ui/react";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import React from "react";
import { PortableTextBlock } from "sanity";

const components = {
  block: {
    normal: ({ children }: any) => {
      return <Text className="my-2">{children}</Text>;
    },
    h1: ({ children }: any) => {
      return (
        <Heading as={"h2"} className="font-bold mt-8 mb-2 text-4xl">
          {children}
        </Heading>
      );
    },
    h2: ({ children }: any) => {
      return (
        <Heading as={"h2"} className="font-bold mt-8 mb-2 text-3xl">
          {children}
        </Heading>
      );
    },
    h3: ({ children }: any) => {
      return (
        <Heading as={"h3"} className="font-bold mt-8 mb-2 text-2xl">
          {children}
        </Heading>
      );
    },
    h4: ({ children }: any) => {
      return (
        <Heading as={"h4"} className="font-bold mt-8 mb-2 text-xl">
          {children}
        </Heading>
      );
    },
    h5: ({ children }: any) => {
      return (
        <Heading as={"h5"} className="font-bold mt-8 mb-2 text-lg">
          {children}
        </Heading>
      );
    },
    h6: ({ children }: any) => {
      return (
        <Heading as={"h6"} className="font-bold mt-8 mb-2 text-md">
          {children}
        </Heading>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const { href } = value;
      return (
        <Link href={href} className="hover:underline">
          {children}
        </Link>
      );
    },
    strong: ({ children }: any) => {
      return <strong className="text-lg font-bold">{children}</strong>;
    },
    em: ({ children }: any) => {
      return (
        <em className="bg-slate-200 p-1 rounded mt-2 monospace not-italic">
          {children}
        </em>
      );
    },
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => <ul className="mt-xl">{children}</ul>,
    number: ({ children }: any) => <ol className="mt-lg">{children}</ol>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }: any) => (
      <li className="list-disc ml-8">{children}</li>
    ),
  },
};

export default function PortableBlockRenderer({
  content,
}: {
  content: PortableTextBlock[];
}) {
  return (
    <section className="w-full" id="page-content">
      <PortableText value={content} components={components} />
    </section>
  );
}
