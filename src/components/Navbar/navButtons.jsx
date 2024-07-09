'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useAppContext } from '@/app/context';

const NavButtons = () => {
  const { cartData } = useAppContext();

  return (
    <div className='flex items-center gap-3'>
      <Link
        href='cart'
        className='relative flex items-center justify-center w-fit h-11 px-2 rounded-md bg-transparent border-2 border-green-prim transition-all text-green-sec hover:text-white hover:bg-green-sec'
      >
        <ShoppingCart />
        <span className='absolute -top-3 -right-1 text-white  px-2 rounded-full bg-[#BF5428]'>
          {cartData.length}
        </span>
      </Link>

      <Link
        href='/'
        className='w-32 h-11 flex items-center justify-center rounded-md bg-green-sec text-white border-2 border-green-sec transition-all hover:bg-transparent hover:text-green-sec hover:text-semibold'
      >
        Shop now
      </Link>
    </div>
  );
};
export default NavButtons;
