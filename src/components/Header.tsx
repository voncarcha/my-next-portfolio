import { Box, Heading } from '@chakra-ui/react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <Box mb={8}>
      <Logo />
      <Heading as="h1" textAlign="center" mb={1} textTransform="uppercase">
        Von Carcha
      </Heading>
      <Heading
        as="p"
        textAlign="center"
        fontSize="12px"
        textTransform="uppercase"
      >
        UI-UX Designer / Front-end Developer
      </Heading>
    </Box>
  );
};

export default Header;
