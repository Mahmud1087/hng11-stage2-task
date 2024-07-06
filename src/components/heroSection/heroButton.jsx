import Link from 'next/link';

const HeroButton = () => {
  return (
    <Link
      href='/products'
      className='w-48 h-10 text-white bg-green-sec rounded-md flex items-center justify-center'
    >
      Shop now
    </Link>
  );
};
export default HeroButton;
