import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  CardBody,
  CardFooter,
  Box,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

function MemberCard({
  name,
  avatar,
  specialty,
}: {
  avatar?: string;
  name?: string;
  backface?: boolean;
  specialty?: string;
}) {
  return (
    <Card boxShadow="0px 0px 13px 1px #cacaca" maxW="full" height="460px">
      {name && avatar && specialty ? (
        <>
          <CardHeader>
            <Flex>
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name={name} src={avatar} />

                <Box>
                  <Heading size="sm">{name}</Heading>
                  <Text>{specialty}</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody className="flex flex-col gap-3">
            <Heading as="h4" size="md">
              Lorem ipsum dolor sit consectetur
            </Heading>
            <Text>
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
            <Text size="xs" fontSize={16} fontWeight="300" color="gray.600">
              With Chakra UI, I wanted to sync the speed of development with the
              speed of design. I wanted the developer to be just as excited as
              the designer to create a screen.
            </Text>
          </CardBody>

          <CardFooter
            justify="space-between"
            flexWrap="wrap"
            sx={{
              "& > button": {
                minW: "136px",
              },
            }}
          ></CardFooter>
        </>
      ) : (
        <>
          <CardHeader>
            <Heading size="sm">Lorem Ipsum:</Heading>
          </CardHeader>
          <CardBody className="flex flex-col gap-3">
            <UnorderedList>
              <ListItem>Lorem ipsum dolor sit amet</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
              <ListItem>Integer molestie lorem at massa</ListItem>
              <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            </UnorderedList>
          </CardBody>
        </>
      )}
    </Card>
  );
}

export default MemberCard;
