import Image from 'next/image';
import Container from '../container';
import { products } from '../productsData';
import SingleProductCard from './singleProductCard';
import prevButton from '../../../public/prev-btn.png';
import nextButton from '../../../public/next-btn.png';
import FilterBox from './filterBox';

const productsData = products.filter((prod) => prod.trending === false);

const Products = () => {
  return (
    <Container className='flex gap-12 mt-16'>
      <div className='w-1/5'>
        <h1 className='text-[1.6rem] text-gray-prim/90 font-bold'>
          Filter Option
        </h1>
        <FilterBox />
      </div>

      <section className='w-4/5'>
        <p>Showing 1-15 of 300 Results</p>
        <article className='mt-8 grid grid-cols-3 gap-12'>
          {productsData.map((product) => {
            return <SingleProductCard key={product.id} {...product} />;
          })}
        </article>
        <aside className='flex justify-end gap-7 mb-14 mt-20'>
          <div className='w-8 h-8'>
            <Image
              src={prevButton}
              alt='previous button'
              className='w-full h-full'
            />
          </div>
          <div className='text-gray-prim font-bold text-lg flex gap-3 items-center'>
            <p className='h-8 w-8 flex justify-center items-center rounded-full bg-[#bf5428]/15'>
              1
            </p>
            <p>2</p>
            <p>3</p>
            <p>...</p>
            <p>15</p>
          </div>
          <div className='w-8 h-8'>
            <Image
              src={nextButton}
              alt='previous button'
              className='w-full h-full'
            />
          </div>
        </aside>
      </section>
    </Container>
  );
};
export default Products;
