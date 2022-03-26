import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#edfff8', '#232323')(props),
    },
  }),
};

export default styles;
