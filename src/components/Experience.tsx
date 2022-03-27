import { Box, Text, Heading, Flex } from '@chakra-ui/react';

function Experience() {
  return (
    <Box mt={5} mb={8}>
      <Heading variant="section-title" mb={6}>
        Work Experience
      </Heading>
      <Flex flexDirection={{ base: 'column', sm: 'row' }} mb={2}>
        <Box w="120px" mr={4}>
          <Text fontWeight={700} fontSize="sm">
            2021 - Present
          </Text>
        </Box>
        <Text fontSize="sm">GovFriend / Cogburn Wire</Text>
      </Flex>
      <Flex flexDirection={{ base: 'column', sm: 'row' }} mb={2}>
        <Box w="120px" mr={4}>
          <Text fontWeight={700} fontSize="sm">
            2015 - 2021
          </Text>
        </Box>
        <Text fontSize="sm">iStack Holdings / iStack Conferences </Text>
      </Flex>
      <Flex flexDirection={{ base: 'column', sm: 'row' }} mb={2}>
        <Box w="120px" mr={4}>
          <Text fontWeight={700} fontSize="sm">
            2013 - 2015
          </Text>
        </Box>
        <Text fontSize="sm">Code Ninja</Text>
      </Flex>
    </Box>
  );
}

export default Experience;
