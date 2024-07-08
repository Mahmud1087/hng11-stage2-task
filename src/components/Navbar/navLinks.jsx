'use client';

import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navData = [
  { title: 'Home', link: '/' },
  {
    title: 'Products',
    link: '/products',
  },
  { title: 'Cart', link: '/cart' },
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
