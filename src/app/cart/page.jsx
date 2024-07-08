import CartItem from '@/components/cart/cartItem';
import { cartData } from '@/components/cart/data';
import Container from '@/components/container';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CartPage = () => {
  return (
    <Container className='my-12'>
      <button className='text-[#BF5428] flex gap-2 items-center font-semibold mb-10'>
        <ArrowLeft size={16} />
        <p>Back to product</p>
      </button>

      <section className='flex gap-16'>
        <aside className='w-[70%]'>
          <div className='w-full h-16 rounded-md bg-[#EAEEEF] flex items-center text-gray-prim  font-bold'>
            <p className='w-2/5 pl-8'>Item</p>
            <p className='w-1/5'>Price</p>
            <p className='w-1/5'> Quantity</p>
            <p className='w-1/5'>Subtotal</p>
          </div>
          <div className='mt-5 flex flex-col text-gray-prim px-1'>
            {cartData.map((item, i) => {
              return <CartItem key={i} {...item} />;
            })}
          </div>
        </aside>

        <aside className='w-[30%]'>
          <div className='w-full h-16 rounded-md bg-[#EAEEEF] flex items-center font-bold pl-6 text-gray-prim'>
            Order Summary
          </div>
          <section className='mt-5 flex flex-col gap-3 text-gray-prim px-1'>
            <div className='flex justify-between'>
              <h2 className='font-bold'>Subtotal</h2>
              <p>$410.00</p>
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
              <p>$410.00</p>
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
    </Container>
  );
};
export default CartPage;
