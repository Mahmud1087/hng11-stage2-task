import Link from 'next/link';

const HeroButton = () => {
  return (
    <Link
      href='/products'
      className='w-48 h-10 text-white bg-green-sec rounded-md flex items-center justify-center  border-2 border-green-sec transition-all hover:bg-transparent hover:text-green-sec hover:text-semibold'
    >
      Shop now
    </Link>
  );
};
export default HeroButton;
