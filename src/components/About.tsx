import { Box, Text, Heading } from '@chakra-ui/react';

const About: React.FC = () => {
  return (
    <Box mt={5} mb={8}>
      <Heading variant="section-title" mb={6}>
        About
      </Heading>
      <Text fontSize="sm" mt={3}>
        I am a Philippine based creative Front-end Developer with a background
        in Design. I enjoy tackling projects from conception to completion but
        thrive mostly at the intersection of Design (UX/UI) and Development.
      </Text>
    </Box>
  );
};

export default About;
