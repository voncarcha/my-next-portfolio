import { Box, Heading, Flex, Tag } from '@chakra-ui/react';

function Skills() {
  return (
    <Box mt={5} mb={8}>
      <Heading variant="section-title" mb={6}>
        Skills & Tools
      </Heading>
      <Flex flexWrap="wrap">
        <Tag mr={2} mb={2}>
          HTML
        </Tag>
        <Tag mr={2} mb={2}>
          CSS
        </Tag>
        <Tag mr={2} mb={2}>
          Javascript
        </Tag>
        <Tag mr={2} mb={2}>
          React
        </Tag>
        <Tag mr={2} mb={2}>
          Redux
        </Tag>
        <Tag mr={2} mb={2}>
          jQuery
        </Tag>
        <Tag mr={2} mb={2}>
          REST APIs
        </Tag>
        <Tag mr={2} mb={2}>
          GraphQL
        </Tag>
        <Tag mr={2} mb={2}>
          SASS/LESS
        </Tag>
        <Tag mr={2} mb={2}>
          styled-components
        </Tag>
        <Tag mr={2} mb={2}>
          Bootstrap
        </Tag>
        <Tag mr={2} mb={2}>
          Material UI
        </Tag>
        <Tag mr={2} mb={2}>
          Ant Design
        </Tag>
        <Tag mr={2} mb={2}>
          Chakra UI
        </Tag>
        <Tag mr={2} mb={2}>
          Wordpress
        </Tag>
        <Tag mr={2} mb={2}>
          Strapi
        </Tag>
        <Tag mr={2} mb={2}>
          Figma
        </Tag>
        <Tag mr={2} mb={2}>
          Photoshop
        </Tag>
      </Flex>
    </Box>
  );
}

export default Skills;
