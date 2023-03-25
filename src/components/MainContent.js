import { Box, Button, Spinner, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { useState } from "react";

const MainContent = () => {
  const query = gql`
    query ($page: Int!, $perPage: Int!) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          perPage
          currentPage
          lastPage
          hasNextPage
        }
        media(type: ANIME, format_in: MOVIE, sort: START_DATE, startDate_greater: 20200000, genre_in: "Action") {
          siteUrl
          title {
            native
          }
        }
      }
    }
  `;

  const [page, setPage] = useState(1);

  const { loading, error, data } = useQuery(query, {
    variables: {
      page: page,
      perPage: 20,
    },
  });

  if (loading) return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />;
  if (error) return `ERORR: ${error.message}`;

  const prevPage = () => {
    setPage((currentPage) => (currentPage -= 1));
  };

  const nextPage = () => {
    setPage((currentPage) => (currentPage += 1));
  };

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
              {data?.Page?.media?.map((data, index) => (
                <Tr key={index}>
                  <Td fontSize={12} margin={0}>
                    {data?.title?.native}
                  </Td>
                  <Td>
                    <a href={data?.siteUrl} target="_blank" rel="noreferrer">
                      {data?.siteUrl}
                    </a>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box display="flex" flexDirection="row" justifyContent="flex-end" w="94%" marginTop="2" gap={4}>
        <Button
          colorScheme="blue"
          onClick={prevPage}
          disabled
          p={2}
          h={8}
          isDisabled={data.Page.pageInfo.currentPage === 1}
        >
          Previous
        </Button>
        <Button colorScheme="blue" p={2} h={8} isDisabled={!data.Page.pageInfo.hasNextPage} onClick={nextPage}>
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default MainContent;
