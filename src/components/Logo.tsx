import { Box, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';

function Logo() {
  const { colorMode } = useColorMode();

  return (
    <Box
      height={{ base: '80px', sm: '150px' }}
      width={{ base: '80px', sm: '150px' }}
      position="relative"
      m="auto"
    >
      {colorMode === 'light' ? (
        <Image src="/assets/images/logo-dark.svg" alt="logo" layout="fill" />
      ) : (
        <Image src="/assets/images/logo-light.svg" alt="logo" layout="fill" />
      )}
    </Box>
  );
}

export default Logo;
