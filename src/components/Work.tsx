import { ArrowForwardIcon, ChevronRightIcon } from '@chakra-ui/icons';
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
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { IWork } from 'common/constants';
import Head from 'next/head';

interface Props {
  work: IWork;
}

const Work: React.FC<Props> = ({ work }) => {
  return (
    <Box mb={8}>
      <Head>
        <title>Work - {work.title}</title>
      </Head>
      <Box
        w="100%"
        position="relative"
        borderRadius="5px"
        border="1px solid"
        borderColor={useColorModeValue('gray.300', 'gray.700')}
        overflow="hidden"
        mb={6}
        sx={{
          '> span': {
            display: 'block !important',
          },
        }}
      >
        <Image
          src={work.thumb}
          alt={work.title}
          priority
          width="705"
          height="444"
        />
      </Box>
      <Flex alignItems="center" mb={4}>
        <NextLink href="/works">
          <a>
            <Heading
              fontSize={{ base: '16px', sm: '18px' }}
              as="h3"
              color="teal.400"
            >
              Works
            </Heading>
          </a>
        </NextLink>
        <ChevronRightIcon mx="5px" />
        <Heading fontSize={{ base: '16px', sm: '18px' }} as="h3">
          {work?.title}
        </Heading>
      </Flex>
      <Text as="h3" fontSize="sm" mb={5}>
        {work?.description}
      </Text>
      <Link href={work?.url} isExternal _hover={{ textDecoration: 'none' }}>
        <Button size="sm" rightIcon={<ArrowForwardIcon />}>
          VISIT SITE
        </Button>
      </Link>
      <Text fontSize="12px" fontWeight={700} mt={4} mb={2} color="green.500">
        RESPONSIBILITES:
      </Text>
      <List spacing={1}>
        {work?.responsibilites.map((i, index) => (
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
        {work?.tech.map((i, index) => (
          <Tag mr={2} mb={2} key={index}>
            {i}
          </Tag>
        ))}
      </Flex>
    </Box>
  );
};

export default Work;
