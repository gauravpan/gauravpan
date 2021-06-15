import {
  HStack,
  Box,
  Link,
  Image,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import NLink from "next/link";

export default function Card({ name, description, slug, isProject }) {
  return (
    <Box>
      <NLink passHref href={`/${slug}`} passHref>
        <Heading as="a" d="block" cursor="pointer" py="2" size="md">
          {name}
        </Heading>
      </NLink>

      <Text>{description}</Text>
      <Box py="2">
        <NLink passHref href={`/${slug}`}>
          <Link fontSize="sm" py="1">
            {isProject ? `Learn more →` : `Read a full article  →`}
          </Link>
        </NLink>
      </Box>
    </Box>
  );
}
