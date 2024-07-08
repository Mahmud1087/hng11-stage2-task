import Image from 'next/image';
import Link from 'next/link';

const SingleProductCard = ({ img, name, price, prevPrice }) => {
  return (
    <article className='text-gray-prim'>
      <aside className=''>
        <Image src={img} alt='product image' />
      </aside>
      <h2 className='text-xl font-semibold mt-3 mb-1'>{name}</h2>
      <div className='flex gap-1'>
        <p className='text-2xl font-bold mb-2'>${price}</p>
        <p className='text-sm line-through font-bold'>${prevPrice}</p>
      </div>
      <button className='px-10 py-1 border-2 border-green-sec rounded-md text-green-sec font-semibold hover:bg-green-sec hover:text-white transition-all'>
        Add to cart
      </button>
    </article>
  );
};
export default SingleProductCard;
