'use client';
import Image from 'next/image';
import { useAppContext } from '@/app/context';
import Link from 'next/link';

const TrendingProduct = ({ url_slug, photos, name, current_price }) => {
  const { addItem, productss } = useAppContext();

  const product = productss.find((prod) => prod.url_slug === url_slug);

  return (
    <section className='flex flex-col'>
      <Link href={`/${url_slug}`} className='text-gray-prim'>
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
      </Link>
      <button
        className='w-fit px-16 py-1 border-2 border-green-sec rounded-md text-green-sec font-semibold hover:bg-green-sec hover:text-white transition-all sm:text-lg'
        onClick={() => {
          addItem(product);
        }}
      >
        Add to Cart
      </button>
    </section>
  );
};
export default TrendingProduct;
