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

export default function Card({ title, excerpt, slug, isProject, href = "" }) {
  href = isProject ? href : `/${slug}`;
  return (
    <Box>
      <NLink passHref href={href} passHref>
        <Heading as="a" d="block" cursor="pointer" py="0.5rem" size="md">
          {title}
        </Heading>
      </NLink>

      <Text>{excerpt}</Text>
      <Box>
        <NLink passHref href={href}>
          <Link fontSize="sm">
            {isProject ? `Learn more →` : `Read a full article  →`}
          </Link>
        </NLink>
      </Box>
    </Box>
  );
}
