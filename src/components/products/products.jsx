'use client';

import Container from '../container';
import { products } from '../productsData';
import SingleProductCard from './singleProductCard';
import FilterBox from './filterBox';
import categoryIcon from '../../../public/category-icon.png';
import { useAppContext } from '@/app/context';
import Image from 'next/image';

const Products = () => {
  const { isFilterOpen, setIsFilterOpen, productss } = useAppContext();
  console.log(productss);

  const generalProducts = products.filter(
    (prod) => prod.category === 'general products'
  );

  return (
    <>
      <button
        className='block mt-4 w-[90%] mx-auto sm:hidden'
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <div className='w-8'>
          <Image src={categoryIcon} alt='category icoon' className='w-full' />
        </div>
      </button>

      {isFilterOpen && (
        <section
          className={`absolute mt-[9.5rem] bg-black/40 h-fit top-0 left-0 w-full z-50 sm:hidden`}
        >
          <div className='absolute px-5 w-4/5 bg-white h-fit py-8'>
            <h1 className='text-2xl text-gray-prim font-bold'>Filter Option</h1>
            <FilterBox />
          </div>
        </section>
      )}

      <Container
        className={`flex gap-12 mt-2 sm:flex-col sm:mt-8 mb-12 lg:flex-row ${
          isFilterOpen && 'fixed sm:relative'
        }`}
      >
        <div className='hidden sm:block sm:w-full sm:pt-10 lg:w-1/4'>
          <h1 className='text-[1.6rem] text-gray-prim/90 font-bold'>
            Filter Option
          </h1>
          <FilterBox />
        </div>

        <section className='w-full sm:w-full lg:w-3/4'>
          <article className='mt-8 grid gap-5 sm:grid-cols-2 sm:gap-5 sm:gap-y-14 lg:grid-cols-3'>
            {generalProducts.map((product) => {
              return <SingleProductCard key={product.id} {...product} />;
            })}
          </article>
        </section>
      </Container>
    </>
  );
};
export default Products;
