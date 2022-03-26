import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import config from './config';
import breakpoints from './breakpoints';
import styles from './styles';
import components from './components';
import fonts from './fonts';
import colors from './colors';

const overrides = {
  config,
  breakpoints,
  fonts,
  styles,
  colors,
  components,
};

const theme = extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: 'teal',
  }),
);

export default theme;
