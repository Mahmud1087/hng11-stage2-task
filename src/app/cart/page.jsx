'use client';

import BackButton from '@/components/backButton';
import CartItem from '@/components/cart/cartItem';
import { similarProductsData } from '@/components/cart/data';
import Container from '@/components/container';
import TrendingProduct from '@/components/trendingProduct';

import Link from 'next/link';
import { useAppContext } from '../context';

const CartPage = () => {
  const { cartData, cartTotal } = useAppContext();
  return (
    <Container className='my-12 '>
      <BackButton />

      <section className='flex flex-col gap-16 lg:flex-row'>
        <aside className='w-full lg:w-[70%]'>
          <div className='w-full h-16 rounded-md bg-[#EAEEEF] flex items-center text-gray-prim  font-bold'>
            <p className='w-[55%] pl-8'>Item</p>
            <p className='w-[15%]'>Price</p>
            <p className='w-1/5'> Quantity</p>
            <p className='w-1/5 hidden sm:block'>Subtotal</p>
          </div>
          {cartData.length !== 0 ? (
            <div className='mt-5 flex flex-col text-gray-prim px-1'>
              {cartData.map((item, i) => {
                return <CartItem key={i} {...item} />;
              })}
            </div>
          ) : (
            <div className='flex flex-col items-center'>
              <h1 className='text-center text-3xl font-bold mt-12'>
                No Item Added
              </h1>
              <Link
                href='/'
                className='w-32 h-11 flex items-center justify-center rounded-md bg-green-sec text-white border-2 border-green-sec mt-4 transition-all hover:bg-transparent hover:text-green-sec hover:text-semibold'
              >
                Shop now
              </Link>
            </div>
          )}
        </aside>

        <aside className='w-full lg:w-[30%]'>
          <div className='w-full h-16 rounded-md bg-[#EAEEEF] flex items-center font-bold pl-6 text-gray-prim'>
            Order Summary
          </div>
          <section className='mt-5 flex flex-col gap-3 text-gray-prim px-1'>
            <div className='flex justify-between'>
              <h2 className='font-bold'>Subtotal</h2>
              <p>${cartTotal}</p>
            </div>
            <div className='flex justify-between'>
              <h2 className='font-bold'>Shipping</h2>
              <p>Free</p>
            </div>
            <p className='text-[#BF5428] text-sm cursor-pointer my-3 font-semibold'>
              Add Coupon Code
            </p>
            <div className='flex justify-between'>
              <h2 className='font-bold'>Total</h2>
              <p>${cartTotal}</p>
            </div>
            <Link
              href='checkout'
              className='w-fit mx-auto mt-2 px-12 py-2 text-sm text-white bg-green-sec rounded-md transition-all hover:font-bold hover:bg-transparent hover:text-green-sec border-2 border-green-sec'
            >
              Proceed to checkout
            </Link>
          </section>
        </aside>
      </section>

      <div>
        <h1 className='text-[1.7rem] text-gray-prim font-bold mt-32'>
          Discover Similar Products
        </h1>
        <section className='overflow-x-scroll no-scrollbar h-fit'>
          <div className='flex gap-5 w-[160vw] py-2'>
            {similarProductsData.map((prod, i) => {
              return <TrendingProduct key={i} {...prod} />;
            })}
          </div>
        </section>
      </div>
    </Container>
  );
};
export default CartPage;
