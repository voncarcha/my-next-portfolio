import { Box, Heading, Button, Flex, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Card from './Card';
import { IWork } from 'common/constants';
import Link from 'next/link';
import { ChevronRightIcon } from '@chakra-ui/icons';

interface Props {
  works: IWork[];
}

const WorksGrid: React.FC<Props> = ({ works }) => {
  return (
    <SimpleGrid columns={{ base: 1, xs: 2 }} spacing={4}>
      {works.map((work) => (
        <Card work={work} key={work.slug} />
      ))}
    </SimpleGrid>
  );
};

// Home Page
const Works1: React.FC<Props> = ({ works }) => {
  const { push } = useRouter();

  return (
    <Box mt={5} mb={8}>
      <Heading variant="section-title" mb={6}>
        Works
      </Heading>
      <WorksGrid works={works} />
      <Flex justifyContent="center" mt={4}>
        <Button onClick={() => push('/works')} size="sm">
          See more of my works
        </Button>
      </Flex>
    </Box>
  );
};

// Works Page
const Works2: React.FC<Props> = ({ works }) => {
  return (
    <Box mt={5} mb={8}>
      <Flex alignItems="center" mb={6}>
        <Link href="/">
          <a>
            <Heading
              fontSize={{ base: '16px', sm: '18px' }}
              as="h3"
              color="teal.400"
            >
              Home
            </Heading>
          </a>
        </Link>
        <ChevronRightIcon mx="5px" />
        <Heading fontSize={{ base: '16px', sm: '18px' }} as="h3">
          Works
        </Heading>
      </Flex>
      <WorksGrid works={works} />
    </Box>
  );
};

export { Works1, Works2 };
