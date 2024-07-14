'use client';

import { useAppContext } from '@/app/context';
import Image from 'next/image';
import Link from 'next/link';

const SingleProductCard = ({
  url_slug,
  name,
  current_price: price,
  photos,
}) => {
  const { addItem, productss } = useAppContext();

  const product = productss.find((prod) => prod.url_slug === url_slug);

  return (
    <div className='flex flex-col'>
      <Link href={`/${url_slug}`} className='text-gray-prim cursor-pointer'>
        <aside className='w-full'>
          <Image
            src={`https://api.timbu.cloud/images/${photos[0]?.url}`}
            alt='product image'
            width={1000}
            height={1000}
            className='w-full'
          />
        </aside>
        <h2 className='font-semibold mt-3 mb-1 text-[1.06rem]'>{name}</h2>
        <div className='flex gap-1'>
          <p className='text-2xl font-bold mb-2 lg:text-[1.7rem]'>
            ${price[0].USD[0]}
          </p>
          <p className='text-[13px] line-through'>${price[0].USD[0] + 200}</p>
        </div>
      </Link>
      <button
        className='w-fit px-10 py-2 border-2 border-green-sec rounded-md text-green-sec font-semibold hover:bg-green-sec hover:text-white transition-all'
        onClick={() => {
          addItem(product);
        }}
      >
        Add to cart
      </button>
    </div>
  );
};
export default SingleProductCard;
