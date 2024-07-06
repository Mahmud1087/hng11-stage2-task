import { Container, Logo } from '../main';
import { NavButtons, NavLinks } from './main';

const Navbar = () => {
  return (
    <Container className='flex justify-between items-center h-24'>
      <Logo />
      <div className='flex items-center gap-16'>
        <NavLinks />
        <NavButtons />
      </div>
    </Container>
  );
};
export default Navbar;
