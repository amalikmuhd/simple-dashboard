import { Box, List, ListItem } from "@chakra-ui/react";
import React from "react";
import LogoSearchBar from "./LogoSearchBar";

import { MdOutlineSpaceDashboard } from "react-icons/md";
import NavItem from "./NavItem";

const SideBar = ({ collapse }) => {
  const items = [
    {
      type: "link",
      label: "Home",
      icon: MdOutlineSpaceDashboard,
      path: "/",
    },
  ];
  return (
    <React.Fragment>
      <Box w="full">
        <LogoSearchBar collapse={collapse} />
        <List>
          {items.map((item, index) => (
            <ListItem key={index}>
              <NavItem item={item} isActive={index === 0} collapse={collapse} />
            </ListItem>
          ))}
        </List>
      </Box>
    </React.Fragment>
  );
};

export default SideBar;
