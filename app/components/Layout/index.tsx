import { AnimatePresence, motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import Navs from './Navs';
import Transition from './Transition';
import ParticlesContainer from './ParticlesContainer';
import { useLocation } from '@remix-run/react';

const Layout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode='wait'>
      <motion.div key={pathname} className='w-full h-screen fixed overflow-hidden'>
        <Transition />
        <ParticlesContainer />
        <div className='p-10 h-full w-full'>{children}</div>
        <Navs />
      </motion.div>
    </AnimatePresence>
  );
};

export default Layout;
