import { Search } from 'lucide-react';
import Link from 'next/link';

const NavButtons = () => {
  return (
    <div className='flex items-center gap-3'>
      <button className='flex items-center justify-center h-11 w-11 border-2 border-green-sec rounded-md shadow-md transition-all hover:shadow'>
        <Search strokeWidth={1.5} size={22} className='text-green-sec' />
      </button>

      <Link
        href='/products'
        className='w-28 h-11 flex items-center justify-center rounded-md bg-green-sec text-white shadow-md transition-all hover:shadow-sm active:shadow-sm'
      >
        Shop now
      </Link>
    </div>
  );
};
export default NavButtons;
