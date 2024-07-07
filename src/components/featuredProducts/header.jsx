import prevBtn from '../../../public/prev-btn.png';
import nextBtn from '../../../public/next-btn.png';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <h1 className='text-[1.6rem] text-gray-prim font-bold'>
        Featured Categories
      </h1>
      <div className='flex gap-4'>
        <aside className='w-9 h-9 cursor-pointer'>
          <Image
            src={prevBtn}
            alt='previous button icon'
            className='w-full h-full'
          />
        </aside>
        <aside className='w-9 h-9 cursor-pointer'>
          <Image
            src={nextBtn}
            alt='next button icon'
            className='w-full h-full'
          />
        </aside>
      </div>
    </header>
  );
};
export default Header;
