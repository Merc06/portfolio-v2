import { motion } from 'framer-motion';
import banner from '~/assets/images/banner.jpg';
import { container } from '~/constants/variants';

const About = () => {
  return (
    <motion.div
      variants={container}
      initial='hidden'
      animate='show'
      className='h-full flex flex-col lg:grid lg:grid-cols-2'
    >
      <div className='relative'>
        <img src={banner} alt='Banner' className='lg:object-cover lg:object-center lg:h-full' />

        <div className='absolute bottom-5 left-5 bg-secondary/50 rounded-sm py-3 px-5'>
          <h1 className='text-3xl font-bold'>Marc Louie Asoy</h1>
          <small className='opacity-70 text-sm tracking-wide'>Frontend React Developer</small>
        </div>
      </div>

      <div className='p-10 space-y-5 h-full mb-16 overflow-y-auto lg:mb-0 lg:flex lg:flex-col lg:justify-center'>
        <p>
          Hello! I'm <strong>Marc</strong> but my friends call me Merc (my nickname). I have more
          than <strong>4 years of experience</strong> in web development specially in frontend. I
          have also experience using react frameworks such as <strong>RemixJS</strong> and{' '}
          <strong>NextJS</strong> with <strong>tailwindCSS</strong>.
        </p>

        <p>
          When I'm not working, I like to explore the beauty of the Philippines thru motorcycle
          riding. I workout daily as much as possible inorder to maintain the work/life balance.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
