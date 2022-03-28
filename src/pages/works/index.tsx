import type { NextPage } from 'next';
import Content from 'layout/Content';
import { IWork, WORKS } from 'common/constants';
import dynamic from 'next/dynamic';
import Footer from 'components/Footer';

const LazyWork = dynamic<{ works: IWork[] }>(
  () => import('components/Works').then((mod) => mod.Works2),
  {
    ssr: false,
  },
);
const WorksPage: NextPage = () => {
  return (
    <Content>
      <LazyWork works={WORKS} />
      <Footer />
    </Content>
  );
};

export default WorksPage;
