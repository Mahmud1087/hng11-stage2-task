import prodImg from '../../../public/prodImg.png';
import delIcon from '../../../public/delIcon.png';
import Image from 'next/image';

const CartItem = ({ price, title }) => {
  return (
    <div className='w-full flex border-b border-b-[#EAEEEF] last:border-b-0 py-4'>
      <section className='w-2/5 flex gap-4 items-center'>
        <div className='w-28'>
          <Image src={prodImg} alt='single product image' />
        </div>
        <p className='text-lg font-semibold text-gray-prim'>{title}</p>
      </section>
      <p className='w-1/5 mt-8 font-semibold'>{price}</p>
      <section className='w-1/5 mt-6'>
        <div className='w-fit p-2 bg-[#EAEEEF] rounded-full text-xs flex gap-4'>
          <p className='bg-white font-bold h-5 w-5 rounded-full shadow-md flex items-center justify-center text-lg'>
            -
          </p>
          <p className='font-semibold text-base'>01</p>
          <p className='bg-white font-bold h-5 w-5 rounded-full shadow-md flex items-center justify-center text-lg'>
            +
          </p>
        </div>
      </section>
      <section className='w-1/5 mt-8 flex gap-7'>
        <p className='font-semibold'>{price}</p>
        <div className='w-5 cursor-pointer'>
          <Image src={delIcon} alt='delete icon' />
        </div>
      </section>
    </div>
  );
};
export default CartItem;
