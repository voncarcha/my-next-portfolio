import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { IWork } from 'common/constants';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  work: IWork;
}

const Card: React.FC<Props> = ({ work }) => {
  return (
    <Link href={`/works/${work.slug}`}>
      <a>
        <Box
          w="100%"
          position="relative"
          borderRadius="5px"
          border="1px solid"
          borderColor={useColorModeValue('gray.300', 'gray.700')}
          overflow="hidden"
          _hover={{ opacity: 0.8 }}
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
        <Text my={2} textAlign="center" fontSize="sm" _hover={{ opacity: 0.8 }}>
          {work.title}
        </Text>
      </a>
    </Link>
  );
};

export default Card;
