import "@fontsource/oswald/700.css";
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/700.css"
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from 'theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;