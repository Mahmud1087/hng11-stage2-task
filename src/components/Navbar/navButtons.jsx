'use client';

import Link from 'next/link';
import { useAppContext } from '@/app/context';
import shoppingCart from '../../../public/shopping-cart.png';
import Image from 'next/image';

const NavButtons = () => {
  const { cartData } = useAppContext();

  return (
    <div className='flex items-center gap-3'>
      <Link
        href='cart'
        className='relative flex items-center justify-center w-10 h-11 px-1 rounded-md bg-transparent border-2 border-green-sec transition-all sm:h-11 sm:px-2'
      >
        <Image src={shoppingCart} alt='shopping cart icon' />
        <span className='absolute -top-3 -right-1 text-white  px-1 rounded-full bg-[#BF5428] sm:px-2'>
          {cartData.length}
        </span>
      </Link>
    </div>
  );
};
export default NavButtons;
