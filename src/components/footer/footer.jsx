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
    </footer>
  );
};
export default Footer;
