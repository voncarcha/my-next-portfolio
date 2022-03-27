import { Box, Heading, Grid, Button, Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Card from './Card';
import { PORTFOLIO } from 'common/constants';

function Portfolio() {
  const { pathname, push } = useRouter();
  const isHome = pathname === '/';
  const items = isHome ? PORTFOLIO.slice(0, 2) : PORTFOLIO;

  return (
    <Box mt={5} mb={8}>
      <Heading variant="section-title" mb={6}>
        Portfolio
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', xs: 'repeat(2, 1fr)' }}
        gap={4}
      >
        {items.map((item) => (
          <Card item={item} key={item.slug} />
        ))}
      </Grid>
      {isHome ? (
        <Flex justifyContent="center" mt={4}>
          <Button onClick={() => push('/portfolio')}>See more of my works</Button>
        </Flex>
      ) : (
        <Flex justifyContent="center" mt={4}>
          <Button onClick={() => push('/')} variant="outline">
            Go back
          </Button>
        </Flex>
      )}
    </Box>
  );
}

export default Portfolio;
