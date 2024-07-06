import { products } from './data';
import { Product } from './main';
import { Container } from '../main';

const PromotedProducts = () => {
  return (
    <Container className='grid grid-cols-3 gap-9 my-12'>
      {products.map((product) => {
        return (
          <div key={product.id} className='even:mt-44'>
            <Product {...product} />
          </div>
        );
      })}
    </Container>
  );
};
export default PromotedProducts;
