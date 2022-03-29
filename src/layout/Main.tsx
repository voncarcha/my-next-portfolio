import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import Header from 'components/Header';
import Nav from 'components/Nav';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <title>Von Carcha - My Portfolio</title>
        <meta
          name="description"
          content="I am a Philippine based creative Front-end Developer with a background in Design. I enjoy tackling projects from conception to completion but thrive mostly at the intersection of Design (UX/UI) and Development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container px={{ base: 4, md: 6 }} py={5}>
        <Nav />
        <Header />
        {children}
      </Container>
    </Box>
  );
};

export default Main;
