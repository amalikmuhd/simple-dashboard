import { Box, Flex, IconButton, Img } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import logo from "../../assets/ge-logo-resizeimage.png";
import logo1 from "../../assets/logo1.png";

const LogoSearchBar = ({ collapse }) => {
  return (
    <Flex w="full" alignItems="center" justifyContent="space-between" flexDirection="row" gap={4}>
      <Box display="flex" alignItems="center" justifyContent={"center"} gap={1} paddingLeft="2">
        {!collapse && <Img src={logo1} alt="just logo" marginRight={"2"} marginBottom="4" />}
        {collapse && <Img src={logo} alt="full-logo-withn-text" />}
      </Box>
      {collapse && (
        <IconButton
          aria-label="Search"
          variant="ghost"
          icon={<AiOutlineSearch />}
          fontSize={16}
          color="gray.400"
          borderRadius="50%"
        />
      )}
    </Flex>
  );
};

export default LogoSearchBar;
