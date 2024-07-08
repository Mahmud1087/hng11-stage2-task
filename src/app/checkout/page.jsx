import Container from '@/components/container';
import { ArrowLeft } from 'lucide-react';

const CheckoutPage = () => {
  return (
    <Container className='my-12 text-gray-prim'>
      <button className='text-[#BF5428] flex gap-2 items-center font-semibold mb-10'>
        <ArrowLeft size={16} />
        <p>Back to product</p>
      </button>

      <h1 className='font-bold text-[1.6rem] my-8'>Billing Details</h1>

      <section className='flex gap-16'>
        <aside className='w-[70%]'>
          <InputField />
        </aside>

        <aside className='w-[30%]'>
          <div className='w-full h-12 rounded-md bg-[#EAEEEF] flex items-center font-bold pl-6 text-gray-prim'>
            Order Summary
          </div>
          <section className='mt-5 flex flex-col gap-3 text-gray-prim px-1'>
            <div className='flex justify-between'>
              <h2 className='font-bold'>Subtotal</h2>
              <p>$410.00</p>
            </div>
            <div className='flex justify-between'>
              <h2 className='font-bold'>Shipping</h2>
              <p>Free</p>
            </div>
            <p className='text-[#BF5428] text-sm cursor-pointer my-3 font-semibold'>
              Add Coupon Code
            </p>
            <div className='flex justify-between'>
              <h2 className='font-bold'>Total</h2>
              <p>$410.00</p>
            </div>
            <button className='w-fit mx-auto mt-2 px-12 py-2 text-sm text-white bg-green-sec rounded-md transition-all font-semibold hover:bg-transparent hover:text-green-sec border-2 border-green-sec'>
              Continue Payment
            </button>
            <button className='w-fit mx-auto mt-6 px-12 py-2 text-sm text-green-sec bg-transparent rounded-md transition-all font-semibold hover:bg-green-sec hover:text-white border-2 border-green-sec'>
              Cancel Payment
            </button>
          </section>
        </aside>
      </section>
    </Container>
  );
};

const InputField = () => {
  return (
    <label htmlFor='inputField'>
      <input type='text' />
    </label>
  );
};

export default CheckoutPage;
