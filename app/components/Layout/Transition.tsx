import { motion } from 'framer-motion';
import { MLogo } from '../Icons';

// Variants
const transition = {
  initial: {
    x: '100%',
    height: '100%',
  },
  animate: {
    x: '200%',
    width: '200%',
    transition: { delay: 1.8 },
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },
};

const Transition = () => {
  return (
    <motion.div
      className='fixed flex items-center justify-center top-0 bottom-0 right-full w-full h-full z-30 bg-secondary'
      variants={transition}
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ type: 'tween' }}
    >
      <MLogo className='w-32' />
    </motion.div>
  );
};

export default Transition;
