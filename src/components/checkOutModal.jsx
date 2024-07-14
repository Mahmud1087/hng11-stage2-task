'use client';

import { useAppContext } from '@/app/context';
import { X } from 'lucide-react';
import Link from 'next/link';

const CheckOutModal = ({
  firstName,
  lastName,
  billingAddress,
  emailAddress,
  phoneNumber,
}) => {
  const { closeModal, cartData, cartTotal, setCartData } = useAppContext();
  return (
    <div className='fixed top-0 w-screen h-screen bg-black/40 flex items-center justify-center'>
      <section className='relative bg-white rounded-lg w-[90%] mx-auto sm:w-4/5 lg:w-3/5 p-8 text-gray-prim'>
        <button className='absolute right-3 top-3' onClick={closeModal}>
          <X color='red' strokeWidth={3} />
        </button>
        <h1 className='text-2xl font-bold mb-5'>Your Order Details</h1>

        <article className=' flex flex-col gap-4 lg:flex-row'>
          <aside
            className={`${
              cartData.length === 0 && 'hidden'
            } w-full text-black sm:w-1/2`}
          >
            <h2>
              <span className='text-lg font-bold pr-5'>Full Name:</span>
              {`${firstName} ${lastName}`}
            </h2>
            <h2>
              <span className='text-lg font-bold pr-5'>Email:</span>
              {`${emailAddress}`}
            </h2>
            <h2>
              <span className='text-lg font-bold pr-5'>Billing Address:</span>
              {`${billingAddress}`}
            </h2>
            <h2>
              <span className='text-lg font-bold pr-5'>Phone Number:</span>
              {`${phoneNumber}`}
            </h2>
          </aside>

          <aside className='w-full lg:w-1/2'>
            {cartData.length === 0 ? (
              <div className='w-full h-full mt-2 mb-32 flex justify-center items-center text-2xl font-bold'>
                No Item Added to cart
              </div>
            ) : (
              <section>
                <article className='flex justify-between items-center mb-4 bg-slate-300 py-2 px-3 rounded-md font-bold text-black'>
                  <h1 className='w-1/2 lg:w-3/5'>Product</h1>
                  <p className='w-1/4 lg:w-1/5'>Quantity</p>
                  <p className='w-1/4 text-end lg:w-1/5'>Price</p>
                </article>
                {cartData.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className='flex items-center justify-between px-3'
                    >
                      <h1 className='w-1/2 lg:w-3/5'>{item.name}</h1>
                      <p className='w-1/4 text-center lg:w-1/5'>
                        {item.available_quantity}
                      </p>
                      <p className='w-1/4 text-end lg:w-1/5'>
                        $
                        {item.current_price[0].USD[0] * item.available_quantity}
                      </p>
                    </div>
                  );
                })}
                <h1 className='px-3 mt-5 text-lg text-black font-semibold'>
                  Total: ${cartTotal}
                </h1>
              </section>
            )}
          </aside>
        </article>

        <Link
          href='/order-completed'
          className={`${
            cartData.length === 0 && 'hidden'
          } w-fit mx-auto mt-8 block px-12 py-2 text-sm text-white bg-green-sec rounded-md transition-all font-semibold hover:bg-[#234149] border-2 border-green-sec`}
          onClick={() => {
            setCartData([]);
            closeModal();
          }}
        >
          Make Payment
        </Link>
      </section>
    </div>
  );
};
export default CheckOutModal;
