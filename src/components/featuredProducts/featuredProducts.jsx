import Container from '../container';
import { featuredProducts } from './data';
import FeaturedProduct from './featuredProduct';
import Header from './Header';
import scrollBar from '../../../public/scrollbar.png';
import Image from 'next/image';

const FeaturedProducts = () => {
  return (
    <Container className='py-10'>
      <Header />
      <div className='grid grid-cols-5 gap-8 mt-20'>
        {featuredProducts.map((product) => {
          return <FeaturedProduct key={product.name} {...product} />;
        })}
      </div>
      <div className='w-full flex justify-center items-center mt-12'>
        <Image src={scrollBar} alt='image scrollbar' className='w-24' />
      </div>
    </Container>
  );
};
export default FeaturedProducts;
