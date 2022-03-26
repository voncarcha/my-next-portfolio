import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  xs: "400px",
  sm: "600px",
  md: "900px",
  lg: "1200px",
  xl: "1400px",
  "2xl": "1536px",
};

const theme = extendTheme({ config, breakpoints });

export default theme;
