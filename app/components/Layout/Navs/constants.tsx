// Icons
import {
  HiHomeModern,
  HiUser,
  HiClipboardDocumentList,
  HiEnvelope,
} from 'react-icons/hi2/index.js';
import { TNav } from './types';

export const navs: TNav[] = [
  {
    name: 'home',
    path: '/',
    icon: <HiHomeModern size='20' />,
  },
  {
    name: 'about',
    path: '/about',
    icon: <HiUser size='20' />,
  },
  {
    name: 'services',
    path: '/services',
    icon: <HiClipboardDocumentList size='20' />,
  },
  {
    name: 'contacts',
    path: '/contacts',
    icon: <HiEnvelope size='20' />,
  },
];
