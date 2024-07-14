import Link from 'next/link';

const OrderCompletedPage = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-gray-prim mt-20'>
      <h1 className='text-2xl'>
        Order Completed✅, thank you for shopping with us🥳
      </h1>
      <Link
        href='/'
        className='w-fit mx-auto mt-2 px-8 py-2 text-sm text-white bg-green-sec rounded-md transition-all font-semibold hover:bg-[#234149] border-2 border-green-sec'
      >
        Home
      </Link>
    </div>
  );
};
export default OrderCompletedPage;
