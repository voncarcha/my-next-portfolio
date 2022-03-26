import { Box, Flex, Spacer, Text, useColorMode } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import ThemeToggleButton from 'components/ThemeToggleButton';

function Nav() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      w="100%"
      p={{ base: 4, md: 6 }}
      align="center"
      justify="space-between"
    >
      <Box height="40px" width="40px" position="relative">
        {colorMode === 'light' ? (
          <Image src="/assets/svg/logo-dark.svg" alt="logo" layout="fill" />
        ) : (
          <Image src="/assets/svg/logo-light.svg" alt="logo" layout="fill" />
        )}
      </Box>
      <Flex align="center">
        <Text fontSize={{ base: '14px', sm: '18px' }} px={2}>
          About
        </Text>
        <Text fontSize={{ base: '14px', sm: '18px' }} px={2} mr={4}>
          Works
        </Text>
        <ThemeToggleButton />
      </Flex>
    </Flex>
  );
}

export default Nav;
