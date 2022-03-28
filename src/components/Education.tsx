import { Box, Text, Heading, Flex } from '@chakra-ui/react';

const Education: React.FC = () => {
  return (
    <Box mt={5} mb={8}>
      <Heading variant="section-title" mb={6}>
        Education
      </Heading>
      <Flex flexDirection={{ base: 'column', sm: 'row' }} mb={2}>
        <Box w="120px" mr={4}>
          <Text fontWeight={700} fontSize="sm">
            2008 - 2013
          </Text>
        </Box>
        <Box>
          <Text fontSize="sm">
            Lyceum of the Philippines University, Cavite.
          </Text>
          <Text fontSize="sm">
            Bachelor of Science in Information Technology.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Education;
