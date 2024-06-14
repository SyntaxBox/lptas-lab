import { MemberQuery } from "@/types";
import { DateUtils } from "@/utils";
import { Heading, Text } from "@chakra-ui/react";
import { IconClock } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

function PostCard({
  title,
  team,
  description,
  publishedAt,
  href,
  collaborators = [],
}: {
  team?: { title: string; href: string };
  publishedAt: Date;
  title: string;
  description: string;
  href: string;
  collaborators?: MemberQuery[];
}) {
  return (
    <div className="flex flex-col sm:flex-row border bg-slate-100 border-slate-300 hover:border-slate-400 rounded-lg overflow-hidden w-full">
      <div className="p-3 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row gap-3 md:items-center">
          <p className="bg-sky-500/30 capitalize w-fit py-2 px-4 rounded-full flex gap-3 text-sm whitespace-nowrap">
            {team && (
              <Link
                href={`/equipes/${team.href}`}
                className="font-bold text-sky-700 hover:underline"
              >
                {team.title}
              </Link>
            )}
            <span className="uppercase flex items-center gap-1">
              <IconClock size={16} />
              {DateUtils.stringify(publishedAt)}
            </span>
          </p>
          {collaborators && collaborators.length > 0 && (
            <Text noOfLines={1}>
              <b>Collaborateurs :</b>
              {collaborators.map(
                (collaborator, i) =>
                  `${i !== 0 ? ", " : ""}${collaborator.name} ${
                    collaborator.surname
                  }`
              )}
            </Text>
          )}
        </div>
        <Heading
          className="hover:text-sky-600 capitalize"
          as="h3"
          fontSize={24}
          noOfLines={2}
        >
          <Link href={href}>{title}</Link>
        </Heading>
        <Text size="md" className="line-clamp-2 text-ellipsis w-full">
          {description}
        </Text>
      </div>
    </div>
  );
}

export default PostCard;
