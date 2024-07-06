import Image from 'next/image';

const FeaturedProduct = ({ name, desc, image }) => {
  return (
    <div className='text-gray-prim flex flex-col text-center'>
      <aside className='w-full h-full'>
        <Image
          src={image}
          alt='featured product image'
          className='w-full h-full'
        />
      </aside>
      <h2 className='text-xl font-bold mt-6'>{name}</h2>
      <p className='text-sm font-semibold'>{desc}</p>
    </div>
  );
};
export default FeaturedProduct;
