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
  const { isFilterOpen, isModalOpen } = useAppContext();

  return (
    <footer
      className={`pt-20 bg-[#fdfdfd] ${isModalOpen && 'hidden'} ${
        isFilterOpen && 'fixed sm:relative'
      }`}
    >
      <Container className='flex flex-col gap-6 sm:gap-16 lg:flex-row lg:justify-between'>
        <CompanyInfo />
        <section className='flex flex-col-reverse gap-6 sm:gap-16 sm:flex-col lg:flex-row '>
          <div className='flex flex-col gap-14 sm:flex-row sm:gap-14'>
            <ProductCategories />
            <HelpAndInfo />
            <AboutUs />
          </div>
          <Newsletter />
        </section>
      </Container>
      <div className=' mt-4 py-6 border-t border-t-gray-prim/20 text-center text-gray-prim'>
        All right reserved by Helendostores
      </div>
    </footer>
  );
};
export default Footer;
