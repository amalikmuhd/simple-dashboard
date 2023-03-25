import { Box, Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

const MainContent = () => {
  return (
    <Box w={"94%"} position="absolute" top={"3%"} marginLeft={10}>
      <Box w={"94%"} borderColor="gray.300" borderWidth={1} borderRadius="10">
        <TableContainer>
          <Table variant="simple" size={"sm"} p={0} m={0}>
            <Thead>
              <Tr>
                <Th>Native Title</Th>
                <Th>Site URL</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td fontSize={12} margin={0}>
                  Naruto
                </Td>
                <Td>
                  <a href={"https://naruto.com"} target="_blank" rel="noreferrer">
                    https://naruto.com
                  </a>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="flex-end" w="94%" marginTop="2" gap={4}>
        <Button colorScheme="blue" disabled p={2} h={8}>
          Previous
        </Button>
        <Button colorScheme="blue" p={2} h={8}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default MainContent;
