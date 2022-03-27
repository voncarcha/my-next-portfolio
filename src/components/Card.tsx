import { Box, Text, GridItem, useColorModeValue } from '@chakra-ui/react';
import { IPortfolio } from 'common/types';
import Image from 'next/image';
import Link from 'next/link';

function Card({ item }: { item: IPortfolio }) {
  return (
    <GridItem w="100%">
      <Link href={`portfolio/${item.slug}`}>
        <a>
          <Box
            h={{ base: '200px', xs: '160px', sm: '200px' }}
            w="100%"
            position="relative"
            borderRadius="5px"
            border="1px solid"
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            overflow="hidden"
            _hover={{ opacity: 0.8 }}
          >
            <Image
              src={item.thumb}
              alt="thumbnail"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Text
            my={2}
            textAlign="center"
            fontSize="sm"
            _hover={{ opacity: 0.8 }}
          >
            {item.title}
          </Text>
        </a>
      </Link>
    </GridItem>
  );
}

export default Card;
