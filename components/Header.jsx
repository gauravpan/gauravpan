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

export default function Header({ activeLink }) {
  return (
    <Stack
      as="section"
      alignItems={{ base: "center", md: "start" }}
      pt={{ base: "3rem", md: "0px" }}
    >
      <Box
        as="img"
        src="/gaurav.jpg"
        objectFit="cover"
        boxSize={{ base: "7rem", md: "6rem" }}
        rounded="100%"
        transform="rotate(5deg)"
        alt="Gaurav Pandey"
      />
      <Heading size="lg">Gaurav Pandey</Heading>
      <Nav active={activeLink} />
    </Stack>
  );
}

export function Nav({ active, ...rest }) {
  const list = [
    { name: "about", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "thoughts", href: "/thoughts" },
  ];
  return (
    <HStack as="nav" py={{ base: "0.25rem", md: "0.5rem" }} {...rest}>
      {list.map(({ name, href }) => (
        <NLink href={href} passHref key={name}>
          <Link
            textTransform="uppercase"
            fontWeight="medium"
            fontSize="sm"
            color={active === name ? "gray.900" : "gray.500"}
            _hover={{ color: "gray.900" }}
          >
            {name}
          </Link>
        </NLink>
      ))}
    </HStack>
  );
}
