import Image from 'next/image';
import Link from 'next/link';

const Product = ({ image, name, description }) => {
  return (
    <div className='flex flex-col gap-3'>
      <aside className='rounded-md'>
        <Image src={image} alt={name} className='w-full h-full rounded-2xl' />
      </aside>
      <h2 className='text-2xl w-[90%] font-bold text-gray-prim leading-[1.6]'>
        {name}
      </h2>
      <p className='text-gray-prim w-[90%] font-medium'>{description}</p>
      <Link
        href='/products'
        className='w-44 h-10 text-green-sec border-2 border-green-sec rounded-md flex items-center justify-center hover:bg-green-sec transition-all hover:bg-transparent hover:text-white hover:text-semibold'
      >
        Shop now
      </Link>
    </div>
  );
};
export default Product;
