import Link from 'next/link';
import { Container, Logo } from '../main';
import { NavButtons } from './main';

const Navbar = () => {
  return (
    <div className='h-24 bg-[#FEFAFB] flex items-center'>
      <Container className='flex justify-between items-center '>
        <Logo />
        <Link
          href='/'
          className='text-green-sec font-bold hidden gap-2 sm:flex'
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
