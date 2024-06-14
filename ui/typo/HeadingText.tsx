import { Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

export function HeadingText({
  heading,
  text,
}: {
  heading: string;
  text: ReactNode;
}) {
  return (
    <div className="flex gap-6 flex-wrap my-2">
      <Heading as="h3" size="md" className="capitalize">
        {heading}
      </Heading>
      {typeof text === "string" ? (
        <Text className="capitalize text-lg" color="MenuText">
          {text}
        </Text>
      ) : (
        <>{text}</>
      )}
    </div>
  );
}
