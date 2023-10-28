import { twMerge } from 'tailwind-merge';
import { navs } from './constants';
import { NavLink } from '@remix-run/react';

const Navs = () => {
  return (
    <div className='grid absolute bottom-0 right-0 w-full bg-secondary/10 items-center grid-cols-4 lg:bottom-5 lg:right-5 lg:max-w-xl lg:rounded-full hover:bg-secondary/50 ease-in-out duration-300'>
      {navs.map(({ path, name, icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            twMerge(
              'flex justify-center items-center gap-2 py-5 hover:text-accent ease-in-out duration-300',
              isActive && 'text-accent'
            )
          }
        >
          {icon}
          <p className='text-sm capitalize font-bold hidden lg:inline'>{name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Navs;
