'use client';

import BackButton from '@/components/backButton';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from '../context';

const ProductDetail = ({ params }) => {
  const { productss, setCartData } = useAppContext();
  const productID = params.productId;

  const product = productss.find((prod) => prod.url_slug === productID);

  const addToCart = () => {
    setCartData((prevState) => {
      if (prevState.includes(product)) {
        return prevState;
      }
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
    <div className='w-[90%] lg:w-4/6 mx-auto my-12'>
      <BackButton />
      <div className='flex items-center justify-center'>
        <section className='w-1/2 items-center justify-center'>
          <aside className='w-[90%]'>
            <Image
              src={`https://api.timbu.cloud/images/${product.photos[0].url}`}
              alt='image'
              width={1000}
              height={1000}
            />
          </aside>
        </section>
        <section className='w-1/2 text-gray-prim'>
          <h1 className='font-semibold text-3xl'>{product.name}</h1>
          <p className='my-5'>{product.description}</p>
          <h2 className='font-semibold text-2xl mb-4'>
            ${product.current_price[0].USD[0]}.00
          </h2>
          <h2 className='text-2xl font-semibold'>Features:</h2>
          <ul className='pl-24'>
            <li className='flex gap-4'>
              <Star color='#BF5428' width={20} />
              <p>Durability</p>
            </li>
            <li className='flex gap-4'>
              <Star color='#BF5428' width={20} />
              <p>Aesthetically appealing</p>
            </li>
            <li className='flex gap-4'>
              <Star color='#BF5428' width={20} />
              <p>Ease of maintainance</p>
            </li>
            <li className='flex gap-4'>
              <Star color='#BF5428' width={20} />
              <p>Comes in different colors</p>
            </li>
          </ul>

          <button
            onClick={() => {
              addToCart();
              addItemNotification();
            }}
            className='mt-12 px-10 py-2 border-2 border-green-sec rounded-md text-green-sec font-semibold hover:bg-green-sec hover:text-white transition-all'
          >
            Add to cart
          </button>
        </section>
      </div>
    </div>
  );
};
export default ProductDetail;
