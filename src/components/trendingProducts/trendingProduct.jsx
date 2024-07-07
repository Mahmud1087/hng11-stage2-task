import Image from 'next/image';
import Link from 'next/link';

const TrendingProduct = ({ img, name, price }) => {
  return (
    <div className='text-gray-prim'>
      <aside>
        <Image src={img} alt={name} />
      </aside>
      <h2 className='text-xl font-semibold mt-4 mb-3'>{name}</h2>
      <p className='text-3xl font-bold mb-3'>${price}</p>
      <Link
        href={`products/${name}`}
        className='px-16 py-1 border-2 border-green-sec rounded-md text-green-sec font-semibold hover:bg-green-sec hover:text-white transition-all'
      >
        Shop now
      </Link>
    </div>
  );
};
export default TrendingProduct;
