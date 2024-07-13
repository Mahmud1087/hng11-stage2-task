'use client';

import { useAppContext } from '@/app/context';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { X } from 'lucide-react';

const CartItem = ({ price, name, img, id, amount }) => {
  const { cartData, setCartData } = useAppContext();

  const delCartItem = () => {
    const filteredProducts = cartData.filter((product) => product.id !== id);
    setCartData(filteredProducts);
  };

  const deleteItemNotification = () => {
    toast.success('Item Deleted', {
      position: 'top-center',
      autoClose: 2000,
    });
  };

  const increaseItem = () => {
    setCartData(
      cartData.map((product) =>
        product.id === id
          ? {
              ...product,
              amount: product.amount + 1,
            }
          : product
      )
    );
  };
  const decreaseItem = () => {
    setCartData(
      cartData.map((product) =>
        product.id === id
          ? {
              ...product,
              amount:
                product.amount <= 1 ? (product.amount = 1) : product.amount - 1,
            }
          : product
      )
    );
  };

  return (
    <div className='w-full flex items-center border-b border-b-[#EAEEEF] last:border-b-0 py-4'>
      <section className='w-1/2 flex gap-4 items-center'>
        <div className='w-28'>
          <Image src={img} alt='single product image' />
        </div>
        <p className='text-lg text-gray-prim w-1/2'>{name}</p>
      </section>
      <p className='w-[15%] text-lg'>${price}.00</p>
      <section className='w-1/4'>
        <div className='w-fit p-2 bg-[#EAEEEF] rounded-full text-xs flex gap-4'>
          <button
            onClick={decreaseItem}
            className='bg-white font-bold h-5 w-5 rounded-full shadow-md flex items-center justify-center text-lg'
          >
            -
          </button>
          <p className='font-semibold text-base'>{amount}</p>
          <button
            onClick={increaseItem}
            className='bg-white font-bold h-5 w-5 rounded-full shadow-md flex items-center justify-center text-lg'
          >
            +
          </button>
        </div>
      </section>
      <section className='w-1/5 flex gap-16'>
        <p className='hidden text-lg sm:block'>${price}.00</p>
        <button
          onClick={() => {
            delCartItem();
            deleteItemNotification();
          }}
          className='w-5 h-5 rounded-full bg-[#BF5428] hidden items-center justify-center sm:mr-2 sm:flex'
        >
          <X color='#fff' size={12} />
        </button>
      </section>
      <button
        onClick={() => {
          delCartItem();
          deleteItemNotification();
        }}
        className='w-5 h-5 rounded-full bg-[#BF5428] flex items-center justify-center sm:hidden'
      >
        <X color='#fff' size={12} />
      </button>
    </div>
  );
};
export default CartItem;
