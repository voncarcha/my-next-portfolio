import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { IWork, WORKS } from 'common/constants';
import Work from 'components/Work';
import Content from 'layout/Content';
import Footer from 'components/Footer';

interface Props {
  work: IWork;
}

const WorkPage: NextPage<Props> = ({ work }) => {
  return (
    <Content>
      <Work work={work} />
      <Footer />
    </Content>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = WORKS.map((i) => {
    return {
      params: {
        slug: i.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const work = WORKS.find((i) => i.slug === params?.slug);

  return { props: { work } };
};

export default WorkPage;
