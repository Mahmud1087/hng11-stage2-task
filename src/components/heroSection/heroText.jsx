import Image from 'next/image';
import heroArrow from '../../../public/heroArrow.png';

const HeroText = () => {
  return (
    <div className='relative'>
      <h3 className=' uppercase text-orange-prim font-bold'>
        chair collection
      </h3>
      <h1 className='text-[2.6rem] capitalize font-semibold leading-[1.15] text-gray-prim/[76%]'>
        discover excellence at{' '}
        <span className='text-green-sec font-bold'>Timble</span> <br /> store -
        your ultimate shopping
      </h1>
      <p className='text-2xl text-gray-prim mt-2 mb-4'>
        Welcome to Timble Store, where excellence meets every <br /> shopping
        desire! Unwind in excellence
      </p>

      <aside className='absolute top-10 right-2 w-24 h-[5.5rem]'>
        <Image
          src={heroArrow}
          alt='Arrow shape icon'
          className='w-full h-full'
        />
      </aside>
    </div>
  );
};
export default HeroText;
