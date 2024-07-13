'use client';

import Container from '../container';
import SingleProductCard from './singleProductCard';
import FilterBox from './filterBox';
import categoryIcon from '../../../public/category-icon.png';
import { useAppContext } from '@/app/context';
import Image from 'next/image';
import { useState } from 'react';

const Products = () => {
  const { isFilterOpen, setIsFilterOpen, productss, fetchProducts, isLoading } =
    useAppContext();
  const [btnActive, setBtnActive] = useState(1);

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
            {[...productss].reverse().map((product, i) => {
              return <SingleProductCard key={product.id} {...product} />;
            })}
          </article>

          <article className='w-full flex justify-center mt-12 '>
            <div className='px-5 py-2 border-2 border-[#BF5428]/50 rounded-lg'>
              {[1, 2, 3].map((item, i) => {
                return (
                  <button
                    onClick={() => {
                      setBtnActive(item);
                      fetchProducts(item);
                    }}
                    key={i}
                    className={`${
                      btnActive === item && 'bg-[#BF5428] text-white '
                    } pt-1 px-3 rounded-md text-lg font-bold`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </article>
        </section>
      </Container>
    </>
  );
};
export default Products;
