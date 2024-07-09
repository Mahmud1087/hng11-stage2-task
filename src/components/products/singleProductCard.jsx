'use client';

import Image from 'next/image';
import { products } from '../productsData';
import { useAppContext } from '@/app/context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleProductCard = ({ id, img, name, price, prevPrice }) => {
  const { setCartData } = useAppContext();

  const addToCart = () => {
    const product = products.find((prod) => prod.id === id);
    setCartData((prevState) => {
      return [...prevState, product];
    });
  };

  const addItemNotification = () => {
    toast.success('Item Added', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  return (
    <article className='text-gray-prim'>
      <aside className=''>
        <Image src={img} alt='product image' />
      </aside>
      <h2 className='text-xl font-semibold mt-3 mb-1'>{name}</h2>
      <div className='flex gap-1'>
        <p className='text-2xl font-bold mb-2 lg:text-3xl'>${price}</p>
        <p className='text-sm line-through font-bold'>${prevPrice}</p>
      </div>
      <button
        onClick={() => {
          addToCart();
          addItemNotification();
        }}
        className='px-10 py-1 border-2 border-green-sec rounded-md text-green-sec font-semibold hover:bg-green-sec hover:text-white transition-all'
      >
        Add to cart
      </button>
    </article>
  );
};
export default SingleProductCard;
