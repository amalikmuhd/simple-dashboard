import { Flex, HStack, IconButton } from "@chakra-ui/react";
import SideBar from "./components/navigation/Sidebar";
import MainContent from "./components/MainContent";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { useState } from "react";

function App() {
  const [close, setClose] = useState(false);

  return (
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
      <Flex
        as="aside"
        w="full"
        h={"95vh"}
        maxW={close ? 200 : 100}
        bg="white"
        alignItems="center"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
        borderRadius="10"
      >
        <SideBar collapse={close} />
      </Flex>
      <Flex
        as="main"
        w="full"
        h={"95vh"}
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="10"
      >
        <IconButton
          aria-label="Menu Collapse"
          icon={<TbLayoutSidebarLeftCollapse size={30} />}
          position="absolute"
          top={6}
          left={2}
          onClick={() => setClose(!close)}
        />

        <MainContent />
      </Flex>
    </HStack>
  );
}

export default App;
