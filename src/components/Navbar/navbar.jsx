import Link from 'next/link';
import { Container, Logo } from '../main';
import { NavButtons } from './main';

const Navbar = () => {
  return (
    <div className='h-20 bg-[#FEFAFB] flex items-center sm:h-24'>
      <Container className='flex justify-between items-center '>
        <Link href='/'>
          <Logo />
        </Link>
        <Link
          href='/'
          className='hidden text-green-sec font-bold gap-2 sm:flex'
        >
          Products
        </Link>
        <div className='flex items-center gap-16'>
          <NavButtons />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
