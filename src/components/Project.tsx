import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Heading,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Flex,
  Tag,
  Button,
  Grid,
  Link,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { IPortfolio, PORTFOLIO } from 'common/constants';

function Project({ item }: { item: IPortfolio }) {
  const { push } = useRouter();

  return (
    <Box mb={6}>
      <Box
        h={{ base: '200px', xs: '160px', sm: '400px' }}
        w="100%"
        position="relative"
        borderRadius="5px"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        overflow="hidden"
      >
        {item?.thumb && (
          <Image
            src={item.thumb}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
          />
        )}
      </Box>
      <Heading variant="section-title" mb={6} mt={6}>
        {item?.title}
      </Heading>
      <Text as="h3" fontSize="sm">
        {item?.description}
      </Text>
      <Text fontSize="12px" fontWeight={700} mt={4} mb={2} color="green.500">
        RESPONSIBILITES:
      </Text>
      <List spacing={1}>
        {item?.responsibilites.map((i, index) => (
          <ListItem key={index}>
            <Flex>
              <ListIcon as={ChevronRightIcon} color="green.500" mt={1} />
              <Text fontSize="14px">{i}</Text>
            </Flex>
          </ListItem>
        ))}
      </List>
      <Text fontSize="12px" fontWeight={700} mt={4} mb={2} color="green.500">
        TECH:
      </Text>
      <Flex flexWrap="wrap" mb={5}>
        {item?.tech.map((i, index) => (
          <Tag mr={2} mb={2} key={index}>
            {i}
          </Tag>
        ))}
      </Flex>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <Link href={item?.url} isExternal _hover={{ textDecoration: 'none' }}>
          <Button w="100%">VISIT SITE</Button>
        </Link>
        <Button w="100%" variant="outline" onClick={() => push('/portfolio')}>
          PORTFOLIO
        </Button>
      </Grid>
    </Box>
  );
}

export default Project;
