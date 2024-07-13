'use client';
import Image from 'next/image';
import { useAppContext } from '@/app/context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { products } from './productsData';

const TrendingProduct = ({ id, photos, name, current_price }) => {
  const { productss, setCartData } = useAppContext();

  const addToCart = () => {
    const product = productss.find((prod) => prod.id === id);
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
      <aside className='w-[60vw] sm:w-[35vw] lg:w-[24vw]'>
        <Image
          src={`https://api.timbu.cloud/images/${photos[0].url}`}
          alt={name}
          width={1000}
          height={1000}
        />
      </aside>
      <h2 className='text-[1.2rem] mt-2 mb-2'>{name}</h2>
      <p className='text-[1.4rem] font-bold'>${current_price[0].USD[0]}</p>
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
