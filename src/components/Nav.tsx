import { HamburgerIcon } from '@chakra-ui/icons';
import {
  HStack,
  IconButton,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Text,
  VStack,
  Link as NextLink,
  Flex,
  ListIcon,
} from '@chakra-ui/react';
import ThemeToggleButton from 'components/ThemeToggleButton';
import Link from 'next/link';
import { IoMailSharp } from 'react-icons/io5';

function Nav() {
  return (
    <HStack
      position="fixed"
      top={{ base: '10px', sm: '20px' }}
      right={{ base: '10px', sm: '20px' }}
      spacing={2}
      zIndex={10}
    >
      <ThemeToggleButton />
      <Popover>
        <PopoverTrigger>
          <IconButton aria-label="Nav button" icon={<HamburgerIcon />} />
        </PopoverTrigger>
        <Portal>
          <PopoverContent w="100px">
            <PopoverArrow />
            <PopoverBody>
              <VStack spacing={1}>
                <Link href="/">
                  <a>
                    <Text fontSize="sm">About</Text>
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a>
                    <Text fontSize="sm">Portfolio</Text>
                  </a>
                </Link>
                <NextLink
                  href="mailto:voncarcha@gmail.com"
                  _hover={{ textDecoration: 'none' }}
                >
                  <Text fontSize="sm">Contact</Text>
                </NextLink>
              </VStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </HStack>
  );
}

export default Nav;
