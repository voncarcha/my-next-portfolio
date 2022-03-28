import type { NextPage } from 'next';
import About from 'components/About';
import Education from 'components/Education';
import Employment from 'components/Employment';
import Skills from 'components/Skills';
import Contact from 'components/Contact';
import dynamic from 'next/dynamic';
import Content from 'layout/Content';
import Footer from 'components/Footer';
import { IWork, WORKS } from 'common/constants';

const LazyWork = dynamic<{ works: IWork[] }>(
  () => import('components/Works').then((mod) => mod.Works1),
  {
    ssr: false,
  },
);

const HomePage: NextPage = () => {
  return (
    <Content>
      <About />
      <LazyWork works={WORKS.slice(0, 2)} />
      <Employment />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </Content>
  );
};

export default HomePage;
