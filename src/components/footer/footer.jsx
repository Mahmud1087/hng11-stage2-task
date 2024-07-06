import Container from '../container';
import {
  AboutUs,
  CompanyInfo,
  HelpAndInfo,
  Newsletter,
  ProductCategories,
} from './main';

const Footer = () => {
  return (
    <footer className='pt-20 pb-10'>
      <Container className='flex justify-between'>
        <CompanyInfo />
        <div className='flex gap-14'>
          <ProductCategories />
          <HelpAndInfo />
          <AboutUs />
        </div>
        <Newsletter />
      </Container>
      <hr className='w-full mt-8' />
      <p className='text-gray-prim/70 text-[0.94rem] font-medium tracking-[0.3rem] text-center mt-6'>
        davisonmiracle98@gmailcom
      </p>
    </footer>
  );
};
export default Footer;
