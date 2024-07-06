'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navData = [
  { title: 'Home', link: '/', icon: '' },
  {
    title: 'Products',
    link: '/products',
    icon: <ChevronDown size={11} strokeWidth={2.5} className='mt-2' />,
  },
  { title: 'Store', link: '/store', icon: '' },
  { title: 'Contact', link: '/contact', icon: '' },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <ul className='flex items-center gap-8'>
      {navData.map((data) => {
        return (
          <li
            key={data.title}
            className={`${
              pathname === data.link
                ? 'text-green-sec font-bold'
                : 'text-gray-prim font-medium'
            }  flex gap-2`}
          >
            <Link href={data.link}>{data.title}</Link>
            {data.icon}
          </li>
        );
      })}
    </ul>
  );
};
export default NavLinks;
