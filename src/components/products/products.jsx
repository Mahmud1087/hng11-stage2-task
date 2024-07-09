import Container from '../container';
import { products } from '../productsData';
import SingleProductCard from './singleProductCard';
import FilterBox from './filterBox';

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
        <article className='mt-8 grid grid-cols-3 gap-12'>
          {products.map((product) => {
            return <SingleProductCard key={product.id} {...product} />;
          })}
        </article>
      </section>
    </Container>
  );
};
export default Products;
