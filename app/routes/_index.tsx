import { AnimatePresence, motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { container } from '~/constants/variants';

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        className='flex items-center h-full justify-center flex-col gap-3'
      >
        <small className='text-xs text-gray-500 tracking-widest'>Portfolio by</small>

        <h1 className='text-[5em] uppercase text-accent font-bold leading-none'>
          M<span className='text-white'>a</span>
          rc
        </h1>

        <p className='text-gray-400'>
          <TypeAnimation
            sequence={['Frontend', 3000, 'React', 4000, 'RemixJS', 3000, 'NextJS', 3000]}
            wrapper='span'
            speed={1}
            deletionSpeed={1}
            repeat={Infinity}
            className='font-serif text-white'
          />
          Developer
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
