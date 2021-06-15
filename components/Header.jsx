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
      pt={{ base: "12", md: "0" }}
    >
      <Box
        as="img"
        src="/gaurav.jpg"
        objectFit="cover"
        boxSize={{ base: "28", md: "24" }}
        rounded="full"
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
    <HStack as="nav" py={{ base: "1", md: "2" }} {...rest}>
      {list.map(({ name, href }) => (
        <NLink href={href} passHref>
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
