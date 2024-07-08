import Link from 'next/link';
import { Container } from '../main';
import TrendingProduct from './trendingProduct';
import { trendingProducts } from './data';

const TrendingProducts = () => {
  return (
    <section className='bg-[#FEFAFB] py-20'>
      <Container className='flex flex-col gap-12'>
        <article className='flex justify-between items-center'>
          <h1 className='text-[1.6rem] text-gray-prim font-bold'>
            Trending products for you
          </h1>
          <Link
            href='/products'
            className='w-56 h-10 flex items-center justify-center text-white font-medium rounded-md bg-green-sec hover:bg-transparent border-2 border-green-sec hover:text-green-sec hover:font-semibold transition-all'
          >
            View all products
          </Link>
        </article>
        <div className='grid grid-cols-3 gap-24'>
          {trendingProducts.map((prod) => {
            return <TrendingProduct key={prod.id} {...prod} />;
          })}
        </div>
      </Container>
    </section>
  );
};
export default TrendingProducts;
