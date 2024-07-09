'use client';

import Container from '../container';
import { products } from '../productsData';
import SingleProductCard from './singleProductCard';
import FilterBox from './filterBox';
import { SlidersHorizontal } from 'lucide-react';
import { useAppContext } from '@/app/context';

const Products = () => {
  const { isFilterOpen, setIsFilterOpen } = useAppContext();

  return (
    <>
      <button
        className='block mt-4 w-[90%] mx-auto sm:hidden'
        onClick={() => setIsFilterOpen(!isFilterOpen)}
      >
        <SlidersHorizontal />
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
        className={`flex gap-12 mt-2 sm:mt-16 ${
          isFilterOpen && 'fixed sm:relative'
        }`}
      >
        <div className='hidden sm:block sm:w-2/6 lg:w-1/2'>
          <h1 className='text-[1.6rem] text-gray-prim/90 font-bold'>
            Filter Option
          </h1>
          <FilterBox />
        </div>

        <section className='w-full sm:w-4/6 lg:w-4/5'>
          <article className='mt-8 grid gap-5 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3'>
            {products.map((product) => {
              return <SingleProductCard key={product.id} {...product} />;
            })}
          </article>
        </section>
      </Container>
    </>
  );
};
export default Products;
