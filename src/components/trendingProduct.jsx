'use client';
import Image from 'next/image';
import { useAppContext } from '@/app/context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { products } from './productsData';

const TrendingProduct = ({ id, img, name, price }) => {
  const { setCartData } = useAppContext();

  const addToCart = () => {
    const product = products.find((prod) => prod.id === id);
    setCartData((prevState) => {
      if (prevState.includes(product)) {
        return prevState;
      }
      return [...prevState, product];
    });
  };

  const addToCartMessage = () => {
    toast.success('Item Added', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  return (
    <div className='w-screen text-gray-prim'>
      <aside className='w-[60vw] sm:w-[35vw] lg:w-full'>
        <Image src={img} alt={name} />
      </aside>
      <h2 className='text-[1.2rem] mt-4 mb-3'>{name}</h2>
      <p className='text-2xl font-bold mb-3'>${price}</p>
      <button
        onClick={() => {
          addToCart();
          addToCartMessage();
        }}
        className='px-16 py-1 border-2 border-green-sec rounded-md text-green-sec font-semibold hover:bg-green-sec hover:text-white transition-all sm:text-lg'
      >
        Add to Cart
      </button>
    </div>
  );
};
export default TrendingProduct;
