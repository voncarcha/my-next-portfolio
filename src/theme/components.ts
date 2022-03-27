import { baseStyle } from './../../node_modules/@chakra-ui/avatar/src/avatar';
import { darken, mode, whiten } from '@chakra-ui/theme-tools';

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: '18px',
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Button: {
    variants: {
      primary: (props: any) => ({
        bg: 'primary',
        color: 'white',
        _hover: {
          bg: mode(darken('primary', 20), whiten('primary', 20))(props),
          boxShadow: 'md',
        },
      }),
    },
  },
};

export default components;
