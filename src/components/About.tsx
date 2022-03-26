import { Box, Text, Heading } from '@chakra-ui/react';
import React from 'react';

function About() {
  return (
    <Box mt={5} mb={8}>
      <Heading as="h1" textAlign="center">
        Von Carcha
      </Heading>
      <Heading as="h2" textAlign="center" fontSize="14px">
        UI/UX - React - Frontend Developer
      </Heading>
      <Text fontSize="14px" mt={3}>
        Exercitation ut tempor qui irure in elit. Ad consequat ullamco eu est ea
        ea velit est enim. In cillum sunt voluptate nulla dolor aliquip nisi
        voluptate officia dolor cupidatat enim nostrud culpa. Est tempor Lorem
        irure non et proident. Incididunt culpa ea ut incididunt laboris qui
        cillum consectetur reprehenderit pariatur irure id.
      </Text>
    </Box>
  );
}

export default About;
