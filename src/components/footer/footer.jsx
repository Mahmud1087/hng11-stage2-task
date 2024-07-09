'use client';

import { useAppContext } from '@/app/context';
import Container from '../container';
import {
  AboutUs,
  CompanyInfo,
  HelpAndInfo,
  Newsletter,
  ProductCategories,
} from './main';

const Footer = () => {
  const { isFilterOpen } = useAppContext();

  return (
    <footer className={`pt-20 pb-10 ${isFilterOpen && 'fixed sm:relative'}`}>
      <Container className='flex flex-col gap-16 sm:flex sm:justify-between'>
        <CompanyInfo />
        <div className='flex flex-col gap-14 sm:flex-row sm:gap-14'>
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
