'use client';

import BackButton from '@/components/backButton';
import { products } from '@/components/productsData';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppContext } from '../context';

const ProductDetail = ({ params }) => {
  const { productss, setCartData } = useAppContext();
  const productID = params.productId;

  const product = productss.find((prod) => prod.id === Number(productID));
  // console.log(product);

  const addToCart = () => {
    const prod = products.find((prod) => prod.id === product.id);
    setCartData((prevState) => {
      if (prevState.includes(prod)) {
        return prevState;
      }
      return [...prevState, prod];
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
          <aside>
            <Image
              src={`https://api.timbu.cloud/${product.photos[0].url}`}
              alt='image'
            />
          </aside>
        </section>
        <section className='w-1/2 text-gray-prim'>
          <h1 className='font-semibold text-3xl'>{product.name}</h1>
          <p className='my-5'>{product.description}</p>
          <h2 className='font-semibold text-2xl mb-4'>${product.price}.00</h2>
          <h2 className='font-semibold'>Features:</h2>
          <ul className='pl-12'>
            <li className='flex gap-4'>
              <Star color='#BF5428' width={30} />
              <p>Amazing collections for your interior</p>
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
