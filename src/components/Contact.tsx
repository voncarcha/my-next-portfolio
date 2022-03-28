import {
  Box,
  Flex,
  Heading,
  List,
  ListIcon,
  Text,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { IoMailSharp } from 'react-icons/io5';

const Contact: React.FC = () => {
  return (
    <Box mt={5} mb={8}>
      <Heading variant="section-title" mb={6}>
        Contact
      </Heading>

      <List spacing={1}>
        <ListItem>
          <Link
            href="mailto:voncarcha@gmail.com"
            _hover={{ textDecoration: 'none' }}
          >
            <Flex align="center">
              <ListIcon as={IoMailSharp} color="red.500" fontSize="20px" />
              <Text fontSize="14px">voncarcha@gmail.com</Text>
            </Flex>
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default Contact;
