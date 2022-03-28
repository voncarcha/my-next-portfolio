import MotionBox from 'components/MotionBox';

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return (
    <MotionBox
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{
        duration: 0.5,
        easings: ['easeIn', 'easeOut'],
      }}
    >
      {children}
    </MotionBox>
  );
};

export default Content;
