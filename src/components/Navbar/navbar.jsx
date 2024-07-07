import { Container, Logo } from '../main';
import { NavButtons, NavLinks } from './main';

const Navbar = () => {
  return (
    <div className='h-24 bg-[#FEFAFB] flex items-center'>
      <Container className='flex justify-between items-center '>
        <Logo />
        <div className='flex items-center gap-16'>
          <NavLinks />
          <NavButtons />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
