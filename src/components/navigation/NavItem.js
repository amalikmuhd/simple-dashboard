import { ListIcon, Link as LinkChakra, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";

const NavItem = ({ item, isActive, collapse }) => {
  const { label } = item;

  if (item.type === "link") {
    const { icon } = item;
    return (
      <Box display="flex" alignItems="center" my={6} justifyContent="center">
        <LinkChakra
          // href=""
          // as={Link}
          gap={1}
          display="flex"
          alignItems="center"
          _hover={{ textDecoration: "none", color: "black" }}
          fontWeight="medium"
          color={isActive ? "black" : "gray.400"}
          w="full"
          justifyContent={!collapse ? "center" : ""}
        >
          <Box bg={collapse ? "gray.100" : ""} justifyContent="center" alignItems="center" w={140} display="flex" p={1}>
            {!collapse && <ListIcon as={icon} fontSize={collapse ? 22 : 30} m="0" />}
            {collapse && (
              <Text fontSize={18} paddingLeft="2">
                {label}
              </Text>
            )}
          </Box>
        </LinkChakra>
      </Box>
    );
  }
  return (
    <Heading
      color="gray.400"
      fontWeight="medium"
      textTransform="uppercase"
      fontSize="sm"
      borderTopWidth={1}
      borderColor="gray.100"
      pt={collapse ? 8 : 0}
      my={6}
    >
      <Text display={collapse ? "flex" : "none"}>{label}</Text>
    </Heading>
  );
};

export default NavItem;
