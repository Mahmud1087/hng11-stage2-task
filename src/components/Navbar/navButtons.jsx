import searchIcon from '../../../public/search.png';
import Image from 'next/image';
import Link from 'next/link';

const NavButtons = () => {
  return (
    <div className='flex items-center gap-3'>
      <label
        htmlFor='search'
        className='flex items-center px-4 py-2 border-2 border-green-sec rounded-md shadow-md'
      >
        <input
          type='text'
          name='search'
          className='border-none bg-transparent focus:outline-none'
        />

        <button className='flex items-center justify-center'>
          <Image src={searchIcon} alt='search icon' />
        </button>
      </label>

      <Link
        href='/products'
        className='w-28 h-11 flex items-center justify-center rounded-md bg-green-sec text-white border-2 border-green-sec transition-all hover:bg-transparent hover:text-green-sec hover:text-semibold'
      >
        Shop now
      </Link>
    </div>
  );
};
export default NavButtons;
